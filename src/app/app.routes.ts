import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Pagina404 } from './pages/pagina404/pagina404';

export const routes: Routes = [
    { path: '', component: Home },
    { path: '404', component: Pagina404 },
    { path: '**', redirectTo: '404' }
];
