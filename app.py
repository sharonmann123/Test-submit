from flask import Flask,render_template, redirect, session, request
from flask_session import Session
from sqlalchemy import create_engine
from function import login_required

app = Flask(__name__)
app.config["SESSION_PERMANENT"] = False
app.config["SESSION_TYPE"] = "filesystem"
Session(app)
db = create_engine('sqlite:///college.db', echo = True)

@app.route('/')
def home():
    return render_template("index.html")

@app.route('/login', methods = ["GET","POST"])
def login():
    session.clear()
    if request.method == "POST":
        phone = request.form.get("phone")
        return render_template("otp.html")
    else:
        return render_template("otp.html")
@app.route('/otp', methods = ["GET","POST"])
def otp():    
    if request.method == "POST":
        otp = request.form.get("otp")
        if otp == "1234":
            return redirect("/")
        else:
            return redirect("/")
    else:
        return render_template("otp.html")


if __name__== '__main__':
    app.run()