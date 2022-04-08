// este archivo tiene una sintaxis particular
// ng2 y despues seleccionar routes si tenemos el bootstrap instalado

import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { AboutComponent } from './components/about/about.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroeComponent } from "./components/heroe/heroe.component";
import { BusquedaComponent } from "./components/busqueda/busqueda.component";



const APP_ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'heroes', component: HeroesComponent },
    { path: 'heroe/:id', component: HeroeComponent },
    { path: 'buscar/:termino', component: BusquedaComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'home'}
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, { useHash:true});
// el usehash hace mas eficiente, como que numera las páginas, podria causar un problema y que se tuviera uqe reiniciar la aplicacion