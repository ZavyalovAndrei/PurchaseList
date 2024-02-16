import Buyable from "../domain/Buyable";

export default class Cart {
  private _items: Buyable[] = [];

  add(item: Buyable): void {
    const addIndex: number = this.getIndexById(item.id);
    console.log(addIndex);
    if (addIndex === -1) {
      this._items.push(item);
    } else if (item.increasable) {
      this._items[addIndex].quantity++;
    }
  }

  get items(): Buyable[] {
    return [...this._items];
  }

  get summ(): number {
    let result: number = 0;
    this._items.forEach((item) => (result += item.price * item.quantity));
    return result;
  }

  getDiscount(discount: number): number {
    return this.summ - (this.summ * discount) / 100;
  }

  remove(id: number): void {
    let index: number = this.getIndexById(id);
    if (index !== -1) {
      if (this._items[index].quantity <= 1) {
        this._items.splice(index, 1);
      } else {
        this._items[index].quantity--;
      }
    }
  }
  getIndexById(id: number): number {
    let result: number = -1;
    for (let i: number = 0; i < this._items.length; i++) {
      if (this._items[i].id === id) {
        result = i;
      }
    }
    return result;
  }
}
