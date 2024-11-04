#!/usr/bin/env bash

Color_Off='\e[0m'       # Text Reset

# Regular Colors
Black='\e[0;30m'
Red='\e[0;31m'
Green='\e[0;32m'
Yellow='\e[0;33m'
Blue='\e[0;34m'
Purple='\e[0;35m'
Cyan='\e[0;36m'
White='\e[0;37m'

BRed='\e[1;31m'  
On_Red='\e[41m'
IRed='\e[0;91m'

echo "You must run the following command: source scripts/setup.sh -dev"
sudo service postgresql start
sudo service cron start

## Determine if Staging or Production based on install command
## source ops/install.sh -staging or source ops/install.sh
SERVER_TYPE=$1
echo $SERVER_TYPE
printf "Server install type is: %s\n" "$SERVER_TYPE"

if [ "$SERVER_TYPE" == '-dev' ]; then
	echo "setup.sh SERVER_TYPE -dev is executed"
	export NODE_ENV="development"
else
	echo "setup.sh SERVER_TYPE prod is executed"
	SERVER_TYPE="-prod"
	export NODE_ENV="production"
fi

# if [ -d ./env ]; then
# 	echo "env folder does exist"
# 	echo | pwd
# 	sudo rm -r ./env
# fi

printf "Virtual environment not found, creating it\n"
sleep 1

echo 'Which Python3.9'
echo | which python3.9

echo 'Python3.9 version'
echo | python3.9 --version

echo 'PWD'
echo | pwd

python3.9 -m venv env
printf "Activating virtual environment...\n"
source "./env/bin/activate"

echo 'Which Python3.9'
echo | which python3.9

echo 'pip version'
echo | pip --version

echo 'which pip'
echo | which pip

python3.9 -m pip install --upgrade pip setuptools wheel
# echo | python3.9 -m pip --version
# echo | which pip

printf "\nInstalling python packages..\n"
pip3 install -r "./backend/requirements.txt"

echo 'installed python packages'

if [ -d ./frontend ]; then
	printf "\nInstalling frontend's node packages...\n"
	if [ ! -d ./frontend/node_modules ]; then
		printf "node_modules in frontend does not exists"
		mkdir ./frontend/node_modules
		chmod -R 777 ./frontend/node_modules		
	fi

	npm --prefix ./frontend/ install --allow-root ./frontend/
	
	printf "Adding nodeJS modules bin to your path\n"
	export PATH="`pwd`/frontend/node_modules/.bin/:$PATH"
else
	npm --prefix ./frontend/ install --allow-root ./frontend/
	
	printf "Adding nodeJS modules bin to your path\n"
	export PATH="`pwd`/frontend/node_modules/.bin/:$PATH"

fi

# if [ "$SERVER_TYPE" == '-prod' ]; then
# 	if [ ! -d ./frontend/dist ]; then
# 		npm --prefix ./frontend/ run build
# 	fi
# fi

echo 'installed frontend modules'

if [ -d ./node ]; then
	printf "\nInstalling Node's node packages...\n"
	npm --prefix ./node/ install --allow-root ./node/
	
	printf "Adding nodeJS modules bin to your path\n"
	export PATH="`pwd`/node/node_modules/.bin/:$PATH"

fi

echo 'installed node modules'

printf "Adding scripts folder to your path\n"
export PATH="`pwd`/scripts/:$PATH"

if [ ! -f "./backend/project/settings/local_settings.py" ]; then
	echo -e "$IRed"
	echo `python -c "print('!'*80)"`
	echo "DONT FORGET TO SET UP YOUR local_settings.py in"
	echo "backend/project/settings/local_settings.py"
	echo "There is a template in"
	echo "backend/project/settings/local_settings.py.template"
	echo "Here is a randomly generated secret key you can use:"
	echo `python -c 'from django.core.management import utils; print(utils.get_random_secret_key())'`
	echo "And this command to copy the template"
	echo "cp backend/project/settings/local_settings.py.template backend/project/settings/local_settings.py"
	echo -e "$Color_Off"
fi

echo "Done"