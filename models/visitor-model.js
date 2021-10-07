module.exports = (sequelize, Sequelize) => {
    const Visitors = sequelize.define("visitors", {
        ip_address: {
            type: Sequelize.STRING(15),
            allowNull: false
        },
        country_code: {
            type: Sequelize.STRING(5)
        },
        country_name: {
            type: Sequelize.STRING(90)
        },
        city: {
            type: Sequelize.STRING
        },
        state: {
            type: Sequelize.STRING
        },
        in_time: {
            type: Sequelize.DATE,
            defaultValue: Sequelize.NOW
        },
        out_time: {
            type: Sequelize.DATE,
            defaultValue: Sequelize.NOW
        },
        page: {
            type: Sequelize.STRING
        },
        os: {
            type: Sequelize.STRING
        }
    });

    return Visitors;
}