.PHONY: clean system-packages python-packages install tests run all

clean:
	find . -type f -name '*.pyc' -delete
	find . -type f -name '*.log' -delete

system-packages:
	sudo apt install python-pip -y

python-packages:
	pip install -r businesslogic\requirements.txt

install: system-packages python-packages

tests:
	python manage.py test

# enterenv:
#     ( \
#        source path/to/virtualenv/bin/activate; \
#        pip install -r requirements.txt; \
#     )
	
run:
	python manage.py run

setup:
	python manage.py setup

delete:
	python manage.py delete

all: clean install tests run