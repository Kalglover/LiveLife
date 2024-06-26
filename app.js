// require('dotenv').config(); // This line should be at the top to load environment variables first

// const express = require('express');
// const mongoose = require('mongoose');
// const mysql = require('mysql');

// const app = express();

// // Middleware to parse JSON bodies
// app.use(express.json());

// // Connect to MongoDB
// mongoose.connect(process.env.MONGO_URI, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// })
// .then(() => console.log("Connected to MongoDB successfully"))
// .catch(err => console.error("MongoDB connection error:", err));

// const connection = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password: '0245Kalia',
//   database: 'Livelife',
// });

// connection.connect(err => {
//   if (err) {
//     return console.error('error connecting to MySQL: ' + err.message);
//   }
//   console.log('connected to MySQL as id ' + connection.threadId);
// });

// // Define a simple route
// app.get('/', (req, res) => {
//   res.send('Hello World!');
// });

// // Start the server
// const PORT = process.env.PORT || 3001;
// app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
