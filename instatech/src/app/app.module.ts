import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { AppComponent, SafePipe } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ListComponent } from './components/list/list.component';
import { CreateComponent } from './components/create/create.component';
import { EditComponent } from './components/edit/edit.component';


import { IssueService } from './issue.service';
import { LoginComponent } from './components/login/login.component';
import { UsuarioComponent } from './components/usuario/usuario.component';

import { FormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { InicioComponent } from './components/inicio/inicio.component';
import { AppWebComponent } from './components/app-web/app-web.component';
import { EventosComponent } from './components/eventos/eventos.component';
import { ProductosComponent } from './components/productos/productos.component';

import { CookieService } from 'ngx-cookie-service';
// import { CookieService } from 'angular2-cookie/services/cookies.service';



export const ROUTES: Routes = [
  { path: 'registro', component: CreateComponent},
  { path: 'actualizar/:id', component: EditComponent},
  { path: 'usuario/:correo', component: LoginComponent},
  { path: 'usuarios', component: ListComponent},
  { path: 'usuario', component: UsuarioComponent},
  { path: 'login', component: LoginComponent},
  { path: 'app', component: AppWebComponent},
  { path: 'inicio', component: InicioComponent},
  { path: 'eventos', component: EventosComponent},
  { path: 'productos', component: ProductosComponent},
  { path: '', redirectTo: 'inicio', pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    SafePipe,
    ListComponent,
    CreateComponent,
    EditComponent,
    LoginComponent,
    UsuarioComponent,
    InicioComponent,
    AppWebComponent,
    EventosComponent,
    ProductosComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES),
    ReactiveFormsModule,
    FormsModule,
    ToastrModule.forRoot()
  ],
  providers: [IssueService, CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
