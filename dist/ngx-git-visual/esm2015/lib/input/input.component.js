import { Subject } from 'rxjs';
import { Component, EventEmitter, forwardRef, Input, Output, } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { BaseUiFormDirective } from '../base-classes/a-base-component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/forms";
import * as i3 from "primeng/inputtext";
export class InputComponent extends BaseUiFormDirective {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LWdpdC12aXN1YWwvc3JjL2xpYi9pbnB1dC9pbnB1dC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtZ2l0LXZpc3VhbC9zcmMvbGliL2lucHV0L2lucHV0LmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDL0IsT0FBTyxFQUNMLFNBQVMsRUFDVCxZQUFZLEVBQ1osVUFBVSxFQUVWLEtBQUssRUFFTCxNQUFNLEdBQ1AsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUF3QixpQkFBaUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3pFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGtDQUFrQyxDQUFDOzs7OztBQWF2RSxNQUFNLE9BQU8sY0FDWCxTQUFRLG1CQUFtQjtJQWlCM0IsWUFBbUIsUUFBa0I7UUFDbkMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBZkYsU0FBSSxHQUFXLE1BQU0sQ0FBQztRQUN0QixhQUFRLEdBQUcsS0FBSyxDQUFDO1FBQ2pDLGlDQUFpQztRQUNqQixZQUFPLEdBQWtCLElBQUksQ0FBQztRQUM5QixRQUFHLEdBQUcsQ0FBQyxDQUFDO1FBQ1IsUUFBRyxHQUFrQixJQUFJLENBQUM7UUFDMUIsc0JBQWlCLEdBQThCLE1BQU0sQ0FBQztRQUN0RCxrQkFBYSxHQUE0QixLQUFLLENBQUM7UUFFL0QsbUJBQW1CO1FBQ25CLHVCQUFrQixHQUFpQixJQUFJLE9BQU8sRUFBTyxDQUFDO1FBRXJDLFlBQU8sR0FBc0IsSUFBSSxZQUFZLEVBQU8sQ0FBQztJQUl0RSxDQUFDO0lBRU0sUUFBUTtRQUNiLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUNoQixDQUFDO0lBRU0sV0FBVyxDQUFDLFdBQWdCLEVBQUUsZ0JBQXlCLElBQUk7UUFDaEUsSUFBSSxhQUFhLEVBQUU7WUFDakIsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1NBQ3RCO1FBQ0QsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDbEIsSUFBSSxJQUFJLENBQUMsSUFBSSxLQUFLLFFBQVEsRUFBRTtnQkFDMUIsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLFdBQVcsQ0FBQzthQUMzQjtpQkFBTTtnQkFDTCxJQUFJLENBQUMsS0FBSyxHQUFHLFdBQVcsQ0FBQzthQUMxQjtZQUNELGtDQUFrQztZQUNsQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUMzQjtJQUNILENBQUM7OzJHQXZDVSxjQUFjOytGQUFkLGNBQWMsNk9BUmQ7UUFDVDtZQUNFLE9BQU8sRUFBRSxpQkFBaUI7WUFDMUIsS0FBSyxFQUFFLElBQUk7WUFDWCxXQUFXLEVBQUUsVUFBVSxDQUFDLEdBQUcsRUFBRSxDQUFDLGNBQWMsQ0FBQztTQUM5QztLQUNGLGlEQ3RCSCw0d0NBMkNBOzJGRG5CYSxjQUFjO2tCQVgxQixTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSxlQUFlO29CQUN6QixXQUFXLEVBQUUsd0JBQXdCO29CQUNyQyxTQUFTLEVBQUU7d0JBQ1Q7NEJBQ0UsT0FBTyxFQUFFLGlCQUFpQjs0QkFDMUIsS0FBSyxFQUFFLElBQUk7NEJBQ1gsV0FBVyxFQUFFLFVBQVUsQ0FBQyxHQUFHLEVBQUUsZUFBZSxDQUFDO3lCQUM5QztxQkFDRjtpQkFDRjsrRkFLaUIsSUFBSTtzQkFBbkIsS0FBSztnQkFDVSxRQUFRO3NCQUF2QixLQUFLO2dCQUVVLE9BQU87c0JBQXRCLEtBQUs7Z0JBQ1UsR0FBRztzQkFBbEIsS0FBSztnQkFDVSxHQUFHO3NCQUFsQixLQUFLO2dCQUNVLGlCQUFpQjtzQkFBaEMsS0FBSztnQkFDVSxhQUFhO3NCQUE1QixLQUFLO2dCQUtXLE9BQU87c0JBQXZCLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7XHJcbiAgQ29tcG9uZW50LFxyXG4gIEV2ZW50RW1pdHRlcixcclxuICBmb3J3YXJkUmVmLFxyXG4gIEluamVjdG9yLFxyXG4gIElucHV0LFxyXG4gIE9uSW5pdCxcclxuICBPdXRwdXQsXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBOR19WQUxVRV9BQ0NFU1NPUiB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgQmFzZVVpRm9ybURpcmVjdGl2ZSB9IGZyb20gJy4uL2Jhc2UtY2xhc3Nlcy9hLWJhc2UtY29tcG9uZW50JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbmd4LWdpdC1pbnB1dCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2lucHV0LmNvbXBvbmVudC5odG1sJyxcclxuICBwcm92aWRlcnM6IFtcclxuICAgIHtcclxuICAgICAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXHJcbiAgICAgIG11bHRpOiB0cnVlLFxyXG4gICAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBJbnB1dENvbXBvbmVudCksXHJcbiAgICB9LFxyXG4gIF0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBJbnB1dENvbXBvbmVudFxyXG4gIGV4dGVuZHMgQmFzZVVpRm9ybURpcmVjdGl2ZVxyXG4gIGltcGxlbWVudHMgT25Jbml0LCBDb250cm9sVmFsdWVBY2Nlc3NvclxyXG57XHJcbiAgQElucHV0KCkgcHVibGljIHR5cGU6IHN0cmluZyA9ICd0ZXh0JztcclxuICBASW5wdXQoKSBwdWJsaWMgbWF4V2lkdGggPSBmYWxzZTtcclxuICAvLyBUT0RPOiDRgNC10LDQu9C40LfQvtCy0LDRgtGMINCy0LXRgNC90L4g0LIgaHRtbFxyXG4gIEBJbnB1dCgpIHB1YmxpYyBwYXR0ZXJuOiBzdHJpbmcgfCBudWxsID0gbnVsbDtcclxuICBASW5wdXQoKSBwdWJsaWMgbWluID0gMDtcclxuICBASW5wdXQoKSBwdWJsaWMgbWF4OiBudW1iZXIgfCBudWxsID0gbnVsbDtcclxuICBASW5wdXQoKSBwdWJsaWMgbGFiZWxUZXh0UG9zaXRpb246ICdsZWZ0JyB8ICdyaWdodCcgfCAnbm9uZScgPSAnbGVmdCc7XHJcbiAgQElucHV0KCkgcHVibGljIGxhYmVsUG9zaXRpb246ICd0b3AnIHwgJ2xlZnQnIHwgJ25vbmUnID0gJ3RvcCc7XHJcblxyXG4gIC8vIFRPRE86INGB0LTQtdC70LDRgtGMISEhXHJcbiAgaW5wdXRGaWx0ZXJTdHJlYW0kOiBTdWJqZWN0PGFueT4gPSBuZXcgU3ViamVjdDxhbnk+KCk7XHJcblxyXG4gIEBPdXRwdXQoKSBwdWJsaWMgb25JbnB1dDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuXHJcbiAgcHVibGljIGNvbnN0cnVjdG9yKGluamVjdG9yOiBJbmplY3Rvcikge1xyXG4gICAgc3VwZXIoaW5qZWN0b3IpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5vbkluaXQoKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyB1cGRhdGVWYWx1ZShpbnNpZGVWYWx1ZTogYW55LCBtYXJrQXNUb3VjaGVkOiBib29sZWFuID0gdHJ1ZSk6IHZvaWQge1xyXG4gICAgaWYgKG1hcmtBc1RvdWNoZWQpIHtcclxuICAgICAgdGhpcy5tYXJrQXNUb3VjaGVkKCk7XHJcbiAgICB9XHJcbiAgICBpZiAoIXRoaXMuZGlzYWJsZWQpIHtcclxuICAgICAgaWYgKHRoaXMudHlwZSA9PT0gJ251bWJlcicpIHtcclxuICAgICAgICB0aGlzLnZhbHVlID0gK2luc2lkZVZhbHVlO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMudmFsdWUgPSBpbnNpZGVWYWx1ZTtcclxuICAgICAgfVxyXG4gICAgICAvLyB0aGlzLm9uSW5wdXQuZW1pdChpbnNpZGVWYWx1ZSk7XHJcbiAgICAgIHRoaXMub25DaGFuZ2UodGhpcy52YWx1ZSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsIjxkaXZcclxuICBbY2xhc3NOYW1lXT1cIlxyXG4gICAgbGFiZWxQb3NpdGlvbiA9PSAnbGVmdCcgPyAnaW5wdXRCb3ggaW5wdXRfcm93JyA6ICdpbnB1dEJveCBpbnB1dF9jb2wnXHJcbiAgXCJcclxuICAqbmdJZj1cImlzVmlzaWJsZVwiXHJcbiAgW3N0eWxlXT1cImxhYmVsUG9zaXRpb24gPT09ICd0b3AnID8gJ21hcmdpbi10b3A6IDVweCcgOiAnJ1wiXHJcbj5cclxuICA8bGFiZWxcclxuICAgICpuZ0lmPVwibGFiZWwgfHwgbGFiZWxQb3NpdGlvbiAhPT0gJ25vbmUnXCJcclxuICAgIFtmb3JdPVwiaWRcIlxyXG4gICAgW3N0eWxlXT1cIlxyXG4gICAgICBsYWJlbFRleHRQb3NpdGlvbiA9PSAncmlnaHQnXHJcbiAgICAgICAgPyAndGV4dC1hbGlnbjogcmlnaHQnXHJcbiAgICAgICAgOiAndGV4dC1hbGlnbjogbGVmdCcgJiYgbWF4V2lkdGhcclxuICAgICAgICA/ICdmbGV4OiBpbmhlcml0J1xyXG4gICAgICAgIDogJ3dpZHRoOiAxMDAlJ1xyXG4gICAgXCJcclxuICAgID57eyBsYWJlbCB9fTxpIGNsYXNzPVwic3VwMlwiICpuZ0lmPVwiaXNSZXF1aXJlZFwiPio8L2k+PC9sYWJlbFxyXG4gID5cclxuICA8aW5wdXRcclxuICAgIFtpZF09XCJpZFwiXHJcbiAgICBbYXR0ci50eXBlXT1cInR5cGVcIlxyXG4gICAgcElucHV0VGV4dFxyXG4gICAgKGlucHV0KT1cInVwZGF0ZVZhbHVlKGlucC52YWx1ZSlcIlxyXG4gICAgW2F0dHIubWluXT1cIm1pblwiXHJcbiAgICBbYXR0ci5tYXhdPVwibWF4XCJcclxuICAgIFthdHRyLnBhdHRlcm5dPVwicGF0dGVyblwiXHJcbiAgICBbKG5nTW9kZWwpXT1cInZhbHVlXCJcclxuICAgIFthdHRyLmRpc2FibGVkXT1cImRpc2FibGVkID8gJycgOiBudWxsXCJcclxuICAgIFtuZ0NsYXNzXT1cImNsYXNzZXNcIlxyXG4gICAgW25nU3R5bGVdPVwic3R5bGVcIlxyXG4gICAgW2F0dHIucGxhY2Vob2xkZXJdPVwicGxhY2Vob2xkZXJcIlxyXG4gICAgW3N0eWxlXT1cIm1heFdpZHRoID8gJ2ZsZXg6IDEnIDogJ3dpZHRoOiAxMDAlJ1wiXHJcbiAgICAoaW5wdXQpPVwidGhpcy5vbklucHV0LmVtaXQoaW5wLnZhbHVlKVwiXHJcbiAgICB0eXBlPVwiXCJcclxuICAgICNpbnBcclxuICAvPlxyXG4gIDxkaXYgY2xhc3M9XCJpbnB1dC1pbnZhbGlkXCIgKm5nSWY9XCJjb250cm9sPy5pbnZhbGlkICYmIGNvbnRyb2w/LnRvdWNoZWRcIj5cclxuICAgIDxkaXY+XHJcbiAgICAgIDwhLS0ge3sgY29udHJvbD8uZXJyb3JzIHwgZm9ybUVycm9yUGlwZTogJ2lucHV0VGV4dCcgfX0gLS0+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuPC9kaXY+XHJcbiJdfQ==