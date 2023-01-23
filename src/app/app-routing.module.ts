import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},// cualquier url redirigir a Home
  {path:'login',component:LoginComponent}, //cualquier url redirigir a Login
  {path:'',component:RegisterComponent},//cualquier url redirigir a Register
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
