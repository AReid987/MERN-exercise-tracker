// import express router
const router = require('express').Router();
// save exercise model
let Exercise = require('../models/exercise.model');

// INDEX
// get request to index route with req/resp objects
router.route('/exercises').get((req,res) => {
  // find the exercise
  Exercise.find()
  // parse JSON resp
  .then(exercises => res.json(exercises))
  // handle error
  .catch(err => res.status(400).json('Error: ' + err));
});


// CREATE
// send req to /add route
router.route('/add').post((req, res) => {
  // consume req body into variables
  const username = req.body.username;
  const description = req.body.description;
  const duration = Number(req.body.duration);
  const date = Date.parse(req.body.date);

  // use Schema to create new Exercise object
  const newExercise = new Exercise({
    username,
    description,
    duration,
    date,
  })

  // post to db
  newExercise.save()
  .then(() => res.json('Exercise added!'))
  .catch(err => res.status(400).json('Error ' + err))
});

// SHOW

// send req to dynamic show route
router.route('/:id').get((req, res) => {
  // find Exercise by id in req params
  Exercise.findById(req.params.id)
  .then(exercise => res.json(exercise))
  .catch(err => res.status(400).json('Error: ' + err));
});

// DELETE

router.route('/:id').delete((req, res) => {
  Exercise.findByIdAndDelete(req.params.id)
    .then(() => res.json('Exercise deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

// UPDATE

router.route('/update/:id').post((req, res) => {
  Exercise.fidndById(req.params.id)
    .then(exercise => {
      exercise.username = req.body.username;
      exercise.description = req.body.description;
      exercise.duration = req.body.duration;
      exercise.date = req.body.date;
    })
});

module.exports = router;
