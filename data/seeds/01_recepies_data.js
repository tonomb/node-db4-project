
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recepies').del()
    .then(function () {
      // Inserts seed entries
      return knex('recepies').insert([
        {id: 1, name: 'French Toast'},
        {id: 2, name: 'Scrambled Eggs'}
      ]);
    });
};
