import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


import { IssueService } from '../../issue.service';
import { Issue } from '../../issue.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})

export class EditComponent implements OnInit {

  id: String;
  issue: any = {};
  updateForm: FormGroup;
  title: string;

  // tslint:disable-next-line:max-line-length
  constructor(private issueService: IssueService, private router: Router, private route: ActivatedRoute, private fb: FormBuilder, private toastr: ToastrService) {
    this.createForm();
  }

  createForm() {
    this.updateForm = this.fb.group({
      nombre: ['', Validators.required],
      apellido1: '',
      apellido2: '',
      fecha: '',
      contrasena: '',
      correo: ''
    });
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params.id;
      this.issueService.getIssueById(this.id).subscribe(res => {

        this.issue = res;
        this.updateForm.get('nombre').setValue(this.issue.nombre);
        this.updateForm.get('apellido1').setValue(this.issue.apellido1);
        this.updateForm.get('apellido2').setValue(this.issue.apellido2);
        this.updateForm.get('fecha').setValue(this.issue.fecha);
        this.updateForm.get('contrasena').setValue(this.issue.contrasena);
        this.updateForm.get('correo').setValue(this.issue.correo);
      });
    });

  }




  updateIssue(nombre, apellido1, apellido2, fecha, contrasena, correo) {
    this.issueService.updateIssue(this.id, nombre, apellido1, apellido2, fecha, contrasena, correo).subscribe(() => {

    this.toastr.success('Se han actualizado los datos con éxito', 'Correcto');

      this.router.navigate(['/inicio']);
    });
  }


  respuesta_email(email) {

    if (this.validar_email(email)) {

      // alert('El email ' + email + ' es correcto');
    } else {

      this.toastr.error('El email no es correcto', 'Error');
    }
  }


  // COMPROBACIONES HTML

  // --------------------------------------------------------------------------------//

  validar_email(email) {
    const regex = /^([a-zA-Z0-9.-])+@(([a-zA-Z0-9-])+.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email) ? true : false;
  }


  // --------------------------------------------------------------------------------//


  // MENSAJE CONTRASEÑA
  mensaje_contrasenia_dentro() {

    // Mostrar el mensaje cuando esta activo
    document.getElementById('mensaje').style.display = 'block';

    const myInput = document.getElementById('contrasena');
    const letra = document.getElementById('letra');
    const mayuscula = document.getElementById('mayuscula');
    const numero = document.getElementById('numero');
    const length = document.getElementById('length');

    // Cuando se empieza a escribir la contraseña
    myInput.onkeyup = function () {

      // Validar letras minusculas
      const lowerCaseletras = /[a-z]/g;
      if (myInput['value'].match(lowerCaseletras)) {
        letra.classList.remove('invalid');
        letra.classList.add('valid');
        console.log('Verificado');
      } else {
        letra.classList.remove('valid');
        letra.classList.add('invalid');
        console.log('Falso');
      }

      // Validar letras mayusculas
      const upperCaseletras = /[A-Z]/g;
      if (myInput['value'].match(upperCaseletras)) {
        mayuscula.classList.remove('invalid');
        mayuscula.classList.add('valid');
      } else {
        mayuscula.classList.remove('valid');
        mayuscula.classList.add('invalid');
      }

      // Validate numeros
      const numeros = /[0-9]/g;
      if (myInput['value'].match(numeros)) {
        numero.classList.remove('invalid');
        numero.classList.add('valid');
      } else {
        numero.classList.remove('valid');
        numero.classList.add('invalid');
      }

      // Validar tamaño (8 caracteres en este caso)
      if (myInput['value'].length >= 8) {
        length.classList.remove('invalid');
        length.classList.add('valid');
      } else {
        length.classList.remove('valid');
        length.classList.add('invalid');
      }


    };
  }

  mensaje_contrasenia_fuera() {

    // Ocultar el mensaje cuando no esta activo
    document.getElementById('mensaje').style.display = 'none';

  }

}
