import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

}
/*
  userActivity;

  userInactive: Subject<any> = new Subject();
  constructor() {
    this.setTimeout();
    this.userInactive.subscribe(() => console.log('user has been inactive for 3s'));
  }

  setTimeout() {
    this.userActivity = setTimeout(() => this.userInactive.next(undefined), 3000);
  }

  @HostListener('window:mousemove') refreshUserState() {
    clearTimeout(this.userActivity);
    this.setTimeout();
  }
 */
