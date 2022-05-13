import { Component, HostBinding, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'gkit-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.scss'],
})
export class TabComponent implements OnInit {
  variablesStyle: any[] = [];

  code = `
  <ngx-git-tab>
    <ngx-git-tab-item [headerTemplate]="header">
      <ng-template #header>
        <div class="g-tab-custom-title">
          Название таба 1
        </div>
      </ng-template>
      <div class="p-grid">
        <div class="p-col">Контент таба 1</div>
      </div>
    </ngx-git-tab-item>
    <ngx-git-tab-item header="Название таба 2"
      ><div class="p-grid">
        <div class="p-col">Контент таба 2</div>
      </div></ngx-git-tab-item>
    <ngx-git-tab-item header="Название таба 3"
      ><div class="p-grid">
        <div class="p-col">Контент таба 3</div>
      </div></ngx-git-tab-item>
  </ngx-git-tab>
  `;

  cssVariable = `
    .g-tab-nav
      .g-tab-nav-item
        .g-tab-item-title
    .g-tab-content-container
  `;

  constructor(private el: ElementRef) {}

  ngOnInit(): void {
    const style = getComputedStyle(document.body);

    this.variablesStyle = VARIABLES_STYLE.map((m: any) => {
      m.defaultValue = style.getPropertyValue(m.variableName);
      return m;
    });
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
    variableName: '--tab-item__color__selected',
    description: 'Цвет текста выбранного таба',
    type: 'color',
  },
  {
    variableName: '--tab-item__background__selected',
    description: 'Цвет фона выбранного таба',
    type: 'color',
  },
  {
    variableName: '--tab-item__color',
    description: 'Цвет для текста таба',
    type: 'color',
  },
  {
    variableName: '--tab-item__background',
    description: 'Цвет для фона таба',
    type: 'color',
  },
  {
    variableName: '--tab-item__border',
    description: 'Граница',
    type: 'text',
  },
  {
    variableName: '--tab-item__border-top',
    description: 'Граница вверхняя',
    type: 'text',
  },
  {
    variableName: '--tab-item__border-right',
    description: 'Граница правая',
    type: 'text',
  },
  {
    variableName: '--tab-item__border-left',
    description: 'Граница левая',
    type: 'text',
  },
  {
    variableName: '--tab-item__brder-top-radius',
    description: 'Закругление сверху',
    type: 'text',
  },
  {
    variableName: '--tab-item__border-top-left-radius',
    description: 'Закругление сверху слева',
    type: 'text',
  },
  {
    variableName: '--tab-item__border-top-right-radius',
    description: 'Закругление сверху справа',
    type: 'text',
  },
  {
    variableName: '--tab-item__margin-left',
    description: 'Отсуп слева',
    type: 'text',
  },
  {
    variableName: '--tab-item__min-width',
    description: 'Минимальная длинна',
    type: 'text',
  },
  {
    variableName: '--tab-item__max-width',
    description: 'Максимальная длинна',
    type: 'text',
  },
  {
    variableName: '--tab-item__color__hover',
    description: 'Цвет для текста таба',
    tags: ['hover'],
    type: 'color',
  },
  {
    variableName: '--tab-item__background__hover',
    description: 'Цвет для фона таба',
    tags: ['hover'],
    type: 'color',
  },
  {
    variableName: '--tab-content__border',
    description: 'Граница для контента',
    type: 'text',
  },
  {
    variableName: '--tab-content__background',
    description: 'Цвет для фона контента',
    type: 'color',
  },
  {
    variableName: '--tab-content__color',
    description: 'Цвет для текста контента',
    type: 'color',
  },
  {
    variableName: '--tab-content__border-radius',
    description: 'Закругление контента',
    type: 'text',
  },
  {
    variableName: '--tab-content__border-top-left-radius',
    description: 'Закругление контента сверху слева',
    type: 'text',
  },
  {
    variableName: '--tab-content__border-top-right-radius',
    description: 'Закругление контента сверху справа',
    type: 'text',
  },
  {
    variableName: '--tab-content__border-bottom-left-radius',
    description: 'Закругление контента снизу слева',
    type: 'text',
  },
  {
    variableName: '--tab-content__border-bottom-right-radius',
    description: 'Закругление контента снизу справа',
    type: 'text',
  },
];
