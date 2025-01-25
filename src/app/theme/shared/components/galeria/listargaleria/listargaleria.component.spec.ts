import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListargaleriaComponent } from './listargaleria.component';

describe('ListargaleriaComponent', () => {
  let component: ListargaleriaComponent;
  let fixture: ComponentFixture<ListargaleriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListargaleriaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListargaleriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
