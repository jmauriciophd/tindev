const express = require ("express") ;
const DevController = require('./controllers/DevControllers');
const LikeController = require('./controllers/LikeController');
const DisLikeController = require('./controllers/DesLikesController');
const routes = express.Router();

routes.post('/devs', DevController.store);
routes.post('/devs:devId/likes',LikeController.store);
routes.post('/devs:devId/dislikes',DisLikeController.store);
module.exports = routes;