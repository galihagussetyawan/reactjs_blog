module.exports = (sequelize, Sequelize) => {
    const Category = sequelize.define("category", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true
        },
        category_name: {
            type: Sequelize.STRING(75)
        }
    });
    return Category;
};