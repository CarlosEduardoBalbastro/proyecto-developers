import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { ProyectosDestacados } from './pages/proyectos-destacados/proyectos-destacados';
import { Presupuestos } from './pages/presupuestos/presupuestos';
import { PresupuestosWeb } from './pages/presupuestos-web/presupuestos-web';
import { PresupuestosRedes } from './pages/presupuestos-redes/presupuestos-redes';
import { PresupuestosFotos } from './pages/presupuestos-fotos/presupuestos-fotos';
import { PresupuestosCatalogos } from './pages/presupuestos-catalogos/presupuestos-catalogos';
import { Promos } from './pages/promos/promos';
import { SobreMi } from './pages/sobre-mi/sobre-mi';
import { TerminosCondiciones } from './pages/terminos-condiciones/terminos-condiciones';
import { ConvertidorDolar } from './pages/convertidor-dolar/convertidor-dolar';
import { Pagina404 } from './pages/pagina404/pagina404';




export const routes: Routes = [
    { path: '', component: Home },
    { path: 'proyectos-destacados', component: ProyectosDestacados },
    { path: 'presupuestos', component: Presupuestos },
    { path: 'presupuestos-web', component: PresupuestosWeb },
    { path: 'presupuestos-redes', component: PresupuestosRedes },
    { path: 'presupuestos-fotos', component: PresupuestosFotos },
    { path: 'presupuestos-catalogos', component: PresupuestosCatalogos },
    { path: 'promos', component: Promos },
    { path: 'sobre-mi', component: SobreMi },
    { path: 'terminos-condiciones', component: TerminosCondiciones },
    { path: 'convertidor-dolar', component: ConvertidorDolar },
    { path: '**', component: Pagina404 },
  
];
