import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DamagedSkinComponent } from './damaged-skin.component';

describe('DamagedSkinComponent', () => {
  let component: DamagedSkinComponent;
  let fixture: ComponentFixture<DamagedSkinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DamagedSkinComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DamagedSkinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
