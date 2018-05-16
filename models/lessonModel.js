// // import { mongo } from 'mongoose';

// var mongoose = require('mongoose');

// //design the two schema below and use sub docs 
// //to define the relationship between posts and comments


// // let commentSchema = new mongoose.Schema({
// //     text: String,
// //     user: String

// // });

// let statsSchema = new mongoose.Schema({
//   mistakes: Number,
//   time: Number
// })

// let lessonSchema = new mongoose.Schema({
//   lessonNum: Number,
//   text: String,
//   stats: [statsSchema]
// })



// // let postSchema = new mongoose.Schema({
// //     text: String,
// //     comments:[commentSchema]

// // });

// // let Post = mongoose.model('post', postSchema)

// let Lesson = mongoose.model("lesson", lessonSchema)


// module.exports = Lesson

// import { mongo } from 'mongoose';

var mongoose = require('mongoose');

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


module.exports = Lesson