import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-create-card',
  templateUrl: './create-card.component.html',
  styleUrl: './create-card.component.scss'
})
export class CreateCardComponent{

  @Output() eventChageState = new EventEmitter<boolean>()

  public changeState() {
    this.eventChageState.emit(false)
  }
}