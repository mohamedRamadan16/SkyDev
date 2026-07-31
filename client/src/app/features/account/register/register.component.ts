import { Component, inject } from '@angular/core';
import { AccountService } from '../../../core/services/account.service';
import { Router } from '@angular/router';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButton } from '@angular/material/button';
import { MatError, MatFormField, MatLabel } from '@angular/material/select';
import { MatInput } from '@angular/material/input';
import { MatCard } from '@angular/material/card';
import { SnackBarService } from '../../../core/services/snack-bar.service';
import { JsonPipe } from '@angular/common';
import { TextInputComponent } from "../../../shared/components/text-input/text-input.component";

@Component({
  selector: 'app-register',
  imports: [
    ReactiveFormsModule,
    MatInput,
    MatButton,
    MatLabel,
    MatFormField,
    MatCard,
    JsonPipe,
    MatError,
    TextInputComponent
],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  accountService = inject(AccountService)
  router = inject(Router)
  fb = inject(FormBuilder)
  snack = inject(SnackBarService)
  validationErrors?: string[]

  registerForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required]
  })

  onSubmit(){
    this.accountService.register(this.registerForm.value).subscribe({
      next: () => {
        this.snack.success("Register Successfull")
        this.router.navigateByUrl('account/login')
      },
      error: err => this.validationErrors = err
    })
  }

}
