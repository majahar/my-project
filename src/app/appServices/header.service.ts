import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  constructor() { }
  loggedInUser =new BehaviorSubject(false)
  headerContactDetail = new BehaviorSubject(false);
  headerNav = new BehaviorSubject(true);
  goBackLink = new BehaviorSubject({text :'',url:''}) 
}
