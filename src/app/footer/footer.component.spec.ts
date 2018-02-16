import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {FooterComponent} from './footer.component';
import {DebugElement} from '@angular/core';

describe('FooterComponent', () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;
  let element: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FooterComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    element = fixture.debugElement;
  });

  it('language changer has all 3 languages', () => {
    expect(element.nativeElement.textContent).toContain('Deutsch');
    expect(element.nativeElement.textContent).toContain('English');
    expect(element.nativeElement.textContent).toContain('Français');
  });

});
