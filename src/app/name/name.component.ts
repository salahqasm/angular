import { Component } from '@angular/core';
@Component({
  selector: 'app-name',
  templateUrl: './name.component.html',
  styleUrls: ['./name.component.css']
})
export class name {
  name: string = 'Salah Khalaf';

  status:string;
  constructor() {
    this.status = Math.random() > 0.5 ? "ok" : "no";
  }
  getColor(){
  return this.status == "ok" ? "green" : "red";
}
}



