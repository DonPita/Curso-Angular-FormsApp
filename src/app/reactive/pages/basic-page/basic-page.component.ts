import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  templateUrl: './basic-page.component.html',
  styles: ``
})

export class BasicPageComponent /*implements OnInit */{



  constructor(private fb: FormBuilder) { }

  /*ngOnInit(): void {
    this.myForm.reset({ //Se le puede pasar constantes como valores iniciales

    });
  }*/


  //Dos Maneras de hacer el mismo Formulario

  // public myForm: FormGroup = new FormGroup({
  //    name: new FormControl(''),
  //    price: new FormControl(0),
  //    inStorage: new FormControl(0),
  // });
  public myForm: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    price: [0, [Validators.required, Validators.min(0)]],
    inStorage: [0, [Validators.required, Validators.min(0)]]
  })

  onSave(): void {

    if (this.myForm.invalid) {
      return;
    }

    console.log(this.myForm.value);

    this.myForm.reset({price: 0, inStorage: 0});
  }

}
