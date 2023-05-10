import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PserviceService {

  constructor(private http:HttpClient) {

   }

   getData()
   {
    return this.http.get("https://jsonplaceholder.typicode.com/users");
   }

   sendData(data:any){
    return this.http.post("https://jsonplaceholder.typicode.com/users",data)

   }
}
