import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginPageComponent } from './page/login-page/login-page.component';
import { HomePageComponent } from './page/home-page/home-page.component';
import { RegistrationPageComponent } from './page/registration-page/registration-page.component';
import { PinjamanPageComponent } from './page/pinjaman-page/pinjaman-page.component';

const routes: Routes = [
  { path: '', component: LoginPageComponent },
  { path: 'home', component: HomePageComponent },
  { path: 'registration', component: RegistrationPageComponent},
  { path: 'pinjaman', component: PinjamanPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
