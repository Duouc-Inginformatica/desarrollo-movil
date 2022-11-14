import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';
import { Geolocation } from '@capacitor/geolocation';
import { GoogleMap } from '@angular/google-maps';

interface MyPoint {
  position: {
    lat: number;
    lng: number;
  };
  title: string;
  image: string;
  text: string;
}

@Component({
  selector: 'app-map',
  templateUrl: './map.page.html',
  styleUrls: ['./map.page.scss'],
})
export class MapPage implements OnInit {

  @ViewChild(GoogleMap, { static: false }) map: GoogleMap;
  @ViewChild(IonSlides, { static: false }) slides: IonSlides;

  center: google.maps.LatLngLiteral;
  points: MyPoint[] = [
    {
      position: {
        //Coordenadas de DUOC UC Antonio Varas
      lat: -33.4330059,
      lng: -70.6170931,
      },
      title: 'DuocUC A. Varas',
      image:
        'http://www2.duoc.cl/sites/default/files/a_varas.jpg',
      text: 'Es nuestro punto de reunion',
    },
    {
      position: {
        //Coordenadas de DUOC UC Antonio Varas
      lat: -33.4330059,
      lng: -70.6170931,
      },
      title: 'DuocUC A. Varas',
      image:
        'http://www2.duoc.cl/sites/default/files/a_varas.jpg',
      text: 'Es nuestro punto de reunion',
    },
  ];

  constructor() {}

  ngOnInit() {
    this.getPosition();
  }

  async getPosition() {
    const coordinates = await Geolocation.getCurrentPosition();
    this.center = {
      lat: coordinates.coords.latitude,
      lng: coordinates.coords.longitude,
    };
  }

  async onSlideDidChange() {
    const currentSlide = await this.slides.getActiveIndex();
    const point = this.points[currentSlide];
    this.map.panTo(point.position);
  }
}
