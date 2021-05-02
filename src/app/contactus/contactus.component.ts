import { Component, OnInit, OnDestroy } from '@angular/core';
import { HeaderService } from '../appServices/header.service';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit,OnDestroy {

  constructor( private _header : HeaderService) { 

  }

  ngOnInit(): void {
    this._header.headerContactDetail.next(true);
    this._header.loggedInUser.next(false)

  }
  ngOnDestroy(){
    this._header.headerContactDetail.next(false);
    this._header.loggedInUser.next(true)



  }

}
