export default (sequelize, Sequelize) => {
  const Producer = sequelize.define('Producers', {
    FirstName: {
      type: Sequelize.STRING
    },
    LastName: {
      type: Sequelize.STRING
    },
    ProducerId: {
      type: Sequelize.STRING,
      primaryKey: true
    },
    Mail: {
      type: Sequelize.STRING
    },
    Password: {
      type: Sequelize.STRING
    },
    PhoneNumber: {
      type: Sequelize.STRING
    },
    CompanyName: {
      type: Sequelize.STRING
    },
    Address: {
      type: Sequelize.STRING
    },
    BioFieldset: {
      type: Sequelize.STRING
    }
  }, { timestamps: false })
  return Producer
}
