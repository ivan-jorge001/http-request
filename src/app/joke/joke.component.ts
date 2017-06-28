import { Component, OnInit } from '@angular/core';
import { JokesService } from '../service/jokes.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/throttleTime';

@Component({
  selector: 'app-joke',
  templateUrl: './joke.component.html',
  styleUrls: ['./joke.component.css'],
  providers:[JokesService]
})
export class JokeComponent implements OnInit {

  constructor(private jokes: JokesService) { }



//this is another way of doing it with Observable

/*if USING PROMISE THE VARIABLE HAS TO BE OF TYPE PROMIS */
/*                                                  |*/
            /*---------------------------------------*/
  /*          |     */
joke:Promise<string>;
//jokes:Observable<string>; // make the response type observable also we profix them with $$$
        //|
      // ====|
/*this is done without promise*/
  ngOnInit() {
    // this.joke$= Observable
    // .fromEvent<MouseEvent>(document.getElementById('joke-btn'),'click')
    // .throttleTime(1000)
    // .switchMap((e:MouseEvent)=>this.jokes.getRandom())
  }

  getRandomJoke() {
     this.joke = this.jokes.getRandom();
   }



  // =======THIS IS THE FIRST WAY WITHOUT RXJS======
  // joke:any;
// getRandomJoke(){
//
//   this.jokes.getRandom().subscribe((joke1)=>this.joke =joke1)
// }

}
