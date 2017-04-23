/**
 * Created by Moiz.Kachwala on 02-06-2016.
 */

import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';

import {Hero} from "../../models/hero";
import {HeroService} from "../../services/hero.service";

@Component({
    selector: 'my-homepage',
    templateUrl: './app/components/homepage/homepage.component.html',
    styleUrls: ['./app/components/homepage/homepage.component.css']
})

export class HomepageComponent  {
	hero: Hero;
	
    constructor() {
    }

    ngOnInit() {
        this.hero = new Hero();
        this.hero.name = "name goes here";
        
    }

}