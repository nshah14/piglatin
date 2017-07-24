import {Injectable} from '@angular/core';
import {Http, Response, RequestOptions, Headers, HTTP_PROVIDERS} from '@angular/http';
import {Observable} from 'rxjs/Observable';
// import {TestSuite} from '../models/test-suite';
// import {Project} from '../models/project';
// import {BuildType} from '../models/build-type';
declare function require(path:string) : any;
var config = require('../../server-side/config');
Injectable()
export class PigLatinService {

    constructor(private http: Http) { }

    private options = new RequestOptions({ headers: new Headers({ 'Content-Type': 'application/json', 'charset': 'UTF-8' }) });

    // private mongoDBServer = "http://teamcityabg:81/"; //point to production server
    private mongoDBServer = config.mongoDBServer;//*******i.e. == "http://localhost:80/" *****; //point to local db
    private testSuitesUrl = config.testSuitesUrl;//*****i.e. == "rest/projects/test-suites/"*****;
    private projectUrl = config.projectUrl;//*****i.e. ==  "rest/projects/"*****;
    private buildTypesUrl = config.buildTypesUrl;//*****i.e. == "rest/projects/test-suites/build-types/*****";

    convertWord(word:String) {
        return this.http.post("http://localhost:80/rest/piglatin/"+ word, JSON.stringify(word), this.options);
    }

}