import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';

import { ROUTES } from '../../app.module';


describe('Routes', () => {
  it('Should exist route usuario/:correo', () => {
    expect(ROUTES).toContain({
      path: 'usuario/:correo',
      component: LoginComponent
    });
  });
});

// describe('Unit testing- Form testing', () => {
//   let component: LoginComponent;

   
//   it('should create form with 2 controls', () => {
//     expect(component.loginForm.contains('corre')).toBe(true);
//     expect(component.loginForm.contains('contrasena')).toBe(true);
//   });
// });