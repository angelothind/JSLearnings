import { products } from "./products.js";

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

renderProducts(products);
