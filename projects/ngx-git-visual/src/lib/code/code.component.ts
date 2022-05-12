import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
// import 'prismjs/components/prism-javascript';
// import 'prismjs/components/pr';
import * as Prism from 'prismjs';
@Component({
  selector: 'ngx-git-code',
  templateUrl: './code.component.html',
  styleUrls: ['./code.component.scss'],
})
export class CodeComponent {
  @ViewChild('codeEle') codeEle!: ElementRef;
  @Input() code?: string;
  @Input() language?: 'html' | 'css' | 'typescript' | 'text' = 'text';
  @Input() classes: string = ''

  constructor() {}
  ngAfterViewInit() {
    Prism.highlightElement(this.codeEle.nativeElement);
  }
  ngOnChanges(changes: any): void {
    if (changes?.code) {
      if (this.codeEle?.nativeElement) {
        this.codeEle.nativeElement.textContent = this.code;
        Prism.highlightElement(this.codeEle.nativeElement);
      }
    }
  }
}
