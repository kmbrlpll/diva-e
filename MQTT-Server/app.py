
from flask import Flask, render_template, request
from app import create_app
import os
from app import create_app, db
from app.models import Office
from flask_script import Manager, Shell

from flask_sqlalchemy import SQLAlchemy
db = SQLAlchemy(app)
db.app = app

app = create_app()
manager = Manager(app)

def make_shell_context():
    return dict(app=app, db=db, Office=Office)

manager.add_command("shell", Shell(make_context=make_shell_context))


if __name__ == "__main__":
    manager.run()
