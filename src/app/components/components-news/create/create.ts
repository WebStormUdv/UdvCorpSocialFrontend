import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-create-news',
  imports: [],
  templateUrl: './create.html',
  styleUrl: './create.scss',
})
export class CreateNews {
  @Output() eventChangeState = new EventEmitter<boolean>();

  public changeState() {
    this.eventChangeState.emit(false);
  }
}
