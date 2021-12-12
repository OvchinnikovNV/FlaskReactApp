import datetime
import json
from flask import Flask, request, redirect
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy


app = Flask(__name__)
CORS(app)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///database.db'
db = SQLAlchemy(app)


class Database(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(30), nullable=False)
    phone = db.Column(db.String(12), nullable=False)
    date = db.Column(db.Date, nullable=False)

    def __repr__(self):
        return '<Database %r>' % self.id


db.create_all()

@app.route('/')
def index():
    return {"msg": "Сообщение от сервера Flask."}


@app.route('/sorting/', methods=['POST'])
def sorting():
    array = request.get_json()['array'].split()
    array = [int(value) for value in array]
    array.sort()
    array = [str(value) for value in array]
    return {'array': ' '.join(array)}


@app.route('/db', methods=['POST'])
def send_db():
    name = request.form['name']
    phone = request.form['phone']
    date = request.form['date']
    date = date.split('-')
    date = [int(i) for i in date]

    database = Database(name=name, phone=phone, date=datetime.datetime(date[0], date[1], date[2]))

    try:
        db.session.add(database)
        db.session.commit()
        return redirect('http://localhost:3000/db')
    except:
        return "My database error"


@app.route('/db/print')
def get_db():
    result, i = {}, 0
    for record in Database.query.all():
        result[i] = {
            'id': record.id,
            'name': record.name,
            'phone': record.phone,
            'date': record.date
        }
        i += 1

    return result



if __name__ == "__main__":
    app.run(debug=True)
