// routes/api/albums.js

const express = require('express');
const router = express.Router();

// Load Album model
const Album = require('../../models/Album');

// @route GET api/albums/test
// @description tests albums route
// @access Public
router.get('/test', (req, res) => res.send('album route testing!'));

// @route GET api/albums
// @description Get all albums
// @access Public
router.get('/', (req, res) => {
  Album.find()
    .then(albums => res.json(albums))
    .catch(err => res.status(404).json({ noalbumsfound: 'No Albums found' }));
});


// @route GET api/albums/exercice1
// @description Get all albums
// @access Public
router.get('/exercice1', (req, res) => {
  Album.find().sort({alb_annee:1})
    .then(albums => res.json(albums))
    .catch(err => res.status(404).json({ noalbumsfound: 'No Albums found' }));
});

// @route GET api/albums/exercice3
// @description Get all albums
// @access Public
router.get('/exercice3', (req, res) => {
  Album.find().sort({alb_prix:1, alb_nom:1})
    .then(albums => res.json(albums))
    .catch(err => res.status(404).json({ noalbumsfound: 'No Albums found' }));
});


// @route GET api/albums/:id
// @description Get single album by id
// @access Public
router.get('/:id', (req, res) => {
  Album.findById(req.params.id)
    .then(album => res.json(album))
    .catch(err => res.status(404).json({ noalbumfound: 'No Album found' }));
});

// @route GET api/albums
// @description add/save album
// @access Public
router.post('/', (req, res) => {
  Album.create(req.body)
    .then(album => res.json({ msg: 'Album added successfully' }))
    .catch(err => res.status(400).json({ error: 'Unable to add this album' }));
});

// @route GET api/albums/:id
// @description Update album
// @access Public
router.put('/:id', (req, res) => {
  Album.findByIdAndUpdate(req.params.id, req.body)
    .then(album => res.json({ msg: 'Updated successfully' }))
    .catch(err =>
      res.status(400).json({ error: 'Unable to update the Database' })
    );
});

// @route GET api/albums/:id
// @description Delete album by id
// @access Public
router.delete('/:id', (req, res) => {
  Album.findByIdAndRemove(req.params.id, req.body)
    .then(album => res.json({ mgs: 'Album entry deleted successfully' }))
    .catch(err => res.status(404).json({ error: 'No such a album' }));
});

module.exports = router;
