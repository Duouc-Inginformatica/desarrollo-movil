import { Component, OnInit } from '@angular/core';
import { AlertController,NavController  } from '@ionic/angular';//constructor asociado al envio de info
import { FormControl,FormGroup,Validators   } from '@angular/forms';//import que permite funcionamiento del formulario
import { Router,NavigationExtras } from '@angular/router';//permite que funcione las f.de envio de info


@Component({
  selector: 'app-login1',
  templateUrl: './login1.page.html',
  styleUrls: ['./login1.page.scss'],
})
export class Login1Page {
  
  UsuarioC = new FormGroup({
    userC: new FormControl('', [Validators.required, Validators.minLength(4)]),
    passwordC: new FormControl('', [Validators.required, Validators.minLength(8)]),
  });
  
  constructor(private navCtrl: NavController,private router: Router) { }
  
  sendInfo() {
    let navigationExtras: NavigationExtras = {
      state: {user: this.UsuarioC.value.userC}
      };
      this.router.navigate(['/mconductor'],navigationExtras);      
  }
  
  InfoaMconductor(){
    console.log("Funciona");
    this.sendInfo();
  }
  
  }