import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '@app/core/services/auth.service';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;
  isLoading = false;
  $destroy = new Subject<void>();
  returnUrl: string | null = null;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || 'home';
    const PASSWORD_PATTERN = /^(?=.*[!@#$%^&*]+)[a-z0-9!@#$%^&*]{8,32}$/;
    this.registerForm = this.formBuilder.group({
      name: ['',Validators.required],
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: [
        '',
        Validators.compose([
          Validators.required,
          Validators.pattern(PASSWORD_PATTERN),
        ]),
      ],
      passWordConfirm: [
        '',
        Validators.compose([
          Validators.required,
          this.validateConfirmPassword(),
        ]),
      ],
    });
  }

  validateConfirmPassword() :ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null  => {
      let passWordConfirm = control.value;
      let password = this.registerForm?.get('password')?.value;
      return passWordConfirm === password ? null : { 'notSame': true };
    }
  }

  submit() {
    const user = this.registerForm.value;
    this.isLoading = true;
    this.authService
      .register(user)
      .pipe(takeUntil(this.$destroy))
      .subscribe({
        next: () => {
          this.isLoading = false;
        },
        error: (err: unknown) => {
          console.log(err);
          this.isLoading = false;
        },
        complete: () => {
          this.router.navigateByUrl(this.returnUrl!);
          this.registerForm.reset();
        }
      });
  }

  onNavigateToLogin() :void {
    this.router.navigateByUrl('login');
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.$destroy.next();
    this.$destroy.complete();
  }
}
