exports.seed = knex => {
  return knex('strains')
    .insert([
      { strain: 'Ak-47' },
      { strain: 'Afghani' },
      { strain: 'Alohaberry' },
      { strain: 'Bakerstreet' },
      { strain: 'Bio Jesus' },
      { strain: 'Birthday Cake Kush' },
      { strain: 'Blueberry Dream' },
      { strain: 'Brain Berry Cough' },
      { strain: 'Bubbleberry' },
      { strain: 'Cackleberry' },
      { strain: 'Candy Cane' },
      { strain: 'Double Dutch' },
      { strain: 'Doctor Funk' },
      { strain: 'Dragons Breath' },
      { strain: 'Durban Poison' },
      { strain: 'Ebola 007' },
      { strain: 'Electric Kool-Aid' },
      { strain: 'Flaming Cookies' },
      { strain: 'Golden Nugget' },
      { strain: 'Head Cheese' }
    ])
}