const BookSchema =  (sequelize, DataTypes) => {
    const BookTable = sequelize.define('Book', {
        title: DataTypes.STRING,
        author: DataTypes.STRING,
        pageQuantity: DataTypes.INTEGER
      }, {
        sequelize,
        modelName: 'Book',
      });
  return BookTable;
};

module.exports = BookSchema;