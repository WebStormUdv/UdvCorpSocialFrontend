import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-create-card',
  templateUrl: './create-card.component.html',
  styleUrl: './create-card.component.scss',
})
export class CreateCardComponent {
  @Output() eventChangeState = new EventEmitter<boolean>();

  public changeState() {
    this.eventChangeState.emit(false);
  }
}
