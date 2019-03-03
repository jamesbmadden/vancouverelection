import { Component, OnInit, Input, ElementRef } from '@angular/core';
import { EventEmitter } from 'protractor';

@Component({
  selector: 'app-candidate',
  templateUrl: './candidate.component.html',
  styleUrls: ['./candidate.component.css']
})
export class CandidateComponent implements OnInit {

  @Input() name: string;
  @Input() votes: number;
  @Input() won: string;
  @Input() party: string;
  percentage: number;
  elm: Element;

  constructor(elm: ElementRef) {
    this.elm = elm.nativeElement;
  }

  ngOnInit() {
    if (this.votes < 100) {
      this.percentage = Math.round(this.votes/54*100);
    } else {
      this.percentage = Math.round(this.votes/173408*100);
    }
    // 173408
  }

  openDialog() {
    this.elm.dispatchEvent(new CustomEvent('dialog', {
      detail:{
        name:this.name,
        votes:this.votes,
        party:this.party,
        won:this.won
      },
      bubbles:true
    }));
  }

}
