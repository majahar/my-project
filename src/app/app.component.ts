import { Component, ViewChild,AfterViewInit} from '@angular/core';
import { DesignUtilityService } from './design-utility.service';
import { map } from 'rxjs/operators'
import { from } from 'rxjs';
import { ChildComponent } from './child/child.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-project';

  userList :any='';
  username: any;
  constructor(private _du : DesignUtilityService){

  }
  @ViewChild(ChildComponent)
  child!: ChildComponent;



  ngOnInit(){
 /*   let  srcArray = from([1, 2, 3, 4]);
    srcArray
    .pipe(map(val => { return val * 2}))
    .subscribe(val => { console.log(val)}) */

    this._du.getUser()
   .subscribe(res =>{
      this.userList=res;

    });
    

  }
  ngAfterViewInit(){
   //console.log(this.child.username) ;


  }
  changeChildProperty(){
    this.child.username='MM';

  }
  callToChildMethod(){
    this.child.callToChild();

  }
}
