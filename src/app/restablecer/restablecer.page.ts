import { Component, OnInit } from '@angular/core';
import { AlertController,NavController  } from '@ionic/angular';//constructor asociado al envio de info
import { FormControl,FormGroup,Validators   } from '@angular/forms';//import que permite funcionamiento del formulario
import { Router,NavigationExtras } from '@angular/router';//permite que funcione las f.de envio de info


@Component({
  selector: 'app-restablecer',
  templateUrl: './restablecer.page.html',
  styleUrls: ['./restablecer.page.scss'],
})
export class RestablecerPage {

  email = new FormGroup({
    correo: new FormControl('',[Validators.required,Validators.email])
  })

<<<<<<< HEAD
  constructor(private navCtrl: NavController,private router: Router, private alertController: AlertController) { } 



  Fboton(){
    this.presentAlert();
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


  
=======
  constructor(private navCtrl: NavController,private router: Router) { } 
>>>>>>> 7756f45 (v2 logica registro y logica restablecer)

  

}
