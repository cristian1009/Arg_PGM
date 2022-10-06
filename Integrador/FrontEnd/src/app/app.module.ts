import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogoAPComponent } from './components/logo-ap/logo-ap.component';
import { AcercaDeComponent } from './components/acerca-de/acerca-de.component';
import { EducacionComponent } from './components/educacion/educacion.component';
import { ExperienciaLaboralComponent } from './components/experiencia-laboral/experiencia-laboral.component';
import { HysComponent } from './components/hys/hys.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { BannerComponent } from './components/banner/banner.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { ProyectosComponent } from './components/proyectos/proyectos.component';



@NgModule({
  declarations: [
    AppComponent,
    LogoAPComponent,
    AcercaDeComponent,
    EducacionComponent,
    ExperienciaLaboralComponent,
    HysComponent,
    FooterComponent,
    HeaderComponent,
    BannerComponent,
    ProyectosComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgCircleProgressModule.forRoot({})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
