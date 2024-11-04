#!/bin/bash

<< comment 

---------------------- REQUIREMENTS ----------------------
Ubuntu 22.04+, python3.9

---------------------- PRODUCTION INSTRUCTIONS ----------------------
Run as SU. Create file (install.sh) in su root and execute
Place secrets.sh in root folder also

DO NOT EXECUTE THIS FILE ON AN EXISTING PRODUCTION PROJECT

Execute the following command for a production server: source install.sh

I must set up the ssh key on github so the repo can download it

---------------------- STAGING/DEV INSTRUCTIONS ----------------------
Same as above except...

Execute the following command for a staging server: source install.sh -staging

comment

# Set Vars
export directory="${SITE_NAME}"
SITE_NAME="datacommerchantservices"
PYTHON_VERSION="3.9.19"
POSTGRES_VERSION="15"
NODE_VERSION="22"

#Specify Logfile
LOGFILE=/$USER/install.log

# Stop this script on any error.
set -e

service cron start

## Determine if Staging or Production based on install command

SERVER_TYPE=$1
echo $SERVER_TYPE
if [ $SERVER_TYPE ]; then
printf "Server install type is: %s\n" "$SERVER_TYPE"
else 
	printf "Server install type is: %s\n" "-prod"
fi

echo "********************** Loaded Flags **********************"

function setup { 
	## Used for replacing tempalte tags in settings files
	source ~/secrets.sh

	echo "********************** Loaded Variables **********************"

	# Install Dependencies
	apt-get update
	apt-get install -y curl build-essential zlib1g-dev python3-setuptools\
		libncurses5-dev libgdbm-dev libnss3-dev libpq-dev python3-dev \
		libssl-dev libreadline-dev libffi-dev software-properties-common \
		apache2 apache2-dev libapache2-mod-wsgi-py3 libjpeg-dev libgirepository1.0-dev \
		libcairo2-dev pkg-config sqlite3 libsqlite3-dev


	service apache2 stop
	apt-get update && apt-get upgrade -y

	echo "********************** Installed Dependencies **********************"

	if [ ! type python$PYTHON_VERSION >/dev/null 2>&1 ]; then
		echo "type python$PYTHON_VERSION >/dev/null 2>&1"
		echo "Try again, wrong command" 1>&2 # should output to stderr, not stdout
	else
		echo "Python else executing. Installing Python"
		wget https://www.python.org/ftp/python/$PYTHON_VERSION/Python-$PYTHON_VERSION.tgz
		tar -xf Python-$PYTHON_VERSION.tgz
		cd Python-$PYTHON_VERSION
		./configure --prefix=/usr
		sudo make clean
		sudo make altinstall
		echo python3.9 --version

		echo "********************** Installed Python 3.9 **********************"
	fi

	version="$(python3.9 -V)"
	echo "The install python version is: $version"
	# printf "$version"

	if [ "$version" -ne "Python $PYTHON_VERSION" ]; then
		echo "Version -ne Pyhthon 3.9.x"
		wget https://www.python.org/ftp/python/$PYTHON_VERSION/Python-$PYTHON_VERSION.tgz
		tar -xf Python-$PYTHON_VERSION.tgz
		cd Python-$PYTHON_VERSION
		./configure --prefix=/usr
		sudo make clean
		sudo make altinstall
		echo python3.9 --version

		echo "********************** Installed Python 3.9 **********************"
	fi


	# INSTALL POSTGRES
	echo "\n********************** Insalling Postgres **********************"
	if [ ! -d /etc/postgresql ]; then
		printf "\n Starting Postgres Installation"
			# Create the file repository configuration
		sh -c 'echo "deb http://apt.postgresql.org/pub/repos/apt $(lsb_release -cs)-pgdg main" > /etc/apt/sources.list.d/pgdg.list'

		# Import the repository signing key:
		wget -qO- https://www.postgresql.org/media/keys/ACCC4CF8.asc | sudo tee /etc/apt/trusted.gpg.d/pgdg.asc &>/dev/null

		# Update the package lists:
		apt-get update

		# If you want a specific version, use 'postgresql-12' or similar instead of 'postgresql':
		apt-get -y install postgresql-${POSTGRES_VERSION} postgresql-client
		service postgresql start
	fi
	echo "\n********************** Installed Postgres **********************"

	curl -fsSL https://deb.nodesource.com/setup_${NODE_VERSION}.x -o nodesource_setup.sh
	sudo -E bash nodesource_setup.sh
	apt-get install -y nodejs

	if [ -d /usr/lib/node_modules ]; then
		chmod -R 777 /usr/lib/node_modules
	fi
 
	echo "********************** Node 22 installed **********************"

	## Install Django / Node / Webpack
	echo "PWD: $PWD"
	cd /var/www
	echo "PWD: $PWD"

	# Make Dirs
	if [ -d /var/www/${SITE_NAME} ]; then
		rm -r /var/www/${SITE_NAME}
	fi
	if [ ! -d /var/www ]; then
		mkdir /var/www
	fi

	chown -R ichristensen:ichristensen /var/log
	chown -R ichristensen:ichristensen /var/www

	echo "********************** Configured Dirs **********************"

	# ## Run Setup.sh
	# # if [ "$SERVER_TYPE" == '-staging' ]; then
	# # 	printf "\n Installing Staging server\n"
	# # 	git clone git@github.com:datacombussys/${SITE_NAME}.git

	# # 	cd ${SITE_NAME}

	# # 	# Load variables after the repo has been cloned
	# # 	source ops/vars/variables.sh
	# # 	## Pull in the mustache template library for bash
	# # 	source ops/lib/mo

	# # 	source /var/www/${SITE_NAME}/scripts/setup.sh "-dev"
	# # 	echo "********************** Installed Node and Python Scripts **********************"
	# # 	echo 'Successfully ran scripts/setup.sh'

	# # 	# Change folder permissions
	# # 	chmod -R 777 /etc/apache2/sites-available/
	# # 	chmod -R 777 /etc/apache2/conf-available/

	# # 	a2enmod proxy_http
	# # 	a2enmod rewrite
		
	# # 	echo "Setting up apache_settings"
	# # 	apache_site_settings="$(cat ./ops/apache2/staging/apache-vhost.conf)"
	# # 	echo "Saving apache_settings"
	# # 	echo "$apache_site_settings" | mo > /etc/apache2/sites-available/${STAGING_SERVER_DOMAIN}.conf

	# # 	service apache2 start
	# # 	a2ensite ${STAGING_SERVER_DOMAIN}.conf
	# # 	sudo a2dissite 000-default.conf

	# # 	echo "********************** Apache Configured **********************"

	# # 	## Add ip address and domain name to backend staginh=g.py file ----------
	# # 	django_staging="$(cat ./ops/django/staging.py.template)"
	# # 	echo "$django_staging" | mo > backend/project/settings/staging.py

	# # 	printf "\nUpdated Django staging.py\n"

	# # else
	# # 	echo "********************** Installing for Production **********************"
	# # 	printf "\n Installing production server\n"

	# # 	# git clone git@github.com:datacombussys/${SITE_NAME}.git
	# # 	# git clone --branch prod git@github.com:datacombussys/${SITE_NAME}.git

	# 	cd ${SITE_NAME}

	# # 	# Load variables after the repo has been cloned
		source ops/vars/variables.sh
		## Pull in the mustache template library for bash
		source ops/lib/mo

		source /var/www/${SITE_NAME}/scripts/setup.sh
		echo "********************** Installed Node and Python Scripts **********************"
		echo 'Successfully ran scripts/setup.sh'

		a2enmod proxy_http
		a2enmod rewrite

		apache_site_settings="$(cat ./ops/apache2/prod/apache-vhost.conf)"
		echo "$apache_site_settings" | mo > /etc/apache2/sites-available/${DOMAIN}.conf

		## Need to do manually - Use sed if I can figure it out
		echo "WSGIPassAuthorization On" >> /etc/apache2/apache2.conf

		service apache2 start
		a2ensite ${DOMAIN}.conf
		sudo a2dissite 000-default.conf
		
		echo "********************** Apache Configured **********************"

		## Add ip address and domain name to backend prod.py file ----------
		django_prod="$(cat ./ops/django/prod.py.template)"
		echo "$django_prod" | mo > backend/project/settings/prod.py

		printf "\nUpdated Django prod.py\n"
	fi

	echo "postgres PWD: $PWD"
	postgres_hba="$(cat ./ops/postgres/hba.conf)"
	echo "$postgres_hba" | mo > /etc/postgresql/${POSTGRES_VERSION}/main/pg_hba.conf
	service postgresql restart
	
	TICK="'"
	# Remove Users and stuff
	psql -U postgres -c "DROP SCHEMA IF EXISTS ${DATABASE_SCHEMA};"
	psql -U postgres -c "DROP DATABASE IF EXISTS ${DATABASE_NAME};"
	psql -U postgres -c "DROP ROLE IF EXISTS ${DATABASE_USER};"

	# Create user and database
	psql -U postgres -c "CREATE DATABASE ${DATABASE_NAME};"
	psql -U postgres -c "CREATE ROLE ${DATABASE_USER} WITH PASSWORD $TICK${DATABASE_USER_PASSWORD}$TICK LOGIN SUPERUSER CREATEDB INHERIT REPLICATION;"
	psql -U postgres -c "GRANT ALL PRIVILEGES ON DATABASE ${DATABASE_NAME} TO ${DATABASE_USER};"
	psql -U postgres -c "GRANT ALL PRIVILEGES ON ALL TABLES IN SCHEMA public TO ${DATABASE_USER};"
	psql -U postgres -c "GRANT USAGE, SELECT ON ALL SEQUENCES IN SCHEMA public TO ${DATABASE_USER};"
	psql -U postgres -c "GRANT USAGE, CREATE ON SCHEMA PUBLIC TO pppadmin;"
	psql -U postgres -c "GRANT postgres TO {DATABASE_USER};"
	
	psql -U postgres -c "ALTER DATABASE ${DATABASE_NAME} OWNER TO ${DATABASE_USER};"

	echo "********************** Postgres Configured **********************"
	echo "PWD: $PWD"
	# Change folder permissions
	chmod -R 777 /var/www/${SITE_NAME}/backend/project/settings/

	local_settings_template="$(cat ./ops/django/local_settings.py.template)"
	echo "$local_settings_template" | mo > backend/project/settings/local_settings.py

	echo "********************** Local Settings Configured **********************"

	## Migrate DB
	source scripts/migratedb.sh
	printf "\nDatabase migrated\n"

	## Update Node passwords and variables
	chmod -R 777 /var/www/${SITE_NAME}/node/

	node_settings="$(cat ./ops/node/config-node.js.template)"
	echo "$node_settings" | mo > node/config.node.js

	printf "\nNode settings configured\n"

	# echo apache2ctl -S
	service apache2 reload
	a2enmod rewrite
	a2enmod proxy_http
	apache2ctl configtest
	echo 'configtest successful'

	printf "\nApache restarted configured and enabled\n"

	#Install Node .env file
	# node_env_path="DJANGOURL=http://www.${DOMAIN}:80"
	# echo "$node_env_path" | mo > node/.env

	node_service="$(cat ./ops/systemd/node-service.service)"
	echo "$node_service" | mo > /etc/systemd/system/node-service.service
	systemctl daemon-reload

	systemctl enable node-service.service
	systemctl start node-service.service
	systemctl restart apache2

	printf "\nInstalled node-service.service\n"
	echo "********************** Installed Node Service **********************"

	# Need to install WSGI
	cd /home
	wget https://github.com/GrahamDumpleton/mod_wsgi/archive/refs/tags/${WSGI_VERSION}.tar.gz
	tar xvfz ${WSGI_VERSION}.tar.gz
	cd mod_wsgi-${WSGI_VERSION}
	./configure --with-python=/var/www/${SITE_NAME}/env/bin/python3.9
	make 
	make install
	echo >> "LoadModule wsgi_module modules/mod_wsgi.so" >> /etc/apache2/apache.conf
	apachectl restart
	make clean

	# Need to set up WSGIPassAuthorization in apache.conf file
	echo >> "WSGIPassAuthorization On" >> /etc/apache2/apache.conf

	# Set ServerName globally
	echo >> "ServerName ${DOMAIN}" >> /etc/apache2/apache.conf

	# Need to set up pg_dump in cron and install the .pgpass
	echo "localhost:5432:${SITE_NAME}:${DATABASE_NAME}:${DATABASE_USER_PASSWORD}" > /home/ichristensen/.pgpass
	sudo chmod -r 600 /home/ichristensen/.pgpass

	echo "********************** 100% complete **********************"
}

# call function and append to log
setup 2>&1 > ${LOGFILE}

