# DOM Workflow Summary

## 1. Rendering JavaScript data in HTML

### Step 1: Import the data

```js
import { products } from "./products.js";
```

### Step 2: Select an HTML container

```js
const productList = document.getElementById("product-table");
```

`productList` is now a JavaScript reference to the HTML element with
`id="product-table"`.

### Step 3: Create a rendering function

```js
function renderProducts(products) {
    productList.innerHTML = products
        .map((product) => `
            <tr>
                <td>${product.name}</td>
                <td>£${product.price.toFixed(2)}</td>
            </tr>
        `)
        .join("");
}
```

- `map()` turns each product into an HTML string.
- `${...}` inserts JavaScript values into a template string.
- `join("")` combines the array of strings into one HTML string.
- `innerHTML` places that string inside the selected element.

### Step 4: Call the rendering function

```js
renderProducts(products);
```

The overall flow is:

**Import data → Select container → Transform data → Insert HTML → Render**

---

## 2. Adding event functionality

### Step 1: Write the event handler

The handler defines what should happen:

```js
function handleProductClick(event) {
    const productId = Number(event.currentTarget.dataset.id);
    console.log(productId);
}
```

- `event` is created and passed in by the browser.
- `currentTarget` is the element whose listener is currently running.
- `dataset.id` reads the element's `data-id` attribute.
- `Number()` converts the string ID into a number.

### Step 2: Select the rendered buttons

```js
const buttons = productList.querySelectorAll(".product-button");
```

This searches inside `productList` for every element with the
`product-button` class.

### Step 3: Attach the event listener

```js
buttons.forEach((button) => {
    button.addEventListener("click", handleProductClick);
});
```

`addEventListener()` connects:

- `button` — the element being watched
- `"click"` — the event being watched for
- `handleProductClick` — the function that runs

### Step 4: Use the correct startup order

```js
renderProducts(products);
setupProductButtons();
```

The buttons must be rendered before JavaScript can select them and attach
listeners.

The overall flow is:

**Render element → Select element → Write handler → Attach listener → User interacts → Browser calls handler**

---

## Quick reference

```js
function handleProductClick(event) {
    const productId = Number(event.currentTarget.dataset.id);
    console.log(productId);
}

function setupProductButtons() {
    const buttons = productList.querySelectorAll(".product-button");

    buttons.forEach((button) => {
        button.addEventListener("click", handleProductClick);
    });
}

renderProducts(products);
setupProductButtons();
```

Remember:

- HTML `data-id="3"` becomes JavaScript `element.dataset.id`.
- Dataset values are strings.
- `event.target` is the exact element clicked.
- `event.currentTarget` is the element with the active listener.
- If rendering replaces the buttons, their listeners must be attached again.
