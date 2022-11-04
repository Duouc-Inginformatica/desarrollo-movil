import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import { GoogleMap } from '@capacitor/google-maps';
import { environment } from 'src/environments/environment';
import { Geolocation } from '@capacitor/geolocation';
import { CapacitorGoogleMaps } from '@capacitor/google-maps/dist/typings/implementation';

@Component({
  selector: 'app-gps',
  templateUrl: './gps.page.html',
  styleUrls: ['./gps.page.scss'],
})
export class GpsPage implements OnInit {

  @ViewChild('map') mapRef: ElementRef<HTMLElement>;
  newMap: GoogleMap;
  center: any = {
    //Coordenadas de DUOC UC Antonio Varas
    lat: -33.4330059,
    lng: -70.6170931,
  };

  markerId: string;

  constructor() { }

  ngOnInit() {
    
  }

  ionViewDidEnter(){
    this.createMap();
  }

  ngAfterViewInit(){
  //  this.createMap();
  }

  async locate(){
    if(this.newMap) await this.newMap.enableCurrentLocation(true);
    
  }

  async createMap() {
    this.newMap = await GoogleMap.create({
      id: 'capacitor-google-maps',
      element: this.mapRef.nativeElement,
      apiKey: environment.google_maps_api_key,
      config: {
        center: this.center,
        zoom: 8,
      },
      // forceCreate: true
    });



    this.addMarker(this.center.lat, this.center.lng);
    //this.showCurrentPosition();
    
  }

  async addMarker(lat, lng){
    //Agrega un marcador al mapa

    this.markerId = await this.newMap.addMarker({
      coordinate: {
        lat: lat,
        lng: lng,
        
      },

      draggable: true

    });

  }

  /*showCurrentPosition(){
    Geolocation.requestPermissions().then(async permission =>{
      const coordinates = await Geolocation.getCurrentPosition();

      CapacitorGoogleMaps.addMarker({
        latitude: coordinates.coords.latitude,
        longitude: coordinates.coords.longitude,
        title: 'Mi prueba',
        snippet: 'Mi prueba'

      });
    })

  }*/

//  async addListeners(){

  /*  await this.newMap.setOnMapClickListener((event) => {
      console.log('SetOnMapClickListener', event);
      this.addMarker(event.latitude, event.longitude);
    });

    */


 /* await this.newMap.setOnMyLocationButtonClickListener((event) => {
    console.log('setOnMyLocationButtonClickListener', event);
    this.addMarker(event.latitude, event.longitude);
  });
    
  await this.newMap.setOnMyLocationClickListener((event) => {
    console.log('setOnMyLocationClickListener', event);
    this.addMarker(event.latitude, event.longitude);
  });
  */
    

//}

}


