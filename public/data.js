    import newApi from './api.js'
    
    /**
     * @class Responsible for rendering posts and comments in the HTML
     */
    class PostsRenderer {
      constructor() {
          this.lesson = []
          // this.$posts = $(".posts");
          // this.$postTemplate = $('#post-template').html();
          // this.$commentTemplate = $('#comment-template').html();
      }
      async initPage(){
          let answer = await newApi.fetch();
          this.lesson = answer;
          return this.lesson
      }
      async addLessons(lessonNum){
          var newLesson = [{lessonNum}]
          var answer = await $.ajax({
              method:"POST",
              url:'/home/',
              data:newLesson
          })
          this.lesson.push(answer)
      };
      setTime() {
        ++totalSeconds;
        secondsLabel.innerHTML = pad(totalSeconds % 60);
        minutesLabel.innerHTML = pad(parseInt(totalSeconds / 60));
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
  }

  
  export default PostsRenderer