/**
 * @class Responsible for rendering posts and comments in the HTML
 */
class PostsRenderer {
  constructor() {
    this.$report = $(".user-report");
    this.$reportTemplate = $('#report-template').html();
    
    this.mistakeSum=0;
    this.secondsSum=0;
   
  }

  //render first line of lesson after lesson select. 
  renderinitLesson(lessonsFromServer, lessonNumIndex) {
    $(".lesson-text").empty();
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
    $(window).on("keypress", (e)=> {

      let input = String.fromCharCode(e.which)
      output = "";
      if (input == dataArr[y]) {
        $(".lesson-text").empty();
        for (let i = 0; i < dataArr.length; i++) {
          if (y == i) {
            output += dataArr[i]
            if (dataArr[i + 1]) {
              let highlight = "<span style='color:red'><strong>" + dataArr[i + 1] + "</strong></span>"
              output += highlight
            }

            i++;
          } else {
            if (dataArr[i]) {
              output += dataArr[i]
            }
          }

        }
        y++;
      } // end of if statement
      else { 

        // Counting mistakes
        // this.postsRepository.mistakeSum(1)
        // alert(postsRenderer.mistake);
        this.mistakeSum++;
        
      
        // var $mistakeSum = document.getElementById('mistakes');
        // $mistakeSum.innerText = `${mistakeSum}` ;
      }

      $(".lesson-text").append(output);

    })


  }

  renderReport(lessonsFromServer, lessonNumIndex){
   
    // var lessonArr =   {somename:lessonsFromServer[lessonNumIndex]}
    var lessonArr = lessonsFromServer[lessonNumIndex]
    // console.log(lessonArr);
    this.$report.empty();
    let template = Handlebars.compile(this.$reportTemplate);
    // for (let i = 0; i < lessonsFromServer.length; i++) {
      let newHTML = template(lessonArr);
      // console.log(newHTML);
      this.$report.append(newHTML);
      // this.renderComments(posts, i);
    // }



  }



  renderTimer(lessonNum) {
    
    var $timer = document.getElementById('time-sec');

    var cancel = setInterval(()=>{
      this.secondsSum += 1;
      $timer.innerText = `${this.secondsSum}` ;
    }, 1000);


  }

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
  

export default PostsRenderer