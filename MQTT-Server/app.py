
from flask import Flask, render_template, request
from app import create_app
from app.models import Thing, Channel

app = create_app()

if __name__ == "__main__":
    app.debug = True
    app.run()
