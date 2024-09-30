from flask import Flask
import mysql.connector

app = Flask(__name__)

db = mysql.connector.connect(
    host="localhost",
    user="root",
    password="Nimalamysql2024",
    database="citizen_engagement"
)

@app.route('/')
def home():
    return "Welcome to the Citizen Engagement Platform"

if __name__ == '__main__':
    app.run(debug=True)
