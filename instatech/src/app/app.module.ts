import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ListComponent } from './components/list/list.component';
import { CreateComponent } from './components/create/create.component';
import { EditComponent } from './components/edit/edit.component';

import { IssueService } from './issue.service';
import { LoginComponent } from './components/login/login.component';
import { UsuarioComponent } from './components/usuario/usuario.component';

import { FormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';

export const ROUTES: Routes = [
  { path: 'registro', component: CreateComponent},
  { path: 'actualizar/:id', component: EditComponent},
  { path: 'usuario/:correo', component: LoginComponent},
  { path: 'usuarios', component: ListComponent},
  { path: 'usuario', component: UsuarioComponent},
  { path: 'login', component: LoginComponent},
  { path: '', redirectTo: 'registro', pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    CreateComponent,
    EditComponent,
    LoginComponent,
    UsuarioComponent
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
  providers: [IssueService],
  bootstrap: [AppComponent]
})
export class AppModule { }
