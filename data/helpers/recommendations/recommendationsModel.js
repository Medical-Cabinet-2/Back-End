const db = require('../../dbConfig');

async function add(recommendation) {
    return await db('recommendations').insert(recommendation).returning('*');
}

function remove(id) {
    return db('recommendations')
        .delete()
        .where({ id });
}

module.exports = {
    add,
    remove
}