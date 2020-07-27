const express = require('express');
const Sequelize = require('sequelize');
const db = require('../models');

const character = db.Character;

const router = express.Router();

// GET
router.get('/', async (req, res) => {
  const allCharacters = await character.findAll({
    include: [
      {
        model: db.characterFaction, 
        include: [
          {
            model: db.Faction
           }
         ]
      }
    ]
  })

  return res.set({
  }).status(200).send(allCharacters);
});

module.exports = router;