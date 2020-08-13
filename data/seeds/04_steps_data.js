
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('steps').del()
    .then(function () {
      // Inserts seed entries
      return knex('steps').insert([
        {id: 1, step: 1, recepie_id: 1, instructions: 'mix the eggs and the milk in a bowl'},
        {id: 2, step: 2, recepie_id: 1, instructions: 'put the butter in the pan until golden'},
        {id: 3, step: 3, recepie_id: 1, instructions: 'dip the bread in the egg and milk mixture'},
        {id: 4, step: 1, recepie_id: 2, instructions: 'crack the eggs in a bowl and mix them'},
        {id: 5, step: 2, recepie_id: 2, instructions: 'poor the milk in the bowl and keep mixing'},
      ]);
    });
};
