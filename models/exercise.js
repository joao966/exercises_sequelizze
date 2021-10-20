module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define('exercises', {
    name: DataTypes.STRING,
    tecnologia: DataTypes.STRING,
    duracao: DataTypes.STRING
  });


  return Product;
};