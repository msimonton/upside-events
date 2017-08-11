var express = require('express');
var router = express.Router();
var knex = require('../db/knex');
var moment = require('moment');
var nodemailer = require("nodemailer");
const Users = require('../models/users');

// router.use((req, res, next) => {
//   if (req.session.user) {
//     next();
//   } else {
//     res.redirect('/');
//   }
// });
//
// function myAccountRequired(req, res, next) {
//   if (req.session.user.id.toString() === req.params.id) {
//     next();
//   } else {
//     res.redirect('/');
//   }
// }
//
//
// router.post('/signin', (req, res, next) => {
//   Users.authenticateUser(req.body.email, req.body.password, (err, user) => {
//     if (err) {
//       res.render('admin.hbs', {error: err});
//     } else {
//       req.session.user = user;
//       console.log(req.session);
//       res.redirect('/');
//     }
//   });
// });


function Messages() {
  return knex('messages');
}

function dateFormat() {
  moment()
}

router.post('/reply', function(req, res, next) {
  // Messages().insert({date_short: moment().format('ddd,  MMM Do'),
  //                   date_long: moment().format('ddd,  MMM Do h:ma'),
  //                   name: req.body.name,
  //                   email: req.body.email,
  //                   subject: req.body.subject,
  //                   topic: req.body.topic,
  //                   phoneNumber: req.body.phoneNumber,
  //                   message: req.body.message
  //    }).then(function() {

  var smtpTransport = nodemailer.createTransport({
     service: "Outlook",
     auth: {
         user: "masspm1021@outlook.com",
         pass: "Test12345"
     }
  });

  smtpTransport.sendMail({
     from: "masspm1021@outlook.com",
     to: req.body.rep_email,
     replyTo: 'marc.simonton@yahoo.com',
     subject: req.body.rep_subject,
     text: req.body.rep_message
  }, function(error, response){
     if(error){
         console.log(error);
     }else{
         console.log("Message sent to: "+req.body.rep_email);
     }
     smtpTransport.close();
  })
 res.redirect('/admin')
})

router.get('/login', function(req, res, next) {
  res.render('login.hbs')
})




// router.get('/admin', function(req, res, next) {
//   Messages().select()
//   .then(function (records) {
//     res.render('admin.hbs', {allMessages: records,
//     });
//   });
// });

router.get('/home', function(req, res, next) {
    res.redirect('/');

});

router.post('/messages', function(req, res, next) {
  Messages().insert({date_short: moment().format('ddd,  MMM Do'),
                    date_long: moment().format('ddd,  MMM Do h:ma'),
                    name: req.body.name,
                    email: req.body.email,
                    subject: req.body.subject,
                    topic: req.body.topic,
                    phoneNumber: req.body.phoneNumber,
                    message: req.body.message
     }).then(function() {

    // var smtpTransport = nodemailer.createTransport({
    //    service: "Outlook",
    //    auth: {
    //        user: "masspm1021@outlook.com",
    //        pass: "Test12345"
    //    }
    // });
    //
    // smtpTransport.sendMail({
    //    from: "masspm1021@outlook.com",
    //    to: "masspm1021@yahoo.com",
    //    replyTo: req.body.email,
    //    subject: req.body.topic +"| "+ req.body.subject,
    //    text: req.body.message
    // }, function(error, response){
    //    if(error){
    //        console.log(error);
    //    }else{
    //        console.log("Message sent");
    //    }
    //    smtpTransport.close();
    // })
   res.redirect('/#/connect')
  })
})


function deleteMessage(messID){
  return knex('messages').where('id', messID)
  .del()
}


router.get('/:id/delete', function(req, res,next){
  deleteMessage(req.params.id)
  .then(function()  {
  res.redirect('back');
})
.catch((err) => {
  console.error('Error caught in deleting post from DB')
  next(err)
})
})

router.get('/admin', function(req, res, next) {
  if (req.session.user.id !== 'undefined'){
    Messages().select()
    .then(function (records) {
      res.render('admin.hbs', {allMessages: records,
      });
    });
  }
  else {
    res.redirect('/')

};
})







// tests










module.exports = router;
