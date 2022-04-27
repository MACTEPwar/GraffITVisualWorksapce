import { ChangeDetectorRef, Directive, ElementRef, Input, ɵsetCurrentInjector as setCurrentInjector } from '@angular/core';
import { ControlContainer } from '@angular/forms';
import * as i0 from "@angular/core";
export class BaseUiFormDirective {
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
        const former = setCurrentInjector(injector);
        this.elementRef = injector.get(ElementRef, null);
        this.controlContainer = injector.get(ControlContainer, null);
        this.changeDetectorRef = injector.get(ChangeDetectorRef, null);
        setCurrentInjector(former);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYS1iYXNlLWNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1naXQtdmlzdWFsL3NyYy9saWIvYmFzZS1jbGFzc2VzL2EtYmFzZS1jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNMLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsVUFBVSxFQUVWLEtBQUssRUFDTCxtQkFBbUIsSUFBSSxrQkFBa0IsRUFDMUMsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLGdCQUFnQixFQUEwQixNQUFNLGdCQUFnQixDQUFDOztBQUcxRSxNQUFNLE9BQWdCLG1CQUFtQjtJQW1DdkMsWUFBWSxRQUFrQjtRQWxDZCxVQUFLLEdBQWtCLElBQUksQ0FBQztRQUM1QixPQUFFLEdBQWtCLElBQUksQ0FBQztRQUN6QixZQUFPLEdBQWtCLElBQUksQ0FBQztRQUM5Qyx5RkFBeUY7UUFDekYseUNBQXlDO1FBQ2xDLGFBQVEsR0FBRyxLQUFLLENBQUM7UUFDUixjQUFTLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLGFBQVEsR0FBa0IsSUFBSSxDQUFDO1FBQy9CLGVBQVUsR0FBRyxLQUFLLENBQUM7UUFDbkIsWUFBTyxHQUFhLEVBQUUsQ0FBQztRQUN2QixVQUFLLEdBQVcsRUFBRSxDQUFDO1FBQ25CLGdCQUFXLEdBQUcsRUFBRSxDQUFDO1FBSWpDLDJCQUEyQjtRQUNqQixvQkFBZSxHQUFrQixJQUFJLENBQUM7UUFDaEQsaUNBQWlDO1FBQ3ZCLGVBQVUsR0FBc0IsSUFBSSxDQUFDO1FBQy9DLHVDQUF1QztRQUM3QixxQkFBZ0IsR0FBNEIsSUFBSSxDQUFDO1FBQzNELDhCQUE4QjtRQUNwQixzQkFBaUIsR0FBNkIsSUFBSSxDQUFDO1FBUzdELG1DQUFtQztRQUN6QixZQUFPLEdBQUcsS0FBSyxDQUFDO1FBTTFCLDBDQUEwQztRQUNoQyxhQUFRLEdBQUcsQ0FBQyxLQUFVLEVBQUUs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S0FBSztnQkFDVSxPQUFPO3NCQUF0QixLQUFLO2dCQUlVLFNBQVM7c0JBQXhCLEtBQUs7Z0JBQ1UsUUFBUTtzQkFBdkIsS0FBSztnQkFDVSxVQUFVO3NCQUF6QixLQUFLO2dCQUNVLE9BQU87c0JBQXRCLEtBQUs7Z0JBQ1UsS0FBSztzQkFBcEIsS0FBSztnQkFDVSxXQUFXO3NCQUExQixLQUFLO2dCQUVVLEtBQUs7c0JBQXBCLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIENoYW5nZURldGVjdG9yUmVmLFxyXG4gIERpcmVjdGl2ZSxcclxuICBFbGVtZW50UmVmLFxyXG4gIEluamVjdG9yLFxyXG4gIElucHV0LFxyXG4gIMm1c2V0Q3VycmVudEluamVjdG9yIGFzIHNldEN1cnJlbnRJbmplY3RvclxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb250cm9sQ29udGFpbmVyLCBGb3JtQ29udHJvbCwgRm9ybUdyb3VwIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5cclxuQERpcmVjdGl2ZSgpXHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBCYXNlVWlGb3JtRGlyZWN0aXZlIHtcclxuICBASW5wdXQoKSBwdWJsaWMgbGFiZWw6IHN0cmluZyB8IG51bGwgPSBudWxsO1xyXG4gIEBJbnB1dCgpIHB1YmxpYyBpZDogc3RyaW5nIHwgbnVsbCA9IG51bGw7XHJcbiAgQElucHV0KCkgcHVibGljIHRvb2x0aXA6IHN0cmluZyB8IG51bGwgPSBudWxsO1xyXG4gIC8vIFRPRE86INGD0LHRgNCw0YLRjCBJTlBVVC4g0YMgTkdfVkFMVUVfQUNDRVNTT1IgKNC00LjRgNC10LrRgtC40LLRiyBmb3JtQ29udHJvbE5hbWUpINC10YHRgtGMINC/0L7Qu9C1IGRpc2FibGVkXHJcbiAgLy8g0JTQu9GPINGE0L7RgNC8INGO0LfQsNGC0YwgYWxEaXNhYmxlZD1cInRydWUvZmFsc2VcIlxyXG4gIHB1YmxpYyBkaXNhYmxlZCA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIHB1YmxpYyBpc1Zpc2libGUgPSB0cnVlO1xyXG4gIEBJbnB1dCgpIHB1YmxpYyBwb3NpdGlvbjogc3RyaW5nIHwgbnVsbCA9IG51bGw7XHJcbiAgQElucHV0KCkgcHVibGljIGlzUmVxdWlyZWQgPSBmYWxzZTtcclxuICBASW5wdXQoKSBwdWJsaWMgY2xhc3Nlczogc3RyaW5nW10gPSBbXTtcclxuICBASW5wdXQoKSBwdWJsaWMgc3R5bGU6IG9iamVjdCA9IHt9O1xyXG4gIEBJbnB1dCgpIHB1YmxpYyBwbGFjZWhvbGRlciA9ICcnO1xyXG4gIC8vIFRPRE86INC30LDRh9C10LwgSU5QVVQgPyDQo9Cx0YDQsNGC0Ywg0Lgg0LjRgdC/0L7Qu9GM0LfQvtCy0LDRgtGMIG5nTW9kZWwuINCg0LXQsNC70LjQt9Cw0YbQuNGPIENvbnRyb2xWYWx1ZUFjY2Vzc29yINC/0L7Qt9Cy0L7Qu9GP0LXRgi5cclxuICBASW5wdXQoKSBwdWJsaWMgdmFsdWU6IGFueTtcclxuXHJcbiAgLy8g0KHQvtC00LXRgNC20LjRgiBmb3JtQ29udHJvbE5hbWVcclxuICBwcm90ZWN0ZWQgZm9ybUNvbnRyb2xOYW1lOiBzdHJpbmcgfCBudWxsID0gbnVsbDtcclxuICAvLyDQodC+0LTQtdGA0LbQuNGCIEVsZW1lbnRSZWYg0LrQvtC80L/QvtC90LXQvdGC0LBcclxuICBwcm90ZWN0ZWQgZWxlbWVudFJlZjogRWxlbWVudFJlZiB8IG51bGwgPSBudWxsO1xyXG4gIC8vINCh0L7QtNC10YDQttC40YIgQ29udHJvbENvbnRhaW5lciDQutC+0LzQv9C+0L3QtdC90YLQsFxyXG4gIHByb3RlY3RlZCBjb250cm9sQ29udGFpbmVyOiBDb250cm9sQ29udGFpbmVyIHwgbnVsbCA9IG51bGw7XHJcbiAgLy8g0KHQvtC00LXRgNC20LjRgiAgQ2hhbmdlRGV0ZWN0b3JSZWZcclxuICBwcm90ZWN0ZWQgY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmIHwgbnVsbCA9IG51bGw7XHJcbiAgLy8g0J/QvtC70YPRh9Cw0LXRgiDQs9C70LDQstC90YPRjiDRhNC+0YDQvNGDXHJcbiAgZ2V0IGZvcm0oKTogRm9ybUdyb3VwIHtcclxuICAgIHJldHVybiB0aGlzLmNvbnRyb2xDb250YWluZXI/LmNvbnRyb2wgYXMgRm9ybUdyb3VwO1xyXG4gIH1cclxuICAvLyDQn9C+0LvRg9GH0LDQtdGCINGC0LXQutGD0YnQuNC5INC60L7QvdGC0YDQvtC7XHJcbiAgZ2V0IGNvbnRyb2woKTogRm9ybUNvbnRyb2wge1xyXG4gICAgcmV0dXJuIHRoaXMuZm9ybT8uZ2V0KHRoaXMuZm9ybUNvbnRyb2xOYW1lISkgYXMgRm9ybUNvbnRyb2w7XHJcbiAgfVxyXG4gIC8vIFRydWUg0LXRgdC70Lgg0LrQvtC80L/QvtC90LXQvdGCINCx0YvQuyBcItGC0YDQvtC90YPRglwiXHJcbiAgcHJvdGVjdGVkIHRvdWNoZWQgPSBmYWxzZTtcclxuXHJcbiAgY29uc3RydWN0b3IoaW5qZWN0b3I6IEluamVjdG9yKSB7XHJcbiAgICB0aGlzLmdldFRva2Vuc0Zvcm1ESShpbmplY3Rvcik7XHJcbiAgfVxyXG5cclxuICAvLyBjYWxsYmFjay3RhNGD0L3QutGG0LjRjyDQtdGB0LvQuCDQt9C90LDRh9C10L3QuNC1INC/0L7QvNC10L3Rj9C70LhcclxuICBwcm90ZWN0ZWQgb25DaGFuZ2UgPSAodmFsdWU6IGFueSkgPT4ge307XHJcbiAgLy8gY2FsbGJhY2st0YTRg9C90LrRhtC40Y8g0LXRgdC70Lgg0Y3Qu9C10LzQtdC90YIg0YLRgNC+0L3Rg9C70LhcclxuICBwcm90ZWN0ZWQgb25Ub3VjaGVkID0gKCkgPT4ge307XHJcblxyXG4gIHByb3RlY3RlZCBvbkluaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLmZvcm1Db250cm9sTmFtZSA9XHJcbiAgICAgIHRoaXMuZWxlbWVudFJlZj8ubmF0aXZlRWxlbWVudD8uYXR0cmlidXRlcz8uZm9ybWNvbnRyb2xuYW1lPy50ZXh0Q29udGVudDtcclxuICAgIC8vINCV0YHQu9C4INC40Lsg0L3QtSDRg9C60LDQt9Cw0L0g0Y/QstC90L4g0LfQsNCx0LjRgNCw0Y4g0LjQtyDQvdCw0LfQstCw0L3QuNGPIGZvcm1OYW1lQ29udHJvbFxyXG4gICAgdGhpcy5pZCA9XHJcbiAgICAgIHRoaXMuaWQgPz9cclxuICAgICAgdGhpcy5lbGVtZW50UmVmPy5uYXRpdmVFbGVtZW50Py5hdHRyaWJ1dGVzPy5mb3JtY29udHJvbG5hbWU/LnRleHRDb250ZW50O1xyXG4gICAgLy8gID8/IGNvbnNvbGUuZXJyb3IoJ9CU0LvRjyDRjdC70LXQvNC10L3RgtCwINC90LUg0YPQutCw0LfQsNC9IGZvcm1Db250cm9sTmFtZScpO1xyXG5cclxuICAgIC8vINCX0LDQsdC40YDQsNGOIGlzUmVxdXJlZCDQuNC3INCy0LDQu9C40LTQsNGG0LjQuCDQutC+0L3RgtGA0L7Qu9CwKNCz0LvQsNCy0L3Ri9C5KSDQuNC70Lgg0LjQtyDRj9Cy0L3QviDRg9C60LDQt9Cw0L3QvdC+0LPQviAo0LLRgtC+0YDQvtGB0YLQtdC/0LXQvdC90YvQuSkuIEZhbHNlINC/0L4g0LTQtdGE0L7Qu9GC0YNcclxuICAgIHRoaXMuaXNSZXF1aXJlZCA9IHRoaXMuY29udHJvbD8udmFsaWRhdG9yXHJcbiAgICAgID8gLy8gPyB0aGlzLmNvbnRyb2wudmFsaWRhdG9yKHRoaXMuY29udHJvbCk/Lmhhc093blByb3BlcnR5KCdyZXF1aXJlZCcpXHJcbiAgICAgICAgKHRoaXMuY29udHJvbFxyXG4gICAgICAgICAgPy52YWxpZGF0b3IoJycgYXMgYW55KVxyXG4gICAgICAgICAgPy5oYXNPd25Qcm9wZXJ0eSgncmVxdWlyZWQnKSBhcyBib29sZWFuKVxyXG4gICAgICA6IHRoaXMuaXNSZXF1aXJlZDtcclxuICB9XHJcblxyXG4gIC8vINGB0L7RhdGA0LDQvdGP0Y4gY2FsbGJhY2st0YTRg9C90LrRhtC40Y4g0LXRgdC70Lgg0LfQvdCw0YfQtdC90LjQtSDQv9C+0LzQtdC90Y/Qu9C4XHJcbiAgcHVibGljIHJlZ2lzdGVyT25DaGFuZ2UoZm46IGFueSk6IHZvaWQge1xyXG4gICAgdGhpcy5vbkNoYW5nZSA9IGZuO1xyXG4gIH1cclxuXHJcbiAgLy8g0YHQvtGF0YDQsNC90Y/RjiBjYWxsYmFjay3RhNGD0L3QutGG0LjRjiDQtdGB0LvQuCDRjdC70LXQvNC10L3RgiDRgtGA0L7QvdGD0LvQuFxyXG4gIHB1YmxpYyByZWdpc3Rlck9uVG91Y2hlZChmbjogYW55KTogdm9pZCB7XHJcbiAgICB0aGlzLm9uVG91Y2hlZCA9IGZuO1xyXG4gIH1cclxuXHJcbiAgLy8g0YPRgdGC0LDQvdCw0LLQu9GC0LLQsNC10YIg0YHQstC+0LnRgdGC0LLQviBpc0Rpc2FibGVkXHJcbiAgcHVibGljIHNldERpc2FibGVkU3RhdGU/KGlzRGlzYWJsZWQ6IGJvb2xlYW4pOiB2b2lkIHtcclxuICAgIHRoaXMuZGlzYWJsZWQgPSBpc0Rpc2FibGVkO1xyXG4gIH1cclxuXHJcbiAgLy8g0LfQsNC/0LjRgdGL0LLQsNC10YIg0L3QvtCy0LDQvtC1INC30L3QsNGH0LXQvdC40LVcclxuICBwdWJsaWMgd3JpdGVWYWx1ZShvdXRzaWRlVmFsdWU6IGFueSk6IHZvaWQge1xyXG4gICAgdGhpcy51cGRhdGVWYWx1ZShvdXRzaWRlVmFsdWUsIGZhbHNlKTtcclxuICB9XHJcblxyXG4gIHByb3RlY3RlZCBtYXJrQXNUb3VjaGVkKCk6IHZvaWQge1xyXG4gICAgaWYgKCF0aGlzLnRvdWNoZWQpIHtcclxuICAgICAgdGhpcy5vblRvdWNoZWQoKTtcclxuICAgICAgdGhpcy50b3VjaGVkID0gdHJ1ZTtcclxuICAgICAgdGhpcy5jaGFuZ2VEZXRlY3RvclJlZiEuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8g0LfQsNCx0LjRgNCw0Y4g0YEg0LjQvdC20LXQutGC0L7RgNCwINC90YPQttC90YvQtSDRgtC+0LrQtdC90YtcclxuICBwcml2YXRlIGdldFRva2Vuc0Zvcm1ESShpbmplY3RvcjogSW5qZWN0b3IpOiB2b2lkIHtcclxuICAgIGNvbnN0IGZvcm1lciA9IHNldEN1cnJlbnRJbmplY3RvcihpbmplY3Rvcik7XHJcblxyXG4gICAgdGhpcy5lbGVtZW50UmVmID0gaW5qZWN0b3IuZ2V0KEVsZW1lbnRSZWYsIG51bGwpO1xyXG4gICAgdGhpcy5jb250cm9sQ29udGFpbmVyID0gaW5qZWN0b3IuZ2V0KENvbnRyb2xDb250YWluZXIsIG51bGwpO1xyXG4gICAgdGhpcy5jaGFuZ2VEZXRlY3RvclJlZiA9IGluamVjdG9yLmdldChDaGFuZ2VEZXRlY3RvclJlZiwgbnVsbCk7XHJcblxyXG4gICAgc2V0Q3VycmVudEluamVjdG9yKGZvcm1lcik7XHJcbiAgfVxyXG5cclxuICAvLyDQnNC10YLQvtC0LCDQvtCx0L3QvtCy0LvRj9GO0YnQuNC5INC30L3QsNGH0LXQvdC40LVcclxuICBwdWJsaWMgYWJzdHJhY3QgdXBkYXRlVmFsdWUoZXZlbnQ6IGFueSwgbWFya0FzVG91Y2hlZDogYm9vbGVhbik6IHZvaWQ7XHJcbn1cclxuIl19