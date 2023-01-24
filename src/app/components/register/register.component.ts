import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public formRegistro !: FormGroup;
  constructor( private userService:UsuariosService, private router:Router, private formBuilder:FormBuilder) { 
    
  }

  ngOnInit(): void {
    this.formRegistro = this.formBuilder.group({
      email:['',[
        Validators.required,
        Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/)
      ]] ,
      password:['',[
        Validators.required,
        Validators.minLength(8)
      ]]
    })
  }

  onSubmit(){

    this.userService.registrar(this.formRegistro.value)
    .then( response => {
      console.log(response)
      this.router.navigate(['/login']);
    })
    .catch( error => console.log(error));

  }
}
