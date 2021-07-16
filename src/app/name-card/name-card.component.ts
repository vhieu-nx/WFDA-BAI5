import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-name-card',
  templateUrl: './name-card.component.html',
  styleUrls: ['./name-card.component.scss']
})
export class NameCardComponent implements OnInit {
  @Input()
  name: any;
  phone: any;
  @Input('phones')
  // tslint:disable-next-line:typedef
  get phones(){
    return this.phone;
  }
  set phones(value){
    const  v = Number(value);
    this.phone = Number.isNaN(v) ? 325708605 : v;
  }
  @Input()
  email;


  constructor() { }

  ngOnInit(): void {
  }

}
