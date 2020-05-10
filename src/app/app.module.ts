import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/navBar/menu/menu.component';
import { DesplegableComponent } from './components/navBar/desplegable/desplegable.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    DesplegableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
