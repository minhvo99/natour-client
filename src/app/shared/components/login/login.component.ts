import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '@app/core/services/auth.service';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  formUser!: FormGroup;
  $destroy = new Subject<void>();
  loginError = '';
  isLoading = false;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.formUser = this.formBuilder.group({
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: [
        '',
        Validators.compose([Validators.required, Validators.minLength(8)]),
      ],
    });
  }
  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.$destroy.next();
    this.$destroy.complete();
  }

  submit() {
    this.loginError = '';
    this.isLoading = true;
    if (this.formUser.invalid) return;
    const { email, password } = this.formUser.value;
    this.authService
      .login(email, password)
      .pipe(takeUntil(this.$destroy))
      .subscribe({
        next: () => {
          this.isLoading = false;
          this.router.navigate(['/tour']);
        },
        error: (err) => {
          this.isLoading = false;
          this.loginError = err;
        },
      });
  }
}
