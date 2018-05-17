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
        //var initDoc = $.extend({}, document);
        //var tempDoc = $(document).clone();
        $(document).on("keypress", function (e) {
            var letter = e.which;
            //alert(letter);
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
            //$.extend(document,initDoc); 
        })
        //$(document).replaceWith(tempDoc.clone());
        //var document = initDoc
    }
}

export default EventsHandler