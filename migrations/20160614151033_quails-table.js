
exports.up = function(knex, Promise) {
  return knex.schema.createTable('quails', function(table) {
    table.increments();
    table.string('name');
    table.string('image');
    table.text('description');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('quails');
};
