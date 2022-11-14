import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { ActivatedRoute } from "@angular/router";
// Http testing module and mocking controller
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-mpasajero',
  templateUrl: './mpasajero.page.html',
  styleUrls: ['./mpasajero.page.scss'],
})
export class MpasajeroPage  {

  userPasajero: any; //objeto que recibe la info. 
  

constructor(private activeroute: ActivatedRoute, private router: Router){

  this.activeroute.queryParams.subscribe(params => {
    if (this.router.getCurrentNavigation().extras.state) {
      this.userPasajero = this.router.getCurrentNavigation().extras.state.user; 
      console.log("info recibida" + this.userPasajero)     
      }
    });
  }

}

  

