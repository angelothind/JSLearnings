import { products } from "./products.js";

const productList = document.getElementById("product-table");

function renderProducts(products) {
    productList.innerHTML = products.map(product => `
        <tr>
            <td>${product.name}</td>
            <td>£${product.price.toFixed(2)}</td>
            <td>${product.category}</td>
            <td>${product.inStock ? "In stock" : "Out of stock"}</td>
        </tr>
    `).join("");
}

renderProducts(products);
