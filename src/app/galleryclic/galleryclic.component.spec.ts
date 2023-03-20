import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryclicComponent } from './galleryclic.component';

describe('GalleryclicComponent', () => {
  let component: GalleryclicComponent;
  let fixture: ComponentFixture<GalleryclicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GalleryclicComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GalleryclicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
