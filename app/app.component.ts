import { Component } from '@angular/core';

interface Passenger {
  id: number,
  fullName: string,
  checkedIn: boolean
}

@Component({
  selector: 'app-root',
  styleUrls: ['app.component.scss'],
  template: `
    <div class="app">
      <h3>Airline Passengers</h3>
      <ul>
        <template ngFor let-passenger let-i="index" [ngForOf]="passengers">
          <li>
            {{ i }}: {{passenger.fullName}}
          </li>
        </template>
      </ul>
      <h3>Airline Passengers</h3>
      <ul>
        <li *ngFor="let passenger of passengers; let i = index;">
          {{ i }}: {{passenger.fullName}}
        </li>
      </ul>
    </div>
  `
})
export class AppComponent {
  passengers: Passenger[] = [
    {
      id: 1,
      fullName: 'Stephen',
      checkedIn: true
    },
    {
      id: 1,
      fullName: 'Rose',
      checkedIn: false
    },
    {
      id: 1,
      fullName: 'James',
      checkedIn: true
    }
  ];
}