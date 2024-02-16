import Cart from "../service/Cart";
import Book from "../domain/Book";
import MusicAlbum from "../domain/MusicAlbum";
import Cinema from "../domain/Cinema";
import Gadget from "../domain/Gadget";

let cart = new Cart();
cart.add(new Book(1001, "Librarian", "Mikhail Elizarov", 2007, 600));
cart.add(new Book(1001, "Librarian", "Mikhail Elizarov", 2007, 600));
cart.add(new MusicAlbum(1002, "Grave Digger", "Mob Tactics", 1200));
cart.add(
  new Cinema(
    1003,
    "Оппенгеймер",
    "Oppenheimer",
    "IMAX",
    "https://movies.universalpictures.com/media/opr-tsr1sheet3-look2-rgb-3-1-1-64545c0d15f1e-1.jpg",
    2023,
    "США",
    "Oppenheimer",
    ["биография", "драма", "история"],
    180,
    400
  )
);
cart.add(new Gadget(1004, "iPhone 14 pro", 60000));
cart.add(new Gadget(1004, "iPhone 14 pro", 60000));

test("new card should be empty", () => {
  const testCart = new Cart();
  expect(testCart.items.length).toBe(0);
});

test("should be 4 positions in the card when they are added", () => {
  expect(cart.items.length).toBe(4);
});

test("should be return total summ (2200) of items", () => {
  const result: number = cart.summ;
  const expected: number = 122200;
  expect(result).toBe(expected)
});

test("should be return total summ (2090) of items with discount 5%", () => {
  expect(cart.getDiscount(5)).toBe(116090);
});

test("should be 3 positions in the card after removing one", () => {
  cart.remove(1002);
  expect(cart.items.length).toBe(3);
});

test("Gadget should change quantity from 2 to 1", () => {
  cart.remove(1004);
  const index: number = cart.getIndexById(1004);
  expect(cart.items[index].quantity).toBe(1);
});
