require('dotenv').config({ path: './.env' });
console.log('MongoDB URI:', process.env.MONGO_URI);

const express = require('express');
const mysql = require('mysql2');
const mongoose = require('mongoose'); // Import mongoose only once
const cors = require('cors');
const CreditCard = require('./CreditCardModel'); // Adjust path as needed

const app = express();

app.use(cors());
app.use(express.json());

// MongoDB Connection Setup
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('MongoDB connected successfully'))
  .catch(err => console.error('MongoDB connection error:', err));

// Establish a connection to the MySQL database
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '0245Kalia!',
  database: 'Livelife'
});

// Connect to the MySQL database
db.connect(err => {
  if (err) {
    console.error('error connecting to MySQL: ' + err.stack);
    return;
  }
  console.log('connected to MySQL as id ' + db.threadId);
});

// Define a route for the root URL
app.get('/', (req, res) => {
  res.send('Welcome to the LiveLife API!');
});

// Define a route to fetch user data
app.get('/api/users', (req, res) => {
  db.query('SELECT * FROM Users', (err, results) => {
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
  db.query('SELECT * FROM OrderItems', (err, results) => {
    if (err) {
      console.error('Error fetching order items from MySQL database:', err);
      res.status(500).send('Error fetching order items from database');
      return;
    }
    res.json(results);
  });
});

// Define a POST route to handle credit card information submission to MongoDB
app.post('/api/creditcards', async (req, res) => {
  try {
    const { cardNumber, cardHolder, expiryDate, cvv } = req.body;
    const newCard = new CreditCard({
      card_number: cardNumber,
      card_holder: cardHolder,
      expiry_date: expiryDate,
      cvv: cvv
    });

    await newCard.save();
    res.status(201).send({ message: 'Credit card saved successfully in MongoDB', data: newCard });
  } catch (error) {
    console.error('Error saving credit card data to MongoDB:', error);
    res.status(500).send('Error submitting credit card data to MongoDB');
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
