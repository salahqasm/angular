import { Component } from '@angular/core';

@Component({
  selector: 'app-age',
  templateUrl: './age.component.html',
  styleUrls: ['./age.component.css']
})
export class AgeComponent {
  age: number = 23;
  getAge() {
    return this.age;
  }
}
