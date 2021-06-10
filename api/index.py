
from flask import Flask
from flask import request
from flask_cors import CORS
from flask import jsonify
import mysql.connector
from datetime import date, datetime

app = Flask(__name__)
CORS(app)

@app.route('/')
def show_index():
    return jsonify({"name":"John"})
    # return {"name":"John"}


@app.route('/update/preference', methods=['POST'])
def update_preference():
    request_data = request.get_json();
    print("received "+ request_data.get('date'));
    print("received "+ request_data.get('org_name'));
    don_pref(request_data.get('org_id'),request_data.get('date'));    
    return jsonify(str(request_data));
    # return {"name":"John"}

# REST Call
@app.route('/update/donation', methods=['POST'])
def update_donation():
    request_data = request.get_json();
    date = request_data.get('date');
    org_name=  request_data.get('org_name');
    comment= request_data.get('comments');
    update_blood_donation_record(org_name=org_name, date=date, comment=comment);    
    return jsonify(str(request_data));



def don_pref(org_id,datadate):
    cnx=mysql.connector.connect(user='root',password='test', database='mydb')
    curs=cnx.cursor()
    sql=f"insert into donor_preference(org_id,d_date,d_time) values({org_id},'{datadate.split('T')[0].replace('-','/')}','{datadate.split('T')[-1]}');"
    
    curs.execute(sql);
    print(sql)
    # Make sure data is committed to the database
    cnx.commit()
    curs.close()
    cnx.close()

# helper method
def update_blood_donation_record(org_name, date, comment):
    cnx=mysql.connector.connect(user='root',password='test', database='mydb')
    curs=cnx.cursor()
    sql=f"insert into donation_record values('{org_name}','{date}','{comment}');"
    
    curs.execute(sql);
    print(sql);
    # Make sure data is committed to the database
    cnx.commit()
    curs.close()
    cnx.close()



    
