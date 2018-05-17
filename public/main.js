import PostsRepository from './data.js';
import PostsRenderer from './render.js';
import EventsHandler from './eventshandler.js'; 
import Api from './api.js'
// import { Stats } from 'fs';

let newApi = new Api();
let postsRepository = new PostsRepository();
let postsRenderer = new PostsRenderer();
let eventsHandler = new EventsHandler(postsRepository, postsRenderer);

// postsRepository.initPage().then((postFrompostreporsitory)=>{
  
//   postsRenderer.renderPosts(postFrompostreporsitory);
// })


// init data
// wait for response
//render data to view
newApi.fetch();
eventsHandler.registerLessonStart();
eventsHandler.registerKey();
// eventsHandler.registerToggleComments();
// eventsHandler.registerAddComment();
// eventsHandler.registerRemoveComment();
export default {postsRepository}
export {postsRenderer}