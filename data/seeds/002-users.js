const bcrypt = require('bcryptjs');
exports.seed = knex => {
  return knex('users')
    .insert([
      {
        email: 'brad@medcabinet.com',
        password: bcrypt.hashSync('abc123!', 12),
        first_name: 'Brad',
        last_name: 'Zickafoose'
      },
      {
        email: 'anthony@medcabinet.com',
        password: bcrypt.hashSync('abc123!', 12),
        first_name: 'Anthony',
        last_name: 'Hart'
      },
      {
        email: 'bhavani@medcabinet.com',
        password: bcrypt.hashSync('abc123!', 12),
        first_name: 'Bhavani',
        last_name: 'Rajan'
      },
      {
        email: 'dylan@medcabinet.com',
        password: bcrypt.hashSync('abc123!', 12),
        first_name: 'Dylan',
        last_name: 'Nason'
      },
      {
        email: 'erik@medcabinet.com',
        password: bcrypt.hashSync('abc123!', 12),
        first_name: 'Erik',
        last_name: 'Rodriguez'
      },
      {
        email: 'issac@medcabinet.com',
        password: bcrypt.hashSync('abc123!', 12),
        first_name: 'Issac',
        last_name: 'Moreno'
      },
      {
        email: 'leslie@medcabinet.com',
        password: bcrypt.hashSync('abc123!', 12),
        first_name: 'Leslie',
        last_name: 'Thompson'
      },
      {
        email: 'mariela@medcabinet.com',
        password: bcrypt.hashSync('abc123!', 12),
        first_name: 'Mariela',
        last_name: 'Gonzalez'
      },
      {
        email: 'michelle@medcabinet.com',
        password: bcrypt.hashSync('abc123!', 12),
        first_name: 'Michelle',
        last_name: 'Hottinger'
      },
      {
        email: 'natalie@medcabinet.com',
        password: bcrypt.hashSync('abc123!', 12),
        first_name: 'Natalie',
        last_name: 'Davis'
      },
      {
        email: 'shawn@medcabinet.com',
        password: bcrypt.hashSync('abc123!', 12),
        first_name: 'Shawn',
        last_name: 'Patel'
      },
      {
        email: 'guillermo@medcabinet.com',
        password: bcrypt.hashSync('abc123!', 12),
        first_name: 'Guillermo',
        last_name: 'Arria-Devoe'
      },
      {
        email: 'ira@medcabinet.com',
        password: bcrypt.hashSync('abc123!', 12),
        first_name: 'Ira',
        last_name: 'Evangelista'
      },
      {
        email: 'lexie@medcabinet.com',
        password: bcrypt.hashSync('abc123!', 12),
        first_name: 'Lexie',
        last_name: 'Jiang'
      },
      {
        email: 'nisha@medcabinet.com',
        password: bcrypt.hashSync('abc123!', 12),
        first_name: 'Nisha',
        last_name: 'Arya Ahmed'
      },
    ])
}