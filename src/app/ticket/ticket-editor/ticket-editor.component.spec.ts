import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketEditorComponent } from './ticket-editor.component';

describe('TicketEditorComponent', () => {
  let component: TicketEditorComponent;
  let fixture: ComponentFixture<TicketEditorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
    imports: [TicketEditorComponent]
});
    fixture = TestBed.createComponent(TicketEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
