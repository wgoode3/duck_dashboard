import { Component } from '@angular/core';
import { DuckService } from './duck.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Ducks';
  ducks = [];
  newDuck = {
    "name": "",
    "age": 0,
    "gender": "",
    "favpond": ""
  };

  constructor(private _duckService : DuckService){
  }

  ngOnInit(){
    this.alsoGetDucks();
  }

  alsoGetDucks(){
    let observable = this._duckService.getDucks();
    observable.subscribe( (data) => {
      console.log(data);
      this.ducks = data['ducks'];
    });
  }

  getRidOfDuck(duck_id){
    console.log(`duck to get rid of ${duck_id}`);
    let observable = this._duckService.removeDuck(duck_id);
    observable.subscribe( (data) => {
      console.log(data);
      this.alsoGetDucks();
    });
  }

  makeDuck(){
    let observable = this._duckService.createDuck(this.newDuck);
    observable.subscribe( data => {
      console.log(data);
      this.alsoGetDucks();
      this.newDuck = {
        "name": "",
        "age": 0,
        "gender": "",
        "favpond": ""
      };
    });
  }

  duckRemoval(){
    this.alsoGetDucks();
  }
}
