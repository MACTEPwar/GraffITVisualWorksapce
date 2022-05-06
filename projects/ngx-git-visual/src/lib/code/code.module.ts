import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CodeComponent } from './code.component';

import 'prismjs/prism';
import 'prismjs/components/prism-typescript';

@NgModule({
  declarations: [CodeComponent],
  imports: [CommonModule, FormsModule],

  exports: [CodeComponent],
})
export class CodeModule {}
