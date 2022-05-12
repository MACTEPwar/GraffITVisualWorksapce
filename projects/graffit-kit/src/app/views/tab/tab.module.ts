import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabComponent } from './tab.component';
import { TabRoutingModule } from './tab-routing.module';
import { CodeModule, TabModule as NgxTabModule } from 'NgxGitVisual';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [TabComponent],
  imports: [
    CommonModule,
    FormsModule,
    TabRoutingModule,
    NgxTabModule,
    CodeModule,
  ],
})
export class TabModule {}
