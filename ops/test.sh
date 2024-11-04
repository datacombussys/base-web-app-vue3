#!/bin/bash

<<comment 

HOW TO USE THIS FILE. 
nano this file (install.sh) in the users home directory. 
Execute (source install.sh) as sudo and enter sudo password.
When running this script, you must be in the project root directory
Execute the following command for a production server: source ops/install.sh
Execute the following command for a staging server: source ops/install.sh -staging
Make sure you are the owner of this file
Errors and report logs will be in the LOGFILE listed below.
Also, hit the enter key when it gets stuck.
We will take care fo the rest. :)

comment


#Specify Logfile
LOGFILE=/$USER/install.log

# Stop this script on any error.
set -e

# Install Django / Node / Webpack
export directory="datacom_merchant_services"

function setup {
		
	## Used for replacing tempalte tags in settings files
	source ~/secrets.sh
	source ops/vars/variables.sh
	sudo echo '1) Loaded variables and secrets'
	sudo echo 'Loaded Variable Secrets'

	## Determine if Staging or Production based on install command
	## source ops/install.sh -staging or source ops/install.sh
	SERVER_TYPE=$1
	echo $SERVER_TYPE
	printf "Server install type is: %s\n" "$SERVER_TYPE"

	## Pull in the mustache template library for bash
	source ops/lib/mo
	sudo echo '2) Loaded mo'

	#For staging
	echo "STAGING: Run from the project root directory: \n source ops/install.sh -staging"
	#For prod
	echo "PRODUCTION: Run from the project root directory: \n source ops/install.sh"

	## Install Dependencies
	sudo apt update -y && sudo apt upgrade -y
	sudo apt install curl -y
	sudo apt install -y python3.6 python3.6-dev python3.6-venv python3-pip libpq-dev sqlite3 libsqlite3-dev apache2 apache2-dev libapache2-mod-wsgi-py3 python-psycopg2 libjpeg-dev zlib1g-dev pkg-config libcairo2-dev libgirepository1.0-dev -y

	# INSTALL POSTGRES
	if [ ! -d /etc/postgresql ]; then 
		# Create the file repository configuration
		sudo sh -c 'echo "deb http://apt.postgresql.org/pub/repos/apt $(lsb_release -cs)-pgdg main" > /etc/apt/sources.list.d/pgdg.list'

		# Import the repository signing key:
		wget --quiet -O - https://www.postgresql.org/media/keys/ACCC4CF8.asc | sudo apt-key add -

		# Update the package lists:
		sudo apt-get update

		# Install the latest version of PostgreSQL.
		# If you want a specific version, use 'postgresql-12' or similar instead of 'postgresql':
		sudo apt-get -y install postgresql-15

	fi

	sudo apt update -y && sudo apt upgrade -y
	sudo apt autoremove -y

	sudo echo '3) Installed initial Software'

	sudo service postgresql start
	sudo service cron start
	sudo service apache2 stop

	sudo echo 'Installed dependencies'

	TICK="'"
	sudo -u postgres psql -c "DROP DATABASE IF EXISTS ${DATABASE_NAME};"
	sudo -u postgres psql -c "DROP ROLE IF EXISTS ${DATABASE_USER};"

	sudo -u postgres psql -c "CREATE DATABASE ${DATABASE_NAME};"
	sudo -u postgres psql -c "CREATE USER ${DATABASE_USER} WITH PASSWORD $TICK${DATABASE_USER_PASSWORD}$TICK;"
	sudo -u postgres psql -c "GRANT ALL PRIVILEGES ON DATABASE ${DATABASE_NAME} TO ${DATABASE_USER};"

	sudo echo '4) Postgres configured'
	sudo echo 'Configured Postgres'

	curl -sL https://deb.nodesource.com/setup_14.x | sudo -E bash - 
	sudo apt-get install -y nodejs

	if [ -d /usr/lib/node_modules ]; then
		sudo chmod -R 777 /usr/lib/node_modules
	fi

	sudo echo '5) NodeJS installed'
	sudo echo 'Installed NodeJs'

	# Install Django / Node / Webpack
	sudo echo "PWD: $PWD"

	## Run Setup.sh
	if [ "$SERVER_TYPE" == '-staging' ]; then	
		printf "\n Installing node for staging server\n"
		echo "install.sh SERVER_TYPE -staging is executed- Scripts section"
		# source /var/www/${SITE_NAME}/scripts/setup.sh "-dev"

		# sudo echo 'Successfully ran scripts/setup.sh'

		## Setup Apache Settings
		# apache_hosts="$(cat ops/apache2/staging/hosts)"
		# sudo echo "$apache_hosts" | mo > /etc/hosts

		# Change folder permissions
		sudo chmod -R 777 /etc/apache2/sites-available/

		echo "Loading apache_settings"
		apache_site_settings="$(cat ops/apache2/staging/apache-vhost.conf)"
		echo "Saving apache_settings"
		echo "$apache_site_settings" | mo > /etc/apache2/sites-available/${SITE_NAME}
		sudo echo 'apache settings done and hosts'
		sudo echo '/etc/hosts configured'

		## Setup remoteIP.conf for Apache
		node_service="$(cat ops/apache2/remoteip.conf)"
		sudo bash -c echo "$node_service" | mo > /etc/apache2/conf-available/remoteip.conf
		sudo a2enconf remoteip
		sudo a2enmod remoteip
		sudo echo 'Remote IP configured for Proxy server'
	else
		printf "\n Installing node for production server\n"
		sudo echo "install.sh SERVER_TYPE -prod is executed- Scripts section"
		source /var/www/${SITE_NAME}/scripts/setup.sh

		sudo echo 'Successfully ran scritps/setup.sh'

		## Setup Apache Settings
		# apache_hosts="$(cat ops/apache2/prod/hosts)"
		# sudo echo "$apache_hosts" | mo > /etc/hosts
		apache_site_settings="$(cat ops/apache2/prod/apache-vhost.conf)"
		sudo bash -c echo "$apache_site_settings" | mo > /etc/apache2/sites-available/${DOMAIN}
		sudo echo 'apache settings done and hosts'
		sudo echo 'Apache and host files configured'
	fi
	sudo echo '6) setup.sh finished'

	## Update Django Passwords and Variables
	local_settings_template="$(cat ops/django/local_settings.py.template)"
	sudo bash -c echo "$local_settings_template" | mo > backend/project/settings/local_settings.py

	sudo echo 'local_settings done'
	sudo echo 'local_settings completed'

	## Migrate DB
	source scripts/migratedb.sh
	sudo echo 'database migrated'
	sudo echo 'Database migrated'

	## Update Node passwords nd variables
	node_settings="$(cat ops/node/config.node.js.template)"
	sudo bash -c echo "$node_settings" | mo > node/config.node.js
	sudo echo 'config.node done!'
	sudo echo 'Node configured'

	# ln -s /etc/apache2/sites-available/$directory.conf /etc/apache2/sites-enabled/.

	sudo systemctl start apache2
	sudo a2enmod rewrite
	sudo a2enmod proxy_http
	sudo a2ensite "${DOMAIN}"
	sudo apache2ctl configtest
	sudo echo 'configtest successful'

	# echo apache2ctl -S
	sudo service apache2 reload

	sudo echo 'site enabled restarted apache'
	sudo echo 'Enabled site and restarted apache'

	## Add ip address and domain name to backend prod.py file ----------
	django_prod="$(cat ops/django/prod.py.template)"
	sudo bash -c echo "$django_prod" | mo > backend/project/settings/prod.py

	sudo echo 'prod.py updated'
	sudo echo 'Updated django prod.py'

	#Install Node .env file
	node_env_path="DJANGOURL=http://www.${DOMAIN}:80"
	sudo bash -c echo "$node_env_path" | mo > node/.env

	#Install systemd Node Service
	node_service="$(cat ops/systemd/node-service.service)"
	sudo bash -c echo "$node_service" | mo > /etc/systemd/system/node-service.service
	sudo systemctl daemon-reload

	sudo echo 'node-service setup completed'
	sudo echo 'Node systemd configured and installed'

	sudo systemctl enable node-service.service
	sudo systemctl start node-service.service
	sudo systemctl restart apache2

	sudo echo '100% Installed'
	sudo echo '100% complete'

## call function and append to log
setup 2>&1 > ${LOGFILE}