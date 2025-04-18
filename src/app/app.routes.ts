import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { SearchPageComponent } from './pages/search-page/search-page.component';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
    {path:'home', component:HomePageComponent},
    {path:'login', component:LoginComponent},
    {path:'register', component:RegisterComponent},
    {path:'search', component:SearchPageComponent, canActivate:[authGuard]},
];
