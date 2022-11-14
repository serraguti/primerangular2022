import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-tablamultiplicar',
  templateUrl: './tablamultiplicar.component.html',
  styleUrls: ['./tablamultiplicar.component.css']
})
export class TablamultiplicarComponent implements OnInit {
  @ViewChild("cajanumero") cajaNumero!: ElementRef;
  public numeros: Array<number>;
  public numero!: number;

  constructor() { 
    this.numeros = new Array<number>();
  }

  generarTabla() : void {
    this.numero = parseInt(this.cajaNumero.nativeElement.value);
    this.numeros = new Array<number>();
    for (let i = 1; i <= 10; i++){
      var operacion = this.numero * i;
      this.numeros.push(operacion);
    }
  }

  ngOnInit(): void {
  }

}
