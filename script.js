let cart = [];
let totalPrice = 0;

const cartItems = document.getElementById('cart-items');
const totalPriceElement = document.getElementById('total-price');
const cancelCartModal = document.getElementById('cancel-cart');
const confirmCancelBtn = document.getElementById('confirm-cancel');
const cancelCancelBtn = document.getElementById('cancel-cancel');

// Menambahkan item ke keranjang
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', () => {
        const productName = button.dataset.product;
        const productPrice = parseInt(button.dataset.price);
        
        // Menambah produk ke keranjang
        cart.push({ productName, productPrice });
        updateCart();
    });
});

// Update tampilan keranjang
function updateCart() {
    cartItems.innerHTML = '';
    totalPrice = 0;

    cart.forEach((item, index) => {
        const li = document.createElement('li');
        li.innerHTML = `${item.productName} - Rp ${item.productPrice} <span onclick="removeItem(${index})">Hapus</span>`;
        cartItems.appendChild(li);
        totalPrice += item.productPrice;
    });

    totalPriceElement.textContent = totalPrice;
}

// Menghapus item dari keranjang
function removeItem(index) {
    cart.splice(index, 1);
    updateCart();
}

// Cancel penghapusan item
cancelCancelBtn.addEventListener('click', () => {
    cancelCartModal.style.display = 'none';
});

// Konfirmasi penghapusan item
confirmCancelBtn.addEventListener('click', () => {
    cancelCartModal.style.display = 'none';
    // Logika penghapusan item jika dibutuhkan
});

// Checkout (opsional)
document.getElementById('checkout').addEventListener('click', () => {
    alert("Anda akan diarahkan ke WhatsApp untuk checkout.");
    window.open('https://wa.me/6285947515940', '_blank');
});