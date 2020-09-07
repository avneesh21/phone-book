import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cpb',
  templateUrl: './cpb.component.html',
  styles: [
  ]
})
export class CpbComponent implements OnInit {

  // Step 1: Creating a custom property
  @Input() age = 25;  // @Input -- makes age a custome property

  constructor() { }

  ngOnInit(): void {
  }

}
