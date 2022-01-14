import Sequelize from 'sequelize'
import dbConfig from '../environment-config.json'
import ProductModel from './Product.js'
import ProducerModel from './Producer.js'


const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,
  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
})

const db = {}


db.Sequelize = Sequelize
db.sequelize = sequelize


db.products = ProductModel(sequelize, Sequelize)
db.producer = ProducerModel(sequelize, Sequelize)

// create relationships
// has-to-many relationships

db.producer.hasMany(db.products, {
  foreignKey: 'ProducerId'
})
db.products.belongsTo(db.producer)

// use it to force to create the db from scratch 
// .sync({ force: true })

db.sequelize.sync().then(() => {
  console.log('Drop and re-sync db.')
})

export default db
