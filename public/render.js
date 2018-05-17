/**
 * @class Responsible for rendering posts and comments in the HTML
 */
class PostsRenderer {
  constructor() {
    this.$report = $(".user-report");
    this.$reportTemplate = $('#report-template').html();
    this.$mistakeSum = document.getElementById('mistakes');

    this.mistakeSum = 0;
    this.secondsSum = 0;
    this.timer;
    this.dataArr = [];
    this.rightButton = 0;

  }

  //render first line of lesson after lesson select. 
  renderinitLesson(lessonsFromServer, lessonNumIndex) {
    this.rightButton = $("#keyboard").find("li");
    this.rightButton.css("background-color", "white");

    $(".lesson-text").empty();
    


    let text = lessonsFromServer[lessonNumIndex].text;
    this.dataArr = text.split("")
    let highlight = "<span style='color:red; font-size:50px; text-decoration: underline; '><strong>" + this.dataArr[0] + "</strong></span>"
    let output = "";
    output += highlight;
    for (let i = 1; i < this.dataArr.length; i++) {
      output += this.dataArr[i]
    }

    $(".lesson-text").append(output)

  }

  // render cursor move after use start typing 
  renderLesson(lessonsFromServer, lessonNumIndex) {

    let text = lessonsFromServer[lessonNumIndex].text
    this.dataArr = text.split("")
    let output = "";
    let y = 0;
    $(window).off("keypress")
    $(window).on("keypress", (e) => {

      let input = String.fromCharCode(e.which)
      output = "";
      if (input == this.dataArr[y]) {
        $(".lesson-text").empty();
        for (let i = 0; i < this.dataArr.length; i++) {
          if (y == i) {
            output += this.dataArr[i]
            if (this.dataArr[i + 1]) {
              let highlight = "<span style='color:red; font-size:50px; text-decoration: underline; ' ><strong>" + this.dataArr[i + 1] + "</strong></span>"
              output += highlight
            }
            i++;
          } else {
            if (this.dataArr[i]) {
              output += this.dataArr[i]
            }
          }
        }
        y++;
      } 
      else {
        this.mistakeSum += 1;
        this.$mistakeSum.innerText = `${this.mistakeSum}`;

        this.rightButton = $("#keyboard").find("li[data-id=" + this.dataArr[y].charCodeAt(0) + "]");
        this.rightButton.css("background-color", "#DAA520");

      }

      $(".lesson-text").append(output);

    })

  }

  renderReport(lessonsFromServer, lessonNumIndex) {

    var lessonArr = lessonsFromServer[lessonNumIndex]
    this.$report.empty();
    let template = Handlebars.compile(this.$reportTemplate);
    let newHTML = template(lessonArr);
    this.$report.append(newHTML);

  }

  renderTimer(lessonNum) {

    this.secondsSum = 0;
    var $timer = document.getElementById('time-sec');
    this.timer = setInterval(() => {
      this.secondsSum += 1;
      let time = new Date(this.secondsSum * 1000).toISOString().substr(11, 8)
      $timer.innerText = `${time}`;
    }, 1000);
  }

  stopTimer() {
    clearInterval(this.timer);
  }

  renewMistakes() {
    this.mistakeSum = 0;
    this.$mistakeSum.innerText = `${this.mistakeSum}`;
  }


}


export default PostsRenderer