import { Component } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  gold = 0;
  message = [];
  user = true;
  gamePage = false;
  username = {Name: ''}
  selectNinja = false;
  ninjas = [];
  ninja = [];
  showLeaderboard = false;

  constructor(private _httpService: HttpService){}
  newUser(data: any){
    this.username.Name = data.target.value;
  }  
  saveUsername(username: any){
    let newNinja = this._httpService.newNinja(this.username);
    newNinja.subscribe(data => {})
    this.user = false;
    let begin = this._httpService.allNinjas();
    begin.subscribe(data => {
      this.ninjas = data['data'];
    })
    this.selectNinja = true;
  }
  show(){
    this.user = false;
    let begin = this._httpService.allNinjas();
    begin.subscribe(data => {
      this.ninjas = data['data'];
    })
    this.selectNinja = true;
  }
  oneNinja(str: string): void {
    this.gamePage = true;
    this.selectNinja = false;
    let oneNinja = this._httpService.getNinja(str)
    oneNinja.subscribe(data => {
      console.log(data)
      this.ninja = data['data'];
      this.gold = data['data'].Gold;
      console.log(data['data'].Gold)
    })
  }
  saveGold(id: string, gold: number){
    let body = {Gold: gold}
    let saveNinja = this._httpService.saveGold(id, body);
    saveNinja.subscribe(data => {})
  } 
  restart(id: string){
    let body = {Gold: 0}
    let saveNinja = this._httpService.saveGold(id, body);
    saveNinja.subscribe(data => {})
    this.gamePage = false;
    this.selectNinja = true;
  } 
  leaderboard(){
    this.showLeaderboard = true;
    this.user = false;
    this.selectNinja = false;
    this.gamePage = false;
    let begin = this._httpService.allNinjas();
    begin.subscribe(data => {
      let allNinjas = data['data'];
      this.ninjas = allNinjas.sort(function(a, b) {
        return parseFloat(b.Gold) - parseFloat(a.Gold);
    });
    })
  }
  onFarmButton(){
    let farmGold = this._httpService.visitFarm()
    farmGold.subscribe(data => {
      this.gold += data['data'];
      this.message.push(`Earned ${data['data']} gold from the farm!`);
    })
  }
  onCaveButton(){
    let farmGold = this._httpService.visitCave()
    farmGold.subscribe(data => {
      this.gold += data['data'];
      this.message.push(`Earned ${data['data']} gold from the cave!`);
    })
  }
  onHouseButton(){
    let farmGold = this._httpService.visitHouse()
    farmGold.subscribe(data => {
      this.gold += data['data'];
      this.message.push(`Earned ${data['data']} gold from the house!`);
    })
  }
  onCasinoButton(){
    let farmGold = this._httpService.visitCasino()
    farmGold.subscribe(data => {
      this.gold += data['data'];
      if(data['data'] > 0){
        this.message.push(`Entered a casino and won ${data['data']} gold... Yay!`);
      }
      else{
        this.message.push(`Entered a casino and lost ${data['data']} gold... Ouch!`);
      }
    })
  }
}

