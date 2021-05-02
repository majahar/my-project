import { Component, OnInit } from '@angular/core';
import { HeaderService } from 'src/app/appServices/header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  loggedInUser:any;
  headerContactDetail:any;
  headerNav:any;
  goBackLink:any;


  constructor(private _header : HeaderService) {
    // For logged in user
   this._header.loggedInUser.subscribe(res =>{
     this.loggedInUser=res;

   })

   //For Contact detail
   this._header.headerContactDetail.subscribe(res => {
     this.headerContactDetail=res;
   })
   
   // For header Nav
   this._header.headerNav.subscribe(res =>{
     this.headerNav=res;

   })
   //For go back link

   this._header.goBackLink.subscribe(res =>{
     this.goBackLink=res;

   })
   }

  ngOnInit(): void {
  }

}
