const db = require('../../dbConfig');

const find = () => {
    return db('strains');
}

const findBy = property => {
    return db('strains')
        .where(property)
}

async function add(strain) {
    return await db('strains').insert(strain).returning('*');
}

module.exports = {
    find,
    findBy,
    add
}