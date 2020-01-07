exports.seed = knex => {
  return knex('recommendations')
    .insert([
      {
        user_id: 1,
        strain_id: 7,
      },
      {
        user_id: 2,
        strain_id: 1,
      },
      {
        user_id: 3,
        strain_id: 2,
      }
    ])
}