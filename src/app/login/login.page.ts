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

  valuea = 'conductor';
  valueb = 'usuario';

  usuario = new FormGroup({
    user: new FormControl('',[Validators.required, Validators.minLength(4)]),
    pass: new FormControl('',[Validators.required, Validators.minLength(4)]),
  });

  constructor(private navCtrl: NavController,private router: Router, private alertController: AlertController) { }   //constructor que genrecio 
  
    
  //funcion que permite el envio de datos
  sendInfoPasajer() {
    let navigationExtras: NavigationExtras = {
      state: {user: this.usuario.value.user}
      };
      this.router.navigate(['/mpasajero'],navigationExtras);      
  }

  sendInfoConductor() {
    let navigationExtras: NavigationExtras = {
      state: {user: this.usuario.value.user}
      };
      this.router.navigate(['/mconductor'],navigationExtras);      
  }

  validaciontipousuario(){
    if('usuario'===this.usuario.value.user){
      this.sendInfoPasajer()
    }
    else if('conductor'===this.usuario.value.user){
      this.sendInfoConductor()
    }
    else{
      this.presentAlert()
    }
  }



  //Metodo para navegar desde un metodo llamado desde el html
  InfoaMconductor(){
    //console.log("entramos al metodo");
    this.validaciontipousuario();
    // this.navCtrl.navigateForward('/home');
  }

  async presentAlert(){
    const alert = await this.alertController.create({
      header: 'Error Login',
      subHeader: 'Infomación : ',
      message: 'Usuario son incorrecto',
      buttons: ['Aceptar'],
    });
    await alert.present();
  }

}
