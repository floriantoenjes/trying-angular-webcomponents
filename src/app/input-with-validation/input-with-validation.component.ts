import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
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

  @Output()
  sendValidInput = new EventEmitter();

  inputFormControl = new FormControl();

  hint = '';

  constructor() { }

  ngOnInit(): void {
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
