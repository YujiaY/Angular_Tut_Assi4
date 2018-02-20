// import { Component } from '@angular/core';
//
// @Component({
//   selector: 'app-root',
//   styles:[
//     `.error { border: 1px solid red;}`
//   ],
//   template: `
//     <p>你输入的用户名是：{{ username }}</p>
//     <input type="text"
//            [(ngModel)]="username"
//            #nameModel="ngModel"
//            [ngClass]="{error: nameModel.invalid}"
//            required/>
//     {{nameModel.errors | json}}
//   `
// })
// export class AppComponent {
//   username: string = '';
//
// }



import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  oddNumbers: number[] = [];
  evenNumbers: number[]= [];

  onIntervalFired(firedNumber: number) {
    if  (firedNumber % 2)
      this.oddNumbers.push(firedNumber);
    else
      this.evenNumbers.push(firedNumber);
  }
}
