/**
 * Created by Nitin Maurya on 5/6/17.
 */
var express =  require ('express');
var bcrypt = require('bcrypt');
var bodyParser = require ('body-parser');
var _ = require('underscore');
var db = require ('./db.js');
var middleware = require('./middleware.js')(db);


var app = express();

var port = process.env.PORT || 8000;

app.use(bodyParser.json());

/*
-----------------------------------------------------------------------------------------------------------
    GET REQUESTS
-----------------------------------------------------------------------------------------------------------
*/

//Get all Posts
app.get ('/posts', function (req,res){
    db.posts.findAll({
                where: {
                    id: {
                        ne: null
                    }
                }
            }).then(function (posts) {
                res.json(posts);
            }, function (e) {
                res.status(500).send();
            });
});


//get all comments related to post
app.get ('/comments/:id', function (req,res){
    var postId = parseInt(req.params.id,10);
    db.comments.findAll({
        where: {
            postId: postId
        }
    }).then(function (posts) {
        res.json(posts);
    }, function (e) {
        res.status(500).send();
    });
});


//Get User
app.get('/users/:id',middleware.requireAuthentication, function(req, res) {
    var userId = parseInt(req.params.id,10);
    if(userId != req.user.id){
        res.status(401).send();
    }
    else{
        return db.user.findOne({
            where : {
                id : userId
            },
            include: [
                {
                    model: db.posts,
                    include: [
                        {
                            model: db.comments
                        }
                    ]
                }
            ]
        }).then(function(user){
            res.json(user.toJSON());
        });
    }

});

/*
-------------------------------------------------------------------------------------------------------------
    POST REQUESTS
-------------------------------------------------------------------------------------------------------------
*/
//Submit posts
app.post ('/posts',middleware.requireAuthentication,function (req,res){
    var body = _.pick(req.body,'description','title','url');
    db.posts.create(body).then(function (post){
        req.user.addPosts(post).then(function (){
            return post.reload();
        }).then (function (post){
            res.json(post.toJSON());
        });
    },function (e){
        res.status(400).json(e);
    });

});

//Add users
app.post('/users',function (req,res) {
    var body = _.pick(req.body, 'email', 'password');
    db.user.create(body).then(function (user){
        res.json(user.toPublicJSON());
    },function (e){
        res.status(400).json(e);
    });
});

//Authenticate Users
app.post('/users/login',function(req,res){
    var body = _.pick(req.body , 'email' , 'password');
    var userInstance;
    db.user.authenticate(body).then(function (user){
        var token = user.generateToken('authentication');
        userInstance = user;
        return db.token.create({
            token : token
        });

    }).then (function (tokenInstance){
        res.header('Auth',tokenInstance.get('token')).json(userInstance.toPublicJSON());

    }).catch(function (e){
        console.log(e);
        res.status(401).send();
    });
});

//Submit comments
app.post ('/comments/:id',function (req,res){
    var body = _.pick(req.body,'description');
    db.comments.create(body).then(function (comment) {
                req.user.addComments(comment).then(function () {
                    return comment.reload();
                });
            }).then(function (comment) {
                res.json(comment.toJSON());
            },function (e) {
                console.log(e);
                res.status(400).json(e);
            });

    });

/*
-------------------------------------------------------------------------------------------------------
    START SERVER
-------------------------------------------------------------------------------------------------------
*/



db.sequelize.sync().then(function(){
 app.listen(port,function(){
 console.log('Server is running at port ' + port + '....');
 });
});
