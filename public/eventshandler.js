class EventsHandler {
  constructor(postsRepository, postsRenderer) {
    this.postsRepository = postsRepository;
    this.postsRenderer = postsRenderer;
    this.lessonNum;
    // this.$posts = $(".posts");
  }


  registerLessonStart() {

    $(".lesson-opt").on("mousedown", (ev)=>{
     this.lessonNum = $(ev.currentTarget).data().id
      let lessonNumIndex = this.lessonNum - 1;
      this.postsRepository.initLesson(lessonNumIndex)
        .then((lessonsFromServer) => { this.postsRenderer.renderinitLesson(lessonsFromServer, lessonNumIndex) })
      // .then((text)=> {this.registerKey(text)}) 
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
      // this.postsRenderer.mistake();
    })}




  submitResult(){
    $(".submit-button").on("mousedown", (ev) => {
     
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

  
  

    






  registerAddPost() {
    // $('#addpost').on('click', () => { //async()=>{}
    // let $input = $("#postText");
    // if ($input.val() === "") {
    //     alert("Please enter text!"); 
    // } else {
    //     this.postsRepository.addPost($input.val()) //await
    //     .then(()=> 

    //     this.postsRepository.initialData().then((postFrompostreporsitory)=>{

    //         this.postsRenderer.renderPosts(postFrompostreporsitory);
    //       })


    // );

    // }
    // });        
  }

}


export default EventsHandler