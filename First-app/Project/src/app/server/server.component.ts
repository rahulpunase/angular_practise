import { Component } from '@angular/core';
// import { setTimeout } from "timers";

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})

export class ServerComponent {
  buttonDisable = true;
  serverCreation = 'No Server is created yet!';
  serverName = 'Test server';
  parentIsClicked = false;
  serverarray = ['server 1', 'server 2'];
  severIsOnline = 'online';
  constructor() {
   this.severIsOnline = Math.random() > 0.5 ? 'online' : 'offline';
  }

  onServerCreated() {
    // ngIf directive
    this.serverCreation = 'Server is now created';
    if (this.parentIsClicked) {
      this.parentIsClicked = false;
    } else {
      this.parentIsClicked = true;
    }
    this.serverarray.push(this.serverName);
  }

  onServerNameUpdate(value: any) {
    // event binding...
    //console.log(value);
    this.serverName = value.target.value;
  }

  getColor() {
    // ngStyle directives
    return this.severIsOnline === 'online' ? 'green' : 'red';
  }

}
