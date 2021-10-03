module.exports = (sequelize, Sequelize) => {
    const Post = sequelize.define("posts", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        title: {
            type: Sequelize.STRING(75)
        },
        published: {
            type: Sequelize.BOOLEAN
        },
        publishedAt: {
            type: Sequelize.DATE
        },
        content: {
            type: Sequelize.TEXT
        }
    });
    return Post;
};