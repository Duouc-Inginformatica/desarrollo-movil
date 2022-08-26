import { Component, OnInit } from '@angular/core';
import { AlertController,NavController  } from '@ionic/angular';//constructor asociado al envio de info
import { FormControl,FormGroup,Validators   } from '@angular/forms';//import que permite funcionamiento del formulario
import { Router,NavigationExtras } from '@angular/router';//permite que funcione las f.de envio de info


@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})

export class RegistroGeneral  {
    
    usuario = new FormGroup({
      user: new FormControl('',[Validators.required, Validators.minLength(4),Validators.maxLength(8)]),
      Nombre: new FormControl ('',[Validators.required, Validators.minLength(3), Validators.maxLength(10)]),
      Apellido: new FormControl ('',[Validators.required, Validators.minLength(3), Validators.maxLength(10)]),
      rut: new FormControl(''),
      sede:new FormControl('',[Validators.maxLength(3)]),
      pass: new FormControl('',[Validators.required, Validators.minLength(4),Validators.maxLength(4)]),
    });
  
  constructor() { }

 

}
