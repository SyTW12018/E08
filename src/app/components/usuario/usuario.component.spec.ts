import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ROUTES } from '../../app.module';
import { UsuarioComponent } from './usuario.component';

describe('UsuarioComponent', () => {
  let component: UsuarioComponent;
  let fixture: ComponentFixture<UsuarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsuarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});


describe('Routes', () => {
  it('Should exist route usuario', () => {
    expect(ROUTES).toContain({
      path: 'usuario',
      component: UsuarioComponent
    });
  });
});

