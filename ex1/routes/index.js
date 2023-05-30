var express = require('express');
var router = express.Router();
var Lista = require('../controllers/planta')

// GET: os vários pedidos

router.get('/plantas', function(req, res, next) {
  const especieParam = req.query.especie;
  const implantParam = req.query.implant;
  Lista.list(especieParam,implantParam)
    .then(listas => {
      res.jsonp(listas)
    })
    .catch(erro => {
      res.render('error', {error: erro, message: "Erro na obtenção das listas de compras"})
    })
});

router.get('plantas/:id', function(req, res) {
  Lista.getLista(req.params.id)
    .then(lista => {
      res.jsonp(lista)
    })
    .catch(erro => {
      res.render('error', {error: erro, message: "Erro na obtenção da lista de compras"})
    })
});

router.get('/plantas/freguesias', function(req, res) {
  Lista.freguesia()
    .then(lista => {
      res.jsonp(lista)
    })
    .catch(erro => {
      res.render('error', {error: erro, message: "Erro na obtenção das categorias"})
    })
});

router.get('/plantas/especies', function(req, res) {
  Lista.especies()
    .then(lista => {
      res.jsonp(lista)
    })
    .catch(erro => {
      res.render('error', {error: erro, message: "Erro na obtenção das categorias"})
    })
});

// POST: de uma lista de compras

router.post('/plantas', function(req, res) {
  Lista.addLista(req.body)
    .then(lista => {
      res.jsonp(lista)
    })
    .catch(erro => {
      res.render('error', {error: erro, message: "Erro na inserção da lista"})
    })
})

// DELETE de um produto numa lista de compras

router.delete('/plantas:id', function(req, res) {
  Lista.deleteLista(req.params.id)
    .then(dados => {
      res.jsonp(dados)
    })
    .catch(erro => {
      res.render('error', {error: erro, message: "Erro na inserção de um produto"})
    })
})


module.exports = router;
