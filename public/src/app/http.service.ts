import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }
  visitFarm(){
    console.log("Visited the farm")
    return this._http.get('/farm')
  }
  visitCave(){
    console.log("Visited the cave")
    return this._http.get('/cave')
  }
  visitHouse(){
    console.log("Visited the house")
    return this._http.get('/house')
  }
  visitCasino(){
    console.log("Visited the casino")
    return this._http.get('/casino')
  }
  allNinjas(){
    console.log("Select your username")
    return this._http.get('/user')
  }
  newNinja(user){
    console.log("Creating a new Ninja")
    return this._http.post('/user', user)
  }
  getNinja(str){
    console.log("Getting a Ninja")
    return this._http.get(`/user/${str}`)
  }
  saveGold(id, body){
    console.log('Saving your gold.')
    console.log(id, body)
    return this._http.put(`/user/${id}`, body)
  }
}

