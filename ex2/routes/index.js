var express = require('express');
var router = express.Router();
var env = require('../config/env')
var axios = require('axios')


router.get('/', function(req, res) {
  var data = new Date().toISOString().substring(0,19)
  axios.get(env.apiAccessPoint)
    .then(response => {
      res.render('listas', { lists: response.data, d: data });
    })
    .catch(err => {
      res.render('error', {error: err})
    })
});

router.get('/:id', function(req, res) {
  var data = new Date().toISOString().substring(0,19)
  axios.get(env.apiAccessPoint+'/'+ req.params.id)
    .then(response => {
      res.render('listaCompras', { list: response.data, d: data });
    })
    .catch(err => {
      res.render('error', {error: err})
    })
});

router.get('especies/:id', function(req, res) {
  var data = new Date().toISOString().substring(0,19)
  console.log(req.params.idProd)
  axios.delete(env.apiAccessPoint+"/listas/"+ req.params.idLista +"/produtos/"+ req.params.idProd)
    .then(response => {
      res.redirect('/retrieveList/' + req.params.idLista)
    })
    .catch(err => {
      res.render('error', {error: err})
    })
});


module.exports = router;
