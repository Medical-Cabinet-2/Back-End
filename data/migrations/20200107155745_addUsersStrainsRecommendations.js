
exports.up = function (knex) {
    return knex.schema
        .createTable('users', tbl => {
            tbl.increments('id');

            tbl.string('email', 128)
                .unique()
                .notNullable();

            tbl.string('password', 128)
                .notNullable();

            tbl.string('first_name', 128)
                .notNullable();

            tbl.string('last_name', 128)
                .notNullable();
        })
        .createTable('strains', tbl => {
            tbl.increments('id');

            tbl.string('strain', 128)
                .unique()
                .notNullable();

        })
        .createTable('recommendations', tbl => {
            tbl.primary(['strain_id', 'user_id']);

            tbl.datetime('created_at')
                .defaultTo(knex.fn.now())
                .notNullable();

            tbl.datetime('updated_at')
                .defaultTo(knex.fn.now())
                .notNullable();

            tbl.integer('user_id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('users')
                .onUpdate('CASCADE')
                .onDelete('CASCADE');

            tbl.integer('strain_id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('strains')
                .onUpdate('CASCADE')
                .onDelete('RESTRICT');
        })
};

exports.down = function (knex) {
    return knex.schema
        .dropTableIfExists('recommendations')
        .dropTableIfExists('strains')
        .dropTableIfExists('users');
};
