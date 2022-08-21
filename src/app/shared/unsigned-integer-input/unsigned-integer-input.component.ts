import { ChangeDetectionStrategy, Component, forwardRef, Input, OnDestroy } from '@angular/core';
import { ControlValueAccessor, FormBuilder, FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Subscription } from 'rxjs';
import { pairwise, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-unsigned-integer-input',
  templateUrl: './unsigned-integer-input.component.html',
  styleUrls: ['./unsigned-integer-input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => UnsignedIntegerInputComponent),
      multi: true,
    }
  ]
})
export class UnsignedIntegerInputComponent implements ControlValueAccessor, OnDestroy {
  @Input() name: string;
  private _onChange = (value: number) => { };
  private readonly _formControlValueChangesSub: Subscription;
  readonly formControl: FormControl;

  constructor(fb: FormBuilder) {
    this.formControl = fb.control(null);
    this._formControlValueChangesSub = this.formControl.valueChanges
      .pipe(startWith(this.formControl.value), pairwise())
      .subscribe(
        ([oldValue, newValue]: [string, string]) => {
          if (newValue == null || newValue.trim() === '') {
            this._onChange(null);
          }
          else if (RegExp(/^(0|[1-9]\d*)$/).test(newValue)) {
            this._onChange(parseInt(newValue));
          } else {
            this.formControl.setValue(oldValue);
          }
        }
      );
  }

  writeValue(value: number): void {
    this.formControl.setValue(value?.toString(), { emitEvent: false });
  }

  registerOnChange(fn: any): void {
    this._onChange = fn;
  }

  registerOnTouched(fn: any): void {
    // ignore
  }

  ngOnDestroy(): void {
    this._formControlValueChangesSub.unsubscribe();
  }
}
