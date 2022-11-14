import { Component, OnInit } from '@angular/core';
import { AlertController,NavController  } from '@ionic/angular';//constructor asociado al envio de info
import { FormControl,FormGroup,Validators   } from '@angular/forms';//import que permite funcionamiento del formulario
import { Router,NavigationExtras } from '@angular/router';//permite que funcione las f.de envio de info


@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.page.html',
  styleUrls: ['./registrar.page.scss'],
})
export class RegistrarPage {

  correop = 'correo@correo.cl';

  usuario = new FormGroup({
    userp: new FormControl('',[Validators.required]),
    
  });

  constructor(private navCtrl: NavController,private router: Router, private alertController: AlertController) { } 


  funcion1(){
    if('correo@correo.cl'===this.usuario.value.userp){
      this.presentAlert()
      console.log('funciona')
    }else{
      this.presentAlert2()
      console.log('no validado')
    }
  }


  Fboton(){
    this.funcion1();
  }



  //alerta de correo enviado
  async presentAlert(){
    const alert = await this.alertController.create({
      header: 'correo enviado',
      subHeader: 'Infomación : ',
      message: 'Revise su bandeja de email',
      buttons: ['Aceptar'],
    });
    await alert.present();
  }

  async presentAlert2(){
    const alert = await this.alertController.create({
      header: 'correo invalido',
      subHeader: 'Infomación : ',
      message: 'vuelva a escribir su correo',
      buttons: ['Aceptar'],
    });
    await alert.present();
  }
}
