import { Component } from '@angular/core';
import { Item } from './item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-todo-app';

  filter: 'all' | 'active' | 'completed' = 'all';

  allItems = [
    { description: 'Buy milk', done: false },
    { description: 'Buy bread', done: true },
    { description: 'Buy cheese', done: false },
  ]

  get items() {
    if (this.filter === 'all') {
      return this.allItems;
    }

    return this.allItems.filter(item => {
      if (this.filter === 'active') {
        return !item.done;
      }

      return item.done;
    });
  }

  addItem(description: string) {
    this.allItems.unshift({
      description,
      done: false
    });
  }

  remove(item:Item) {
    this.allItems.splice(this.allItems.indexOf(item), 1);
  }
  


}
