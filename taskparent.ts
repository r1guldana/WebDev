import { Component } from '@angular/core';
import { Child } from './task001';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [Child],
    template: `
    <app-child (addItemEvent)="addItem($event)"></app-child>

    <p>🐢 all the way down {{ items.length }}</p>
  `
})
export class App {

    items: string[] = [];

    addItem(item: string) {
        this.items.push(item);
    }
}
