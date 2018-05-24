import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
const appRoutes: Routes = [
{ path: 'about', component: AboutComponent},
{ path: 'login', component: LoginComponent},

];
export const routing = RouterModule.forRoot(appRoutes);