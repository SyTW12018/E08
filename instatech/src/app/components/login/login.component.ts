import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { IssueService } from '../../issue.service';
import { Issue } from '../../issue.model';

import { filter } from 'rxjs/operators';

import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  correo: String;
  correo_usuario: String;
  contrasena_usuario: String;
  issue: any = {};
  loginForm: FormGroup;
  form: FormGroup;
  // tslint:disable-next-line:max-line-length
  constructor(private issueService: IssueService, private router: Router, private route: ActivatedRoute, private fb: FormBuilder, private toastr: ToastrService) {
    this.createForm();
  }

  createForm() {
    this.loginForm = this.fb.group({
      correo: ['', Validators.required],
      contrasena: ['', Validators.required]
    });

  }

  ngOnInit() {
  }


  animacion() {
    const elem = document.getElementById('myBar');
    let width = 1;
    const id = setInterval(frame, 8);
    function frame() {
      if (width >= 100) {
        clearInterval(id);
      } else {
        width++;
        elem.style.width = width + '%';
      }
    }

  }


  loginIssue(correo, contrasena) {

    console.log('Probando', this.loginForm.get('correo').value);
    this.correo_usuario = this.loginForm.get('correo').value;

    this.route.params.subscribe(params => {

      console.log('Probando 2', this.correo_usuario);

      this.issueService.getIssues().subscribe(res => {
        this.issue = res;

        // this.correo = res.filter(
        //   busca => busca.correo === this.correo_usuario);
        // console.log('Prueba 2.1', this.correo[0][contrasena]);

        this.contrasena_usuario = this.correo[0][contrasena];
        console.log('Prueba 2.12', contrasena);
        console.log('Por favor', this.contrasena_usuario);
        if (contrasena === (this.contrasena_usuario)) {

          this.toastr.success('Se ha iniciado sesión con éxito', 'Bienvenido');
          this.router.navigate(['/usuario/']);

        } else {

          this.toastr.error('La contraseña o usuario son incorrectos', 'Error');
        }

      });

    });

  }

}
