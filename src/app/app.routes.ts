import { Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LogincomponentComponent } from './logincomponent/logincomponent.component';


export const routes: Routes = [
    {path: 'login', component: LogincomponentComponent},
    {path: 'register', component: RegisterComponent}
];
