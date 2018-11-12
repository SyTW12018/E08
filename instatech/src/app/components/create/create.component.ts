import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IssueService } from '../../issue.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  createForm: FormGroup;

  constructor(private issueService: IssueService, private fb: FormBuilder, private router: Router) {
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
      this.router.navigate(['/usuarios']);
    });
  }

  ngOnInit() {
  }

}
