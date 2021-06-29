import {Component, HostListener, OnInit} from '@angular/core';
import { Subject } from 'rxjs';
import {Router} from "@angular/router";
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-tracking-user-activity',
  templateUrl: './tracking-user-activity.component.html',
  styleUrls: ['./tracking-user-activity.component.css']
})
export class TrackingUserActivityComponent implements OnInit {

  ngOnInit(): void {
  }
  userActivity;

  userInactive: Subject<any> = new Subject();
  constructor(private authService: AuthService, private router: Router) {
    if(this.authService.isAuthenticated()){
      this.setTimeout();
    }
    this.userInactive.subscribe(() => this.authService.logout());
  }

  setTimeout() {
    this.userActivity = setTimeout(() => this.userInactive.next(undefined), 20000);
  }

  @HostListener('window:mousemove') refreshUserState() {
    clearTimeout(this.userActivity);
    this.setTimeout();
  }

}
