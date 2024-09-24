const Users = require('./Users');
const Posts = require('./Posts');
const Comments = require('./Comments');

Posts.belongsTo(Users, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

Posts.hasMany(Comments, {
    foreignKey: 'post_id',
    onDelete: 'CASCADE'
});

Comments.belongsTo(Users, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

module.exports = { Users, Posts, Comments };