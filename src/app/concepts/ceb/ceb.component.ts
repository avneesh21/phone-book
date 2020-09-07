import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-ceb',
  templateUrl: './ceb.component.html',
  styles: [
  ]
})
export class CebComponent implements OnInit {

  // Step 1: create custom event -- create an Obj for EventEmitter
  @Output() profileLoaded: EventEmitter<any> = new EventEmitter<any>(); // Step 2: @Output() will make profileLoaded as custom event


  constructor() {
      console.log('Inside Costructor');
   }

  ngOnInit(): void {  // lifecycle hook
    console.log('Inside ngOnInIt');
    // Ideal place for ajax calls
  }

  sendDataHandler(): void{
    // Step 3: Emit the custom event
    this.profileLoaded.emit('Avneesh'); // Step 4: Sending 'Avneesh' to parent comp
  }

}
