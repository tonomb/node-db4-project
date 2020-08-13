
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ingredients').del()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {id: 1, name: 'eggs'},
        {id: 2, name: 'milk'},
        {id: 3, name: 'bread'},
        {id: 4, name: 'butter'}
      ]);
    });
};
