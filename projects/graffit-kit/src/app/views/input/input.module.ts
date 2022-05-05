import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InputRoutingModule } from './input-routing.module';
import { InputComponent } from './input.component';

import { InputModule as NgxInputModule } from 'NgxGitVisual';

@NgModule({
  declarations: [InputComponent],
  imports: [CommonModule, InputRoutingModule, NgxInputModule],
})
export class InputModule {}
