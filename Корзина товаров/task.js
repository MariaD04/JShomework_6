const cardProducts = document.querySelector('.cart__products');
const products = document.querySelectorAll('.product');
let productsId = [];

products.forEach((product) => {
    let productId = product.dataset.id;
    let productImage = product.querySelector('.product__image').getAttribute('src')
    let button = product.querySelector('.product__add')

    let productControls = product.querySelectorAll('.product__quantity-control');
    let productValue = product.querySelector('.product__quantity-value');
    
    productControls.forEach((button) => {
        button.addEventListener('click', () => {
            if (productValue.textContent > 1 && button.classList.contains('product__quantity-control_dec')) {   
                productValue.textContent = parseInt(productValue.textContent) - 1;   
            }
            else if (productValue.textContent >= 1 && button.classList.contains('product__quantity-control_inc')) {
                productValue.textContent = parseInt(productValue.textContent) + 1;   
            }
        })   
    })
    
    button.addEventListener('click', () => {  
        if (productsId.includes(productId)) {
            let cardProduct = cardProducts.querySelectorAll('.cart__product')
            let index = Array.from(cardProduct).findIndex((product) => product.dataset.id === productId);

            if (index !== -1) {
                let countElement = cardProduct[index].querySelector('.cart__product-count');
                countElement.textContent = parseInt(countElement.textContent) + parseInt(productValue.textContent);
            }
            
        } else {
            productsId.push(productId);
            cardProducts.innerHTML += `
            <div class="cart__product" data-id="${productId}">
                <img class="cart__product-image" src="${productImage}">
                <div class="cart__product-count">${productValue.textContent}</div>
            </div>
            `;
        }
    })
})
