import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgxMdModule } from 'ngx-md';
import { CodeComponent } from './code.component';

@NgModule({
  declarations: [CodeComponent],
  imports: [CommonModule, NgxMdModule.forRoot(), FormsModule],

  exports: [CodeComponent],
})
export class CodeModule {}
