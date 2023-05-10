import { Component } from '@angular/core';
import { from, of } from 'rxjs';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.css']
})
export class RxjsComponent {

  public arr:any=['hello',1,2,3,"welcome"]
  public obs:any;
 
  constructor(){
    this.obs=from(this.arr)
    console.log(this.obs)
    this.obs.subscribe((res:any)=>{
      console.log(res);
    })

      // of rxjs opreater
      this.obs=of(this.arr)
      console.log(this.obs)
      this.obs.subscribe((res:any)=>{console.log(res)})
  }

}
