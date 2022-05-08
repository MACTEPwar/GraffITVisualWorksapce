import { MenuItem } from '@types';

export const menu: Array<MenuItem> = [
  new MenuItem('Информация', null, [
    new MenuItem('Краткое описание', ['/overview']),
    new MenuItem('Начало работы', ['/get-started'])
  ]),
  new MenuItem('Работа с формами', null, [
    new MenuItem('Input', ['/input']),
    new MenuItem('Tabs', ['/tab']),
  ]),
];
