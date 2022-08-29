import { Component, OnInit } from '@angular/core';
import { AlertController,NavController  } from '@ionic/angular';//constructor asociado al envio de info
import { FormControl,FormGroup,Validators   } from '@angular/forms';//import que permite funcionamiento del formulario
import { Router,NavigationExtras } from '@angular/router';//permite que funcione las f.de envio de info



@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})

export class RegistroPage  {
    
    usuario = new FormGroup({
      user: new FormControl('',[Validators.required, Validators.minLength(4),Validators.maxLength(8)]),
      Nombre: new FormControl ('',[Validators.required, Validators.minLength(3), Validators.maxLength(10)]),
      Apellido: new FormControl ('',[Validators.required, Validators.minLength(3), Validators.maxLength(10)]),
      correo: new FormControl('', [Validators.required, Validators.email]),
      rut: new FormControl(''),
      sede:new FormControl('',[Validators.maxLength(3)]), 
      pass: new FormControl('',[Validators.required, Validators.minLength(4),Validators.maxLength(4)]),
      
    });


  
    constructor(private navCtrl: NavController,private router: Router) { } 

    
    sendDetailsWithState() {
      let navigationExtras: NavigationExtras = {
        state: {user: this.usuario.value.user}
        };
        this.router.navigate(['/registro-v'],navigationExtras);      
    }

    filterusers(){
      let cap:boolean = true;
      if(true){
        console.log('validado')
        this.router.navigate(['/registro-v']);
      }else{
        this.InfoaMconductor()
      }
    }

    //funcion para enviar a registro vehicular o main pasajero.
   /*   FilterUsers(){
      if(){
        console.log('validado')
        this.router.navigate(['/mpasajero']);
      }else{
        this.InfoaMconductor()
      }
    }  */
  
    //Metodo para navegar desde un metodo llamado desde el html
    InfoaMconductor(){
      console.log("entramos al metodo");
      this.sendDetailsWithState();
      // this.navCtrl.navigateForward('/home');
    }

    

}
