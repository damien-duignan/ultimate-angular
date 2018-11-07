import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrls: ['app.component.scss'],
  template: `
    <div class="app">
      <input 
        type="text" 
        [value]="name"
        (input)="handleChange($event.target.value)">

      <ng-template [ngIf]="name">
        <div>
          Searching for... {{name}}
        </div>
      </ng-template>

      <div *ngIf="name.length > 2">
        Searching for... {{name}}
      </div>
    </div>
  `
})
export class AppComponent {
  name: string = '';
  handleChange(value: string) {
    this.name = value;
  }
}