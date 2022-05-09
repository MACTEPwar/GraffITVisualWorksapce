import {
  ChangeDetectorRef,
  Component,
  ContentChildren,
  OnInit,
  QueryList,
} from '@angular/core';
import { TabItemComponent } from './tab-item/tab-item.component';

@Component({
  selector: 'ngx-git-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.scss'],
  host: {
    class: 'g-element',
  },
})
export class TabComponent implements OnInit {
  @ContentChildren(TabItemComponent) tabItems: QueryList<TabItemComponent> =
    new QueryList();
  tabs: TabItemComponent[] = [];

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit() {}

  ngAfterContentInit() {
    this.initTabs();

    this.tabItems.changes.subscribe((_) => {
      this.initTabs();
    });
  }

  initTabs(): void {
    this.tabs = this.tabItems.toArray();
    let selectedTab: TabItemComponent | null = this.findSelectedTab();
    if (!selectedTab && this.tabs.length) {
      this.tabs[0].selected = true;
    }

    this.cdr.markForCheck();
  }

  open(event: Event, tab: TabItemComponent) {
    if (!tab.selected) {
      let selectedTab: TabItemComponent | null = this.findSelectedTab();
      if (selectedTab) {
        selectedTab.selected = false;
      }

      tab.selected = true;
    }

    if (event) {
      event.preventDefault();
    }
  }

  close(event: Event, tab: TabItemComponent): void {}

  findSelectedTab(): TabItemComponent | null {
    for (let i = 0; i < this.tabs.length; i++) {
      if (this.tabs[i].selected) {
        return this.tabs[i];
      }
    }
    return null;
  }
}
