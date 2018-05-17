/**
 * @class Responsible for storing and manipulating Spacebook posts, in-memory
 */
class PostsRepository {
    constructor() {
        this.lessons = [];
        this.mistakeSum = 0;
    }
  
      initLesson(){

         return $.get("/lessons") 
                  .then((lessonsFromServer) => {
                //   this.lessons = lessonsFromServer;
                //       return this.lessons
                    return lessonsFromServer
                  })
                  
                 
                .catch(function (err) { res.send(err) })
      
                  
        
      }

      addResult(newResult, lessonNum){
          $.post("/result/"+lessonNum+"/stats", newResult)
          .then(     )


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

     