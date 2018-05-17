
var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

const SERVER_PORT = 8080;

mongoose.connect('mongodb://localhost/typingheroDB', function() {
  console.log("DB connection established!!!");
})

//design the two schema below and use sub docs 
//to define the relationship between posts and comments


// let commentSchema = new mongoose.Schema({
//     text: String,
//     user: String

// });

let statsSchema = new mongoose.Schema({
  mistakes: Number,
  time: Number
})

let lessonSchema = new mongoose.Schema({
  lessonNum: Number,
  text: String,
  stats: [statsSchema]
})



// let postSchema = new mongoose.Schema({
//     text: String,
//     comments:[commentSchema]

// });

// let Post = mongoose.model('post', postSchema)

let Lesson = mongoose.model("lesson", lessonSchema)


/////
// var Lesson = require('./models/lessonModel');
////

////

// var post1 = new Post({
//   text: "This is 1st post", 
//   comments:[{
//     user: "1st user", 
//     text: "This is 1st comment of the 1st user to 1st post"}]
//   })

//   var post2 = new Post({
//     text: "This is 2nd post", 
//     comments:[{
//       text: "2nd user", 
//       comments: "This is 1st comment of 2nd user to 2nd post"}]
//     })

var lesson1 = new Lesson({
  lessonNum: 1,
  text: "hhh ggg hhh ggg hhhh", 
  stats: []
})

var lesson2 = new Lesson({
  lessonNum: 2,
  text: "fff jjj f jf jjfj jfj jfj", 
  stats: []
})

var lesson3 = new Lesson({
  lessonNum: 3,
  text: "dk dk kdk kdkkdkdk dkdk kdkk kdk ", 
  stats: []
})

var lesson4 = new Lesson({
  lessonNum: 4,
  text: "ty ty ty ty t ty yyy tt yy ttt ", 
  stats: []
})

var lesson5 = new Lesson({
  lessonNum: 5,
  text: "Sass is an extension of CSS3", 
  stats: []
})

  // lesson1.save();
  // lesson2.save();
  // lesson3.save();
  // lesson4.save();
  // lesson5.save();

////
var app = express();
app.use(express.static('public'));
app.use(express.static('node_modules'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.get("/lessons", function(req,res){
  Lesson.find({}, function(err, lessons){
    if(err) console.log(err)
    res.json(lessons)
    console.log(lessons)
  })

})

app.get("/lessons/:lessonnum", function(req,res){
  lessonnum = req.params.lessonnum;
  Lesson.find({lessonNum:lessonnum}, function(err, lessons){
    if(err) console.log(err)
    res.json(lessons)
    console.log(lessons)
  })

})


app.post("/result/:lessonNum/stats", function(req,res){
  lessonNum = req.params.lessonNum
  newResult = {mistakes: req.body.mistakes, time:req.body.time }
  Lesson.update({lessonNum:lessonNum}, { $push: { stats: newResult }}, 
    function(err, result1) {
    if (err) throw err;
    else res.send(result1);
  });
})


// app.get("/posts", function(req,res){
//   Post.find({}, function(err, posts){
//     if(err) console.log(err)
//     res.json(posts)
//   })

// })

// app.post("/", function(req,res){
//   Post.create(req.body)
//   .then(function(newPost){
//     res.json(newPost)
//   }).catch(function(err){
//     res.send(err)
//   })
// })

// app.post("/posts", function(req,res){
//   // console.log('hey im here what was sent from client?')
//   // console.log(req.body);

//   Post.create(req.body)
//   .then(function(newPost){
//     res.json(newPost)
//   }).catch(function(err){
//     res.send(err)
//   })
// })


// You will need to create 5 server routes
// These will define your API:

// 1) to handle getting all posts and their comments
// 2) to handle adding a post
// 3) to handle deleting a post
// 4) to handle adding a comment to a post
// 5) to handle deleting a comment from a post

app.listen(SERVER_PORT, () => {
  console.log("Server started on port " + SERVER_PORT);
});
