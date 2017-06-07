/**
 * Created by Nitin Maurya on 5/6/17.
 */
var env = process.env.NODE_ENV || 'development' ;
var Sequelize = require ('sequelize');
var sequelize;
if(env === 'production'){
    sequelize = new Sequelize(process.env.DATABASE_URL,{
        dialect : 'postgres'
    });
}
else {
    sequelize = new Sequelize(undefined,undefined,undefined,{
        'dialect' : 'sqlite' ,
        'storage' : __dirname + '/data/dev-database.sqlite'
    });
}
var db = {};
db.posts = sequelize.import(__dirname + '/models/posts.js');
db.user = sequelize.import(__dirname+ '/models/users.js');
db.token = sequelize.import(__dirname + '/models/tokens.js');
db.comments = sequelize.import( __dirname + '/models/comments.js');
db.sequelize = sequelize;
db.Sequelize = Sequelize ;

//Defining Associations
db.posts.belongsTo(db.user);
db.user.hasMany(db.posts);

db.comments.belongsTo(db.posts);
db.posts.hasMany(db.comments);

db.comments.belongsTo(db.user);
db.user.hasMany(db.comments);


module.exports = db ;