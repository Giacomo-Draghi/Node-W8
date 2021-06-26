const PORT = process.env.PORT || 3000;
// Importing modules
// Express JS
const express = require('express');
// Body parser
const bodyParser = require('body-parser');
// Path
const path = require('path');

const pokemonRoutes = require('./routers/pokemon');
const pr10Rout = require('./routers/pr10-rout');
// const errorController = require('./controllers/error');

// Creating a express application
const app = express();
app.use(bodyParser.json())
app.set('view engine', 'ejs');
app.set('views','views');

// Working with the middleware
// parsing 
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public')));

// Calling the router object
app.use(pokemonRoutes);
app.use(pr10Rout);

// app.use(errorController.get404); 

app.listen(PORT, () => console.log(`Listening on ${ PORT }`));