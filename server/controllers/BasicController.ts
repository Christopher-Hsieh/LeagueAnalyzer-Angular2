/**
 * Created by Moiz.Kachwala on 15-06-2016.
 */

import express = require("express");
import request = require("request");

class BasicController {

    test(req: express.Request, res: express.Response): void {
        try {

            console.log("Attempting google request...");
            request('http://www.google.com', function (error, response, body) {
              console.log('error:', error); // Print the error if one occurred
              console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
              console.log('body:', body); // Print the HTML for the Google homepage.
            });

            console.log("Attempting java backend request...");
            request('https://league-analyzer-backend.herokuapp.com/health', function (error, response, body) {
              console.log('error:', error); // Print the error if one occurred
              console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
              console.log('body:', body); // Print the HTML for the Google homepage.
            });


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