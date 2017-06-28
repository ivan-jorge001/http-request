import { Injectable } from '@angular/core';
import {Http,Response} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';//<--- using promisses

import 'rxjs/add/operator/map';

@Injectable()
export class JokesService{

  constructor(private http: Http){

  }
  getRandom(){
    console.log(this.http.get('http://api.icndb.com/jokes/random'));
    return this.http.get('http://api.icndb.com/jokes/random')
    .toPromise()// this is how you can add to promise and intead of map youuse then
      /*where then is was map*/    .then((res)=> res.json())
  /*where then is was map*/  .then((res)=>res.value.joke) // <------ this is only going to give back the joke string

  }
}
