import { products } from "./products.js";

import { state } from "./products.js";

const productList = document.getElementById("product-table");
const shoppingBasket = document.getElementById("shopping-basket-container");
const personalPageTitle = document.getElementById("personal-page-title");
const personalPageHeader = document.getElementById("personal-page-header");

personalPageTitle.innerHTML = `Welcome, ${state.userName}!`;
personalPageHeader.innerHTML = `Welcome, ${state.userName}!`;

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

function renderBasket(state) {
    if (state.basket.length === 0) {
        shoppingBasket.innerHTML = "<p>Your basket is empty</p>";
    } else {
        shoppingBasket.innerHTML = state.basket.map(cartItem => {
            const itemInformation = products.find(product => product.id === cartItem.productId);
            return `<tr>
                <td>${cartItem.quantity}</td>
                <td>${itemInformation.name}</td>
                <td>£${itemInformation.price.toFixed(2)}</td>
                <td>£${(itemInformation.price * cartItem.quantity).toFixed(2)}</td>
            </tr>`
        }).join("");
    }
}


function handleAddToBasket(event) {
    const productId = Number(event.currentTarget.dataset.id);
    const selectedProduct = products.find(product => product.id === productId);
    if (selectedProduct.inStock) {
        state.basket.push({productId: productId, quantity: 1});
        renderBasket(state);
    } else {
        console.log("Product is out of stock");
    }
}

function addToBasketListener() {
    const addToBasketButtons = productList.querySelectorAll(".product-button");
    addToBasketButtons.forEach(button => {
        button.addEventListener("click", (event) => handleAddToBasket(event));
    });
}


renderProducts(products);
renderBasket(state);
addToBasketListener(products);

