import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core'
import { FormGroup, FormControl, FormBuilder, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Template } from './input.component.interface';

@Component({
    selector: 'mc-input',
    templateUrl: './input.component.html',
    styleUrls: [ './input.component.css' ]
})

export class InputComponent implements OnInit {

    @Input() placeholder: string;
    @Input() mxlength: number;
    @Input() readonly: string;

    @Input() typeClass: Array<any>;
    @Input() childSwitcher: string;
    @Input() isIcon: boolean;

    value: string;

    @Output() toggle: EventEmitter<boolean> = new EventEmitter<boolean>();
    @Output() sendInput: EventEmitter<any> = new EventEmitter<any>();

    form: FormGroup;

    constructor(private fb: FormBuilder) { }

    ngOnInit() {
      this.form = this.fb.group({
        inputName: ['', [Validators.required, Validators.maxLength(150)]],
      });

      this.form.get('inputName').valueChanges.subscribe(value => {
        this.sendInput.emit(value);
      });
    }

    onToggle(n:boolean, event: Event): void {
        let control = this.form.get('inputName');
        (control.disabled)? control.enable() : control.disable();
        this.toggle.emit(n);
        event.stopPropagation();
    }

}
