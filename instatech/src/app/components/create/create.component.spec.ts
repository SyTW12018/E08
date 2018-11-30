import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ROUTES } from '../../app.module';
import { CreateComponent } from './create.component';


  describe('Routes', () => {
    it('Should exist route registro', () => {
      expect(ROUTES).toContain({
        path: 'registro',
        component: CreateComponent
      });
    });
  });



