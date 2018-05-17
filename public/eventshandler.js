class EventsHandler {
  constructor(postsRepository, postsRenderer) {
    this.postsRepository = postsRepository;
    this.postsRenderer = postsRenderer;
    this.lessonNum;
    this.element;
  
  }

  registerLessonStart() {
   
    $(".lesson-opt").on("mousedown", (ev)=>{
    this.clickingButton();
    this.postsRenderer.mistakeSum=0;
    this.postsRenderer.dataArr = [];
    this.postsRenderer.stopTimer();
     this.postsRenderer.renewMistakes();
     this.lessonNum = $(ev.currentTarget).data().id
      let lessonNumIndex = this.lessonNum - 1;
      this.postsRepository.initLesson(lessonNumIndex)
        .then((lessonsFromServer) => { this.postsRenderer.renderinitLesson(lessonsFromServer, lessonNumIndex) })
    })

  }

  registerKey() {

    $(".lesson-opt").on("mousedown", (ev) => {
      this.lessonNum = $(ev.currentTarget).data().id
      let lessonNumIndex = this.lessonNum - 1;
      this.postsRepository.initLesson(lessonNumIndex)
      
        .then((lessonsFromServer) => {
          this.postsRenderer.renderLesson(lessonsFromServer, lessonNumIndex)
        })
        })
    
      }

  startTimer(){
    $(".lesson-opt").on("mousedown", (ev) => {
      this.lessonNum = $(ev.currentTarget).data().id
      this.postsRenderer.renderTimer(this.lessonNum)
     
    })}


    clickingButton() {
      this.element = 0;
      $(document).on("keypress", (e)=>{
          let letter = e.which;
          
          this.element = $("#keyboard").find("li[data-id=" + letter + "]");
          $(document).keydown(()=>{
            this.element.css("background-color", "white");
          });
          $(document).keyup(()=>{
            this.element.css("background-color", "#218838");
              setTimeout(()=>{
                this.element.css("background-color", "white");
                  $(document).off('keyup keydown');
              }, 100);
          });
          
      })
      
  }






  
  submitResult(){
    $(".submit-button").on("mousedown", (ev) => {
      this.postsRenderer.stopTimer();

      let newResult = {mistakes:this.postsRenderer.mistakeSum, time:this.postsRenderer.secondsSum  }
      this.postsRepository.addResult(newResult, this.lessonNum)
      
      //printing Report 
      let lessonNumIndex = this.lessonNum - 1;
      this.postsRepository.initLesson(lessonNumIndex)
      
      .then((lessonsFromServer) => {
        
        this.postsRenderer.renderReport(lessonsFromServer, lessonNumIndex)
      })

    })
  }
}


export default EventsHandler