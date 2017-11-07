/* == Pure vs Impure == */

/* == Problems with impure code ==
1. Implicit dependencies makes it harder to track values
2. Implicit dependencies makes it harder to test functions (requires mocks)
3. Implicit dependencies requires to always think about them (maybe they are mutable?)
*/

const DB = { user: { id: 132 } };

// Impure

function addProductIntoUserBasket(productId) {
  request({
    url: "/api/basket",
    method: "POST",
    body: {
      userId: DB.user.id,
      productId
    }
  });
}

getUserById(12);

// Pure

function addProductIntoUserBasketPure(userId, productId) {
  request({
    url: "/api/basket",
    method: "POST",
    body: {
      productId,
      userId
    }
  });
}

getUserByIdPure(DB.user.id, 12);
