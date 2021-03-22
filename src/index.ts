// Logic
class Item {
  private readonly _id: number;
  completed: boolean;
  title: string;

  constructor(title: string) {
    this.title = title;
    this._id = Date.now();
    this.completed = false;
  }

  get id(): number {
    return this._id;
  }

  toggleCompleted(): void {
    this.completed = !this.completed
  }


}

class Todolist<T> {
  private _items: Array<T>;
  title: string;

  constructor(title: string, items?: Array<T>, ) {
    this._items = items || [];
    this.title = title;
  }

  get items(): Array<T> {
    return this._items;
  }

  addItem(item: T) {
    this._items.push(item);
  }

  removeItem(itemId: number) {
    function filterItem (item) {
      return item.id !== itemId
    }

    this._items = this._items.filter(filterItem);
  }

}

const myTodolist = new Todolist<Item>('My List', []);

// UI
//todo: Render the myTodolist title to th DOM
  //  1. get reference to th h1 element
  //  2. set the inner text to the todolist title
//todo: Render the items as li elements to the DOM
//todo: Each time item added, re-create and show updated list

// todo: document.getElementById()
// todo: document.createElement()
// todo: <element>.appendChild(<element>)

// todo: get reference to the button
// todo: use: addEventListener('click', <pass function>)


