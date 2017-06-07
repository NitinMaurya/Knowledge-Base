/**
 * Created by Nitin Maurya on 5/6/17.
 */
var crypto = require('crypto-js');
module.exports = function (db) {
     return {
         requireAuthentication : function (req,res,next){
             var token = req.get('Auth') || ' ';

            db.token.findOne({
                where : {
                    hashedToken: crypto.MD5(token).toString()
                }
            }).then (function (tokenInstance){
                if(!tokenInstance){
                    throw new Error;
                }
                req.token = tokenInstance;
                return db.user.findByToken(token);
            }).then (function (user){
                req.user = user;
                next();
            }).catch(function (e){
                console.log (e);
              res.status(401).send();
            });
         }
     };

};