import { Injectable } from '@angular/core';
import { AbstractControl, AsyncValidator, ValidationErrors } from '@angular/forms';
import { Observable, delay, of } from 'rxjs';

@Injectable({ providedIn: 'root' })

export class EmailValidatorService implements AsyncValidator {

  // validate(control: AbstractControl<any, any>): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {

  //   const email = control.value;
  //   console.log({ email });

  //   return of({
  //     emailTaken: true
  //   }).pipe(
  //     delay(2000)
  //   )


  validate(control: AbstractControl<any, any>): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {

    const email = control.value;

    const httpCallObservable = new Observable<ValidationErrors | null>((subscriber) => {
      console.log({ email })

      if (email === 'fernando@google.com') {
        subscriber.next({ emailTaken: true });
        subscriber.complete(); //Para que pare el subscriber y no haga nada mas
      }

      subscriber.next(null);
      subscriber.complete();
    }).pipe(
      delay(3000)
    );

    return httpCallObservable;


    //Como sería si hubiera backend y llamando al servidor
    // return this.http.get<any[]>(`http://localhost:3000/users?q=${email}`
    //   .pipe(
    //     map(resp => {
    //       return (resp.length === 0)
    //         ? null
    //         : { emailTaken: true }
    //     })
    //   )
    // );

  }





}
