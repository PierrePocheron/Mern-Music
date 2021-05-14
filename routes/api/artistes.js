// routes/api/artistes.js

const express = require('express');
const router = express.Router();

// Load Artiste model
const Artiste = require('../../models/Artiste');

// @route GET api/artistes/test
// @description tests artistes route
// @access Public
router.get('/test', (req, res) => res.send('artiste route testing!'));

// @route GET api/artistes
// @description Get all artistes
// @access Public
router.get('/', (req, res) => {
  Artiste.find()
    .then(artistes => res.json(artistes))
    .catch(err => res.status(404).json({ noartistesfound: 'No Artistes found' }));
});

// @route GET api/artistes/exercice2
// @description Get all artistes
// @access Public
router.get('/exercice2', (req, res) => {
  Artiste.find().sort({art_nom:1})
    .then(artistes => res.json(artistes))
    .catch(err => res.status(404).json({ noartistesfound: 'No Artistes found' }));
});

// @route GET api/artistes/:id
// @description Get single artiste by id
// @access Public
router.get('/:id', (req, res) => {
  Artiste.findById(req.params.id)
    .then(artiste => res.json(artiste))
    .catch(err => res.status(404).json({ noartistefound: 'No Artiste found' }));
});

// @route GET api/artistes
// @description add/save artiste
// @access Public
router.post('/', (req, res) => {
  Artiste.create(req.body)
    .then(artiste => res.json({ msg: 'Artiste added successfully' }))
    .catch(err => res.status(400).json({ error: 'Unable to add this artiste' }));
});

// @route GET api/artistes/:id
// @description Update artiste
// @access Public
router.put('/:id', (req, res) => {
  Artiste.findByIdAndUpdate(req.params.id, req.body)
    .then(artiste => res.json({ msg: 'Updated successfully' }))
    .catch(err =>
      res.status(400).json({ error: 'Unable to update the Database' })
    );
});

// @route GET api/artistes/:id
// @description Delete artiste by id
// @access Public
router.delete('/:id', (req, res) => {
  Artiste.findByIdAndRemove(req.params.id, req.body)
    .then(artiste => res.json({ mgs: 'Artiste entry deleted successfully' }))
    .catch(err => res.status(404).json({ error: 'No such a artiste' }));
});

module.exports = router;
