import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'Generate_QR_Code';

public values!:string;
public level!: "L" | "M" | "Q" | "H";
public width!: number; 
public date:any = new Date(new Date().getTime()).toLocaleTimeString() + new Date(new Date().getTime()).toLocaleDateString();  

constructor()
{
  this.level ="L";
  this.width =200;
  this.values = "QR Code By Access Zombies Code" + " " + this.date;
}

qrLevel(val: "L" | "M" | "Q" | "H") {
  this.level = val;
}

qrData(val: string) {
  this.values = val ;
}

qrWidth(val: number) {
  this.width = val;
}
}
