// Add your JavaScript code here
const cart = document.getElementById('cart');
const total = document.getElementById('total-price');

// Function to update the total price
function updateTotal() {
    let totalPrice = 0;
    const items = document.querySelectorAll('.cart-item');
    items.forEach(item => {
        const quantity = parseInt(item.querySelector('.quantity').textContent);
        const price = parseFloat(item.querySelector('.price').textContent.slice(1)); // Remove the "$" sign
        totalPrice += quantity * price;
    });
    total.textContent = '$' + totalPrice.toFixed(2); // Format to two decimal places
}

// Event listeners for + and - buttons
cart.addEventListener('click', event => {
    if (event.target.classList.contains('increment')) {
        const quantityElement = event.target.parentElement.querySelector('.quantity');
        let quantity = parseInt(quantityElement.textContent);
        quantity++;
        quantityElement.textContent = quantity;
        updateTotal();
    } else if (event.target.classList.contains('decrement')) {
        const quantityElement = event.target.parentElement.querySelector('.quantity');
        let quantity = parseInt(quantityElement.textContent);
        if (quantity > 0) {
            quantity--;
            quantityElement.textContent = quantity;
            updateTotal();
        }
    }
});

// Event listener for delete button
cart.addEventListener('click', event => {
    if (event.target.classList.contains('delete')) {
        const item = event.target.parentElement;
        item.remove();
        updateTotal();
    }
});

// Event listener for like button
cart.addEventListener('click', event => {
    if (event.target.classList.contains('like')) {
        event.target.classList.toggle('liked');
    }
});