import { Subject } from 'rxjs';
import { EventEmitter, Injector, OnInit } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { BaseUiFormDirective } from '../base-classes/a-base-component';
import * as i0 from "@angular/core";
export declare class InputComponent extends BaseUiFormDirective implements OnInit, ControlValueAccessor {
    type: string;
    maxWidth: boolean;
    pattern: string | null;
    min: number;
    max: number | null;
    labelTextPosition: 'left' | 'right' | 'none';
    labelPosition: 'top' | 'left' | 'none';
    inputFilterStream$: Subject<any>;
    onInput: EventEmitter<any>;
    constructor(injector: Injector);
    ngOnInit(): void;
    updateValue(insideValue: any, markAsTouched?: boolean): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<InputComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<InputComponent, "ngx-git-input", never, { "type": "type"; "maxWidth": "maxWidth"; "pattern": "pattern"; "min": "min"; "max": "max"; "labelTextPosition": "labelTextPosition"; "labelPosition": "labelPosition"; }, { "onInput": "onInput"; }, never, never>;
}
