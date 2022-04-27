(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('rxjs'), require('@angular/core'), require('@angular/forms'), require('@angular/common'), require('primeng/inputtext')) :
    typeof define === 'function' && define.amd ? define('ngx-git-visual', ['exports', 'rxjs', '@angular/core', '@angular/forms', '@angular/common', 'primeng/inputtext'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global["ngx-git-visual"] = {}, global.rxjs, global.ng.core, global.ng.forms, global.ng.common, global.i3));
})(this, (function (exports, rxjs, i0, i2, i1, i3) { 'use strict';

    function _interopNamespace(e) {
        if (e && e.__esModule) return e;
        var n = Object.create(null);
        if (e) {
            Object.keys(e).forEach(function (k) {
                if (k !== 'default') {
                    var d = Object.getOwnPropertyDescriptor(e, k);
                    Object.defineProperty(n, k, d.get ? d : {
                        enumerable: true,
                        get: function () { return e[k]; }
                    });
                }
            });
        }
        n["default"] = e;
        return Object.freeze(n);
    }

    var i0__namespace = /*#__PURE__*/_interopNamespace(i0);
    var i2__namespace = /*#__PURE__*/_interopNamespace(i2);
    var i1__namespace = /*#__PURE__*/_interopNamespace(i1);
    var i3__namespace = /*#__PURE__*/_interopNamespace(i3);

    /******************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */
    /* global Reflect, Promise */
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b)
                if (Object.prototype.hasOwnProperty.call(b, p))
                    d[p] = b[p]; };
        return extendStatics(d, b);
    };
    function __extends(d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }
    var __assign = function () {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p))
                        t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };
    function __rest(s, e) {
        var t = {};
        for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
                t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }
    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
            r = Reflect.decorate(decorators, target, key, desc);
        else
            for (var i = decorators.length - 1; i >= 0; i--)
                if (d = decorators[i])
                    r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }
    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); };
    }
    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
            return Reflect.metadata(metadataKey, metadataValue);
    }
    function __awaiter(thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try {
                step(generator.next(value));
            }
            catch (e) {
                reject(e);
            } }
            function rejected(value) { try {
                step(generator["throw"](value));
            }
            catch (e) {
                reject(e);
            } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }
    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function () { if (t[0] & 1)
                throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f)
                throw new TypeError("Generator is already executing.");
            while (_)
                try {
                    if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                        return t;
                    if (y = 0, t)
                        op = [op[0] & 2, t.value];
                    switch (op[0]) {
                        case 0:
                        case 1:
                            t = op;
                            break;
                        case 4:
                            _.label++;
                            return { value: op[1], done: false };
                        case 5:
                            _.label++;
                            y = op[1];
                            op = [0];
                            continue;
                        case 7:
                            op = _.ops.pop();
                            _.trys.pop();
                            continue;
                        default:
                            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                _ = 0;
                                continue;
                            }
                            if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                _.label = op[1];
                                break;
                            }
                            if (op[0] === 6 && _.label < t[1]) {
                                _.label = t[1];
                                t = op;
                                break;
                            }
                            if (t && _.label < t[2]) {
                                _.label = t[2];
                                _.ops.push(op);
                                break;
                            }
                            if (t[2])
                                _.ops.pop();
                            _.trys.pop();
                            continue;
                    }
                    op = body.call(thisArg, _);
                }
                catch (e) {
                    op = [6, e];
                    y = 0;
                }
                finally {
                    f = t = 0;
                }
            if (op[0] & 5)
                throw op[1];
            return { value: op[0] ? op[1] : void 0, done: true };
        }
    }
    var __createBinding = Object.create ? (function (o, m, k, k2) {
        if (k2 === undefined)
            k2 = k;
        var desc = Object.getOwnPropertyDescriptor(m, k);
        if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
            desc = { enumerable: true, get: function () { return m[k]; } };
        }
        Object.defineProperty(o, k2, desc);
    }) : (function (o, m, k, k2) {
        if (k2 === undefined)
            k2 = k;
        o[k2] = m[k];
    });
    function __exportStar(m, o) {
        for (var p in m)
            if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p))
                __createBinding(o, m, p);
    }
    function __values(o) {
        var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
        if (m)
            return m.call(o);
        if (o && typeof o.length === "number")
            return {
                next: function () {
                    if (o && i >= o.length)
                        o = void 0;
                    return { value: o && o[i++], done: !o };
                }
            };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }
    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m)
            return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                ar.push(r.value);
        }
        catch (error) {
            e = { error: error };
        }
        finally {
            try {
                if (r && !r.done && (m = i["return"]))
                    m.call(i);
            }
            finally {
                if (e)
                    throw e.error;
            }
        }
        return ar;
    }
    /** @deprecated */
    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }
    /** @deprecated */
    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++)
            s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    }
    function __spreadArray(to, from, pack) {
        if (pack || arguments.length === 2)
            for (var i = 0, l = from.length, ar; i < l; i++) {
                if (ar || !(i in from)) {
                    if (!ar)
                        ar = Array.prototype.slice.call(from, 0, i);
                    ar[i] = from[i];
                }
            }
        return to.concat(ar || Array.prototype.slice.call(from));
    }
    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }
    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n])
            i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try {
            step(g[n](v));
        }
        catch (e) {
            settle(q[0][3], e);
        } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length)
            resume(q[0][0], q[0][1]); }
    }
    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }
    function __asyncValues(o) {
        if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
    }
    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) {
            Object.defineProperty(cooked, "raw", { value: raw });
        }
        else {
            cooked.raw = raw;
        }
        return cooked;
    }
    ;
    var __setModuleDefault = Object.create ? (function (o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
    }) : function (o, v) {
        o["default"] = v;
    };
    function __importStar(mod) {
        if (mod && mod.__esModule)
            return mod;
        var result = {};
        if (mod != null)
            for (var k in mod)
                if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
                    __createBinding(result, mod, k);
        __setModuleDefault(result, mod);
        return result;
    }
    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }
    function __classPrivateFieldGet(receiver, state, kind, f) {
        if (kind === "a" && !f)
            throw new TypeError("Private accessor was defined without a getter");
        if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
            throw new TypeError("Cannot read private member from an object whose class did not declare it");
        return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
    }
    function __classPrivateFieldSet(receiver, state, value, kind, f) {
        if (kind === "m")
            throw new TypeError("Private method is not writable");
        if (kind === "a" && !f)
            throw new TypeError("Private accessor was defined without a setter");
        if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
            throw new TypeError("Cannot write private member to an object whose class did not declare it");
        return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
    }
    function __classPrivateFieldIn(state, receiver) {
        if (receiver === null || (typeof receiver !== "object" && typeof receiver !== "function"))
            throw new TypeError("Cannot use 'in' operator on non-object");
        return typeof state === "function" ? receiver === state : state.has(receiver);
    }

    var BaseUiFormDirective = /** @class */ (function () {
        function BaseUiFormDirective(injector) {
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
            this.onChange = function (value) { };
            // callback-функция если элемент тронули
            this.onTouched = function () { };
            this.getTokensFormDI(injector);
        }
        Object.defineProperty(BaseUiFormDirective.prototype, "form", {
            // Получает главную форму
            get: function () {
                var _a;
                return (_a = this.controlContainer) === null || _a === void 0 ? void 0 : _a.control;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(BaseUiFormDirective.prototype, "control", {
            // Получает текущий контрол
            get: function () {
                var _a;
                return (_a = this.form) === null || _a === void 0 ? void 0 : _a.get(this.formControlName);
            },
            enumerable: false,
            configurable: true
        });
        BaseUiFormDirective.prototype.onInit = function () {
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
        };
        // сохраняю callback-функцию если значение поменяли
        BaseUiFormDirective.prototype.registerOnChange = function (fn) {
            this.onChange = fn;
        };
        // сохраняю callback-функцию если элемент тронули
        BaseUiFormDirective.prototype.registerOnTouched = function (fn) {
            this.onTouched = fn;
        };
        // устанавлтвает свойство isDisabled
        BaseUiFormDirective.prototype.setDisabledState = function (isDisabled) {
            this.disabled = isDisabled;
        };
        // записывает новаое значение
        BaseUiFormDirective.prototype.writeValue = function (outsideValue) {
            this.updateValue(outsideValue, false);
        };
        BaseUiFormDirective.prototype.markAsTouched = function () {
            if (!this.touched) {
                this.onTouched();
                this.touched = true;
                this.changeDetectorRef.detectChanges();
            }
        };
        // забираю с инжектора нужные токены
        BaseUiFormDirective.prototype.getTokensFormDI = function (injector) {
            var former = i0["ɵsetCurrentInjector"](injector);
            this.elementRef = injector.get(i0.ElementRef, null);
            this.controlContainer = injector.get(i2.ControlContainer, null);
            this.changeDetectorRef = injector.get(i0.ChangeDetectorRef, null);
            i0["ɵsetCurrentInjector"](former);
        };
        return BaseUiFormDirective;
    }());
    BaseUiFormDirective.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0__namespace, type: BaseUiFormDirective, deps: [{ token: i0__namespace.Injector }], target: i0__namespace.ɵɵFactoryTarget.Directive });
    BaseUiFormDirective.ɵdir = i0__namespace.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "12.1.5", type: BaseUiFormDirective, inputs: { label: "label", id: "id", tooltip: "tooltip", isVisible: "isVisible", position: "position", isRequired: "isRequired", classes: "classes", style: "style", placeholder: "placeholder", value: "value" }, ngImport: i0__namespace });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0__namespace, type: BaseUiFormDirective, decorators: [{
                type: i0.Directive
            }], ctorParameters: function () { return [{ type: i0__namespace.Injector }]; }, propDecorators: { label: [{
                    type: i0.Input
                }], id: [{
                    type: i0.Input
                }], tooltip: [{
                    type: i0.Input
                }], isVisible: [{
                    type: i0.Input
                }], position: [{
                    type: i0.Input
                }], isRequired: [{
                    type: i0.Input
                }], classes: [{
                    type: i0.Input
                }], style: [{
                    type: i0.Input
                }], placeholder: [{
                    type: i0.Input
                }], value: [{
                    type: i0.Input
                }] } });

    var InputComponent = /** @class */ (function (_super) {
        __extends(InputComponent, _super);
        function InputComponent(injector) {
            var _this = _super.call(this, injector) || this;
            _this.type = 'text';
            _this.maxWidth = false;
            // TODO: реализовать верно в html
            _this.pattern = null;
            _this.min = 0;
            _this.max = null;
            _this.labelTextPosition = 'left';
            _this.labelPosition = 'top';
            // TODO: сделать!!!
            _this.inputFilterStream$ = new rxjs.Subject();
            _this.onInput = new i0.EventEmitter();
            return _this;
        }
        InputComponent.prototype.ngOnInit = function () {
            this.onInit();
        };
        InputComponent.prototype.updateValue = function (insideValue, markAsTouched) {
            if (markAsTouched === void 0) { markAsTouched = true; }
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
        };
        return InputComponent;
    }(BaseUiFormDirective));
    InputComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0__namespace, type: InputComponent, deps: [{ token: i0__namespace.Injector }], target: i0__namespace.ɵɵFactoryTarget.Component });
    InputComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.1.5", type: InputComponent, selector: "ngx-git-input", inputs: { type: "type", maxWidth: "maxWidth", pattern: "pattern", min: "min", max: "max", labelTextPosition: "labelTextPosition", labelPosition: "labelPosition" }, outputs: { onInput: "onInput" }, providers: [
            {
                provide: i2.NG_VALUE_ACCESSOR,
                multi: true,
                useExisting: i0.forwardRef(function () { return InputComponent; }),
            },
        ], usesInheritance: true, ngImport: i0__namespace, template: "<div\r\n  [className]=\"\r\n    labelPosition == 'left' ? 'inputBox input_row' : 'inputBox input_col'\r\n  \"\r\n  *ngIf=\"isVisible\"\r\n  [style]=\"labelPosition === 'top' ? 'margin-top: 5px' : ''\"\r\n>\r\n  <label\r\n    *ngIf=\"label || labelPosition !== 'none'\"\r\n    [for]=\"id\"\r\n    [style]=\"\r\n      labelTextPosition == 'right'\r\n        ? 'text-align: right'\r\n        : 'text-align: left' && maxWidth\r\n        ? 'flex: inherit'\r\n        : 'width: 100%'\r\n    \"\r\n    >{{ label }}<i class=\"sup2\" *ngIf=\"isRequired\">*</i></label\r\n  >\r\n  <input\r\n    [id]=\"id\"\r\n    [attr.type]=\"type\"\r\n    pInputText\r\n    (input)=\"updateValue(inp.value)\"\r\n    [attr.min]=\"min\"\r\n    [attr.max]=\"max\"\r\n    [attr.pattern]=\"pattern\"\r\n    [(ngModel)]=\"value\"\r\n    [attr.disabled]=\"disabled ? '' : null\"\r\n    [ngClass]=\"classes\"\r\n    [ngStyle]=\"style\"\r\n    [attr.placeholder]=\"placeholder\"\r\n    [style]=\"maxWidth ? 'flex: 1' : 'width: 100%'\"\r\n    (input)=\"this.onInput.emit(inp.value)\"\r\n    type=\"\"\r\n    #inp\r\n  />\r\n  <div class=\"input-invalid\" *ngIf=\"control?.invalid && control?.touched\">\r\n    <div>\r\n      <!-- {{ control?.errors | formErrorPipe: 'inputText' }} -->\r\n    </div>\r\n  </div>\r\n</div>\r\n", directives: [{ type: i1__namespace.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i2__namespace.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { type: i3__namespace.InputText, selector: "[pInputText]" }, { type: i2__namespace.PatternValidator, selector: "[pattern][formControlName],[pattern][formControl],[pattern][ngModel]", inputs: ["pattern"] }, { type: i2__namespace.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i2__namespace.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }, { type: i1__namespace.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { type: i1__namespace.NgStyle, selector: "[ngStyle]", inputs: ["ngStyle"] }] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0__namespace, type: InputComponent, decorators: [{
                type: i0.Component,
                args: [{
                        selector: 'ngx-git-input',
                        templateUrl: './input.component.html',
                        providers: [
                            {
                                provide: i2.NG_VALUE_ACCESSOR,
                                multi: true,
                                useExisting: i0.forwardRef(function () { return InputComponent; }),
                            },
                        ],
                    }]
            }], ctorParameters: function () { return [{ type: i0__namespace.Injector }]; }, propDecorators: { type: [{
                    type: i0.Input
                }], maxWidth: [{
                    type: i0.Input
                }], pattern: [{
                    type: i0.Input
                }], min: [{
                    type: i0.Input
                }], max: [{
                    type: i0.Input
                }], labelTextPosition: [{
                    type: i0.Input
                }], labelPosition: [{
                    type: i0.Input
                }], onInput: [{
                    type: i0.Output
                }] } });

    var AlInputModule = /** @class */ (function () {
        function AlInputModule() {
        }
        return AlInputModule;
    }());
    AlInputModule.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0__namespace, type: AlInputModule, deps: [], target: i0__namespace.ɵɵFactoryTarget.NgModule });
    AlInputModule.ɵmod = i0__namespace.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0__namespace, type: AlInputModule, declarations: [InputComponent], imports: [i1.CommonModule, i2.FormsModule, i2.ReactiveFormsModule, i3.InputTextModule], exports: [InputComponent] });
    AlInputModule.ɵinj = i0__namespace.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0__namespace, type: AlInputModule, imports: [[i1.CommonModule, i2.FormsModule, i2.ReactiveFormsModule, i3.InputTextModule]] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0__namespace, type: AlInputModule, decorators: [{
                type: i0.NgModule,
                args: [{
                        declarations: [InputComponent],
                        imports: [i1.CommonModule, i2.FormsModule, i2.ReactiveFormsModule, i3.InputTextModule],
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

    exports.AlInputModule = AlInputModule;
    exports.InputComponent = InputComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=ngx-git-visual.umd.js.map
