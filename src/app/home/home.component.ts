import { Component, OnInit } from '@angular/core';
import { DesignUtilityService } from '../design-utility.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private _du:DesignUtilityService) { }
  userList: any = [];
  toDoList: any = [];
  ngOnInit(): void {
    this._du.getUser()
    .subscribe(res =>{
       this.userList=res;
       console.log(this.userList)
 
     });

     this._du.getToDos()
    .subscribe(res =>{
       this.toDoList=res;
 
     });
  }
  

}
