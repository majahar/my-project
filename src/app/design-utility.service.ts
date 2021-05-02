import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DesignUtilityService {
  url:string='';

  constructor(private http : HttpClient) { }
  getUser():Observable<any>{
    //returon 'Majahar Khan';
    this.url='https://jsonplaceholder.typicode.com/users';
    return this.http.get(this.url);

  }
  getToDos():Observable<any>{
    //returon 'Majahar Khan';
    this.url='https://jsonplaceholder.typicode.com/todos';
    return this.http.get(this.url);

  }
}
