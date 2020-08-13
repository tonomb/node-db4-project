const express = require('express')
const router = express.Router()

const db = require('./recipies-modal')

// ===== /recepies =====

router.get('/', (req, res)=>{
  db.getRecipies()
    .then( recipies =>{
      res.status(200).json(recipies)
    })
    .catch( err =>{
      console.log(err);
      res.status(500).json(err.message)
    })
})

router.get('/:id/shoppingList', (req, res) =>{
  db.getShoppingList(req.params.id)
    .then(ingredients => {
      res.status(200).json(ingredients)
    })
    .catch(err =>{
      console.log(err);
      res.status(500).json(err)
    })
})

router.get('/:id/instructions', (req, res) =>{
  db.getInstructions(req.params.id)
    .then(steps => {
      res.status(200).json(steps)
    })
    .catch(err =>{
      console.log(err);
      res.status(500).json(err)
    })
})

module.exports = router