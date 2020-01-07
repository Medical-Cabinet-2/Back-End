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

async function add(user) {
    return await db('users').insert(user).returning('*');
}

module.exports = {
    add,
    getAll,
    findBy,
    findById,
}