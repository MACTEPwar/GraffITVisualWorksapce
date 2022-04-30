import { Component } from '@angular/core';
import { menu } from '@helpers';
import { MenuItem } from '@types';

@Component({
  selector: 'gkit-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'graffit-kit';
  menu: Array<MenuItem> = menu;
}
