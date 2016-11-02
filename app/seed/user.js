var User = require('../models/userModel').model;

module.exports = function(){

  User.findOne(function(err,usr){

    if( !usr ){

      const users = [{
        'username':'adminuser1',
        'firstName':'John',
        'lastName':'Admin',
        'email':'developertestbed@gmail.com',
        'role2': ['admin'],
        'password': '123456'
      }, {
        'username':'employee1',
        'firstName':'John',
        'lastName':'Employee',
        'email':'developertestbed@gmail.com',
        'roles': ['employee'],
        'password': '123456'
      }, {
        'username':'customer1',
        'firstName':'John',
        'lastName':'Customer',
        'email':'developertestbed@gmail.com',
        'roles': ['customer'],
        'password': '123456'
      }, {
        'username':'broker1',
        'firstName':'John',
        'lastName':'Broker',
        'email':'developertestbed@gmail.com',
        'roles': ['broker'],
        'password': '123456'
      }];


      for( u in users ) {
        let user = new User(users[u]);
        user.save((err, doc) => {
          if(!err){
            console.log('CREATING USER:  ', doc);
          }
        });
      }
    }
  });
};
