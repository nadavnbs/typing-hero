import PostsRepository from './data.js';
import PostsRenderer from './render.js';
import EventsHandler from './eventshandler.js'; 

let postsRepository = new PostsRepository();
let postsRenderer = new PostsRenderer();
let eventsHandler = new EventsHandler(postsRepository, postsRenderer);

postsRepository.initPage().then((postFrompostreporsitory)=>{
  
  postsRenderer.renderPosts(postFrompostreporsitory);
})



// init data
// wait for response
//render data to view

// eventsHandler.registerAddPost();
// eventsHandler.registerRemovePost();
// eventsHandler.registerToggleComments();
// eventsHandler.registerAddComment();
// eventsHandler.registerRemoveComment();