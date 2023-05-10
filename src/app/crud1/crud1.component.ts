import { Component } from '@angular/core';
import { Crud1Service } from '../crudService/crud1.service';

@Component({
  selector: 'app-crud1',
  templateUrl: './crud1.component.html',
  styleUrls: ['./crud1.component.css']
})
export class Crud1Component {
  public idd:any;
  public fn:any;
  public ln:any;
  public em:any;
  public cor:any;
  public gen:any;
  public ps:any;
  public cps:any;

  public allData:any;

  public courses:any=["MBA",'B-tech','MCA','BCA']
constructor(private api:Crud1Service){
  this.getAllData()
}


onSubmitData(data:any){
  console.log(data.value);
  this.api.addData(data.value).subscribe(
    ((res:any)=>{
      console.log(res);
      this.getAllData()
    }),
    ((err:any)=>{
      console.log(err);
    })
  )
}
getAllData()
{
  this.api.getData().subscribe(
    ((res:any)=>{
      console.log(res);
      this.allData=res;
      console.log(this.allData)
    }),
    ((err:any)=>{
      console.log(err);
    })
  )
  
}
delete1(data:any)
{ 
  console.log(data.id)
this.api.onDelete(data.id).subscribe(
  ((res:any)=>{
    console.log(res);
    this.getAllData()
  }),
  ((err:any)=>{
    console.log(err);
  })
  
)
}

onupdate(data:any){
    console.log(data);
    this.fn = data.fname;
    this.ln = data.lname;
    this.em = data.eml;
    this.cor = data.course;
    this.gen = data.gender;
    this.ps = data.pass;
    this.cps = data.cpass;
    this.idd = data.id;
  }


 onclickUpdate(data:any)
 {
  this.api.onupdate(data.value).subscribe(
    ((res:any)=>{
      console.log(res);
      this.getAllData()
    }),
    ((err:any)=>{
      console.log(err);
    })
    
  )
 }

}
