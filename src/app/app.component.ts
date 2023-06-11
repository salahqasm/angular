import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  name = "salah";
  allowNew = false;
  result = '';
  newInfo = '';
  username = '';
  constructor() {
    setTimeout(() => {
      this.allowNew = true;
    }, 3000)
  }
  onAddInfo() {
    this.result = 'New Info Added Successfully ' + this.newInfo;
  }
  onUserName() {
    this.username = '';
  }
}
