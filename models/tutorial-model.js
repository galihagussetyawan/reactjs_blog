module.exports = (sequelize, DataTypes) => {
    const Tutorial = sequelize.define("tutorials", {
        title: {
            type: DataTypes.STRING
        },
        description: {
            type: DataTypes.STRING
        }
    })

    return Tutorial;
};