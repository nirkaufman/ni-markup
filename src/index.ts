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

//----------------------------

const titleElement = document.getElementById('title');
const addButton = document.getElementById('addItemButton');
const listElement = document.getElementById('list');
const inputElement = document.getElementById('input') as HTMLInputElement;

titleElement.innerText = myTodolist.title;

addButton.addEventListener('click', () => {
  const newItem = new Item(inputElement.value);
  myTodolist.addItem(newItem);
  listElement.innerHTML = '';
  renderList();
})

function renderList() {
  myTodolist.items.forEach( item => {
    const liElement = document.createElement('li');

    liElement.innerHTML = `
      <input type="checkbox">
      <span>${item.title}</span>
      <button class="remove-btn">X</button>
    `;

    listElement.appendChild(liElement);
  })
}


