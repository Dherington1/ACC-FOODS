const express = require('express');
const sequelize = require('./config/connection'); 
const userRoutes = require('./Routes/userRoutes');
const productRoutes = require('./Routes/productRoutes')
const cors = require('cors');
const cookieParser = require('cookie-parser');

const app = express();
const PORT = process.env.PORT || 8080;

const corsOptions = {
  origin: 'http://localhost:3000', // Specify the client origin
  credentials: true, // To allow cookies and credentials
};

app.use(cookieParser());
app.use(cors(corsOptions));
// Middleware to parse JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Simple route for testing
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// turn on routes
app.use('/api/v1/users', userRoutes);
app.use('/api/v1/products', productRoutes);


// Sync sequelize models to the database, then start the server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});
