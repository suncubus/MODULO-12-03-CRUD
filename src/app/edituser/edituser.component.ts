import { Component, OnInit, ViewChild, ElementRef, Renderer2  } from '@angular/core';

//ActivatedRoute modulo para obtener la id dinamica en la url
import {Router, ActivatedRoute, Params} from '@angular/router'; 

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CrudService } from '../crud.service'; 

@Component({
  selector: 'app-edituser',
  templateUrl: './edituser.component.html',
  styleUrls: ['./edituser.component.scss']
})
export class EdituserComponent implements OnInit {

    id:any;
    user:any;

    @ViewChild('editUser', { static: false }) editUser: ElementRef;

    constructor(private activatedRoute: ActivatedRoute, private crudservice: CrudService, private formBuilder: FormBuilder, private router: Router, private renderer: Renderer2) {

    //obtenemos id desde get
    this.id = this.activatedRoute.snapshot.paramMap.get('id');


    // Initializar los parámetros del objeto
    var myFormData = new FormData();
    
    // Asignamos parámetros

    myFormData.append('userid', this.id);

    //detalles del usuario tras la consulta 
    this.crudservice.getsingleuser(myFormData);
    setTimeout(()=>{ 
      this.user = this.crudservice.singleuserdata;

      this.editForm.controls["firstname"].setValue(this.user.username);
      this.editForm.controls["email"].setValue(this.user.email);
      
      //Mostramos el username a modificar
      /*const text = this.renderer.createText(this.user.username);
      this.renderer.appendChild(this.editUser.nativeElement, text);*/
      
    }, 100);
}

    //Editar usuario
    editForm: FormGroup;
    submitted = false;

    
    get f() { 
      return this.editForm.controls;
    }

    //validaciones
    onSubmit() {
      this.submitted = true;
      
      if (this.editForm.invalid) {
        return;
      }
    
      if(this.submitted)
      {
     
        var myFormData = new FormData();

      
        myFormData.append('updateUsername', this.editForm.value.firstname);
        myFormData.append('updateEmail', this.editForm.value.email);
        myFormData.append('updateid', this.user.id);

        this.crudservice.updateuser(myFormData);
        this.router.navigate([`/users`]);
      }
    }

    ngOnInit() {
 
      this.editForm = this.formBuilder.group({
        email: ['', [Validators.required, Validators.email]],firstname: ['', [Validators.required]]
      });
    }
    

}
