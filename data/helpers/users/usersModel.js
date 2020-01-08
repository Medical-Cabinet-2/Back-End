const db = require('../../dbConfig');


const getAll = () => {
    return db('users');
}

function findBy(filter) {
    return db('users').where(filter);
}

function findById(id) {
    return db('users')
        .where({ id })
        .first();
}

function update(id, changes) {
    return db('users')
        .where({ id })
        .update(changes, '*');
}

function remove(id) {
    return db('users')
        .delete()
        .where({ id });
}

async function add(user) {
    return await db('users')
        .insert(user)
        .returning('*');
}

module.exports = {
    add,
    getAll,
    findBy,
    findById,
    update,
    remove
}