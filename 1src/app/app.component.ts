import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  name = "salah";
  allowNew = false;
  result: string[] = ['first info'];
  newInfo = '';
  username = '';
  buttonClicked = false;
  constructor() {
    setTimeout(() => {
      this.allowNew = true;
    }, 3000)
  }
  onAddInfo() {
    this.buttonClicked = true;
    this.result.push(this.newInfo);
  }
  onUserName() {
    this.username = '';
  }
}
