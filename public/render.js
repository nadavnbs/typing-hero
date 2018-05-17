// import { Stats } from "fs";

/**
 * @class Responsible for rendering posts and comments in the HTML
 */
class PostsRenderer {
  constructor() {
    this.$report = $(".user-report");
    this.$reportTemplate = $('#report-template').html();
    // this.$commentTemplate = $('#comment-template').html();
  }
  reportRender() {
    this.lessons.empty();
    let template = Handlebars.compile(this.$stats);
    // let context = {mistakes:18,time:1800};
    for (let i = 0; i < lessons.length; i++) {
      let newHTML = template(lessons[i]);
      console.log(newHTML);
      this.lessons.append(newHTML);
      //       this.render(lessons, i);
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