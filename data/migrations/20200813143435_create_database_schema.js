exports.up = function (knex) {
  return knex.schema
    .createTable("recepies", (table) => {
      table.increments("id");
      table.string("name").notNullable();
    })
    .createTable("ingredients", (table) => {
      table.increments("id");
      table.string("name").notNullable();
    })
    .createTable("recepie_ingredients", (table) => {
      table.increments("id");
      table
        .integer("recepie_id")
        .notNullable()
        .references("recepies.id")
        .unsigned()
        .onDelete("RESTRICT")
        .onUpdate("CASCADE");
      table
        .integer("ingredient_id")
        .notNullable()
        .references("ingredients.id")
        .unsigned()
        .onDelete("RESTRICT")
        .onUpdate("CASCADE");
      table.float("quantity").notNullable();
      table.string("measurment", 5);
    })
    .createTable("steps", (table) => {
      table.increments("id");
      table.integer("step").unsigned().notNullable();
      table
        .integer("recepie_id")
        .notNullable()
        .unsigned()
        .references("recepies.id")
        .onUpdate("CASCADE")
        .onDelete("RESTRICT")
      table.text('instructions').notNullable()
    });
};

exports.down = function (knex) {
  return knex.schema
  .dropTableIfExists("steps")
  .dropTableIfExists("recepie_ingredients")
  .dropTableIfExists("ingredients")
  .dropTableIfExists("recepies")
};
