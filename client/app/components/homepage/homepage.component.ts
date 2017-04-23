/**
 * Created by Moiz.Kachwala on 02-06-2016.
 */

import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';

import {Hero} from "../../models/hero";
import {LeagueService} from "../../services/league.service";

@Component({
    selector: 'my-homepage',
    templateUrl: './app/components/homepage/homepage.component.html',
    styleUrls: ['./app/components/homepage/homepage.component.css']
})

export class HomepageComponent  {
	hero: Hero;
    error: String;

    constructor(
        private router: Router,
        private leagueService: LeagueService) { }

    ngOnInit() {
        this.hero = new Hero();
        this.hero.name = "name goes here";
        
    }

    getSummonerInfo() {
        this.leagueService
            .getRankedMatches(this.hero)
            .then(hero => {
                this.hero = hero;
            })
            .catch(error => this.error = error); // TODO: Display error message
    }

    getTest() {
        this.leagueService
            .getTest(this.hero)
            .then(hero => {
                this.hero = hero;
            })
            .catch(error => this.error = error); // TODO: Display error message
    }

    catch() {
        console.log(this.error);
    }

}