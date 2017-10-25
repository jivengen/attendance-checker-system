//mongodb://cidm4382:cidm4382@ds064198.mlab.com:64198/cidm4382teststuff


var mongoose = require('mongoose');
var express = require('express');
var router = express.Router();

var connectionstring = "mongodb://cidm4382:cidm4382@ds064198.mlab.com:64198/cidm4382teststuff";
mongoose.connect(connectionstring, { useMongoClient: true });

mongoose.Promise = global.Promise;



var studentSchema = new mongoose.Schema({
    buffID: String,
    firstName: String,
    lastName: String
});

var student = mongoose.model('Student', studentSchema);


router.get('/add-random-student', function(req,res,next){
  
  var rand = new Student(
      {
        
          buffID: '0123456',
          firstName: 'Random',
          lastName: 'Student'
      }
    );
      rand.save(function (err) {
        if (err) {
          console.log(err);
        } else {
          console.log('The student is saved in the db');
        }
    });
  
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/greeting', function(req, res, next) {
    res.send('Hello, I am greeting you');
});

router.get('/greeting2', function(req,res,next){
  res.send("Hello, I greet you again");
});


module.exports = router;
