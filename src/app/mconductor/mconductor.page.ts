import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-mconductor',
  templateUrl: './mconductor.page.html',
  styleUrls: ['./mconductor.page.scss'],
})
export class MconductorPage {

  userConductor: any;
  userCvehiculo= "fiat 500";
  userCpatente= "1133AA";

  constructor(private activeroute: ActivatedRoute, private router: Router) {
    
    this.activeroute.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.userConductor = this.router.getCurrentNavigation().extras.state.user; 
        console.log("Dato a mostrar" + this.userConductor)     
        }
      });
    }
    
  
  
  }


 

