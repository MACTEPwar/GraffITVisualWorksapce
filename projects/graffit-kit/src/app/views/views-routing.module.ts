import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  //1 block
  {
    path: '',
    loadChildren: () =>
      import('./overview/overview.module').then((m) => m.OverviewModule),
  },
  {
    path: 'overview',
    loadChildren: () =>
      import('./overview/overview.module').then((m) => m.OverviewModule),
  },
  {
    path: 'get-started',
    loadChildren: () =>
      import('./get-started/get-started.module').then(
        (m) => m.GetStartedModule
      ),
  },
  //2 block
  {
    path: 'input',
    loadChildren: () =>
      import('./input/input.module').then((m) => m.InputModule),
  },
  {
    path: 'tab',
    loadChildren: () =>
      import('./tab/tab.module').then((m) => m.TabModule),
  },
  //** falied route
  {
    path: '**',
    loadChildren: () =>
      import('./failed/failed.module').then((m) => m.FailedModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class ViewsRoutingModule {}
