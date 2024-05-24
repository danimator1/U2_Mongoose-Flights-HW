const db = require('../db')
const { Airport } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const airports = [
    {
      name: 'Chicago Airport',
      location: 'Chicago, IL',
      code: 'ORD'
    },
    {
      name: 'Punta Gorda Airport',
      location: 'Punta Gorda, FL',
      code: 'PGD'
    },
    {
        name: 'Miami International Airport',
        location: 'Miami, FL',
        code: 'MIA'
    },
    {
        name: 'Boston Logan International Airport',
        location: 'Boston, MA',
        code: 'BOS'
    }
  ]
 
  await Airport.insertMany(airports)
  console.log('Created airports!')
}
const run = async () => {
  await main()
  db.close()
}

run()