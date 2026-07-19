import { products } from "./products.js";

import { state } from "./products.js";

const productList = document.getElementById("product-table");

function renderProducts(products) {
    productList.innerHTML = products.map(product => `
        <tr>
            <td>
                <span class="product-button-wrapper">
                    <button
                        type="button"
                        class="product-button"
                        id="product-button-${product.id}"
                        data-id="${product.id}"
                        aria-describedby="product-tooltip-${product.id}"
                    >${product.name}</button>
                    <span
                        class="product-tooltip"
                        id="product-tooltip-${product.id}"
                        role="tooltip"
                    >Add to cart</span>
                </span>
            </td>
            <td>£${product.price.toFixed(2)}</td>
            <td>${product.category}</td>
            <td><img src="${product.image}" alt="${product.name}" width="100" height="100"></td>
            <td>${product.inStock ? "In stock" : "Out of stock"}</td>
        </tr>
    `).join("");
}

function handleAddToCart(event) {
    // currentTarget is the button whose click listener called this function.
    // dataset.id reads data-id as a string, so Number() converts it to a number.
    const productId = Number(event.currentTarget.dataset.id);

    // find() checks each product until its ID matches the clicked button's ID.
    const selectedProduct = products.find(
        (product) => product.id === productId
    );

    // This can later be replaced with the shopping-basket logic.
    console.log(selectedProduct);
}

function setupProductButtons() {
    // renderProducts() creates these buttons before this function runs.
    const buttons = productList.querySelectorAll(".product-button");

    // Give every product button the same click handler.
    buttons.forEach((button) => {
        button.addEventListener("click", handleAddToCart);
    });
}

renderProducts(products);
setupProductButtons();

