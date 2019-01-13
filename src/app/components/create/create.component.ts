import { Component, OnInit, ElementRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IssueService } from '../../issue.service';

import { Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  createForm: FormGroup;


  constructor(
    private issueService: IssueService,
    private fb: FormBuilder,
    private router: Router,
    @Inject(DOCUMENT) document,
    private toastr: ToastrService) {

    this.createForm = this.fb.group({
      nombre: ['', Validators.required],
      apellido1: '',
      apellido2: '',
      fecha: '',
      contrasena: '',
      correo: ''
    });

  }

  addIssue(nombre, apellido1, apellido2, fecha, contrasena, correo) {
    this.issueService.addIssue(nombre, apellido1, apellido2, fecha, contrasena, correo).subscribe(() => {
      this.toastr.success('Se ha creado el usuario con éxito', 'Correcto');
      this.router.navigate(['/login']);
    });
  }

  ngOnInit() {
  }

  // COMPROBACIONES HTML

  // --------------------------------------------------------------------------------//

  validar_email(email) {
    const regex = /^([a-zA-Z0-9.-])+@(([a-zA-Z0-9-])+.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email) ? true : false;
  }


  respuesta_email(email) {

    if (this.validar_email(email)) {

      // alert('El email ' + email + ' es correcto');
    } else {

      this.toastr.error('El email no es correcto', 'Error');
    }
  }

  // --------------------------------------------------------------------------------//

  validarFecha(fecha) {
    const re = /^[0-9][0-9]+-[0-9][0-9]+-[0-9][0-9][0-9][0-9]$/;
    return re.test(fecha) ? true : false;
  }

  // --------------------------------------------------------------------------------//

  validar_contrasena(contrasenia, contrasenia2) {
    if (contrasenia !== contrasenia2) {
      this.toastr.error('Las contraseñas deben coincidir', 'Error');
      return false;
    } else {
      // alert('Todo esta correcto');
      return true;
    }
  }

  // --------------------------------------------------------------------------------//

  respuesta_Fecha(fecha) {

    if (this.validarFecha(fecha)) {

      // alert('La fecha ' + fecha + ' es correcta');
    } else {
      this.toastr.error('La fecha ' + fecha + ' está incorrecta, debe ser en formato: (dd-mm-yyyy)', 'Error');    }
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
