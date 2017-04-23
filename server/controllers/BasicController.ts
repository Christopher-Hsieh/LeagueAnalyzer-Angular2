/**
 * Created by Moiz.Kachwala on 15-06-2016.
 */

import express = require("express");

class BasicController {

    test(req: express.Request, res: express.Response): void {
        try {
        		console.log("test was a success");
        		res.send({"test was a success": "test was a success"});
        }
        catch (e)  {
            console.log(e);
            res.send({"error": "error in your request"});

        }
    }

    getRankedMatches(req: express.Request, res: express.Response): void {
        try {

            	res.send({"test was a success": "test was a success"});
        }
        catch (e)  {
            console.log(e);
            res.send({"error": "error in your request"});

        }
    }
}
export = BasicController;