    /**
     * @class Responsible for rendering posts and comments in the HTML
     */
    class PostsRenderer {
      constructor() {
          this.$report = $(".user-report");
          this.$reportTemplate = $('#report-template').html();
          // this.$commentTemplate = $('#comment-template').html();
      }
      reportRender(report){
        this.$report.empty();
        let template = Handlebars.compile(this.$reportTemplate);
        let newHTML = template(report)
        this.$report.append(newHTML);
      }
  }
  export default PostsRenderer