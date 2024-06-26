const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, '../public')));

// Set the view engine to ejs
app.set('view engine', 'ejs');

// Set the views directory
app.set('views', path.join(__dirname, 'views'));

// Import routes
const inventoryRoutes = require('./routes/inventoryRoutes');

// Use routes
app.use('/', inventoryRoutes);

// Serve index.ejs from views directory
app.get('/', (req, res) => {
    res.render('inventoryList');
});

// Start the server
const PORT = process.env.PORT || 3003;
app.listen(PORT, () => console.log(`Server is running on http://localhost:${PORT}`));

app.get('/order-form', (req, res) => {
    res.render('orderForm');
});
