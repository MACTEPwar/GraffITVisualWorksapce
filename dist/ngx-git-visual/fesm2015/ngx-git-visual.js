import { Subject } from 'rxjs';
import * as i0 from '@angular/core';
import { ɵsetCurrentInjector, ElementRef, ChangeDetectorRef, Directive, Input, EventEmitter, forwardRef, Component, Output, NgModule } from '@angular/core';
import * as i2 from '@angular/forms';
import { ControlContainer, NG_VALUE_ACCESSOR, FormsModule, ReactiveFormsModule } from '@angular/forms';
import * as i1 from '@angular/common';
import { CommonModule } from '@angular/common';
import * as i3 from 'primeng/inputtext';
import { InputTextModule } from 'primeng/inputtext';

class BaseUiFormDirective {
    constructor(injector) {
        this.label = null;
        this.id = null;
        this.tooltip = null;
        // TODO: убрать INPUT. у NG_VALUE_ACCESSOR (директивы formControlName) есть поле disabled
        // Для форм юзать alDisabled="true/false"
        this.disabled = false;
        this.isVisible = true;
        this.position = null;
        this.isRequired = false;
        this.classes = [];
        this.style = {};
        this.placeholder = '';
        // Содержит formControlName
        this.formControlName = null;
        // Содержит ElementRef компонента
        this.elementRef = null;
        // Содержит ControlContainer компонента
        this.controlContainer = null;
        // Содержит  ChangeDetectorRef
        this.changeDetectorRef = null;
        // True если компонент был "тронут"
        this.touched = false;
        // callback-функция если значение поменяли
        this.onChange = (value) => { };
        // callback-функция если элемент тронули
        this.onTouched = () => { };
        this.getTokensFormDI(injector);
    }
    // Получает главную форму
    get form() {
        var _a;
        return (_a = this.controlContainer) === null || _a === void 0 ? void 0 : _a.control;
    }
    // Получает текущий контрол
    get control() {
        var _a;
        return (_a = this.form) === null || _a === void 0 ? void 0 : _a.get(this.formControlName);
    }
    onInit() {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
        this.formControlName =
            (_d = (_c = (_b = (_a = this.elementRef) === null || _a === void 0 ? void 0 : _a.nativeElement) === null || _b === void 0 ? void 0 : _b.attributes) === null || _c === void 0 ? void 0 : _c.formcontrolname) === null || _d === void 0 ? void 0 : _d.textContent;
        // Если ил не указан явно забираю из названия formNameControl
        this.id =
            (_e = this.id) !== null && _e !== void 0 ? _e : (_j = (_h = (_g = (_f = this.elementRef) === null || _f === void 0 ? void 0 : _f.nativeElement) === null || _g === void 0 ? void 0 : _g.attributes) === null || _h === void 0 ? void 0 : _h.formcontrolname) === null || _j === void 0 ? void 0 : _j.textContent;
        //  ?? console.error('Для элемента не указан formControlName');
        // Забираю isRequred из валидации контрола(главный) или из явно указанного (второстепенный). False по дефолту
        this.isRequired = ((_k = this.control) === null || _k === void 0 ? void 0 : _k.validator)
            ? // ? this.control.validator(this.control)?.hasOwnProperty('required')
                (_m = (_l = this.control) === null || _l === void 0 ? void 0 : _l.validator('')) === null || _m === void 0 ? void 0 : _m.hasOwnProperty('required')
            : this.isRequired;
    }
    // сохраняю callback-функцию если значение поменяли
    registerOnChange(fn) {
        this.onChange = fn;
    }
    // сохраняю callback-функцию если элемент тронули
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    // устанавлтвает свойство isDisabled
    setDisabledState(isDisabled) {
        this.disabled = isDisabled;
    }
    // записывает новаое значение
    writeValue(outsideValue) {
        this.updateValue(outsideValue, false);
    }
    markAsTouched() {
        if (!this.touched) {
            this.onTouched();
            this.touched = true;
            this.changeDetectorRef.detectChanges();
        }
    }
    // забираю с инжектора нужные токены
    getTokensFormDI(injector) {
        const former = ɵsetCurrentInjector(injector);
        this.elementRef = injector.get(ElementRef, null);
        this.controlContainer = injector.get(ControlContainer, null);
        this.changeDetectorRef = injector.get(ChangeDetectorRef, null);
        ɵsetCurrentInjector(former);
    }
}
BaseUiFormDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: BaseUiFormDirective, deps: [{ token: i0.Injector }], target: i0.ɵɵFactoryTarget.Directive });
BaseUiFormDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "12.1.5", type: BaseUiFormDirective, inputs: { label: "label", id: "id", tooltip: "tooltip", isVisible: "isVisible", position: "position", isRequired: "isRequired", classes: "classes", style: "style", placeholder: "placeholder", value: "value" }, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: BaseUiFormDirective, decorators: [{
            type: Directive
        }], ctorParameters: function () { return [{ type: i0.Injector }]; }, propDecorators: { label: [{
                type: Input
            }], id: [{
                type: Input
            }], tooltip: [{
                type: Input
            }], isVisible: [{
                type: Input
            }], position: [{
                type: Input
            }], isRequired: [{
                type: Input
            }], classes: [{
                type: Input
            }], style: [{
                type: Input
            }], placeholder: [{
                type: Input
            }], value: [{
                type: Input
            }] } });

class InputComponent extends BaseUiFormDirective {
    constructor(injector) {
        super(injector);
        this.type = 'text';
        this.maxWidth = false;
        // TODO: реализовать верно в html
        this.pattern = null;
        this.min = 0;
        this.max = null;
        this.labelTextPosition = 'left';
        this.labelPosition = 'top';
        // TODO: сделать!!!
        this.inputFilterStream$ = new Subject();
        this.onInput = new EventEmitter();
    }
    ngOnInit() {
        this.onInit();
    }
    updateValue(insideValue, markAsTouched = true) {
        if (markAsTouched) {
            this.markAsTouched();
        }
        if (!this.disabled) {
            if (this.type === 'number') {
                this.value = +insideValue;
            }
            else {
                this.value = insideValue;
            }
            // this.onInput.emit(insideValue);
            this.onChange(this.value);
        }
    }
}
InputComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: InputComponent, deps: [{ token: i0.Injector }], target: i0.ɵɵFactoryTarget.Component });
InputComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.1.5", type: InputComponent, selector: "ngx-git-input", inputs: { type: "type", maxWidth: "maxWidth", pattern: "pattern", min: "min", max: "max", labelTextPosition: "labelTextPosition", labelPosition: "labelPosition" }, outputs: { onInput: "onInput" }, providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            multi: true,
            useExisting: forwardRef(() => InputComponent),
        },
    ], usesInheritance: true, ngImport: i0, template: "<div\r\n  [className]=\"\r\n    labelPosition == 'left' ? 'inputBox input_row' : 'inputBox input_col'\r\n  \"\r\n  *ngIf=\"isVisible\"\r\n  [style]=\"labelPosition === 'top' ? 'margin-top: 5px' : ''\"\r\n>\r\n  <label\r\n    *ngIf=\"label || labelPosition !== 'none'\"\r\n    [for]=\"id\"\r\n    [style]=\"\r\n      labelTextPosition == 'right'\r\n        ? 'text-align: right'\r\n        : 'text-align: left' && maxWidth\r\n        ? 'flex: inherit'\r\n        : 'width: 100%'\r\n    \"\r\n    >{{ label }}<i class=\"sup2\" *ngIf=\"isRequired\">*</i></label\r\n  >\r\n  <input\r\n    [id]=\"id\"\r\n    [attr.type]=\"type\"\r\n    pInputText\r\n    (input)=\"updateValue(inp.value)\"\r\n    [attr.min]=\"min\"\r\n    [attr.max]=\"max\"\r\n    [attr.pattern]=\"pattern\"\r\n    [(ngModel)]=\"value\"\r\n    [attr.disabled]=\"disabled ? '' : null\"\r\n    [ngClass]=\"classes\"\r\n    [ngStyle]=\"style\"\r\n    [attr.placeholder]=\"placeholder\"\r\n    [style]=\"maxWidth ? 'flex: 1' : 'width: 100%'\"\r\n    (input)=\"this.onInput.emit(inp.value)\"\r\n    type=\"\"\r\n    #inp\r\n  />\r\n  <div class=\"input-invalid\" *ngIf=\"control?.invalid && control?.touched\">\r\n    <div>\r\n      <!-- {{ control?.errors | formErrorPipe: 'inputText' }} -->\r\n    </div>\r\n  </div>\r\n</div>\r\n", directives: [{ type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i2.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { type: i3.InputText, selector: "[pInputText]" }, { type: i2.PatternValidator, selector: "[pattern][formControlName],[pattern][formControl],[pattern][ngModel]", inputs: ["pattern"] }, { type: i2.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i2.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }, { type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { type: i1.NgStyle, selector: "[ngStyle]", inputs: ["ngStyle"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: InputComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'ngx-git-input',
                    templateUrl: './input.component.html',
                    providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            multi: true,
                            useExisting: forwardRef(() => InputComponent),
                        },
                    ],
                }]
        }], ctorParameters: function () { return [{ type: i0.Injector }]; }, propDecorators: { type: [{
                type: Input
            }], maxWidth: [{
                type: Input
            }], pattern: [{
                type: Input
            }], min: [{
                type: Input
            }], max: [{
                type: Input
            }], labelTextPosition: [{
                type: Input
            }], labelPosition: [{
                type: Input
            }], onInput: [{
                type: Output
            }] } });

class AlInputModule {
}
AlInputModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: AlInputModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
AlInputModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: AlInputModule, declarations: [InputComponent], imports: [CommonModule, FormsModule, ReactiveFormsModule, InputTextModule], exports: [InputComponent] });
AlInputModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: AlInputModule, imports: [[CommonModule, FormsModule, ReactiveFormsModule, InputTextModule]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: AlInputModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [InputComponent],
                    imports: [CommonModule, FormsModule, ReactiveFormsModule, InputTextModule],
                    exports: [InputComponent],
                }]
        }] });

/*
 * Public API Surface of ngx-git-visual
 */
// export * from './lib/ngx-git-visual.component';
// export * from './lib/ngx-git-visual.module';

/**
 * Generated bundle index. Do not edit.
 */

export { AlInputModule, InputComponent };
//# sourceMappingURL=ngx-git-visual.js.map
