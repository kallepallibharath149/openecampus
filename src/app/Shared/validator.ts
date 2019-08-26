import { Validator, AbstractControl, NG_VALIDATORS } from "@angular/forms";
import { Directive, Input } from '@angular/core';

@Directive({
    selector: '[selectvalidator]' , 
    providers:[{ 
        provide:NG_VALIDATORS,
        useExisting:customselectvalidator,
        multi:true
    }]
    
})
export class customselectvalidator implements Validator{
    @Input('selectvalidator') value:string;
    validate(control: AbstractControl): { [key:string]:any} | null{
        return control.value===this.value?{'defaultselected':true}:null;
    }

}