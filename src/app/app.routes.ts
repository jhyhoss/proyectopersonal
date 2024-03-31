import { Routes } from '@angular/router';
import { InicioComponent } from './pagesinicio/inicio/inicio.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
  { path: 'inicio', component: InicioComponent,
  children:[
          { path: 'login', component: LoginComponent},
            ]


    },



];
