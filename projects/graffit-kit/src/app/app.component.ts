import { Component, ElementRef, ViewChild } from '@angular/core';
import { menu } from '@helpers';
import { MenuItem } from '@types';
import * as Prism from 'prismjs';

@Component({
  selector: 'gkit-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'graffit-kit';
  menu: Array<MenuItem> = menu;

  @ViewChild('codeEle') codeEle!: ElementRef;
  code?: string = `
  Prism.fileHighlight = function () {
    if (!logged) {
      console.warn('Prism.fileHighlight is deprecated. Use \`Prism.plugins.fileHighlight.highlight\` instead.');
      logged = true;
    }
    Prism.plugins.fileHighlight.highlight.apply(this, arguments);
  };
  `;
  language?: string = 'typescript';

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
