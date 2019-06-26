FROM python:alpine3.7
COPY . /app
WORKDIR /app
RUN pip install -r businesslogic/requirements.txt
EXPOSE 5000
CMD python manage.py run