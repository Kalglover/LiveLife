require('dotenv').config();
const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const admin = require('firebase-admin');

const app = express();

app.use(cors());
app.use(express.json());

// Firebase Admin initialization
var serviceAccount = require('./firebase-adminsdk.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();

// Establish a connection to the MySQL database
const mysqlDB = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '0245Kalia!',
  database: 'Livelife'
});

// Connect to the MySQL database
mysqlDB.connect(err => {
  if (err) {
    console.error('error connecting to MySQL: ' + err.stack);
    return;
  }
  console.log('connected to MySQL as id ' + mysqlDB.threadId);
});

// Define a route for the root URL
app.get('/', (req, res) => {
  res.send('Welcome to the LiveLife API!');
});

// Define a route to fetch user data
app.get('/api/users', (req, res) => {
  mysqlDB.query('SELECT * FROM Users', (err, results) => {
    if (err) {
      console.error('Error fetching users from MySQL database:', err);
      res.status(500).send('Error fetching users from database');
      return;
    }
    res.json(results);
  });
});

// Define a route to fetch order items data
app.get('/api/orderitems', (req, res) => {
  mysqlDB.query('SELECT * FROM OrderItems', (err, results) => {
    if (err) {
      console.error('Error fetching order items from MySQL database:', err);
      res.status(500).send('Error fetching order items from database');
      return;
    }
    res.json(results);
  });
});

// Define a POST route to handle credit card information submission to Firestore
app.post('/api/creditcards', async (req, res) => {
  try {
    const { cardNumber, cardHolder, expiryDate, cvv } = req.body;
    const docRef = db.collection('creditcards').doc();
    await docRef.set({
      card_number: cardNumber,
      card_holder: cardHolder,
      expiry_date: expiryDate,
      cvv: cvv
    });
    console.log('Credit card saved:', docRef.id);  // Confirm save in logs
    res.status(201).send({ message: 'Credit card saved successfully in Firestore', id: docRef.id });
  } catch (error) {
    console.error('Error saving credit card data to Firestore:', error);
    res.status(500).send('Error submitting credit card data to Firestore');
  }
});

// Dummy endpoint for payment processing
app.post('/process-payment', (req, res) => {
  setTimeout(() => {
    const response = {
      user: {
        UserName: 'John Doe',
        UserId: req.body.userId || 1
      },
      orders: [
        {
          OrderID: 'order123',
          ShippingAddress: '123 Main St'
        }
      ],
      items: [
        {
          OrderID: 'order123',
          ItemID: 'item456',
          ItemName: 'Cool T-shirt',
          Quantity: 1
        }
      ]
    };
    res.json(response);
  }, 1000); // Wait 1 second to simulate processing time
});

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
