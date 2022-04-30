import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewsModule } from './views/views.module';

@NgModule({
  imports: [ViewsModule],
  exports: [RouterModule, ViewsModule],
})
export class AppRoutingModule {}
