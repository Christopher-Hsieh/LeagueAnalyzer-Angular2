import express = require('express');
import path = require('path');

import BasicRoutes = require('./BasicRoutes');

var app = express();

class Routes {

    get routes() {

        app.use("/", new BasicRoutes().routes);

        return app;
    }
}
export = Routes;
