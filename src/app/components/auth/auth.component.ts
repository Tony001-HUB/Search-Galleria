import {Component, Inject, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import {IAUTH_SERVICE_TOKEN, IMAGE_SERVICE_TOKEN} from "../../tokens/injection-tokens";
import {IImageService} from "../../services/i-image-service";
import {IAuthService} from "../../services/i-auth-service";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  form: FormGroup;
  submitted = false;

  constructor(
    private router: Router,
    @Inject(IAUTH_SERVICE_TOKEN) private iAuthService: IAuthService) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required, Validators.minLength(6)]),
    });
  }

  submit(): void {
    if (this.form.invalid) {
      return;
    }
    this.submitted = true;

    const user = {
      email: this.form.value.email,
      password: this.form.value.password,
      returnSecureToken: true
    };
    this.iAuthService.login$(user).subscribe( res => {
      this.form.reset();
      this.router.navigate(['/bookmark']);
      this.submitted = false;
      },
      () => { this.submitted = false; alert('Введен неправильный email или password'); }
    );
  }

}
