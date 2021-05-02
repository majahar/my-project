import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit,AfterViewInit {
  username:string='Majahar';

  constructor() { }


  ngOnInit(): void {
  }

  callToChild(){
    alert(this.username)
  }
  ngAfterViewInit() {
  }

  ngOnDestroy() {
  }
  

}
