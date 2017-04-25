/**
 * Created by Moiz.Kachwala on 15-06-2016.
 */

import express = require("express");
import request = require("request");

class BasicController {

    test(req: express.Request, res: express.Response): void {
        try {

            console.log("Attempting java backend request...");
            request('https://league-analyzer-backend.herokuapp.com/summonerSimple?name=' + req.body, function (error, response, body) {
              console.log('error:', error); // Print the error if one occurred
              console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
              console.log('body:', body); // Print the HTML for the Google homepage.
              res.send(body);
            });

            // let url = 'https://na1.api.riotgames.com/lol/summoner/v3/summoners/by-name/'
            //        + 'firebun'
            //        + '?api_key=RGAPI-6ec47d55-1394-4e4c-b524-738fe84e6da1';
            // console.log("Attempting java backend request...");
            // request(url, function (error, response, body) {
            //   console.log('error:', error); // Print the error if one occurred
            //   console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
            //   console.log('body:', body); // Print the HTML for the Google homepage.
            // });



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
