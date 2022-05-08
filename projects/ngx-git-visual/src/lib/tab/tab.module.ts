import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabComponent } from './tab.component';
import { TabItemComponent } from './tab-item/tab-item.component';

@NgModule({
  declarations: [TabComponent, TabItemComponent],
  imports: [CommonModule],
  exports: [TabComponent, TabItemComponent],
})
export class TabModule {}
