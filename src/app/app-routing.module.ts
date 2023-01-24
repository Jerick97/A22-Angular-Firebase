import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './pages/home/home.component';
import { canActivate, redirectUnauthorizedTo } from '@angular/fire/auth-guard';

const routes: Routes = [
  {path:'home',component:HomeComponent, ...canActivate(() => redirectUnauthorizedTo(['/login']))}, //esta validación redirige a la ruta '/login' si el usuario no está autenticado.
  {path:'login',component:LoginComponent}, //redirige al login
  {path:'',component:RegisterComponent}, //redirige al Registro
  { path: '**', redirectTo: 'login' } //si se ingresa url invalida redirige al login
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
