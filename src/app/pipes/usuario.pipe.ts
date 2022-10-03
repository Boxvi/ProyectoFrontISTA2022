import { Pipe, PipeTransform } from '@angular/core';
import { Usuario } from '../models/usuario';

@Pipe({
  name: 'filterusuario'
})
export class UsuarioPipe implements PipeTransform {

  transform(usuarios: Usuario[], texto: string): Usuario[] {
    if(!texto){
      return usuarios
    }else{
      return usuarios.filter(user=>user.username?.toLocaleLowerCase().includes(texto.toLocaleLowerCase()));
    }
    
    
  }

}
