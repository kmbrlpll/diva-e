
from flask import Flask, render_template, request
from app import create_app
from app.models import Office, Room, Window, Heater

app = create_app()

if __name__ == "__main__":
    app.run()
