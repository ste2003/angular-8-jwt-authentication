import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListNovedadComponent } from './list-novedad.component';

describe('ListNovedadComponent', () => {
  let component: ListNovedadComponent;
  let fixture: ComponentFixture<ListNovedadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListNovedadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListNovedadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
