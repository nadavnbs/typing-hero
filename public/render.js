import { Stats } from "fs";

    /**
     * @class Responsible for rendering posts and comments in the HTML
     */
    class PostsRenderer {
      constructor() {
          this.$report = $(".user-report");
          this.$reportTemplate = $('#report-template').html();
          // this.$commentTemplate = $('#comment-template').html();
      }
      reportRender(Stats){
        this.$stats.empty();
        let template = Handlebars.compile(this.$reportTemplate);
        for(let i = 0;i<Stats.length;i++){
          let newHTML = template(Stats[i])
          this.$stats.append(newHTML);
        }
      }
  }
//   renderPosts(posts) {
//     this.$posts.empty();
//     let template = Handlebars.compile(this.$postTemplate);
//     for (let i = 0; i < posts.length; i++) {
//       let newHTML = template(posts[i]);
//     //   console.log(newHTML);
//       this.$posts.append(newHTML);
//       this.renderComments(posts, i);
//     }
// }
  export default PostsRenderer