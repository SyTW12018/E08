import { Component, ViewEncapsulation, ViewChild, ElementRef, PipeTransform, Pipe, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';


import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { IssueService } from './issue.service';
import { filter } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';
// import { Script } from 'vm';

import { UsuarioComponent } from './components/usuario/usuario.component';

import { CookieService } from 'ngx-cookie-service';






@Pipe({ name: 'safe' })
export class SafePipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) { }
  transform(url) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'InstaTech';


  constructor(
    private issueService: IssueService,
    private router: Router,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private cookieService: CookieService,
    private toastr: ToastrService,
  ) {

  }

  ngOnInit(): void {

    this.comprueba();




    // user.DeactivateCookies();
    // user.DeleteCookies();
  }


  aparece() {


    var contenido = document.getElementById('contenido');

    const nombre = this.cookieService.get('Usuario_nombre');

    contenido.innerHTML = '<div id="bienvenida"> Bienvenid@ ' + nombre + ' </div>';
    document.getElementById('boton_cierre').style.display = 'block';


  }


  Desaparece() {

    var contenido = document.getElementById('contenido');
    var sesion = document.getElementById('sesion_id');

    contenido.innerHTML = "";
    sesion.innerHTML = "";


  }


  ActiveCookies(id, nombre, estado) {

    this.cookieService.set('Usuario_id', id);
    this.cookieService.set('Usuario_nombre', nombre);
    this.cookieService.set('Estado', estado);

    this.aparece();
    // console.log("Activado todo");

  }



  DeleteCookies() {
    this.cookieService.set('Estado', 'inactivo');
    this.cookieService.deleteAll('/');

    // console.log("Desactivado todo");
    // console.log(this.cookieService.get('Estado'));
    document.getElementById('boton_cierre').style.display = 'none';


  }



  comprueba() {

    var sesion = document.getElementById('boton_cierre');
    sesion.onclick = this.Desaparece;


    const estado = this.cookieService.get('Estado');

    // console.log("Comprobando todo");
    // console.log(this.cookieService.get('Estado'));

    if (estado === 'activo') {
      this.aparece();
      document.getElementById('boton_cierre').style.display = 'block';
    }else{
      document.getElementById('boton_cierre').style.display = 'none';

    }

   









  }

}

