import { Component, OnInit } from '@angular/core';

import { CrudService } from '../crud.service'; 

//ventana emergente
import Swal from 'sweetalert2/dist/sweetalert2.js';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})

export class UsersComponent implements OnInit {
  
  data = [];
  
  constructor( private crudservice: CrudService){
    this.loaddata();
  }
    
  //Obtener detalle de todos los usuarios  
  loaddata(){
      this.crudservice.getusers()
        .subscribe((res: any[])=>{          
          this.data = res;
        });
  }  
  //Eliminar usuario 
  deleteuser(id){
    if(confirm("Are you sure to delete?")) {
        // Inicializamos los parámetros del objeto
        var myFormData = new FormData();   
        
        // Comenzamos a asigna los parámetros
        myFormData.append('deleteid', id);
        this.crudservice.deleteuser(myFormData);
    
        //sweetalert mensaje en popup
        Swal.fire({
          title: 'Hurray!!',
          text:   "User has been deleted successfully",
          icon: 'success'
        });
      this.loaddata();
    }
  }

  
  ngOnInit(): void {
   
  }

}
