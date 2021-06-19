// Routes for W08 Prove Assignment.
const express = require('express');
const router = express();
var jsonEngine = require('../controllers/pokemon');

router.get('/', (req, res, next) => {
      res.render('home', {
            pageTitle: 'Home Page',
            path: '/home'
      });
  })
  .get('/pokemon/:page', (req, res, next) => {
      const page = req.params.page;
      jsonEngine.getPokemon(page, (pokemon) => {
              res.render('pokemon', {
                  pageTitle: 'Pokedex',
                  path: '',
                  pokemonList: pokemon,
                  page: page
              });
      });
  });
module.exports = router;