import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'gkit-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent implements OnInit {
  code?: string = `
  Prism.fileHighlight = function () {
    if (!logged) {
      console.warn('Prism.fileHighlight is deprecated. Use \`Prism.plugins.fileHighlight.highlight\` instead.');
      logged = true;
    }
    Prism.plugins.fileHighlight.highlight.apply(this, arguments);
  };
  `;

  constructor() {}

  ngOnInit(): void {}
}
