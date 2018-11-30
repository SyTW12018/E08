import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditComponent } from './edit.component';
import { ROUTES } from '../../app.module';

import { FormBuilder } from '@angular/forms';
import { IssueService } from '../../issue.service';
import { By } from '@angular/platform-browser';



describe('Routes', () => {
  it('Should exist route actualizar/:id', () => {
    expect(ROUTES).toContain({
      path: 'actualizar/:id',
      component: EditComponent
    });
  });
});


// describe('Form tests', () => {

//   let component: EditComponent;


//   beforeEach(() => {
//     component = new EditComponent(new FormBuilder());
//   });

//   it('Debe de existir un formulario con dos campos: email y contrasena', () => {
//     expect(component.form.contains('email')).toBeTruthy();
//     expect(component.form.contains('contrasena')).toBeTruthy();
//   });

// });


