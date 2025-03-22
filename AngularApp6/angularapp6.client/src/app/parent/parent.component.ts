import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent {
  item = ['item1', 'item2', 'item3'];

  addItem(newItem: string) {
    this.item.push(newItem);
  }
}
