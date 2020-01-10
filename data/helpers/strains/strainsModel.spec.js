const db = require('../../dbConfig');

const Strains = require('./strainsModel');

describe('strains model', () => {

    beforeEach(async () => {
        await db('strains').truncate();
    })

    describe('insert()', () => {

        it('should insert the provided strains into the db', async () => {

            await Strains.add({ strain: 'Kandy Kush' });
            await Strains.add({ strain: 'Stankonia' });

            const strains = await db('strains');

            expect(strains).toHaveLength(2);
        });
    });
});
