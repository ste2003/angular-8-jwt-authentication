import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DetailsNovedadComponent } from './details-novedad.component';

describe('DetailsNovedadComponent', () => {
  let component: DetailsNovedadComponent;
  let fixture: ComponentFixture<DetailsNovedadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsNovedadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsNovedadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
