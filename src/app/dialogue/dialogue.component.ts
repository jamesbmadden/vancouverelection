import { Component, Input, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-dialogue',
  templateUrl: './dialogue.component.html',
  styleUrls: ['./dialogue.component.css']
})
export class DialogueComponent implements OnInit {

  @Input() candidate: object;
  percentage: number;
  element: Element;

  constructor(elm: ElementRef) {
    this.element = elm.nativeElement;
  }

  closeButton() {
    this.element.dispatchEvent(new CustomEvent('close', {
      bubbles:true
    }));
  }

  ngOnInit() {
    if (this.candidate['votes'] < 100) {
      this.percentage = Math.round(this.candidate['votes']/54*100);
    } else {
      this.percentage = Math.round(this.candidate['votes']/173408*100);
    }
  }

}

/*
elm.nativeElement.dispatchEvent(new CustomEvent('close', {
  bubbles:true
}));
*/