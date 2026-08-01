import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { MatButton } from '@angular/material/button';
import { MatFormField, MatInput, MatLabel } from '@angular/material/input';
import { AccountService } from '../../../core/services/account.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatCard } from '@angular/material/card';

@Component({
  selector: 'app-login',
  imports: [
    ReactiveFormsModule,
    MatInput,
    MatButton,
    MatLabel,
    MatFormField,
    MatCard
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  protected fb = inject(FormBuilder)
  protected accountService = inject(AccountService)
  protected router = inject(Router)
  protected activatedRoute = inject(ActivatedRoute)

  returnUrl = '/shop'

  constructor(){
    const url = this.activatedRoute.snapshot.queryParams['returnUrl']
    if(url){
      this.returnUrl = url
    }
  }

  loginForm = this.fb.group({
    email: [''],
    password: ['']
  })

  onSubmit(){
    this.accountService.login(this.loginForm.value).subscribe({
      next: () => {
        this.accountService.getUserInfo().subscribe()
        this.router.navigateByUrl(this.returnUrl)
      }
    })
  }
}
