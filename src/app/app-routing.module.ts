import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './components/auth/auth.component';
import { PokemonListComponent } from './components/pokemon-list/pokemon-list.component';

const routes: Routes = [
  { path: 'auth', component: AuthComponent },
  { path: 'pokemon-list', component: PokemonListComponent },
  { path: 'pokemon-detail/:id', component: PokemonListComponent },
  { path: '', pathMatch: 'full', redirectTo: 'auth' },
  { path: '**', pathMatch: 'full', redirectTo: 'auth' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
