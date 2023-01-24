import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuariosService } from 'src/app/services/usuarios.service';
// ES6 Modules or TypeScript
import Swal from 'sweetalert2'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  showMenu = false;
  constructor(private usuarioService:UsuariosService, private router:Router) { }

  ngOnInit(): void {
  }
  
  toggleNavbar(){
    this.showMenu = !this.showMenu;
  }


  logout(){
    Swal.fire({
      title: '¿Estás seguro?',
      text: '¿Quieres cerrar sesión?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, cerrar sesión',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.value) {
        this.usuarioService.logout()
        .then( ()=> {
            this.router.navigate(['/login']);
        } )
        .catch( error => console.log(error))
      }
    });
  }
}
