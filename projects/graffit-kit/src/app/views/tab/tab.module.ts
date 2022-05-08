import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabComponent } from './tab.component';
import { TabRoutingModule } from './tab-routing.module';
import { TabModule as NgxTabModule } from 'NgxGitVisual';

@NgModule({
  declarations: [TabComponent],
  imports: [CommonModule, TabRoutingModule, NgxTabModule],
})
export class TabModule {}
