import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountDataService {
  // Step 1:
  private accountName = 'Avneesh';

  // Step 3: Create BehaviourSubject with default value
  // for subscribing first
  private myAccount = new BehaviorSubject<any>(this.accountName);

  // Step 3: Create Observable for the BehaviourSubject,
  // so any component can subscribe to it
  latestAccountName: Observable<any> = this.myAccount.asObservable();
  // latestAccountName is subscribable
  // refer header.comp.ts for step 4

  constructor() {

   }

   // sending next value over the private variable
   updateAccountName(newName): void {
     console.log(newName);
     // updating the name with the new name
     this.myAccount.next(newName);
   }
}
