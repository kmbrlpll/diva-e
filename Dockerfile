FROM python:alpine3.7
COPY . /app
WORKDIR /app
RUN pip install --upgrade
RUN pip -r businesslogic/requirements.txt
EXPOSE 5000
CMD python manage.py run