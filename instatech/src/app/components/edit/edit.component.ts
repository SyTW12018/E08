import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { MatSnackBar } from '@angular/material';

import { IssueService } from '../../issue.service';
import { Issue } from '../../issue.model';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  id: String;
  issue: any = {};
  updateForm: FormGroup;

  // tslint:disable-next-line:max-line-length
  constructor(private issueService: IssueService, private router: Router, private route: ActivatedRoute, private snackBar: MatSnackBar, private fb: FormBuilder) {
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

  updateIssue(nombre,apellido1,apellido2,fecha,contrasena,correo) {
    this.issueService.updateIssue(this.id, nombre, apellido1, apellido2, fecha, contrasena, correo).subscribe(() => {
      this.snackBar.open('Datos actualizados con éxito', 'Aceptar', {
        duration: 3000,
      });
      this.router.navigate(['/usuarios']);
  });

  }

}
