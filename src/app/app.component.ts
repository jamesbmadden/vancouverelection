import { Component } from '@angular/core';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  tab: string = 'full';
  dialogOpen: boolean = false;
  dialogInfo: object = {};

  constructor() {
    if (window.innerWidth < 420) {
      this.tab = 'city';
    }
  }

  openDialog(event: CustomEvent) {
    console.log('Got the event');
    this.dialogInfo = event.detail;
    this.dialogOpen = true;
  }

  closeDialog() {
    this.dialogInfo = {};
    this.dialogOpen = false;
  }

  setTab(event: string) {
    this.tab = event;
  }

}
