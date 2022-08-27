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

UsuarioP = new FormGroup({
  userP: new FormControl('', [Validators.required, Validators.minLength(4)]),
  passwordP: new FormControl('', [Validators.required, Validators.minLength(8)]),
});

constructor(private navCtrl: NavController,private router: Router) { }

sendDetailsWithState() {
  let navigationExtras: NavigationExtras = {
    state: {user: this.UsuarioP.value.userP}
    };
    this.router.navigate(['/mpasajero'],navigationExtras);      
}

InfoaMpasajero(){
  console.log("Funciona");
  this.sendDetailsWithState();
}

}
