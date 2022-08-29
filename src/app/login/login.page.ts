import { Component, OnInit } from '@angular/core';
import { AlertController,NavController  } from '@ionic/angular';//constructor asociado al envio de info
import { FormControl,FormGroup,Validators   } from '@angular/forms';//import que permite funcionamiento del formulario
import { Router,NavigationExtras } from '@angular/router';//permite que funcione las f.de envio de info

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {


  usuario = new FormGroup({
    userp: new FormControl('',[Validators.required, Validators.minLength(4),Validators.maxLength(8)]),
    passp: new FormControl('',[Validators.required, Validators.minLength(8)]),
  });

  constructor(private navCtrl: NavController,private router: Router) { }   //constructor que genrecio 
  
    
  //funcion que permite el envio de datos
  sendDetailsWithState() {
    let navigationExtras: NavigationExtras = {
      state: {user: this.usuario.value.userp}
      };
      this.router.navigate(['/mpasajero'],navigationExtras);      
  }

  //Metodo para navegar desde un metodo llamado desde el html
  InfoaMconductor(){
    console.log("entramos al metodo");
    this.sendDetailsWithState();
    // this.navCtrl.navigateForward('/home');
  }

}
