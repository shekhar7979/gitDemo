import { Component } from '@angular/core';
import { UsersService } from '../service/users.service';

@Component({
  selector: 'app-service-task',
  templateUrl: './service-task.component.html',
  styleUrls: ['./service-task.component.css']
})
export class ServiceTaskComponent {

  public alldata:any=[];
  public usersData:any;
  public dt:any;
  public dt1:any;
  public usersData1:any;

 
  constructor( private data:UsersService)
  {
this.usersData=data.userData()
data.onUser().subscribe((data)=>this.dt=data) 
// this.data.postData(this.alldata).subscribe((result)=>this.alldata=result)
data.postData(data).subscribe((Resp:any)=>this.dt1=Resp)
}


onsubmit(val:any)
{
  this.alldata.push(val)
  this.data.postData(val).subscribe((result:any)=>
  {
    console.log(result)
    this.dt1=result;
    console.log(this.dt1.id)
    this.usersData1=this.data.postData(this.data);

  })
}

}
