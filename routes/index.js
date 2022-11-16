const { roll } = require("../lib/roll.js");

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.status(200).send('200 OK');
});

router.get('/roll/', function(req, res) {
  let sides = req.query.sides 
  let dice = req.query.dice
  let rolls = req.query.rolls

  if (sides) {
    sides = parseInt(sides);
  } else {
    sides = 6
  }
  if (dice) {
    dice = parseInt(dice);
  } else {
    dice = 2
  }
  if (rolls) {
    rolls = parseInt(rolls);
  } else {
    rolls = 1
  }

  res.status(200).json(
    roll(
      sides,dice,rolls
    )
  )
});
router.get('/roll/:sides', function(req, res) {
  const sides = req.params.sides;
  res.status(200).json(
    roll(
      sides,2,1
    )
  )
})
router.get('/roll/:sides/:dice', function(req, res) {
  const sides = req.params.sides;
  const dice = req.params.dice;
  res.status(200).json(
    roll(
      sides,dice,1
    )
  )
})
router.get('/roll/:sides/:dice/:rolls', function(req, res) {
  const sides = req.params.sides;
  const dice = req.params.dice;
  const rolls = req.params.rolls;
  res.status(200).json(
    roll(
      sides,dice,rolls
    )
  )
})
module.exports = router;
