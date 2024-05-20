import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidatorsService } from '../../../shared/service/validators.service';
import { EmailValidatorService } from '../../../shared/validators/email-validator.service';


@Component({
  templateUrl: './register-page.component.html',
  styles: ``
})

export class RegisterPageComponent {

  constructor(
    private fb: FormBuilder,
    private validatorService: ValidatorsService

  ) { }

  public myForm: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.pattern(this.validatorService.firstNameAndLastnamePattern)]],
    email: ['', [Validators.required, Validators.pattern(this.validatorService.emailPattern)],
      [new EmailValidatorService()]],
    username: ['', [Validators.required, this.validatorService.cantBeStrider]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    password2: ['', [Validators.required]]
  })


  onSubmit() {
    this.myForm.markAllAsTouched();
  }

  isValidField(field: string) {
    return this.validatorService.isValidField(this.myForm, field);
  }



}
