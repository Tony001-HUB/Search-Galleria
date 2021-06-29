import {Component, HostListener, Inject, OnInit} from '@angular/core';
import { Subject } from 'rxjs';
import {IAUTH_SERVICE_TOKEN} from "../../tokens/injection-tokens";
import {IAuthService} from "../../services/i-auth-service";
import {Router} from "@angular/router";

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
  constructor(@Inject(IAUTH_SERVICE_TOKEN) private iAuthService: IAuthService, private router: Router,) {
    console.log(iAuthService.isAuthenticated());
    if(iAuthService.isAuthenticated()){
      this.setTimeout();
      this.userInactive.subscribe(() => {iAuthService.logout(); this.router.navigate(['/auth']);});
    }
  }

  setTimeout() {
    this.userActivity = setTimeout(() => this.userInactive.next(undefined), 60000);
  }

  @HostListener('window:mousemove') refreshUserState() {
    clearTimeout(this.userActivity);
    this.setTimeout();
  }

}
