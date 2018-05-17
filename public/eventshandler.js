class EventsHandler {
    constructor(postsRepository, postsRenderer) {
        // this.postsRepository = postsRepository;
        // this.postsRenderer = postsRenderer;
        // this.$posts = $(".posts");
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

    clickingButton() {
        
        $(document).on("keypress", function (e) {
            var letter = e.which;
            
            var element = $("#keyboard").find("li[data-id=" + letter + "]");
            $(document).keydown(function () {
                element.css("background-color", "white");
            });
            $(document).keyup(function () {
                element.css("background-color", "green");
                setTimeout(function () {
                    element.css("background-color", "white");
                    $(document).off('keyup keydown');
                }, 100);
            });
            
        })
        
    }
}

export default EventsHandler