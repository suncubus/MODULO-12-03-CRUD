import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  //variable para los campos del formulario añadir
  userData:any;
  singleuserdata:any;

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
      
  //eliminar usuario
  public deleteuser(userid){
      return this.http.post('http://localhost/users.php/', userid)
      .subscribe((res: Response) => {

      });
  }

  //Ver usuario
  public getsingleuser(userid)
  {
    return this.http.post('http://localhost/users.php/', userid)
    .subscribe((res: Response) => {
      this.singleuserdata = res[0];   
     
      
    });
  }
  //Modificar
  public updateuser(userid){
      return this.http.post('http://localhost/users.php/', userid)
        .subscribe((res: Response) => {

        });
  }

}
