import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent {
  public string:string="hello"
  public link:any="https://www.youtube.com/";
  public return:any="this is eventBinding"
   public name:any;
  eBinding(){
 console.log(this.return);

  }
}
