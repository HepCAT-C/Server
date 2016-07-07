

##Steps
```
$ git clone https://github.com/abadri/myHealth.git
$ cd myHealth/
$ npm install .
$ node server.js 
```

##Sample endpoints


* Get Contacts: http://localhost:5000/api/getContacts/<UID>
* Get Appointments: http://localhost:5000/api/getAppointments/<UID>
* Get Presciptions: http://localhost:5000/api/getPrescriptions/<UID>

where <UID> is a parameter e.g. http://localhost:5000/api/getContacts/1234


##Installing Mongo DB on MAC

   

```
// update your packages
$ brew update

// install mongoDB
$ brew install mongodb

$ sudo mkdir -p /data/db

$ cd /
$ chmod 777 data
$ cd /data
$ chmod 777 db

//Starting mondodb
$ mongod

```


##External Hosting 


###Node App
Using Heroku to host the app

How to Heroku: https://devcenter.heroku.com/articles/getting-started-with-nodejs#set-up


###Mongo DB
https://mongolab.com


To connect using the mongo shell:
```
mongo ds037175.mongolab.com:37175/health -u <dbuser> -p <dbpassword>
```
To connect using a driver via the standard MongoDB URI (what's this?):
``` 
mongodb://<dbuser>:<dbpassword>@ds037175.mongolab.com:37175/health
```
=======
# Server

HepCat C App - Desktop Application and Mobile app Server 
Tech stack: MEAN stack (MongoDB, Express.js, AngularJS, Node.js), and RestFul API.

# MyHealthApp

The MyHealth App has been developed for an NGO incollaboration with Frugal Innovation Lab and Sparrow Mobile. <br>
This is a desktop application, where the administrator can create the profiles for other admins, patients and doctors and would have access to edit or delete any profile.<br>
The administrator has the following additional features.<br>
1. Book a group appointment for the patients and assign a particular doctor.<br>
2. Feeds the appointment information in the patient's mobile and provide the reminders (for example : in an interval of 7 day, 3 day, 1 day, 5 hrs etc.) for the appointment in the form of pop ups.<br>
3. Feeds the medicines and corresponding time to take them in the patient's mobile and provide timely reminders in the form of pop-ups.<br>
4. In case the patient doesn't respond to the reminders, the coordinator tracks the patient's treatment and would follow up with the patient.<br>
5. Feeds the pharmacy information in the patient's mobile in case of refilling the medicines.<br><br>

This app is developed using AngularJS for the UI.<br>

# Steps to view the app


