//import { Component, EventEmitter } from '@angular/core';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {
  @Output() newItemEvent = new EventEmitter<String>();
  addNewItem(value: string) {
    this.newItemEvent.emit(value);
  }
}
