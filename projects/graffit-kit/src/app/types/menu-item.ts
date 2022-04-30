export class MenuItem {
  constructor(
    public title: string = '',
    public link: Array<string> | null = [],
    public children: Array<MenuItem> = []
  ) {}
}
