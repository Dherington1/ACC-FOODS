// const express = require('express');
// const dotenv = require('dotenv');
// const cors = require('cors');
// const path = require('path');
// const cookieParser = require('cookie-parser');

// const app = express();
// dotenv.config({ path: '.env' });

// // Enable CORS for all routes
// app.use(cors());
// // Middleware to parse JSON request bodies
// app.use(express.json());
// app.use(cookieParser());

// var mysql = require('mysql2');
// var connection = mysql.createConnection({
//   host: process.env.DB_HOST,
//   user: process.env.DB_USER,
//   password: process.env.DB_PASSWORD,
//   database: process.env.DB_NAME
// });

// connection.connect(function(err) {
//   if (err) throw err;
//   console.log("Connected!");
// });

// // Define the port to listen on
// const PORT = process.env.PORT || 8080; 

// // Start listening for requests
// app.listen(PORT, () => {
//   console.log(`App listening at http://localhost:${PORT}`);
// });
const express = require('express');
const sequelize = require('./config/connection'); 
const userRoutes = require('./Routes/userRoutes');

const app = express();
const PORT = process.env.PORT || 8080;

// Middleware to parse JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Simple route for testing
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// turn on routes
app.use('/api/v1/users', userRoutes);

// Sync sequelize models to the database, then start the server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});
