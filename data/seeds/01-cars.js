// STRETCH
const cars = [
    {
        vin: '1FASP11J6TW112004',
        make: "toyota",
        model: "prius",
        mileage: 215000,
        title: "clean",
        transmission: "manual",
    },
    {
        vin: '3D7KU28C63G798405',
        make: "toyota",
        model: "corolla",
        mileage: 115000,
        title: "salvage",
    },
    {
        vin: '5FNRL384X7B133819',
        make: "ford",
        model: "focus",
        mileage: 15000,
    },
]

// exports.seed = function(knex) {
//     return knex('cars')
//     .truncate().then(() => {
//         return knex('cars').insert(cars)
//     })
// }

exports.seed = async function(knex) {
    await knex('cars').truncate()
    await knex('cars').insert(cars)
}
