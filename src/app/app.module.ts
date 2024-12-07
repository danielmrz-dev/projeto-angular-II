import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { AngularMaterialModule } from './components/angular-material/angular-material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PerfumeCardComponent } from './components/perfume-card/perfume-card.component';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { FooterComponent } from './components/footer/footer.component';
import { ItemAddedDialogComponent } from './components/item-added-dialog/item-added-dialog.component';
import { MatDialogContent } from '@angular/material/dialog';
import { MatBadgeModule } from '@angular/material/badge';
import { MatMenuModule } from '@angular/material/menu';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { CadastroPerfumeComponent } from './pages/cadastro-perfume/cadastro-perfume.component';
import { NaoEncontradoComponent } from './pages/nao-encontrado/nao-encontrado.component';
import { PerfumesListComponent } from './pages/perfumes-list/perfumes-list.component';
import { MatButtonModule } from '@angular/material/button';
import { CardsContainerComponent } from './components/cards-container/cards-container.component';
import { EmailValidatorDirective } from './validators/email-validator.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CardsContainerComponent,
    PerfumeCardComponent,
    FooterComponent,
    ItemAddedDialogComponent,
    LoginPageComponent,
    CadastroPerfumeComponent,
    NaoEncontradoComponent,
    PerfumesListComponent,
    EmailValidatorDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularMaterialModule,
    ReactiveFormsModule,
    FormsModule,
    MatDialogContent,
    MatBadgeModule,
    MatMenuModule,
    MatButtonModule,
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync(),
    provideHttpClient(withFetch()),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
