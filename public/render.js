    /**
     * @class Responsible for rendering posts and comments in the HTML
     */
    class PostsRenderer {
      constructor() {
          this.$posts = $(".posts");
          this.$postTemplate = $('#post-template').html();
          this.$commentTemplate = $('#comment-template').html();
      }
  

      renderinitLesson(lessonsFromServer, lessonNumIndex){
          
        
            ////////
            var text = lessonsFromServer[lessonNumIndex].text; // mock data
            var dataArr= text.split("") // mock data
          let highlight = "<span style='color:blue'>"+dataArr[0]+"</span>"
          var output="";
          output +=highlight;
          for(let i=1; i<dataArr.length; i++){
            output+=dataArr[i]
          }

          $(".paragraph").append(output)

          
      }



      // renderPosts(posts) {
  
      //       this.$posts.empty();
      //       let template = Handlebars.compile(this.$postTemplate);
      //       for (let i = 0; i < posts.length; i++) {
      //         let newHTML = template(posts[i]);
      //         console.log(newHTML);
      //         this.$posts.append(newHTML);
      //         this.renderComments(posts, i);
      //       }

      // }
  
      // renderComments(posts, postIndex) {
      //     let post = $(".post")[postIndex];
      //     let $commentsList = $(post).find('.comments-list');
      //     $commentsList.empty();
      //     let template = Handlebars.compile(this.$commentTemplate);
      //     for (let i = 0; i < posts[postIndex].comments.length; i++) {
      //       let newHTML = template(posts[postIndex].comments[i]);
      //       $commentsList.append(newHTML);
      //     }
      // }
  }
  
  export default PostsRenderer