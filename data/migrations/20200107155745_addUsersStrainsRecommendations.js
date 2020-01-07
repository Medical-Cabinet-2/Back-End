
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
            tbl.increments('id');

            tbl.datetime('created_at')
                .defaultTo(Date.now())
                .notNullable();

            tbl.datetime('updated_at')
                .defaultTo(Date.now())
                .notNullable();

            tbl.integer('user_id')
                .unsigned()
                .references('id')
                .inTable('users')
                .onUpdate('CASCADE')
                .onDelete('CASCADE')
                .notNullable();

            tbl.integer('strain_id')
                .unsigned()
                .references('id')
                .inTable('strains')
                .onUpdate('CASCADE')
                .onDelete('RESTRICT')
                .notNullable();
        })
};

exports.down = function (knex) {
    return knex.schema
        .dropTableIfExists('recommendations')
        .dropTableIfExists('strains')
        .dropTableIfExists('users');
};
