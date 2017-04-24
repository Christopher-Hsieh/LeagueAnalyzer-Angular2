import {Injectable} from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import {Hero} from "../models/hero";

@Injectable()
export class LeagueService {

    private heroesUrl = 'api/test';  // URL to web api

    constructor(private http: Http) { }

    getRankedMatches(hero: Hero) {
		let headers = new Headers({
            'Content-Type': 'application/json'});

        return this.http.get(this.heroesUrl + '/' + hero.name)
            .toPromise()
            .then(response => response.json())
            .catch(this.handleError);
    }

    getTest(hero: Hero): Promise<Hero> {

        return this.http.get(this.heroesUrl)
            .toPromise()
            .then(response => response.json())
            .catch(this.handleError);
    }
    
    private handleError(error: any) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }
}