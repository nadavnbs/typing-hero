class EventsHandler {
  constructor(postsRepository, postsRenderer) {
    this.postsRepository = postsRepository;
    this.postsRenderer = postsRenderer;
    // this.$posts = $(".posts");
  }


  registerLessonStart() {

    $("h1").on("click", () => {
      let lessonNum = 1 //$(this).data().id
      let lessonNumIndex = lessonNum - 1;
      this.postsRepository.initLesson(lessonNumIndex)
        .then((lessonsFromServer) => { this.postsRenderer.renderinitLesson(lessonsFromServer, lessonNumIndex) })
      // .then((text)=> {this.registerKey(text)}) 
    })

  }

  registerKey() {

    $("h1").on("click", () => {
      let lessonNum = 1 //$(this).data().id
      let lessonNumIndex = lessonNum - 1;
      this.postsRepository.initLesson(lessonNumIndex)
      
        .then((lessonsFromServer) => {
          this.postsRenderer.renderLesson(lessonsFromServer, lessonNumIndex)
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