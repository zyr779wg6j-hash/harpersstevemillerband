/**
 * Can You Dig It? Retro - Main JavaScript
 */

document.addEventListener('DOMContentLoaded', () => {
    // ============================================
    // State Management (Cart)
    // ============================================
    let cart = JSON.parse(localStorage.getItem('retroCart')) || [];

    // ============================================
    // DOM Elements
    // ============================================
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

    // ============================================
    // Navigation
    // ============================================
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', () => {
            const isOpen = navMenu.classList.toggle('open');
            navToggle.setAttribute('aria-expanded', isOpen);
        });

        // Close mobile menu on link click
        navMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('open');
                navToggle.setAttribute('aria-expanded', 'false');
            });
        });
    }

    // ============================================
    // Cart Functions
    // ============================================
    function updateCartUI() {
        // Update count badge in header
        const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
        if(cartCount) cartCount.textContent = totalItems;

        // Render items inside sidebar
        if (cart.length === 0) {
            cartItems.innerHTML = '<p class="cart-empty">Your stash is empty. Go dig up some tees!</p>';
        } else {
            cartItems.innerHTML = cart.map((item, index) => `
                <div class="cart-item">
                    <div class="cart-item-details">
                        <h4>${item.name}</h4>
                        <p>Size: ${item.size} | Qty: ${item.quantity}</p>
                        <p style="color: var(--color-playful-red); margin-top: 5px;">$${(item.price * item.quantity).toFixed(2)}</p>
                    </div>
                    <button class="cart-item-remove" data-index="${index}" aria-label="Remove item">X</button>
                </div>
            `).join('');

            // Bind remove buttons
            document.querySelectorAll('.cart-item-remove').forEach(btn => {
                btn.addEventListener('click', (e) => {
                    const index = parseInt(e.target.dataset.index);
                    removeFromCart(index);
                });
            });
        }

        // Update total price
        const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        if(cartTotal) cartTotal.textContent = `$${total.toFixed(2)}`;

        // Save state
        localStorage.setItem('retroCart', JSON.stringify(cart));
    }

    function addToCart(productName, price, size) {
        // Check if item of same name and size exists
        const existingIndex = cart.findIndex(item => 
            item.name === productName && item.size === size
        );

        if (existingIndex > -1) {
            cart[existingIndex].quantity++;
        } else {
            cart.push({
                name: productName,
                price: parseFloat(price),
                size: size,
                quantity: 1
            });
        }

        updateCartUI();
        showToast(`Added ${productName} (Size: ${size})!`);
        openCart(); // Slide cart open for feedback
    }

    function removeFromCart(index) {
        cart.splice(index, 1);
        updateCartUI();
    }

    function openCart() {
        if(cartSidebar) cartSidebar.classList.add('open');
        if(cartOverlay) cartOverlay.classList.add('open');
        document.body.style.overflow = 'hidden'; // Stop background scrolling
    }

    function closeCart() {
        if(cartSidebar) cartSidebar.classList.remove('open');
        if(cartOverlay) cartOverlay.classList.remove('open');
        document.body.style.overflow = '';
    }

    // ============================================
    // Event Listeners
    // ============================================
    
    // Cart toggles
    cartLink?.addEventListener('click', (e) => {
        e.preventDefault();
        openCart();
    });
    cartClose?.addEventListener('click', closeCart);
    cartOverlay?.addEventListener('click', closeCart);

    // Product "Add to Cart" binds
    addToCartBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const product = btn.dataset.product;
            const price = btn.dataset.price;
            // Find the size dropdown in the same product card
            const sizeSelect = btn.parentElement.querySelector('.size-select');
            const size = sizeSelect ? sizeSelect.value : 'M';
            
            addToCart(product, price, size);
        });
    });

    // Checkout Alert
    checkoutBtn?.addEventListener('click', () => {
        if (cart.length === 0) {
            showToast('Your cart is totally empty, man!');
            return;
        }
        showToast('Checkout flow coming soon! Keep on rockin! ✌️');
    });

    // ============================================
    // Toast Notification System
    // ============================================
    function showToast(message) {
        if(!toast) return;
        toast.textContent = message;
        toast.classList.add('show');

        // Remove toast after 3 seconds
        setTimeout(() => {
            toast.classList.remove('show');
        }, 3000);
    }

    // Initialize cart UI on load
    updateCartUI();
});
