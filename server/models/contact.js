'use strict';
module.exports = (sequelize, DataTypes) => {
  const contact = sequelize.define('contact', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    number: DataTypes.STRING
  }, {});
  contact.associate = function(models) {
    // associations can be defined here
  };
  return contact;
};