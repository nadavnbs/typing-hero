/**
    * @class Responsible for rendering posts and comments in the HTML
    */
class PostsRenderer {
  constructor() {
    this.$posts = $(".posts");
    this.$postTemplate = $('#post-template').html();
    this.$commentTemplate = $('#comment-template').html();
  }

  //render first line of lesson after lesson select. 
  renderinitLesson(lessonsFromServer, lessonNumIndex) {

    var text = lessonsFromServer[lessonNumIndex].text; // mock data
    var dataArr = text.split("") // mock data
    let highlight = "<span style='color:red'><strong>" + dataArr[0] + "</strong></span>"
    var output = "";
    output += highlight;
    for (let i = 1; i < dataArr.length; i++) {
      output += dataArr[i]
    }

    $(".lesson-text").append(output)
    return text

  }
  // render cursor move after use start typing 
  renderLesson(lessonsFromServer, lessonNumIndex) {

    var text = lessonsFromServer[lessonNumIndex].text
    var dataArr = text.split("")
    var output = "";
    // var text = "gh gh gh gh ggg hhh ggg hhh ggg hhh"; // mock data
    let y = 0;
    $(window).on("keypress", function (e) {

      let input = String.fromCharCode(e.which)
      output = "";
      if (input == dataArr[y]) {
        $(".lesson-text").empty();
        for (let i = 0; i < dataArr.length; i++) {
          if (y == i) {
            output += dataArr[i]
            let highlight = "<span style='color:red'><strong>" + dataArr[i + 1] + "</strong></span>"
            output += highlight
            i++;
          } else {
            if (dataArr[i]) {
              output += dataArr[i]
            }
          }

        }
        y++;
      }
      else {
        var rightButton = $("#keyboard").find("li[data-id=" + dataArr[y] + "]");
        rightButton.css("background-color", "yellow");
      }
      $(".lesson-text").append(output);

    })


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