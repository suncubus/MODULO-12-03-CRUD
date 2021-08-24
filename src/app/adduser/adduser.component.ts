import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CrudService } from '../crud.service'; 
import { Router } from '@angular/router';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.scss']
})

export class AdduserComponent implements OnInit {

  registerForm: FormGroup;
  submitted = false;

  constructor( private crudservice: CrudService, private formBuilder: FormBuilder, private router: Router){}

  //Añadir acciones del formulario
  get f() {
     return this.registerForm.controls; 
  }

  //Envio del form
  onSubmit() {
    
    this.submitted = true;
    // detenerse aqui si los cambios del formulario son invalidos
    if (this.registerForm.invalid) {
        return;
    }
    //True si todos los campos están rellenos
    if(this.submitted)
    {
      
      // Inicializar los parámentros del objeto
       var myFormData = new FormData();
    
     // Comenzar a asignar los parámetros
    
        myFormData.append('myUsername', this.registerForm.value.firstname);
        myFormData.append('myEmail', this.registerForm.value.email);
    
        this.crudservice.adduser(myFormData); //llamar al servicio crud.service 
        this.router.navigate([`/users`]); // Después del submit redirige a la página users
    }
   
  }
    ngOnInit() {
      //Validaciones
      this.registerForm = this.formBuilder.group({
          email: ['', [Validators.required, Validators.email]],     
          firstname: ['', [Validators.required]]
      });
    }
  }
