import { Component } from '@angular/core';

@Component({
    selector: 'app-stage',
    template: `
    <mat-card>
      <div class="image"></div>
    </mat-card>`,
    styles: [`
      mat-card { 
        height: 80%;
        margin: 20px;
        background-repeat: no-repeat;
        background-image:url('https://angular.io/assets/images/logos/angular/angular.png');
      }
      `]
})
export class StageComponent {
    constructor() { }
}