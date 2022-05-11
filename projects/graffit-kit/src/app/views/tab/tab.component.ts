import { Component, HostBinding, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'gkit-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.scss'],
})
export class TabComponent implements OnInit {
  @HostBinding('style.--tab-item__color') tabColor = null;
  variablesStyle: any[] = [];

  constructor(private el: ElementRef) {}

  ngOnInit(): void {
    const style = getComputedStyle(document.body);

    this.variablesStyle = VARIABLES_STYLE.map((m: any) => {
      m.defaultValue = style.getPropertyValue(m.variableName);
      return m;
    });
  }

  ngAfterContentInit() {
    // document.documentElement.style.setProperty('--tab-item__color', 'green');
    // this.el.nativeElement.style.setProperty('--tab-item__color', 'green')
  }

  onChangeProperty(incomingValue: string, item: any): void {
    item.defaultValue = incomingValue;
    document.documentElement.style.setProperty(
      item.variableName,
      item.defaultValue
    );
  }
}

export const VARIABLES_STYLE = [
  {
    variableName: '--tab-item__color',
    description: 'Цвет для текста таба',
    type: 'color'
  },
  {
    variableName: '--tab-item__background',
    description: 'Цвет для фона таба',
    type: 'color'
  },
  {
    variableName: '--tab-item__border',
    description: 'Граница',
    type: 'text'
  },
  {
    variableName: '--tab-item__border-top',
    description: 'Граница вверхняя',
    type: 'text'
  },
  {
    variableName: '--tab-item__border-right',
    description: 'Граница правая',
    type: 'text'
  },
  {
    variableName: '--tab-item__border-left',
    description: 'Граница левая',
    type: 'text'
  },
  {
    variableName: '--tab-item__brder-top-radius',
    description: 'Закругление сверху',
    type: 'text'
  },
  {
    variableName: '--tab-item__border-top-left-radius',
    description: 'Закругление сверху слева',
    type: 'text'
  },
  {
    variableName: '--tab-item__border-top-right-radius',
    description: 'Закругление сверху справа',
    type: 'text'
  },
  {
    variableName: '--tab-item__margin-left',
    description: 'Отсуп слева',
    type: 'text'
  },
  {
    variableName: '--tab-item__min-width',
    description: 'Минимальная длинна',
    type: 'text'
  },
  {
    variableName: '--tab-item__max-width',
    description: 'Максимальная длинна',
    type: 'text'
  },
  {
    variableName: '--tab-item__color__hover',
    description: 'Цвет текста',
    tags: ['hover'],
    type: 'color'
  },
  {
    variableName: '--tab-item__background__hover',
    description: 'Цвет фона',
    tags: ['hover'],
    type: 'color'
  },
];
