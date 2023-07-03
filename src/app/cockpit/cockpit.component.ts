import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent {
  @Output() serverCreated = new EventEmitter<{ name: string, content: string }>();
  @Output() blueprintCreated = new EventEmitter<{ name: string, content: string }>();
  newServerName = '';
  newServerContent = '';
  onAddServer(name) {
    this.serverCreated.emit(
      {
        name: name.value,
        content: this.newServerContent
      }
    );
  }

  onAddBlueprint(name) {
    this.blueprintCreated.emit(
      {
        name: name.value,
        content: this.newServerContent
      }
    )
  }

}
