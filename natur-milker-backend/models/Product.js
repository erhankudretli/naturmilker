export default (sequelize, Sequelize) => {
  const Product = sequelize.define('Products', {
    Name: {
      type: Sequelize.STRING
    },
    Explanation: {
      type: Sequelize.STRING
    },
    ProductId: {
      type: Sequelize.STRING,
      primaryKey: true
    },
    Price: {
      type: Sequelize.STRING
    },
    Canton: {
      type: Sequelize.STRING
    },
    Address: {
      type: Sequelize.STRING
    },
    ProductType: {
      type: Sequelize.STRING
    }
  }, { timestamps: false })
  return Product
}
