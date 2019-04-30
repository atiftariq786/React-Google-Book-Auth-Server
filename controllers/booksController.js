const db = require("../models");

// Defining methods for the booksController
module.exports = {
  findSaved: function (req, res) {
    db.Book
      .find({})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  saveBook: function (req, res) {
    db.Book
      .create(req.body)
      .then(dbModel => res.status(201).json(dbModel))
      .catch(err => res.status(422).json(err));
      //.catch(err => res.send(err));
  },
  remove: function (req, res) {
    db.Book.remove({_id: req.params.id })
      //.findById({ _id: req.params.id })
      //.then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
