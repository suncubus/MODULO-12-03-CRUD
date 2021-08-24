import { Component, OnInit } from '@angular/core';

import { CrudService } from '../crud.service'; 

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})

export class UsersComponent implements OnInit {
  
  data = [];
  
  constructor( private crudservice: CrudService){
    //Obtener detalle de todos los usuarios  
    this.crudservice.getusers().subscribe((res: any[])=>{          
      this.data = res;
    });
  }

  ngOnInit(): void {
  }

}
