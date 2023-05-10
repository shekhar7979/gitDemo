import { Component } from '@angular/core';
import { UsersService } from '../service/users.service';

@Component({
  selector: 'app-promise',
  templateUrl: './promise.component.html',
  styleUrls: ['./promise.component.css']
})
export class PromiseComponent {

public pem:any;
 
// without api
ngOnInit(){
  this.pem=new Promise((resolve,reject)=>{
  setTimeout(()=>{
   resolve("ok")
   reject("reject")
   this.promiseData();
  },4000)

  })
  this.pem
  .then((res:any)=>
  {console.log(res)})
  .catch((err:any)=>{console.log(err)})
}

// with api
constructor(private api:UsersService){
  // this.promiseData();
}
promiseData(){
  this.api.promiseMethod().then((res)=>{console.log(res)})
  .catch((err)=>{console.log(err)})
}

}
