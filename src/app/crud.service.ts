import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  //variable para los campos del formulario añadir
  userData:any;

  constructor(private http:HttpClient) { }

  //recogemos los detalles de los usuarios
  public getusers(){        
          return this.http.get('http://localhost/users.php');
  }

  //añadir usuario nuevo    
  public adduser(userData:any){
      return this.http.post('http://localhost/users.php/', userData)
        .subscribe(
          (res: Response) => {
              this.getusers();
        });
      }
}
