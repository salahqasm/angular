import { Component } from "@angular/core";

@Component({
  selector: 'app-assignment',
  templateUrl: './assignment.component.html',
  styleUrls: ['./assignment.component.css']
})
export class Assignment {
  display = false;
  log: string[]=[];
  counter=0;
  logging() {
    this.display=!this.display;
    this.counter++;
    if (this.display === false)
      this.log.push("Turned Off "+" Log Number: "+this.counter);
    else
      this.log.push("Turned On "+" Log Number: "+this.counter);

  }
}
