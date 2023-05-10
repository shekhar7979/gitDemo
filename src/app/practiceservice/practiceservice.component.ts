import { Component } from '@angular/core';
import { PserviceService } from '../practice/pservice.service';

@Component({
  selector: 'app-practiceservice',
  templateUrl: './practiceservice.component.html',
  styleUrls: ['./practiceservice.component.css']
})
export class PracticeserviceComponent {
public alldata:any=[]

  constructor(private api:PserviceService)
  {
    this.api.getData().subscribe((res:any)=>{
      console.log(res);
      this.alldata=res
      
    })
  }

  setData(data:any)
  {
    this.api.sendData(data).subscribe((res:any)=>{ console.log(res)})
  }

}
