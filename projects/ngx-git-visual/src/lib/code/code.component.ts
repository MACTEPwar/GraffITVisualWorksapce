import { Component, Input, OnInit } from '@angular/core';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/pr';

@Component({
  selector: 'ngx-git-code',
  templateUrl: './code.component.html',
  styleUrls: ['./code.component.css'],
})
export class CodeComponent implements OnInit {
  @Input() type: 'html' | 'css' | 'ts' | 'text' = 'text';

  constructor() {}

  ngOnInit(): void {}
}
