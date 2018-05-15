import PostsRepository from './data.js';
import PostsRenderer from './render.js';
import EventsHandler from './eventshandler.js'; 

let postsRepository = new PostsRepository();
let postsRenderer = new PostsRenderer();
let eventsHandler = new EventsHandler(postsRepository, postsRenderer);

// postsRepository.initialData().then((postFrompostreporsitory)=>{
  
//   postsRenderer.renderPosts(postFrompostreporsitory);
// })


// postsRepository.initLesson().then((postFrompostreporsitory)=>{
//   postsRenderer.renderinitLesson(postFrompostreporsitory);})
eventsHandler.registerLessonStart()
eventsHandler.registerKey();

// init data
// wait for response
//render data to view

// eventsHandler.registerAddPost();
// eventsHandler.registerRemovePost();
// eventsHandler.registerToggleComments();
// eventsHandler.registerAddComment();
// eventsHandler.registerRemoveComment();