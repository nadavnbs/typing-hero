// class EventsHandler {
//     constructor(postsRepository, postsRenderer) {
//         // this.postsRepository = postsRepository;
//         // this.postsRenderer = postsRenderer;
//         // this.$posts = $(".posts");
//     }
  
//   initLesson(){
//       var text = "gh gh gh gh ggg hhh ggg hhh ggg hhh"; // mock data
//       var dataArr= text.split("") // mock data
//     let highlight = "<span style='color:blue'>"+dataArr[0]+"</span>"
//     var output="";
//     output +=highlight;
//     for(let i=1; i<dataArr.length; i++){
//       output+=dataArr[i]
//     }
//     $(".paragraph").append(output)
//   }
  
  
  
//   registerKey(){
//       // onkeypress e.which 
  
//   // var input = "r" // mock data
//   var output="";
  
  
//   var text = "gh gh gh gh ggg hhh ggg hhh ggg hhh"; // mock data
//   var dataArr= text.split("") 
  
//   // function initData(){
//   //   let highlight = "<span style='color:blue'>"+dataArr[0]+"</span>"
//   //   output+=highlight
//   //   for(let i=1; i<dataArr.length; i++){
      
//   //     output+=dataArr[i]
//   //   }
//   //   $(".paragraph").append(output)
//   // }
  
//   // initData();
//   let y=0;
//   $(window).on("keypress", function(e){
//     let input = String.fromCharCode(e.which)
//     output="";
//     initLesson()
//   if (input == dataArr[y]){
//     $(".paragraph").empty();
//     for(let i=0; i<dataArr.length; i++){
     
//             if (y==i){
//               output+=dataArr[i]
//               let highlight = "<span style='color:blue'>"+dataArr[i+1]+"</span>"
//               output+=highlight
//               i++;
//             } else {
//               if (dataArr[i]){
//                 output+=dataArr[i]
//               }
//             }
             
//       }
//           y++;
//   }
//   $(".paragraph").append(output);
  
//   })
//   }
  
  
  
  
  
//     registerAddPost() {
//         // $('#addpost').on('click', () => { //async()=>{}
//             // let $input = $("#postText");
//             // if ($input.val() === "") {
//             //     alert("Please enter text!"); 
//             // } else {
//             //     this.postsRepository.addPost($input.val()) //await
//             //     .then(()=> 
  
//             //     this.postsRepository.initialData().then((postFrompostreporsitory)=>{
  
//             //         this.postsRenderer.renderPosts(postFrompostreporsitory);
//             //       })
                  
                
//             // );
                
//             // }
//             // });        
//     }
  
    
//   }
  
//   export default EventsHandler
import postsRepository from './main.js'
import postsRenderer from './main.js'
import { Stats } from 'fs';
class EventsHandler {
    constructor(postsRepository, postsRenderer) {
      this.postsRepository = postsRepository;
      this.postsRenderer = postsRenderer;
      // this.$posts = $(".posts");
    }
  
  
    registerLessonStart() {
  
      $(".lesson-opt").on("mousedown", () => {
        var totalSeconds = 0;
        var secondsLabel = $("#time-sec");
        var minutesLabel = $("#time-min")
        var time = setInterval(postsRepository.setTime(),1000)
        
        let lessonNum = 1 //$(this).data().id
        let lessonNumIndex = lessonNum - 1;
        this.postsRepository.initLesson(lessonNumIndex).then((lessonsFromServer) => { this.postsRenderer.renderinitLesson(lessonsFromServer, lessonNumIndex) 
            this.postsRenderer.reportRender(Stats)})
        // .then((text)=> {this.registerKey(text)}) 
      })
  
    }
  
    registerKey() {
  
      $(".lesson-opt").on("click", () => {
        let lessonNum = 1 //$(this).data().id
        let lessonNumIndex = lessonNum - 1;
        this.postsRepository.initLesson(lessonNumIndex).then((lessonsFromServer) => {
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