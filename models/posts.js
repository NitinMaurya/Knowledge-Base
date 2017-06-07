/**
 * Created by nitin on 5/6/17.
 */

module.exports = function(sequelize,DataTypes) {
    var post = sequelize.define('post', {
        title: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 250]
            }
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: false,
            validate: {
                min : 1
            }
        },
        url:{
            type : DataTypes.STRING,
            allowNull : false,
            validate: {
                isUrl : true
            }
        }
    });
    return post;
};