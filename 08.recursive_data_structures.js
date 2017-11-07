/* == List ==

 0 -> 1 -> 2 -> 3

*/

/* == Tree ==

    0 <- Node
   / \
  1   3 <- Node
 /   / \
2   4   5

*/

/* == Immutable Singly Linked List == */

// `Nil` stands for "nothing" and also "empty list"
class Nil {
  toString() {
    return "Nil";
  }
}
const nil = new Nil();

// `Cons` cell stands for "construction cell"
class Cons {
  constructor(head, tail = nil) {
    this.head = head;
    this.tail = tail;
  }
  toString() {
    return `Cons(${this.head}, ${this.tail})`;
  }
}
Cons.of = (head, tail) => new Cons(head, tail);

const cons = Cons.of(1, Cons.of(2, Cons.of(3)));

cons.toString(); // "Cons(1, Cons(2, Cons(3, Nil)))"

class List extends Cons {
  constructor(head, tail) {
    super(head, tail);
  }
  toString() {
    return `List(${this.first()}, ${this.rest()})`;
  }
  first() {
    return this.head;
  }
  rest() {
    return this.tail;
  }
}
List.of = (head, tail) => new List(head, tail);

List.fromValues = (head, ...tail) => {
  if (tail.length > 0) {
    return List.of(head, List.fromValues(...tail));
  } else {
    return List.of(head, nil);
  }
};

const list = List.fromValues(1, 2, 3);

list.toString(); // List(1, List(2, List(3, Nil)))
