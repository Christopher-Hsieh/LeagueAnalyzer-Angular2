/**
 * Created by Moiz.Kachwala on 15-06-2016.
 */

import express = require("express");
import BasicController = require("./../controllers/BasicController");

var router = express.Router();
class BasicRoutes {
    private _basicController: BasicController;

    constructor () {
        this._basicController = new BasicController();
    }
    get routes () {
        var controller = this._basicController;

        router.get("/test", controller.test);
        router.get("/test/:_name", controller.getRankedMatches);
        // router.post("/heroes", controller.create);
        // router.put("/heroes/:_id", controller.update);
        // router.get("/heroes/:_id", controller.findById);
        // router.delete("/heroes/:_id", controller.delete);

        return router;
    }


}

Object.seal(BasicRoutes);
export = BasicRoutes;