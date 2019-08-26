const db = require('../models');

module.exports = function(app) {
  app.get('/api/todos', function(req, res) {
    db.Todo.findAll().then(function(todos) {
      res.json(todos);
    });
  });

  app.post('/api/todos', function(req, res) {
    db.Todo.create({
      text: req.body.text
      // complete field should automatically be false
    }).then(function(todo) {
      res.json(todo);
    });
  });
};
