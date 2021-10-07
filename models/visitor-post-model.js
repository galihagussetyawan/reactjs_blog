module.exports = (sequelize, Sequelize) => {
    const VisitorPost = sequelize.define("visitor_post", {
        visitor: {
            type: Sequelize.INTEGER,
            defaultValue: 0
        }
    });

    return VisitorPost;
};