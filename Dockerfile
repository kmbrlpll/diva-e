FROM python:alpine3.7
COPY . /app
WORKDIR /app
RUN pip install -r MQTTServer\requirements.txt
EXPOSE 5000
CMD python manage.py