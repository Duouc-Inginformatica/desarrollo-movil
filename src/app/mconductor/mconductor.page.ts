import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { AlertController,NavController,createAnimation  } from '@ionic/angular';
import { FormControl,FormGroup,Validators   } from '@angular/forms';

@Component({
  selector: 'app-mconductor',
  templateUrl: './mconductor.page.html',
  styleUrls: ['./mconductor.page.scss'],
})
export class MconductorPage {

  userConductor: any;
  userCvehiculo= "fiat 500";
  userCpatente= "1133AA";
  nombrePasa= '4';
  userPasajero= 'Admin';


  constructor(private activeroute: ActivatedRoute, private router: Router, private alertController: AlertController) {
    
    this.activeroute.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.userConductor = this.router.getCurrentNavigation().extras.state.user; 
        console.log("Dato a mostrar" + this.userConductor)     
        }
      });
    }

    

    mostrar(){
      this.presentAlert();
    }


      //Metodo de alerta
    async presentAlert(){
      const alert = await this.alertController.create({
        header: 'Solicitud de Transporte',
        subHeader: 'Nombre : ' + this.userPasajero,
        message: 'Cantidad : ' + this.nombrePasa,
        buttons: ['Aceptar'],
      });
      await alert.present();
    }

  }

      /* this.activeroute.queryParams.subscribe(params => {
        if (this.router.getCurrentNavigation().extras.state) {
          this.userConductor = this.router.getCurrentNavigation().extras.state.user; 
          console.log("Dato a mostrar" + this.userConductor)     
          }
        }); */




     /*  this.activeroute.queryParams.subscribe(params => {
        if (this.router.getCurrentNavigation().extras.state) {
          this.userConductor = this.router.getCurrentNavigation().extras.state.user.auto,
                              this.router.getCurrentNavigation().extras.state.user.patente; 
          console.log("Dato a mostrar" + this.userConductor)     
          }
        });
    } */
    
    
  