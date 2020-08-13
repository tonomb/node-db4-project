
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recepie_ingredients').del()
    .then(function () {
      // Inserts seed entries
      return knex('recepie_ingredients').insert([
        {id: 1, recepie_id: 1 , ingredient_id: 1, quantity: 2},
        {id: 2, recepie_id: 1 , ingredient_id: 2, quantity: 1.5, measurment:'cups'},
        {id: 3, recepie_id: 1 , ingredient_id: 3, quantity: 2, measurment: 'pz'},
        {id: 4, recepie_id: 1 , ingredient_id: 4, quantity: 2, measurment:'g'},
        {id: 5, recepie_id: 2 , ingredient_id: 1, quantity: 2},
        {id: 6, recepie_id: 2 , ingredient_id: 2, quantity: 2, measurment: 'oz'},
      ]);
    });
};
