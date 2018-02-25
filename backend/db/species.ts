const mongoose = require('mongoose');

const SpeciesSchema = new mongoose.Schema({
  name: {type: String, required: true, index: {unique: true}}
});

const collection = mongoose.model('species', SpeciesSchema);

export function find(req, res) {
  collection.find().exec((err, species) => {
    if (err) {
      res.send(err);
    }
    res.json(species);
  });
}

export function removeById(req, res) {
  collection.remove({_id: req.params.id}).exec((err) => {
    if (err) {
      res.send(err);
    }
  });
}

export function updateById(req, res) {
  collection.update({_id: req.params.id}, req.body).exec((err) => {
    if (err) {
      res.send(err);
    }
  });
}

export function create(req, res) {
  collection.create(req.body).exec((err, species) => {
    if (err) {
      res.send(err);
    }
    res.json(species);
  });
}
