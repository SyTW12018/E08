import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListComponent } from './list.component';
import { ROUTES } from '../../app.module';


describe('Routes', () => {
  it('Should exist route usuarios', () => {
    expect(ROUTES).toContain({
      path: 'usuarios',
      component: ListComponent
    });
  });
});


