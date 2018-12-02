import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { IssueService } from '../../issue.service';
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


  constructor(
    private issueService: IssueService,
    private router: Router,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private toastr: ToastrService) {
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

    this.loginIssue();

  }


  loginIssue() {

    // CORREO
    // console.log('Array Completo', document.getElementById('correo'));
    this.correo_usuario = document.getElementById('correo')['value'];
    // console.log('valor solo', this.correo_usuario);

    // CONTRASEÑA
    // console.log('Array Completo', document.getElementById('contrasena'));
    const contrasena = document.getElementById('contrasena')['value'];
    // console.log('valor solo', this.contrasena_usuario);

    if ((contrasena !== '') && (this.correo_usuario !== '')) {

      this.route.params.subscribe(() => {
        this.issueService.getIssues().subscribe(res => {
          this.issue = res;
          // console.log('TODOS LOS USUARIOS', this.issue);
          const correo = this.issue.filter(correos => correos.correo === this.correo_usuario);
          // console.log('Contraseña de PRUEBA', correo[0]['contrasena']);
          // console.log('Email', correo);

          const found = correo.find(function (element) {
            return element = '[';
          });

          // console.log('Email PRUEBBA', lol);
          if (found) {
            // console.log("LOL");
            this.contrasena_usuario = correo[0]['contrasena'];
            console.log('Contraseña', this.contrasena_usuario);

            if (contrasena === (this.contrasena_usuario)) {
              this.toastr.success('Se ha iniciado sesión con éxito', 'Bienvenido');
              this.router.navigate(['/usuario/']);
            } else {
              this.toastr.error('La contraseña introducida es incorrecta', 'Error');
            }
          } else {
            this.toastr.error('El correo introducido no existe', 'Error');
          }
        });
      });


    } else {
      this.toastr.error('Campos vacíos', 'Error');
    }
  }
}
