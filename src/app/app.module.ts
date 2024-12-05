import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { AngularMaterialModule } from './components/angular-material/angular-material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CardsContainerComponent } from './components/cards-container/cards-container.component';
import { PerfumeCardComponent } from './components/perfume-card/perfume-card.component';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { FooterComponent } from './components/footer/footer.component';
import { ItemAddedDialogComponent } from './components/item-added-dialog/item-added-dialog.component';
import { MatDialogContent } from '@angular/material/dialog';
import { MatBadgeModule } from '@angular/material/badge';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { LoginPageComponent } from './components/login-page/login-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CardsContainerComponent,
    PerfumeCardComponent,
    FooterComponent,
    ItemAddedDialogComponent,
    LoginPageComponent
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
    MatButtonModule
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync(),
    provideHttpClient(withFetch())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
