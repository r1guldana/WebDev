import { Component, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-child',
    template: `
    <button class="btn" (click)="addItem()">Add Item</button>
  `,
    styles: [`
    .btn {
      padding: 5px;
    }
  `]
})
export class Child {

    @Output() addItemEvent = new EventEmitter<string>();

    addItem() {
        this.addItemEvent.emit('🐢');
    }
}
