exports.up = function(knex) {
    return knex.schema.createTable('incidents', function (table) {
        table.increments('id');
        table.string('title', 100).notNullable();
        table.string('description', 200).notNullable();
        table.decimal('value').notNullable();
        table.string('ong_id').notNullable();

        table.foreign('ong_id').references('id').inTable('ongs').onUpdate('CASCADE').onDelete('CASCADE');
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('incidents');
};
