#!/bin/bash

BASE_DIR="$(cd "$(dirname "$0")"; pwd -P)"

cd "$BASE_DIR/backend/"
python3 manage.py makemigrations users
python3 manage.py migrate users
python3 manage.py makemigrations counters
python3 manage.py migrate counters

python3 manage.py makemigrations
python3 manage.py migrate
