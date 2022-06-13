import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 
 public dadoizquierdo = "assets/img/dice1.png";
 public dadoderecho = "assets/img/dice5.png";
 public num1: number = 0;
 public num2: number = 0;
 public resp = false;
 public run =  "LANZA LOS DADOS";

public tirarDados():void{
  this.num1 = Math.round(Math.random() *6);
  this.num2 = Math.round(Math.random() *6);

  if(this.num1 == 0 || this.num2 == 0){
    this.num1 = Math.round(Math.random() *6);
    this.num2 = Math.round(Math.random() *6);
  }else{
    this.dadoizquierdo = "assets/img/dice" + this.num1 + ".png";
    this.dadoderecho = "assets/img/dice" + this.num2 + ".png";
  }

  if(this.num1 == this.num2){
    this.resp = true;
    this.run = "GANASTE";
  }else{
    this.resp = false;
    this.run = "SIGUE INTENTANDO";
  }

} 


}
