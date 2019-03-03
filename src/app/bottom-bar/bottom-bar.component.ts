import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-bottom-bar',
  templateUrl: './bottom-bar.component.html',
  styleUrls: ['./bottom-bar.component.css']
})
export class BottomBarComponent implements OnInit {

  tab: string = 'full';
  @Output()
  settab: EventEmitter<string> = new EventEmitter<string>();

  constructor() {
    if (window.innerWidth < 420) {
      this.tab = 'city';
    }
  }

  ngOnInit() {
  }

  setTab(tab: string) {
    this.tab = tab;
    this.settab.emit(this.tab);
  }

}
