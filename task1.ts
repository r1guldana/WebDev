import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    template: `
        <h1>Hello {{ city }}</h1>
        <p *ngIf="isLoggedIn">Welcome back, Friend!</p>

        <p>Server status: <span *ngIf="isServerRunning">Yes, running</span></p>

        <ul>
            <li *ngFor="let os of operatingSystems">{{ os.name }}</li>
        </ul>

        <ul>
            <li *ngFor="let user of users">{{ user.name }}</li>
        </ul>

        <div [contentEditable]="isEditable">Editable content</div>

        <button (click)="greet()">Greet</button>

    `,
    styleUrls: ['app.css'],
})
export class App {
    city = 'San Francisco';
    isLoggedIn = true;
    isServerRunning = true;
    isEditable = true;

    operatingSystems = [
        { id: 'win', name: 'Windows' },
        { id: 'osx', name: 'MacOS' },
        { id: 'linux', name: 'Linux' },
    ];

    users = [
        { id: 0, name: 'Sarah' },
        { id: 1, name: 'Amy' },
        { id: 2, name: 'Rachel' },
        { id: 3, name: 'Jessica' },
        { id: 4, name: 'Poornima' },
    ];

    greet() {
        console.log('Hello, there 👋');
    }
}
