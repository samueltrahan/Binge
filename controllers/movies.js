const Movie = require('../models/movie');


module.exports = {
    create,
    index,
    delete: deleteMovie,
    show,
    update,
}

function create(req, res) {
    Movie.create(req.body)
    .then(movie => {res.json(movie)})
    .catch(err => {res.json(err)});
}

function index(req, res) {
    Movie.find({})
    .then(movie => {res.json(movie)})
    .catch(err => {res.json(err)})
}

function deleteMovie(req, res) {
    Movie.findByIdAndDelete(req.params.id)
    .then(movie => {res.json(movie)})
    .catch(err => {res.json(err)})
}

function show(req, res) {
    Movie.findById(req.params.id)
    .then(movie => {res.json(movie)})
    .catch(err => {res.json(err)})
}

function update(req, res) {
    Movie.findByIdAndUpdate(req.params.id, res.body, {new: true})
    .then(movie => {res.json(movie)})
    .catch(err => {res.json(err)})
}