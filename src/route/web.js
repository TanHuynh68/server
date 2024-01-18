const express = require('express');
const router = express.Router();
const homeController = require('../controllers/homeController');
const initWebRoute = (app) => {
    router.get('/', homeController.getHomePage);

    return app.use("/v1", router);
}

module.exports = initWebRoute;
