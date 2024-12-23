import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { CadastroPerfumeComponent } from './pages/cadastro-perfume/cadastro-perfume.component';
import { NaoEncontradoComponent } from './pages/nao-encontrado/nao-encontrado.component';

import { protectorGuard } from './protector/protector.guard';
import { CardsContainerComponent } from './components/cards-container/cards-container.component';

const routes: Routes = [
  { path: '', component: CardsContainerComponent },
  { path: 'login', component: LoginPageComponent },
  { path: 'cadastro', component: CadastroPerfumeComponent, canActivate: [protectorGuard] },
  { path: '**', component: NaoEncontradoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
