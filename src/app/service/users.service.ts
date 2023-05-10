import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor( private http:HttpClient) { }

  onUser()
  {
  return this.http.get('https://jsonplaceholder.typicode.com/users')
  }

  userData()
  {
    return [{
      "name":"shekhar",
      "lname":"jagtap",
      "age":10
    }]
  }
 postData(data:any)
 {
  return this.http.post('https://jsonplaceholder.typicode.com/users',data)
 }

//  this is for promise PracticeserviceComponent
 promiseMethod(){
  return this.http.get('https://jsonplaceholder.typicode.com/users').toPromise();
 }
}
