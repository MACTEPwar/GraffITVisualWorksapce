import {
  Component,
  Input,
  OnInit,
  TemplateRef,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'ngx-git-tab-item',
  templateUrl: './tab-item.component.html',
  styleUrls: ['./tab-item.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class TabItemComponent implements OnInit {
  @Input() headerTemplate: TemplateRef<any> | null = null;
  @Input() leftIcon = null;
  @Input() rightIcon = null;
  @Input() header = '';
  @Input() closable = false;
  @Input() selected = false;

  constructor() {}

  ngOnInit() {}
}
