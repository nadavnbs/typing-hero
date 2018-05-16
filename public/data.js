import postsRepository from "./main.js";

//     import newApi from './api.js'
    
//     /**
//      * @class Responsible for rendering posts and comments in the HTML
//      */
//     class PostsRenderer {
//       constructor() {
//           this.lesson = []
//           // this.$posts = $(".posts");
//           // this.$postTemplate = $('#post-template').html();
//           // this.$commentTemplate = $('#comment-template').html();
//       }
//       async initPage(){
//           let answer = await newApi.fetch();
//           this.lesson = answer;
//           return this.lesson
//       }
//       async addLessons(lessonNum){
//           var newLesson = [{lessonNum}]
//           var answer = await $.ajax({
//               method:"POST",
//               url:'/home/',
//               data:newLesson
//           })
//           this.lesson.push(answer)
//       };
//       setTime() {
//         ++totalSeconds;
//         secondsLabel.innerHTML = pad(totalSeconds % 60);
//         minutesLabel.innerHTML = pad(parseInt(totalSeconds / 60));
//         //for starting the time use: var time = setInterval(setTime,1000)
//         //for stoping the time use clearInterval(time)
//       }
//       pad(val) {
//         var valString = val + "";
//         if (valString.length < 2) {
//           return "0" + valString;
//         } else {
//           return valString;
//         }
//       }
//   }

  
//   export default PostsRenderer

/**
 * @class Responsible for storing and manipulating Spacebook posts, in-memory
 */
class PostsRepository {
    constructor() {
        this.lessons = [];
    }
  
      initLesson(){

         return $.get("/lessons") 
                  .then((lessonsFromServer) => {
                //   this.lessons = lessonsFromServer;
                //       return this.lessons
                    return lessonsFromServer
                  })
                  
                  ////////
                .catch(function (err) { res.send(err) })
      
                  
        
      }
        setTime(totalSeconds,secondsLabel,minutesLabel) {
         ++totalSeconds;
         secondsLabel = postsRepository.pad(totalSeconds % 60);
         minutesLabel = postsRepository.pad(parseInt(totalSeconds / 60));
        //for starting the time use: var time = setInterval(setTime,1000)
        //for stoping the time use clearInterval(time)
      }
      pad(val) {
        var valString = val + "";
        if (valString.length < 2) {
          return "0" + valString;
        } else {
          return valString;
        }
      }
      

      addPost(postText) {
        //send newPost via ajax post request to be saved in DB, inside the express file
        //ajax request to our server api

        return $.post("/posts", { text: postText })
            .then((newPost) => {
                this.posts.push(newPost);
            }
            )

        // this.posts.push({ text: postText, comments: [] });
    }

    removePost(index) {
        this.posts.splice(index, 1);
    }

    addComment(newComment, postIndex) {
        this.posts[postIndex].comments.push(newComment);
    };

    deleteComment(postIndex, commentIndex) {
        this.posts[postIndex].comments.splice(commentIndex, 1);
    };
}

export default PostsRepository