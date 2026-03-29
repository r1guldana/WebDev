import { Component, input, output } from '@angular/core';

@Component({
    selector: 'app-user',
    template: `
    <p>Username: {{ username }}</p>
    <p *ngIf="occupation()">Occupation: {{ occupation() }}</p>
  `
})
export class User {
    username = 'youngTech';
    occupation = input<string>();
}

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
    incrementCountEvent = output<number>();

    addItem() {
        this.incrementCountEvent.emit(1);
    }
}

@Component({
    selector: 'app-parent',
    imports: [Child],
    template: `
        <app-child (incrementCountEvent)="addItem($event)"></app-child>
        <p>Count: {{ count }}</p>
    `
})
export class Parent {
    count = 0;

    addItem(value: number) {
        this.count += value;
    }
}
