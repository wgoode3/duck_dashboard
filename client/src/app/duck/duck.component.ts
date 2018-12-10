import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DuckService } from '../duck.service';

@Component({
  selector: 'app-duck',
  templateUrl: './duck.component.html',
  styleUrls: ['./duck.component.css']
})
export class DuckComponent implements OnInit {

  constructor(private _duckService: DuckService) { }

  @Input() duck: any;
  @Output() duckEvent = new EventEmitter();

  ngOnInit() {
  }

  getRidOfDuck(duck_id){
    let observable = this._duckService.removeDuck(duck_id);
    observable.subscribe( data => {
      console.log(data);
      this.duckEvent.emit();
    });
  }

}
