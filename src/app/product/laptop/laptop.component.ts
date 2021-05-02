import { Component, OnInit, OnDestroy } from '@angular/core';
import { HeaderService } from 'src/app/appServices/header.service';

@Component({
  selector: 'app-laptop',
  templateUrl: './laptop.component.html',
  styleUrls: ['./laptop.component.css']
})
export class LaptopComponent implements OnInit,OnDestroy {

  constructor(private _header : HeaderService) { }

  ngOnInit(): void {
    this._header.goBackLink.next({text :'Back to Product',url:'/product'})
    this._header.headerNav.next(false)
  }
  ngOnDestroy(){
    this._header.goBackLink.next({text :'',url:''})
    this._header.headerNav.next(true);



  }

}
