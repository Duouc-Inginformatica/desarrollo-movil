import { Component, OnInit } from '@angular/core';
import { AlertController,NavController  } from '@ionic/angular';//constructor asociado al envio de info
import { FormControl,FormGroup,Validators   } from '@angular/forms';//import que permite funcionamiento del formulario
import { Router,NavigationExtras } from '@angular/router';//permite que funcione las f.de envio de info



@Component({
  selector: 'app-registro-v',
  templateUrl: './registro-v.page.html',
  styleUrls: ['./registro-v.page.scss'],
})
export class RegistroVPage  {


  usuario = new FormGroup({
    vehiculo: new FormControl('',[Validators.required,Validators.minLength(4)]),
    patente: new FormControl('',[Validators.required,Validators.maxLength(6)]),
    cantidadpasejro: new FormControl('',[Validators.required, Validators.min(2)]),

  });



  constructor(private navCtrl: NavController,private router: Router) { } 

  
  sendDetailsWithState() {
    let navigationExtras: NavigationExtras = {
      state: {auto: this.usuario.value.vehiculo,
              patente: this.usuario.value.patente}
      };
      this.router.navigate(['/mconductor'],navigationExtras);      
  }

  InfoaMconductor(){
    console.log("entramos al metodo");
    this.sendDetailsWithState();
}

}
