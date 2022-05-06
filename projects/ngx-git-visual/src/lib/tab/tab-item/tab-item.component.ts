import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'NgxGit-tab-item',
  templateUrl: './tab-item.component.html',
  styleUrls: ['./tab-item.component.css'],
})
export class TabItemComponent implements OnInit {
  @Input() headerTemplate = null;
  @Input() leftIcon = null;
  @Input() rightIcon = null;
  @Input() header = '';
  @Input() closable = false;
  @Input() selected = false;

  constructor() {}

  ngOnInit() {}
}
