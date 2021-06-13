import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RomanService } from 'src/app/services/roman.service';

import { RomanComponent } from './roman.component';

describe('RomanComponent', () => {
  let component: RomanComponent;
  let fixture: ComponentFixture<RomanComponent>;
  let de: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RomanComponent],
      providers: [RomanService],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RomanComponent);
    component = fixture.componentInstance;
    de = fixture.debugElement;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Error should be empty at first', () => {
    component.ngOnInit();

    expect(component.error).toEqual('');
  });

  it("Should have h1 titled 'From Arabic to Roman'", () => {
    expect(de.query(By.css('h1')).nativeElement.innerText).toBe(
      'From Arabic to Roman'
    );
  });
});
