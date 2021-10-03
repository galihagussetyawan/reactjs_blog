const config = require("../config/db-config");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(
  config.DATABASE,
  config.USER,
  config.PASSWORD,
  {
    host: config.HOST,
    dialect: config.dialect,
    operatorsAliases: false,

    pool: {
      max: config.pool.max,
      min: config.pool.min,
      acquire: config.pool.acquire,
      idle: config.pool.idle
    }
  }
);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.user = require("../models/user-model")(sequelize, Sequelize);
db.role = require("../models/role-model")(sequelize, Sequelize);
db.post = require("../models/post-model")(sequelize, Sequelize);
db.category = require("../models/category-model")(sequelize, Sequelize);
db.images = require("../models/image-model")(sequelize, Sequelize);
db.visitors = require("../models/visitor-model")(sequelize, Sequelize);
db.visitorPost = require("../models/visitor-post-model")(sequelize, Sequelize);

//db test
db.tutorial = require("../models/tutorial-model")(sequelize, Sequelize);
db.comment = require("../models/comment-model")(sequelize, Sequelize);

//Constraint user_roles
db.role.belongsToMany(db.user, {
  through: "user_roles",
  foreignKey: "roleId",
  otherKey: "userId"
});
db.user.belongsToMany(db.role, {
  through: "user_roles",
  foreignKey: "userId",
  otherKey: "roleId"
});

//constraint post_category
db.category.hasMany(db.post);
db.post.belongsTo(db.category, {
  foreignKey: "categoryId"
})

// foreign key post_image
db.images.belongsToMany(db.post, {
  through: "post_images",
  foreignKey: "imagesId",
  otherKey: "postId"
});

db.post.belongsToMany(db.images, {
  through: "post_images",
  foreignKey: "postId",
  otherKey: "imagesId"
});

//visitor
db.post.hasMany(db.visitors);
db.visitors.belongsTo(db.post, {
  foreignKey: "postId"
});

//visitor post
db.post.hasOne(db.visitorPost);
db.visitorPost.belongsTo(db.post, {
  foreignKey: "postId",
  targetKey: "id"
})


//test ascotiations
db.comment.belongsToMany(db.tutorial, {
  through: "tutorial_comment",
  foreignKey: "commentId"
});

db.tutorial.belongsToMany(db.comment, {
  through: "tutorial_comment",
  foreignKey: "tutorialId"
});




db.ROLES = ["subscriber", "admin"];

module.exports = db;