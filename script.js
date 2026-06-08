/**
 * Can You Dig It? Retro - Groovy Logic Setup
 */

document.addEventListener('DOMContentLoaded', () => {
    let cart = JSON.parse(localStorage.getItem('retroCart')) || [];

    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    const cartSidebar = document.getElementById('cartSidebar');
    const cartOverlay = document.getElementById('cartOverlay');
    const cartItems = document.getElementById('cartItems');
    const cartCount = document.getElementById('cart-count');
    const cartTotal = document.getElementById('cartTotal');
    const cartLink = document.querySelector('.cart-link');
    const cartClose = document.querySelector('.cart-close');
    const checkoutBtn = document.getElementById('checkoutBtn');
    
    const addToCartBtns = document.querySelectorAll('.btn-add-cart');
    const toast = document.getElementById('toast');

    // Mobile Menu Toggle
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.toggle('open');
        });
        navMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => navMenu.classList.remove('open'));
        });
    }

    // Cart Logic
    function updateCartUI() {
        const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
        if(cartCount) cartCount.textContent = totalItems;

        if (cart.length === 0) {
            cartItems.innerHTML = '<p class="cart-empty">Your stash is empty. Go dig up some tees!</p>';
        } else {
            cartItems.innerHTML = cart.map((item, index) => `
                <div class="cart-item">
                    <div>
                        <h4>${item.name}</h4>
                        <p>Size: ${item.size} | Qty: ${item.quantity}</p>
                        <p style="color: var(--color-red); margin-top: 5px; font-family: 'Shrikhand', cursive; font-size: 1.2rem;">
                            $${(item.price * item.quantity).toFixed(2)}
                        </p>
                    </div>
                    <button class="cart-item-remove" data-index="${index}">X</button>
                </div>
            `).join('');

            document.querySelectorAll('.cart-item-remove').forEach(btn => {
                btn.addEventListener('click', (e) => removeFromCart(parseInt(e.target.dataset.index)));
            });
        }

        const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        if(cartTotal) cartTotal.textContent = `$${total.toFixed(2)}`;
        localStorage.setItem('retroCart', JSON.stringify(cart));
    }

    function addToCart(productName, price, size) {
        const existingIndex = cart.findIndex(item => item.name === productName && item.size === size);
        if (existingIndex > -1) {
            cart[existingIndex].quantity++;
        } else {
            cart.push({ name: productName, price: parseFloat(price), size: size, quantity: 1 });
        }
        updateCartUI();
        showToast(`Groovy! Added ${productName} (Size: ${size})!`);
        openCart();
    }

    function removeFromCart(index) {
        cart.splice(index, 1);
        updateCartUI();
    }

    function openCart() {
        if(cartSidebar) cartSidebar.classList.add('open');
        if(cartOverlay) cartOverlay.classList.add('open');
        document.body.style.overflow = 'hidden';
    }

    function closeCart() {
        if(cartSidebar) cartSidebar.classList.remove('open');
        if(cartOverlay) cartOverlay.classList.remove('open');
        document.body.style.overflow = '';
    }

    // Bindings
    cartLink?.addEventListener('click', (e) => { e.preventDefault(); openCart(); });
    cartClose?.addEventListener('click', closeCart);
    cartOverlay?.addEventListener('click', closeCart);

    addToCartBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const product = btn.dataset.product;
            const price = btn.dataset.price;
            const sizeSelect = btn.parentElement.querySelector('.size-select');
            addToCart(product, price, sizeSelect ? sizeSelect.value : 'M');
        });
    });

    checkoutBtn?.addEventListener('click', () => {
        if (cart.length === 0) return showToast('Your stash is empty, man!');
        showToast('Checkout coming soon! Keep on rockin! ✌️');
    });

    function showToast(message) {
        if(!toast) return;
        toast.textContent = message;
        toast.classList.add('show');
        setTimeout(() => toast.classList.remove('show'), 3000);
    }

    updateCartUI();
});
