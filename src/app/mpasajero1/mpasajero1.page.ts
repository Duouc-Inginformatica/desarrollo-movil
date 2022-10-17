import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';

@Component({
  selector: 'app-mpasajero1',
  templateUrl: './mpasajero1.page.html',
  styleUrls: ['./mpasajero1.page.scss'],
})
export class Mpasajero1Page implements OnInit {

  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;

  data: any[] =  Array(10);

  constructor() { }

  ngOnInit() {
  }

  loadData(event){
    console.log('Cargando...')

    setTimeout(() => {

      if (this.data.length > 20){
        event.target.complete();
        this.infiniteScroll.disabled = true;
        return;

      }

      const nuevoArreglo = Array(10);
      this.data.push (...nuevoArreglo);
      event.target.complete();

    },1500);

  }

}
