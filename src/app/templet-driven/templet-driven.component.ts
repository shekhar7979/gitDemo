import { Component } from '@angular/core';

@Component({
  selector: 'app-templet-driven',
  templateUrl: './templet-driven.component.html',
  styleUrls: ['./templet-driven.component.css']
})
export class TempletDrivenComponent {
  public alldata:any=[]
  public idd:any
  public count:any=1;
  
  public iddd:any
  public fn:any
  public ln:any
  public em:any
  public gen:any

  saveData(data:any){
    data.value.id=this.count;
 console.log(data.value)
 this.alldata.push(data.value)
 console.log(this.alldata)
 this.count++
  }


  onDel(data:any)
  {
    
    this.idd=data.id
    this.alldata.forEach((ele:any ,index:any) => {
      if(ele.id== data.id)
      {
        this.alldata.splice(index,1)
      }
    });

  }

  onup(data:any){
    this.iddd=data.id;
    this.fn=data.name;
    this.ln=data.lastName;
    this.em=data.email;
    this.gen=data.Gender
  }

  onUpdate(data:any)
  {
     this.alldata.forEach((element:any) => 
      {
if(data.value.id==element.id) 
{
element.id=data.value.id
element.name=data.value.name;
element.lastName=data.value.lastName;
element.email=data.value.email;
element.Gender=data.value.Gender
}
  });
  }
}

