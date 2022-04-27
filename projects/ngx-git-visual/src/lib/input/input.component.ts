import { Subject } from 'rxjs';
import {
  Component,
  EventEmitter,
  forwardRef,
  Injector,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { BaseUiFormDirective } from '../base-classes/a-base-component';

@Component({
  selector: 'ngx-git-input',
  templateUrl: './input.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(() => InputComponent),
    },
  ],
})
export class InputComponent
  extends BaseUiFormDirective
  implements OnInit, ControlValueAccessor
{
  @Input() public type: string = 'text';
  @Input() public maxWidth = false;
  // TODO: реализовать верно в html
  @Input() public pattern: string | null = null;
  @Input() public min = 0;
  @Input() public max: number | null = null;
  @Input() public labelTextPosition: 'left' | 'right' | 'none' = 'left';
  @Input() public labelPosition: 'top' | 'left' | 'none' = 'top';

  // TODO: сделать!!!
  inputFilterStream$: Subject<any> = new Subject<any>();

  @Output() public onInput: EventEmitter<any> = new EventEmitter<any>();

  public constructor(injector: Injector) {
    super(injector);
  }

  public ngOnInit(): void {
    this.onInit();
  }

  public updateValue(insideValue: any, markAsTouched: boolean = true): void {
    if (markAsTouched) {
      this.markAsTouched();
    }
    if (!this.disabled) {
      if (this.type === 'number') {
        this.value = +insideValue;
      } else {
        this.value = insideValue;
      }
      // this.onInput.emit(insideValue);
      this.onChange(this.value);
    }
  }
}
