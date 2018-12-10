import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DuckService {

  constructor(private _http : HttpClient) { 
  }

  getDucks(){
    return this._http.get("/ducks");
  }

  removeDuck(_id){
    return this._http.delete(`/duck/${_id}`);
  }

  createDuck(newDuck){
    return this._http.post("/ducks", newDuck);
  }

}
