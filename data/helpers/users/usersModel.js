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
    const [id] = await db('users').insert(user, 'id');

    return findById(id);
}

module.exports = {
    add,
    getAll,
    findBy,
    findById,
}