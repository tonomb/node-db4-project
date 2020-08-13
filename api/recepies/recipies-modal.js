const knex = require('knex')
const db = require('../../data/db-config')

module.exports = {
  getRecipies,
  getShoppingList,
  getInstructions
}

function getRecipies(){
  return db('recepies').select('*') //array of recipies
}

function getShoppingList(recipe_id){
  return db('recepie_ingredients')
  .select('name', knex.raw("quantity ||' ' || measurment as quantity") )
  .join('ingredients', 'recepie_ingredients.ingredient_id', 'ingredients.id ' )
  .where({recepie_id: recipe_id})
}

function getInstructions(recipe_id){
 return db('steps')
    .select('step', 'instructions')
    .where({recepie_id: recipe_id})
    .orderBy('step')
}