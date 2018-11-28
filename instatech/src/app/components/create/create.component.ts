import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { IssueService } from '../../issue.service';
import { FormsModule, FormGroup, FormControl, Validators, ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})

export class CreateComponent implements OnInit {

  myLogin: FormGroup;
  nombre: String;
  apellido1: String;
  apellido2: String;  
  fecha: String;
  contrasena: String;
  correo: String;  

  constructor(private fb: FormBuilder, private issueService: IssueService) { 

    this.myLogin = new FormGroup({
      nombre: new FormControl('', [Validators.required]),
      apellido1: new FormControl(''),
      apellido2: new FormControl(''),
      fecha: new FormControl(''),
      contrasena: new FormControl(''),
      correo: new FormControl('')
    });    

   }


  addIssue(router: Router) {
    this.issueService.addIssue(this.nombre, this.apellido1, this.apellido2, this.fecha, this.contrasena, this.correo).subscribe(() => {
      router.navigate(['/usuarios']);
    });
  }

  ngOnInit() {
   
  }

}
