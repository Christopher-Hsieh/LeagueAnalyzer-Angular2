/**
 * Created by Moiz.Kachwala on 02-06-2016.
 */

import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';

import {Hero} from "../../models/hero";
import {LeagueService} from "../../services/league.service";

import {AggregatedBuild} from "../../models/aggregatedBuild";
import {ServerResponse} from "../../models/serverResponse";

import {BackendParser} from "../../business/backendParser";

@Component({
    selector: 'my-homepage',
    templateUrl: './app/components/homepage/homepage.component.html',
    styleUrls: ['./app/components/homepage/homepage.component.css']
})

export class HomepageComponent  {
	hero: Hero;
  error1: String;
  error2: String;
  aggregatedBuild: AggregatedBuild;
  serverResponse: ServerResponse;

  private backendParser:BackendParser = new BackendParser();

    constructor(
        private router: Router,
        private leagueService: LeagueService) { }

    ngOnInit() {
        this.hero = new Hero();
        this.hero.name = "name goes here";

        this.aggregatedBuild = new AggregatedBuild();
        this.aggregatedBuild.summonerName = "firebun";

        this.serverResponse = new ServerResponse();
        this.serverResponse.downloadResponse = "-";
        this.serverResponse.getBuildResponse = "-";
    }

    getBuild() {
        this.leagueService
            .getBuild(this.aggregatedBuild)
            .then(res => {
                console.log("league.service response:" + res);
                this.serverResponse.getBuildResponse = JSON.stringify(res);
                this.aggregatedBuild = this.backendParser.buildAggregatedObj(JSON.stringify(res));
                console.log(this.aggregatedBuild);
            })
            .catch(error => this.error2 = error);
    }


    downloadMatchHistory() {
        this.leagueService
            .getRankedMatches(this.hero)
            .then(hero => {
                this.hero = hero;
            })
            .catch(error => this.error1 = error);
    }

    getTest() {
        this.leagueService
            .getTest(this.hero)
            .then(res => {
                console.log("league.service response:" + res);
                this.hero.name = JSON.stringify(res);
            })
            .catch(error => this.error1 = error); // TODO: Display error message
    }

    catch() {
        console.log(this.error1);
    }
}
