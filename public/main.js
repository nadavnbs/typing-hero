import PostsRepository from './data.js';
import PostsRenderer from './render.js';
import EventsHandler from './eventshandler.js'; 

let postsRepository = new PostsRepository();
let postsRenderer = new PostsRenderer();
let eventsHandler = new EventsHandler(postsRepository, postsRenderer);

eventsHandler.registerLessonStart()
eventsHandler.registerKey(); 
eventsHandler.startTimer(); 
eventsHandler.submitResult()
// eventsHandler.clickingButton();
