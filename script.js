/**
 * Can You Dig It? Retro - Main JavaScript
 */

document.addEventListener('DOMContentLoaded', () => {
    // ============================================
    // State Management
    // ============================================
    let cart = JSON.parse(localStorage.getItem('retroCart')) || [];
    let selectedSize = 'M';
    let selectedIcon = '🎸';
    let selectedBodyColor = '#f5f5f5';
    let selectedSleeveColor = '#1a1a1a';

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
    const filterBtns = document.querySelectorAll('.filter-btn');
    const productCards = document.querySelectorAll('.product-card');
    const addToCartBtns = document.querySelectorAll('.btn-add-cart');
    const customizeForm = document.getElementById('customizeForm');
    const contactForm = document.getElementById('contactForm');
    const newsletterForm = document.getElementById('newsletterForm');
    const checkoutBtn = document.getElementById('checkoutBtn');
    const toast = document.getElementById('toast');

    // Custom tee elements
    const teeBody = document.getElementById('teeBody');
    const sleeveLeft = document.getElementById('sleeveLeft');
    const sleeveRight = document.getElementById('sleeveRight');
    const designIcon = document.getElementById('designIcon');
    const designText = document.getElementById('designText');
    const customTextInput = document.getElementById('customText');
    const colorOptions = document.querySelectorAll('.color-option');
    const iconOptions = document.querySelectorAll('.icon-option');
    const sizeOptions = document.querySelectorAll('.size-option');

    // ============================================
    // Navigation
    // ============================================
    navToggle?.addEventListener('click', () => {
        const isOpen = navMenu.classList.toggle('open');
        navToggle.setAttribute('aria-expanded', isOpen);
    });

    // Close mobile menu on link click
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('open');
            navToggle?.setAttribute('aria-expanded', 'false');
        });
    });

    // Close mobile menu on scroll
    window.addEventListener('scroll', () => {
        if (navMenu.classList.contains('open')) {
            navMenu.classList.remove('open');
            navToggle?.setAttribute('aria-expanded', 'false');
        }
    });

    // ============================================
    // Cart Functions
    // ============================================
    function updateCartUI() {
        // Update count
        const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
        cartCount.textContent = totalItems;

        // Update items display
        if (cart.length === 0) {
            cartItems.innerHTML = '<p class="cart-empty">Your cart is empty. Time to rock!</p>';
        } else {
            cartItems.innerHTML = cart.map((item, index) => `
                <div class="cart-item">
                    <div class="cart-item-image">${item.icon || '👕'}</div>
                    <div class="cart-item-details">
                        <div class="cart-item-name">${item.name}</div>
                        <div class="cart-item-meta">${item.size ? `Size: ${item.size}` : ''} ${item.quantity > 1 ? `× ${item.quantity}` : ''}</div>
                        <div class="cart-item-price">$${(item.price * item.quantity).toFixed(2)}</div>
                    </div>
                    <button class="cart-item-remove" data-index="${index}" aria-label="Remove item">×</button>
                </div>
            `).join('');

            // Add remove handlers
            document.querySelectorAll('.cart-item-remove').forEach(btn => {
                btn.addEventListener('click', () => {
                    const index = parseInt(btn.dataset.index);
                    removeFromCart(index);
                });
            });
        }

        // Update total
        const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        cartTotal.textContent = `$${total.toFixed(2)}`;

        // Save to localStorage
        localStorage.setItem('retroCart', JSON.stringify(cart));
    }

    function addToCart(product, price, icon = '👕', size = 'M') {
        const existingIndex = cart.findIndex(item => 
            item.name === product && item.size === size
        );

        if (existingIndex > -1) {
            cart[existingIndex].quantity++;
        } else {
            cart.push({
                name: product,
                price: parseFloat(price),
                icon,
                size,
                quantity: 1
            });
        }

        updateCartUI();
        showToast(`${product} added to cart!`);
    }

    function removeFromCart(index) {
        cart.splice(index, 1);
        updateCartUI();
    }

    function openCart() {
        cartSidebar.classList.add('open');
        cartOverlay.classList.add('open');
        document.body.style.overflow = 'hidden';
    }

    function closeCart() {
        cartSidebar.classList.remove('open');
        cartOverlay.classList.remove('open');
        document.body.style.overflow = '';
    }

    // Cart event listeners
    cartLink?.addEventListener('click', (e) => {
        e.preventDefault();
        openCart();
    });

    cartClose?.addEventListener('click', closeCart);
    cartOverlay?.addEventListener('click', closeCart);

    // Add to cart buttons
    addToCartBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const product = btn.dataset.product;
            const price = btn.dataset.price;
            addToCart(product, price, '👕', 'M');
        });
    });

    // Checkout button
    checkoutBtn?.addEventListener('click', () => {
        if (cart.length === 0) {
            showToast('Your cart is empty!');
            return;
        }
        showToast('Checkout coming soon! Thanks for your interest! 🎸');
    });

    // ============================================
    // Product Filtering
    // ============================================
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Update active state
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filter = btn.dataset.filter;

            productCards.forEach(card => {
                if (filter === 'all' || card.dataset.category === filter) {
                    card.style.display = 'block';
                    card.style.animation = 'fadeIn 0.3s ease';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });

    // ============================================
    // Custom Tee Builder
    // ============================================
    // Color selection
    colorOptions.forEach(option => {
        option.addEventListener('click', () => {
            colorOptions.forEach(o => o.classList.remove('active'));
            option.classList.add('active');

            selectedBodyColor = option.dataset.color;
            selectedSleeveColor = option.dataset.sleeve;

            teeBody.style.background = selectedBodyColor;
            sleeveLeft.style.background = selectedSleeveColor;
            sleeveRight.style.background = selectedSleeveColor;

            // Adjust text color based on body color
            const isLightBody = isLightColor(selectedBodyColor);
            designText.style.color = isLightBody ? '#1a1a1a' : '#f5f5f5';
        });
    });

    // Icon selection
    iconOptions.forEach(option => {
        option.addEventListener('click', () => {
            iconOptions.forEach(o => o.classList.remove('active'));
            option.classList.add('active');

            selectedIcon = option.dataset.icon;
            designIcon.textContent = selectedIcon;
        });
    });

    // Size selection
    sizeOptions.forEach(option => {
        option.addEventListener('click', () => {
            sizeOptions.forEach(o => o.classList.remove('active'));
            option.classList.add('active');

            selectedSize = option.dataset.size;
        });
    });

    // Text input
    customTextInput?.addEventListener('input', (e) => {
        designText.textContent = e.target.value || 'YOUR TEXT';
    });

    // Submit custom tee
    customizeForm?.addEventListener('submit', (e) => {
        e.preventDefault();
        const customText = customTextInput?.value || 'CUSTOM';
        const productName = `Custom Tee: "${customText}"`;
        addToCart(productName, 39.99, selectedIcon, selectedSize);
        openCart();
    });

    // ============================================
    // Contact Form
    // ============================================
    contactForm?.addEventListener('submit', (e) => {
        e.preventDefault();
        showToast('Message sent! We\'ll get back to you soon. ✌️');
        contactForm.reset();
    });

    // ============================================
    // Newsletter Form
    // ============================================
    newsletterForm?.addEventListener('submit', (e) => {
        e.preventDefault();
        showToast('You\'re in! Check your inbox for 10% off. 🎉');
        newsletterForm.reset();
    });

    // ============================================
    // Toast Notification
    // ============================================
    function showToast(message) {
        toast.textContent = message;
        toast.classList.add('show');

        setTimeout(() => {
            toast.classList.remove('show');
        }, 3000);
    }

    // ============================================
    // Utility Functions
    // ============================================
    function isLightColor(color) {
        const hex = color.replace('#', '');
        const r = parseInt(hex.substr(0, 2), 16);
        const g = parseInt(hex.substr(2, 2), 16);
        const b = parseInt(hex.substr(4, 2), 16);
        const brightness = (r * 299 + g * 587 + b * 114) / 1000;
        return brightness > 128;
    }

    // ============================================
    // Smooth Scroll for Safari
    // ============================================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href === '#') return;
            
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // ============================================
    // Initialize
    // ============================================
    updateCartUI();

    // Add fade-in animation keyframes
    const style = document.createElement('style');
    style.textContent = `
        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
        }
    `;
    document.head.appendChild(style);
});
