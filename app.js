const express = require('express');
const bodyParser = require('body-parser');
const multer = require('multer');
const ObjectID = require('mongodb').ObjectID;
var path = require('path');

const Coffee = require('./models/coffee');
const Beverage = require('./models/beverage');
const Desert = require('./models/desert');
const Sirop = require('./models/sirop');
const Party = require('./models/party');
const Reserv = require('./models/reserv');
const Reserv_p = require('./models/reserv_party');
const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(express.static(path.join(__dirname, 'public')));

app.get('/menu', (req, res) => {

  Coffee.find({}).then(coffees => {
    Beverage.find({}).then(beverages => {
      Desert.find({}).then(deserts => {
        Sirop.find({}).then(sirops => {
          res.render('menu', {
            coffees: coffees,
            beverages: beverages,
            deserts: deserts,
            sirops: sirops
          });
        });
      });
    });
  });
});

app.get('/admin', (req, res) => {

  Coffee.find({}).then(coffees => {
    Beverage.find({}).then(beverages => {
      Desert.find({}).then(deserts => {
        Sirop.find({}).then(sirops => {
          res.render('admin', {
            coffees: coffees,
            beverages: beverages,
            deserts: deserts,
            sirops: sirops
          });
        });
      });
    });
  });
});

app.post('/menu', (req, res) => {
  const {
    name,
    email,
    date,
    quantity
  } = req.body;
  Reserv.create({
    name: name,
    email: email,
    date: date,
    quantity: quantity
  }).then();

  res.redirect('/menu');
});

app.post('/party', (req, res) => {
  const {
    name,
    email,
    number_p,
    quantity
  } = req.body;
  Reserv_p.create({
    name: name,
    email: email,
    number_p: number_p,
    quantity: quantity
  }).then();

  res.redirect('/party');
});

app.get('/party', (req, res) => {
  Party.find({}).then(partys => {
    res.render('party', {
      partys: partys
    });
  });
});


app.get('/admin_cl', (req, res) => {
  Reserv.find({}).then(reservs => {
    Party.find({}).then(partys => {
      Reserv_p.find({}).then(reserv_ps => {
        res.render('admin_cl', {
          reservs: reservs,
          partys: partys,
          reserv_ps: reserv_ps
        });
      });
    });
  });
});


app.get('/', (req, res) => res.render('index'));


app.delete("/admin", function(req, res) {
  var id_str = new String(req.body.a);
  var id = new String(id_str.split("+")[0]);
  var model = new String(id_str.split("+")[1]);
  if (model == 'Coffee') {
    Coffee.findOneAndRemove({
      _id: id
    }, function(err, result) {
      if (err) return res.status(400).send();
      res.redirect('/admin');
    });
  };

  if (model == 'Desert') {
    Desert.findOneAndRemove({
      _id: id
    }, function(err, result) {
      if (err) return res.status(400).send();
      res.redirect('/admin');
    });
  };

  if (model == 'Beverage') {
    Beverage.findOneAndRemove({
      _id: id
    }, function(err, result) {
      if (err) return res.status(400).send();
      res.redirect('/admin');
    });
  };

  if (model == 'Sirop') {
    Sirop.findOneAndRemove({
      _id: id
    }, function(err, result) {
      if (err) return res.status(400).send();
      res.redirect('/admin');
    });
  };

  if (model == 'Reserv') {
    Reserv.findOneAndRemove({
      _id: id
    }, function(err, result) {
      if (err) return res.status(400).send();
      res.redirect('/admin');
    });
  };

  if (model == 'Reserv_p') {
    Reserv_p.findOneAndRemove({
      _id: id
    }, function(err, result) {
      if (err) return res.status(400).send();
      res.redirect('/admin');
    });
  };

  if (model == 'Party') {
    Party.findOneAndRemove({
      _id: id
    }, function(err, result) {
      if (err) return res.status(400).send();
      res.redirect('/admin');
    });
  };
});

app.get('/create_coffee', (req, res) => {
  res.render('create_coffee');
});
app.post('/create_coffee', (req, res) => {
  const {
    name,
    cost,
    ingredient
  } = req.body;
  Coffee.create({
    name: name,
    cost: cost,
    ingredient: ingredient
  }).then();

  res.redirect('/admin');
});

app.get('/create_sirop', (req, res) => {
  res.render('create_sirop');
});
app.post('/create_sirop', (req, res) => {
  const {
    name,
    cost,
    ingredient
  } = req.body;
  Sirop.create({
    name: name,
    cost: cost,
    ingredient: ingredient
  }).then();

  res.redirect('/admin');
});

app.get('/create_desert', (req, res) => {
  res.render('create_desert');
});
app.post('/create_desert', (req, res) => {
  const {
    name,
    cost,
    ingredient
  } = req.body;
  Desert.create({
    name: name,
    cost: cost,
    ingredient: ingredient
  }).then();

  res.redirect('/admin');
});

app.get('/create_beverage', (req, res) => {
  res.render('create_beverage');
});
app.post('/create_beverage', (req, res) => {
  const {
    name,
    cost,
    ingredient
  } = req.body;
  Beverage.create({
    name: name,
    cost: cost,
    ingredient: ingredient
  }).then();

  res.redirect('/admin');
});


app.get('/create_party', (req, res) => {
  res.render('create_party');
});
app.post('/create_party', (req, res) => {
  const {
    number,
    name,
    date,
    description
  } = req.body;
  Party.create({
    number: number,
    name: name,
    date: date,
    description: description
  }).then();

  res.redirect('/party');
});

module.exports = app;
