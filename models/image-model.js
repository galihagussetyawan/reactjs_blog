module.exports = (sequelize, DataTypes) => {

    const Image = sequelize.define("images", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        type: {
            type: DataTypes.STRING
        },
        name: {
            type: DataTypes.STRING
        },
        data: {
            type: DataTypes.STRING
        }
    });

    return Image;
};