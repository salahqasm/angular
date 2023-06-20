import { Component } from '@angular/core';

@Component({
  selector: 'app-age',
  templateUrl: './age.component.html',
  styleUrls: ['./age.component.css']
})
export class AgeComponent {
  private age: number;
  constructor() {
    this.age = Math.floor(Math.random() * 20 + 1)
  }
  getAge() {
    return this.age;
  }
}
