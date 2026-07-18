# Product Catalogue and Shopping Cart

## Project goal

Build a small online shop using vanilla HTML, CSS, and JavaScript. Users should be able to browse and filter products, add products to a basket, change quantities, and see the total cost update on screen.

Do not use React or another framework. The purpose of this project is to practise the JavaScript and DOM concepts that React builds upon.

This project practises:

- DOM selection and manipulation
- Browser events and forms
- `map()`, `filter()`, `find()`, and `reduce()`
- Objects, arrays, and destructuring
- Updating application state
- Rendering the page from state
- Splitting code into modules

## Suggested file structure

```text
ProductCatalogue+ShoppingCart/
├── index.html
├── styles.css
├── products.js
├── app.js
└── README.md
```

- `index.html` contains the page structure.
- `styles.css` contains the page styling.
- `products.js` exports the product data.
- `app.js` contains the state, rendering, and event-handling logic.

Use `<script type="module" src="app.js"></script>` to load the application.

## Product data

Create at least eight products across three or more categories. Every product must have:

- A unique numeric `id`
- A `name`
- A numeric `price`
- A `category`
- An `inStock` value

Example shape:

```js
{
    id: 1,
    name: "Keyboard",
    price: 49.99,
    category: "Technology",
    inStock: true
}
```

You may also add an image URL and description.

## Application state

Store the changing application data together:

```js
const state = {
    basket: [],
    searchTerm: "",
    selectedCategory: "all"
};
```

The product data does not need to be inside `state` if it is imported from `products.js`.

Each basket item should store a product ID and quantity. Avoid copying all of the product information into the basket.

## Page layout

The page must contain:

1. A heading
2. A search input
3. A category filter
4. A product-list section
5. A shopping-basket section
6. A basket item count
7. A basket total

The layout does not need to look professional. Prioritize correct behaviour and readable code before styling.

## Functional requirements

### 1. Display the products

Create a `renderProducts()` function that displays every matching product as a card.

Each card must show:

- Product name
- Price
- Category
- Stock status
- An **Add to basket** button

Use `map()` to transform the product objects into product-card HTML or DOM elements.

Out-of-stock products must not be addable.

### 2. Search by product name

When the user types in the search input:

1. Read the input value.
2. Update `state.searchTerm`.
3. Use `filter()` to select matching products.
4. Render the filtered list.

Searches should be case-insensitive. If there are no matches, display a clear message instead of an empty area.

### 3. Filter by category

Add a dropdown containing `all` and each available category.

When its value changes:

1. Update `state.selectedCategory`.
2. Use `filter()` to select products in that category.
3. Render the new product list.

The category and text search filters must work together.

### 4. Add a product to the basket

When an **Add to basket** button is clicked:

1. Read the product ID from the button.
2. Use `find()` to locate the product.
3. Check whether the product is already in the basket.
4. Add a new basket item or increase its quantity.
5. Render the basket again.

Do not identify products by their array position. Use their unique IDs.

### 5. Display the basket

Create a `renderBasket()` function.

Each basket row must display:

- Product name
- Unit price
- Quantity
- Line total
- Increase button
- Decrease button
- Remove button

Use `find()` to connect each basket item to its product information.

When the basket is empty, display `Your basket is empty`.

### 6. Change quantities

Users must be able to increase or decrease an item's quantity.

- Increasing adds one to the quantity.
- Decreasing subtracts one.
- A quantity must never be negative.
- Decide whether decreasing from one removes the item or leaves it at one, then document that decision in your code.

After every change, re-render the basket totals and item rows.

### 7. Remove products

The remove button must delete the selected item from the basket.

Use `filter()` to create a basket that excludes the selected product ID.

### 8. Calculate totals

Use `reduce()` to calculate:

- The total number of items, including quantities
- The total price of the basket

Display prices with exactly two decimal places.

### 9. Use browser events

The application should respond to:

- `input` events for search
- `change` events for the category dropdown
- `click` events for basket actions

You may attach listeners to individual buttons or research event delegation and use a listener on a parent element.

## Required array methods

Your finished application must use each method for a meaningful purpose:

- `map()` — produce product cards or basket rows
- `filter()` — search, category filtering, or removal
- `find()` — locate a product or basket item by ID
- `reduce()` — calculate basket item and price totals

Do not use these methods merely to satisfy the requirement. Be able to explain what each callback receives and what the method returns.

## Suggested build order

Complete one stage before moving to the next:

1. Create the HTML layout.
2. Create and export the product data.
3. Render all products with `map()`.
4. Add text search with `filter()`.
5. Add category filtering.
6. Add products to the basket with `find()`.
7. Render the basket.
8. Add quantity and remove controls.
9. Calculate totals with `reduce()`.
10. Add styling and improve accessibility.

Test the application after each stage.

## Completion checklist

The basic project is complete when:

- [ ] At least eight products are displayed.
- [ ] Products are generated from JavaScript data.
- [ ] Text search works regardless of letter casing.
- [ ] Category filtering works together with search.
- [ ] Products can be added to the basket.
- [ ] Adding the same product updates its quantity.
- [ ] Quantities can be increased and decreased.
- [ ] Products can be removed.
- [ ] Item count and total price are correct.
- [ ] Empty product and basket messages are displayed.
- [ ] Out-of-stock products cannot be added.
- [ ] `map()`, `filter()`, `find()`, and `reduce()` are all used.
- [ ] The browser console contains no errors.

## Manual test cases

Test at least these situations:

1. Search using lowercase and uppercase text.
2. Select a category while a search is active.
3. Search for a product that does not exist.
4. Add the same product more than once.
5. Add two different products.
6. Increase and decrease their quantities.
7. Remove one product and verify the total.
8. Remove every product and verify the empty message.
9. Try to add an out-of-stock product.
10. Verify prices such as `0.1 + 0.2` are displayed to two decimal places.

## Constraints

For the first version:

- Do not use React, jQuery, or another UI framework.
- Do not fetch products from an API.
- Do not use a database.
- Do not store HTML for every product directly in `index.html`.
- Keep product data separate from rendering logic.

## Stretch goals

Complete these only after the basic project works:

- Sort products by name or price.
- Add minimum and maximum price filters.
- Save the basket in `localStorage`.
- Add a **Clear basket** button.
- Add a discount-code form.
- Display product images.
- Make the page keyboard accessible.
- Write tests for filtering and total-calculation functions.

## React preparation

While building, notice this repeated pattern:

1. An event occurs.
2. Application state changes.
3. A render function reads the state.
4. The DOM updates.

React follows the same broad idea. Completing this project in vanilla JavaScript will make components, props, state, list rendering, and event handlers easier to understand later.
