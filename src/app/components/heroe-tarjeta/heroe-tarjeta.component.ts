import { Component, OnInit, Input } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html'
})
export class HeroeTarjetaComponent implements OnInit {

  @Input() heroe: any = {};
  @Input() index: number = 0;

  constructor( private _router:Router ) { }

  ngOnInit(): void {
  }

  verHeroe(){
    console.log( this.index);
    this._router.navigate( ['/heroe', this.index] );
  }

}
