
exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('games', table => {
    table.increments('id')
    table.string('name')
    table.boolean('is_started').defaultTo(false)
    table.boolean('is_ended').defaultTo(false)
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('games')
};
