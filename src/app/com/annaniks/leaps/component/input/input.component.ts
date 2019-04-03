import { Component, OnInit, Input, forwardRef } from "@angular/core";
import { NG_VALIDATORS, NG_VALUE_ACCESSOR, ControlValueAccessor, Validator, FormControl } from '@angular/forms';

@Component({
    selector: "app-input",
    templateUrl: "input.component.html",
    styleUrls: ["input.component.scss"],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => InputComponent),
            multi: true,
        },
        {
            provide: NG_VALIDATORS,
            useExisting: forwardRef(() => InputComponent),
            multi: true,
        }]
})

export class InputComponent implements OnInit, ControlValueAccessor, Validator {

    @Input() inputType: string;
    @Input() inputTitle: string;
    public value="";
    @Input() disable;
    constructor() { }

    ngOnInit() { }

    private parseError: boolean;
    private data: any;

    // this is the initial value set to the component
    public writeValue(obj: any) {
       
        if (obj) {
            this.data = obj;
            // this will format it with 4 character spacing
            this.value = JSON.stringify(this.data, undefined, 4);
        }
    }

    // registers 'fn' that will be fired wheb changes are made
    // this is how we emit the changes back to the form
    public registerOnChange(fn: any) {
        this.propagateChange = fn;
    }

    // validates the form, returns null when valid else the validation object
    // in this case we're checking if the json parsing has passed or failed from the onChange method
    public validate(c: FormControl) {
        return (!this.parseError) ? null : {
            jsonParseError: {
                valid: false,
            },
        };
    }

    // not used, used for touch input
    public registerOnTouched() { }

    // change events from the textarea
    onChange(event) {
        // get value from text area
        let newValue = event.target.value;
        try {
            // parse it to json
            this.data = JSON.parse(newValue);
            this.parseError = false;
        } catch (ex) {
            // set parse error if it fails
            this.data = newValue;
            this.parseError = true;
        }

        // update the form
        this.propagateChange(this.data);
    }

    // the method set in registerOnChange to emit changes back to the form
    private propagateChange = (_: any) => { };

    public checkInputType(): string {
        if (this.inputType == 'text' || this.inputType == 'bloodtype') {
            return 'text';
        }
        if (this.inputType == 'password') {
            return 'password';
        }
        if (this.inputType == 'numberic') {
            return 'number';
        }
        if (this.inputType == 'email-address') {
            return 'email';
        }
        if (this.inputType == 'phone') {
            return 'phone'
        }
        if (this.inputType == 'time') {
            return 'time'
        }
        if (this.inputType == 'date') {
            return 'date'
        }

    }

}