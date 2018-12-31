import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UrlHandlingStrategy } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class IssueService {

  uri = 'http://localhost:4000';

  constructor(private http: HttpClient) { }

  getIssues() {
    return this.http.get(`${this.uri}/issues`);
  }


  getIssueById(id) {
    return this.http.get(`${this.uri}/issues/${id}`);
  }

  getIssueByCorreo(correo) {
    return this.http.get(`${this.uri}/issues/usuario/${correo}`);
  }


  addIssue(nombre, apellido1, apellido2, fecha, contrasena, correo) {
    const issue = {
      nombre: nombre,
      apellido1: apellido1,
      apellido2: apellido2,
      fecha: fecha,
      contrasena: contrasena,
      correo: correo
    };
    return this.http.post(`${this.uri}/issues/add`, issue);
  }

  updateIssue(id, nombre, apellido1, apellido2, fecha, contrasena, correo) {
    const issue = {
      nombre: nombre,
      apellido1: apellido1,
      apellido2: apellido2,
      fecha: fecha,
      contrasena: contrasena,
      correo: correo
    };
    return this.http.post(`${this.uri}/issues/update/${id}`, issue);
  }

  deleteIssue(id) {
    return this.http.get(`${this.uri}/issues/delete/${id}`);
  }

}
