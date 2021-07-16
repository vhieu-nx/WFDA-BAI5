import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bai5';
  // tslint:disable-next-line:typedef
  onRateChange(value: any) {
    console.log(value);
  }
}
