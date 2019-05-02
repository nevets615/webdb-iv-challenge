exports.up = function(knex, Promise) {
  return knex.schema
    .createTable("dish", tbl => {
      tbl.increments();

      tbl
        .string("name", 128)
        .notNullable()
        .unique();
    })
    .createTable("recipe", tbl => {
      tbl.increments();

      tbl
        .string("name", 128)
        .notNullable()
        .unique();

      tbl
        .integer("dish_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("dishs")
        .onDelete("RESTRICT")
        .onUpdate("CASCADE");
    })
    .createTable("ingredient", tbl => {
      tbl.increments();

      tbl.string("name", 128).notNullable();
    })
    .createTable("recipe_ingredient", tbl => {
      tbl.increments();

      tbl
        .integer("recipe_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("recipes")
        .onDelete("RESTRICT")
        .onUpdate("CASCADE");

      tbl
        .integer("ingredient_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("ingredient")
        .onDelete("RESTRICT")
        .onUpdate("CASCADE");
    });
};

exports.down = function(knex, Promise) {
  return knex.schema
    .dropTableIfExists("recipe_ingredient")
    .dropTableIfExists("ingredient")
    .dropTableIfExists("recipes")
    .dropTableIfExists("dishs");
};
