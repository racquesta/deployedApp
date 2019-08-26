const db = require('../models');

modules.exports = function(app) {
  app.get('/api/todos', function(req, res) {
    db.Todo.findAll().then(function(todos) {
      req.json(dbTodo);
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
