import { Component } from '@angular/core';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.css']
})
export class PipeComponent {
public str:any='shekhar';
public num:any=100;
public abc={name:'shekhar',
            last:"jagtap"}
}
