import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormsModule, FormGroup, FormControl, Validators, ReactiveFormsModule, FormBuilder } from '@angular/forms';

import { MatSnackBar } from '@angular/material';

import { IssueService } from '../../issue.service';
import { Issue } from '../../issue.model';

// import { filter } from 'rxjs/operators';
import { first } from 'rxjs/operators';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  correo: String;
  correo_usuario: String;
  contrasena_usuario: String;
  issue: any = {};


  constructor(private fb: FormBuilder, private issueService: IssueService) { }





  createForm() {
    this.loginForm = new FormGroup({
      correo: new FormControl('', [Validators.required]),
      contrasena: new FormControl('', [Validators.required])
    });
  }

  ngOnInit() {
  }

  loginIssue(router: Router, route: ActivatedRoute, snackBar: MatSnackBar, correo, contrasena) {

    console.log("Probando", this.loginForm.get('correo').value);
    this.correo_usuario = this.loginForm.get('correo').value;

    route.params.subscribe(params => {

      // console.log( "Probando 2", this.correo_usuario);

      this.issueService.getIssues().subscribe(res => {
        this.issue = res;
        // this.correo = res.filter(
        //   busca => busca.correo === this.correo_usuario);
        //  console.log("Prueba 2.1", this.correo[0].contrasena);

        // this.contrasena_usuario = this.correo[0].contrasena;
        //  console.log("Prueba 2.12", contrasena);
        //  console.log("Por favor", this.contrasena_usuario )
        if (contrasena === (this.contrasena_usuario)) {
          snackBar.open('Se ha iniciado sesión con éxito', 'Aceptar', {
            duration: 4000,
          });
          router.navigate(['/usuario/']);
        } else {
          snackBar.open('La contraseña o usuario son incorrectos.', 'Aceptar', {
            duration: 4000,
          });
        }

      });

    });

  }

}