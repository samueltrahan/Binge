const Tvshow = require('../models/tvshow');
const tvshow = require('../models/tvshow');

module.exports = {
    create,
    index,
    delete: deleteTvshow,
    show,
    update,
}

function create(req, res) {
    Tvshow.create(req.body)
    .then(tvshow => {res.json(tvshow)})
    .catch(err => {res.json(err)})
}

function index(req, res) {
    Tvshow.find({}) 
    .then(tvshow => {res.json(tvshow)})
    .catch(err => {res.json(err)})
}

function deleteTvshow(req, res) {
    Tvshow.findByIdAndDelete(req.params.id)
    .then(tvshow => {res.json(tvshow)})
    .catch(err => {res.json(err)})
}

function show(req, res) {
    Tvshow.findById(req.params.id) 
    .then(tvshow => {res.json(tvshow)})
    .catch(err => {res.json(err)})
}

function update(req, res) {
    Tvshow.findByIdAndUpdate(req.params.id, res.body, {new: true}) 
    .then(tvshow => {res.json(tvshow)})
    .catch(err => {res.json(err)})
}