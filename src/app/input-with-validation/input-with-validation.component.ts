import {Component, Input, OnInit} from '@angular/core';
import {FormControl, ValidatorFn, Validators} from '@angular/forms';

@Component({
  selector: 'app-input-with-validation',
  templateUrl: './input-with-validation.component.html',
  styleUrls: ['./input-with-validation.component.scss']
})
export class InputWithValidationComponent implements OnInit {

  @Input()
  labelText = '';

  @Input()
  type = 'text';

  inputFormControl = new FormControl();

  hint = '';

  constructor() { }

  ngOnInit(): void {

    console.log(this);

    const validators: ValidatorFn[] = [];

    switch (this.type) {
      case 'e-mail':
        validators.push(Validators.email);
        this.hint = 'Please enter a valid e-mail address!';
        break;
      case 'number':
        validators.push(Validators.pattern(/\d+/));
        this.hint = 'Please enter your age!';
        break;
    }

    this.inputFormControl.setValidators(validators);
  }

}
