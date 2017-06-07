/**
 * Created by nitin on 6/6/17.
 */


module.exports = function(sequelize,DataTypes) {
    var comment = sequelize.define('comment', {
        description: {
            type: DataTypes.TEXT,
            allowNull: false,
            validate: {
                min: 1
            }
        }
    });
    return comment;
};
