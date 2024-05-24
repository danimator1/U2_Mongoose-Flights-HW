const db = require('../db')
const { Airport, Flight } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const chicagoAirport = await Airport.find({ name: 'Chicago Airport' })
  const puntaGordaAirport = await Airport.find({ name: 'Punta Gorda Airport' })
  const miamiInternationalAirport = await Airport.find({ name: 'Miami International Airport' })
  const bostonLoganInternationalAirport = await Airport.find({ name: 'Boston Logan International Airport' })

  const flights = [
    {
       airline: 'Delta Airlines',
       flight_number: 1234,
       price: 299,
       numberOfSeats: 150,
       departingAirport: chicagoAirport[0]._id,
       arrivalAirport: puntaGordaAirport[0]._id,
    },
   {
       airline: 'British Airways',
       flight_number: 5678,
       price: 450,
       numberOfSeats: 200,
       departingAirport: puntaGordaAirport[0]._id,
       arrivalAirport: bostonLoganInternationalAirport[0]._id,
    },
    {
        airline: 'Japan Airlines',
        flight_number: 910,
        price: 850,
        numberOfSeats: 300,
        departingAirport: puntaGordaAirport[0]._id,
        arrivalAirport: chicagoAirport[0]._id,
    },
    {
        airline: 'Lufthansa',
        flight_number: 7890,
        price: 650,
        numberOfSeats: 250,
        departingAirport: puntaGordaAirport[0]._id,
        arrivalAirport: bostonLoganInternationalAirport[0]._id,
    },
    {
        airline: 'Singapore Airlines',
        flight_number: 123,
        price: 1200,
        numberOfSeats: 350,
        departingAirport: miamiInternationalAirport[0]._id,
        arrivalAirport: chicagoAirport[0]._id,
    },
    {
        airline: 'United Airlines',
        flight_number: 4567,
        price: 900,
        numberOfSeats: 180,
        departingAirport: puntaGordaAirport[0]._id,
        arrivalAirport: bostonLoganInternationalAirport[0]._id,
    },
    {
        airline: 'Spirit Airlines',
        flight_number: 789,
        price: 1100,
        numberOfSeats: 220,
        departingAirport: miamiInternationalAirport[0]._id,
        arrivalAirport: bostonLoganInternationalAirport[0]._id,
    },
  ]

  await Flight.insertMany(flights)
  console.log('Created books with airports!')
}
const run = async () => {
  await main()
  db.close()
}

run()