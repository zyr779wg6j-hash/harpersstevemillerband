/* ============================================
   CAN YOU DIG IT? RETRO - Stylesheet
   ============================================ */

/* CSS Custom Properties */
:root {
    --color-bg: #0d0d0d;
    --color-bg-alt: #1a1a1a;
    --color-primary: #ff6b35;
    --color-secondary: #f7c948;
    --color-accent: #9d4edd;
    --color-text: #f5f5f5;
    --color-text-muted: #a0a0a0;
    --color-border: #333;
    
    --font-display: 'Righteous', cursive;
    --font-body: 'Poppins', sans-serif;
    
    --radius-sm: 4px;
    --radius-md: 8px;
    --radius-lg: 16px;
    --radius-full: 9999px;
    
    --shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
    --shadow-glow: 0 0 30px rgba(255, 107, 53, 0.3);
    
    --transition: 0.3s ease;
    --transition-fast: 0.15s ease;
}

/* Reset & Base */
*, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

html {
    scroll-behavior: smooth;
    scroll-padding-top: 80px;
}

body {
    font-family: var(--font-body);
    background-color: var(--color-bg);
    color: var(--color-text);
    line-height: 1.6;
    overflow-x: hidden;
}

.container {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
}

a {
    color: inherit;
    text-decoration: none;
}

button {
    font-family: inherit;
    cursor: pointer;
    border: none;
    background: none;
}

ul {
    list-style: none;
}

img {
    max-width: 100%;
    display: block;
}

/* Typography */
h1, h2, h3, h4 {
    font-family: var(--font-display);
    font-weight: 400;
    line-height: 1.2;
}

.section-title {
    font-size: clamp(2rem, 5vw, 3rem);
    margin-bottom: 1rem;
    background: linear-gradient(135deg, var(--color-primary), var(--color-secondary));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}

.section-title.center {
    text-align: center;
}

.section-subtitle {
    text-align: center;
    color: var(--color-text-muted);
    margin-bottom: 3rem;
    font-size: 1.1rem;
}

/* Buttons */
.btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 14px 28px;
    font-size: 1rem;
    font-weight: 600;
    border-radius: var(--radius-full);
    transition: all var(--transition);
    text-transform: uppercase;
    letter-spacing: 1px;
}

.btn-primary {
    background: linear-gradient(135deg, var(--color-primary), #ff8c5a);
    color: #000;
    box-shadow: var(--shadow-glow);
}

.btn-primary:hover {
    transform: translateY(-2px);
    box-shadow: 0 0 40px rgba(255, 107, 53, 0.5);
}

.btn-secondary {
    background: transparent;
    color: var(--color-text);
    border: 2px solid var(--color-primary);
}

.btn-secondary:hover {
    background: var(--color-primary);
    color: #000;
}

.btn-full {
    width: 100%;
}

.btn-add-cart {
    background: var(--color-bg);
    color: var(--color-text);
    border: 2px solid var(--color-border);
    padding: 10px 20px;
    font-size: 0.9rem;
    width: 100%;
    margin-top: 1rem;
}

.btn-add-cart:hover {
    border-color: var(--color-primary);
    color: var(--color-primary);
}

/* Floating Vinyl Background */
.vinyl-bg {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: -1;
    overflow: hidden;
}

.vinyl {
    position: absolute;
    font-size: 150px;
    opacity: 0.03;
    animation: float 20s infinite ease-in-out;
}

.vinyl-1 { top: 10%; left: 5%; animation-delay: 0s; }
.vinyl-2 { top: 60%; right: 10%; animation-delay: -7s; }
.vinyl-3 { bottom: 10%; left: 50%; animation-delay: -14s; }

@keyframes float {
    0%, 100% { transform: translateY(0) rotate(0deg); }
    50% { transform: translateY(-30px) rotate(180deg); }
}

/* Header */
.header {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1000;
    background: rgba(13, 13, 13, 0.95);
    backdrop-filter: blur(10px);
    border-bottom: 1px solid var(--color-border);
}

.nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 70px;
}

.logo {
    display: flex;
    align-items: center;
    gap: 10px;
    font-family: var(--font-display);
    font-size: 1.3rem;
}

.logo-icon {
    font-size: 1.8rem;
}

.nav-menu {
    display: flex;
    align-items: center;
    gap: 30px;
}

.nav-menu a {
    font-size: 0.95rem;
    font-weight: 500;
    transition: color var(--transition-fast);
}

.nav-menu a:hover {
    color: var(--color-primary);
}

.cart-link {
    background: var(--color-bg-alt);
    padding: 8px 16px;
    border-radius: var(--radius-full);
    border: 1px solid var(--color-border);
}

.nav-toggle {
    display: none;
    flex-direction: column;
    gap: 5px;
    padding: 5px;
}

.nav-toggle span {
    display: block;
    width: 25px;
    height: 2px;
    background: var(--color-text);
    transition: var(--transition);
}

/* Hero Section */
.hero {
    min-height: 100vh;
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    gap: 40px;
    padding: 120px 20px 80px;
    max-width: 1400px;
    margin: 0 auto;
}

.hero-title {
    font-size: clamp(2.5rem, 6vw, 4.5rem);
    margin-bottom: 1.5rem;
}

.hero-line {
    display: block;
}

.hero-line.accent {
    background: linear-gradient(135deg, var(--color-primary), var(--color-secondary));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}

.hero-subtitle {
    font-size: 1.2rem;
    color: var(--color-text-muted);
    margin-bottom: 2rem;
    max-width: 500px;
}

.hero-cta {
    display: flex;
    gap: 15px;
    flex-wrap: wrap;
}

.hero-visual {
    display: flex;
    justify-content: center;
    align-items: center;
}

.tee-display {
    position: relative;
}

.tee-mockup {
    position: relative;
    width: 300px;
    height: 350px;
    animation: sway 4s ease-in-out infinite;
}

@keyframes sway {
    0%, 100% { transform: rotate(-2deg); }
    50% { transform: rotate(2deg); }
}

.tee-body {
    position: absolute;
    top: 40px;
    left: 50%;
    transform: translateX(-50%);
    width: 200px;
    height: 240px;
    background: linear-gradient(180deg, #f5f5f5, #e0e0e0);
    border-radius: 8px 8px 40px 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: var(--shadow);
}

.tee-design {
    font-size: 80px;
    animation: pulse 2s ease-in-out infinite;
}

@keyframes pulse {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.05); }
}

.tee-sleeve {
    position: absolute;
    top: 40px;
    width: 60px;
    height: 80px;
    background: #1a1a1a;
    border-radius: 8px;
}

.tee-sleeve.left {
    left: 0;
    transform: rotate(-15deg);
    border-radius: 20px 8px 8px 20px;
}

.tee-sleeve.right {
    right: 0;
    transform: rotate(15deg);
    border-radius: 8px 20px 20px 8px;
}

/* Marquee */
.marquee {
    background: linear-gradient(90deg, var(--color-primary), var(--color-secondary), var(--color-accent), var(--color-primary));
    background-size: 200% 100%;
    animation: gradientMove 10s linear infinite;
    padding: 15px 0;
    overflow: hidden;
}

@keyframes gradientMove {
    0% { background-position: 0% 50%; }
    100% { background-position: 200% 50%; }
}

.marquee-content {
    display: flex;
    animation: marquee 30s linear infinite;
    white-space: nowrap;
}

.marquee-content span {
    font-family: var(--font-display);
    font-size: 1.1rem;
    color: #000;
    padding-right: 50px;
}

@keyframes marquee {
    0% { transform: translateX(0); }
    100% { transform: translateX(-50%); }
}

/* About Section */
.about {
    padding: 100px 0;
    background: var(--color-bg-alt);
}

.about-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 60px;
    align-items: center;
}

.about-content p {
    color: var(--color-text-muted);
    margin-bottom: 1rem;
}

.about-features {
    display: flex;
    gap: 30px;
    margin-top: 2rem;
    flex-wrap: wrap;
}

.feature {
    display: flex;
    align-items: center;
    gap: 10px;
}

.feature-icon {
    font-size: 1.5rem;
}

.about-image {
    display: flex;
    justify-content: center;
}

.record-stack {
    position: relative;
    width: 250px;
    height: 250px;
}

.record {
    position: absolute;
    width: 200px;
    height: 200px;
    background: linear-gradient(135deg, #1a1a1a, #333);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 50px;
    box-shadow: var(--shadow);
    animation: spin 10s linear infinite;
}

.record::before {
    content: '';
    position: absolute;
    width: 60px;
    height: 60px;
    background: var(--color-primary);
    border-radius: 50%;
}

.record::after {
    content: '';
    position: absolute;
    width: 15px;
    height: 15px;
    background: #000;
    border-radius: 50%;
}

.record:nth-child(1) { top: 0; left: 0; animation-duration: 8s; }
.record:nth-child(2) { top: 20px; left: 30px; animation-duration: 12s; animation-direction: reverse; }
.record:nth-child(3) { top: 40px; left: 60px; animation-duration: 10s; }

@keyframes spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
}

/* Collection Section */
.collection {
    padding: 100px 0;
}

.filter-bar {
    display: flex;
    justify-content: center;
    gap: 10px;
    margin-bottom: 3rem;
    flex-wrap: wrap;
}

.filter-btn {
    padding: 10px 20px;
    border-radius: var(--radius-full);
    background: var(--color-bg-alt);
    color: var(--color-text-muted);
    border: 1px solid var(--color-border);
    transition: all var(--transition);
}

.filter-btn:hover,
.filter-btn.active {
    background: var(--color-primary);
    color: #000;
    border-color: var(--color-primary);
}

.products-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 30px;
}

.product-card {
    background: var(--color-bg-alt);
    border-radius: var(--radius-lg);
    overflow: hidden;
    border: 1px solid var(--color-border);
    transition: all var(--transition);
}

.product-card:hover {
    transform: translateY(-5px);
    border-color: var(--color-primary);
    box-shadow: var(--shadow-glow);
}

.product-image {
    position: relative;
    padding: 30px;
    background: linear-gradient(180deg, #1a1a1a, #0d0d0d);
    display: flex;
    justify-content: center;
}

.tee-preview {
    width: 180px;
    height: 200px;
    position: relative;
    transition: transform var(--transition);
}

.product-card:hover .tee-preview {
    transform: scale(1.05);
}

.tee-preview::before {
    content: '';
    position: absolute;
    top: 20px;
    left: 50%;
    transform: translateX(-50%);
    width: 120px;
    height: 150px;
    border-radius: 5px 5px 30px 30px;
    background: #f5f5f5;
}

.tee-preview::after {
    content: '';
    position: absolute;
    top: 20px;
    left: 10px;
    width: 35px;
    height: 50px;
    background: #1a1a1a;
    border-radius: 10px 5px 5px 10px;
    transform: rotate(-10deg);
}

.zeppelin-tee::before { background: #1a1a2e; }
.zeppelin-tee::after { background: #f5f5f5; }
.miller-tee::before { background: #0a0a23; }
.miller-tee::after { background: #ffffff; }
.psychedelic-tee::before { background: linear-gradient(180deg, #4b0082, #9d4edd); }
.vintage-tee::before { background: #2c3e50; }
.zeppelin-tee-2::before { background: #1a1a1a; }
.zeppelin-tee-2::after { background: #d4af37; }
.floyd-tee::before { background: #0d0d0d; }

.tee-graphic {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 50px;
    z-index: 1;
}

.product-badge {
    position: absolute;
    top: 15px;
    right: 15px;
    background: var(--color-primary);
    color: #000;
    padding: 5px 12px;
    border-radius: var(--radius-full);
    font-size: 0.75rem;
    font-weight: 600;
    text-transform: uppercase;
}

.product-badge.new {
    background: var(--color-accent);
    color: #fff;
}

.product-info {
    padding: 20px;
}

.product-info h3 {
    font-family: var(--font-display);
    font-size: 1.3rem;
    margin-bottom: 5px;
}

.product-info > p {
    color: var(--color-text-muted);
    font-size: 0.9rem;
}

.product-meta {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 15px;
}

.price {
    font-size: 1.3rem;
    font-weight: 600;
    color: var(--color-primary);
}

.color-options {
    display: flex;
    gap: 8px;
}

.color-dot {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    border: 2px solid transparent;
    transition: border-color var(--transition-fast);
}

.color-dot:hover {
    border-color: var(--color-text);
}

/* Customize Section */
.customize {
    padding: 100px 0;
    background: var(--color-bg-alt);
}

.customize-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 60px;
    align-items: center;
}

.custom-tee-builder {
    display: flex;
    justify-content: center;
    padding: 40px;
    background: linear-gradient(180deg, #1a1a1a, #0d0d0d);
    border-radius: var(--radius-lg);
    border: 1px solid var(--color-border);
}

.custom-tee {
    position: relative;
    width: 250px;
    height: 300px;
}

.custom-tee-body {
    position: absolute;
    top: 30px;
    left: 50%;
    transform: translateX(-50%);
    width: 160px;
    height: 200px;
    background: #f5f5f5;
    border-radius: 8px 8px 40px 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
    transition: background var(--transition);
    box-shadow: var(--shadow);
}

.custom-design {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5px;
}

#designIcon {
    font-size: 50px;
}

#designText {
    font-family: var(--font-display);
    font-size: 14px;
    color: #1a1a1a;
    text-align: center;
    max-width: 140px;
    word-wrap: break-word;
}

.custom-sleeve {
    position: absolute;
    top: 30px;
    width: 45px;
    height: 60px;
    background: #1a1a1a;
    transition: background var(--transition);
}

.custom-sleeve.left {
    left: 10px;
    transform: rotate(-15deg);
    border-radius: 15px 5px 5px 15px;
}

.custom-sleeve.right {
    right: 10px;
    transform: rotate(15deg);
    border-radius: 5px 15px 15px 5px;
}

.customize-form {
    display: flex;
    flex-direction: column;
    gap: 25px;
}

.form-group label {
    display: block;
    margin-bottom: 10px;
    font-weight: 600;
}

.form-group input,
.form-group textarea {
    width: 100%;
    padding: 14px;
    background: var(--color-bg);
    border: 1px solid var(--color-border);
    border-radius: var(--radius-md);
    color: var(--color-text);
    font-size: 1rem;
    transition: border-color var(--transition-fast);
}

.form-group input:focus,
.form-group textarea:focus {
    outline: none;
    border-color: var(--color-primary);
}

.color-picker,
.icon-picker,
.size-picker {
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
}

.color-option {
    width: 45px;
    height: 45px;
    border-radius: 50%;
    border: 3px solid transparent;
    transition: all var(--transition-fast);
}

.color-option:hover,
.color-option.active {
    border-color: var(--color-primary);
    transform: scale(1.1);
}

.icon-option {
    width: 50px;
    height: 50px;
    font-size: 24px;
    background: var(--color-bg);
    border: 2px solid var(--color-border);
    border-radius: var(--radius-md);
    transition: all var(--transition-fast);
}

.icon-option:hover,
.icon-option.active {
    border-color: var(--color-primary);
    background: var(--color-primary);
}

.size-option {
    padding: 10px 18px;
    background: var(--color-bg);
    border: 2px solid var(--color-border);
    border-radius: var(--radius-md);
    color: var(--color-text);
    font-weight: 600;
    transition: all var(--transition-fast);
}

.size-option:hover,
.size-option.active {
    border-color: var(--color-primary);
    background: var(--color-primary);
    color: #000;
}

.custom-price {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    background: var(--color-bg);
    border-radius: var(--radius-md);
    border: 1px solid var(--color-border);
}

.custom-price strong {
    font-size: 1.5rem;
    color: var(--color-primary);
}

/* Testimonials */
.testimonials {
    padding: 100px 0;
}

.testimonial-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 30px;
    margin-top: 3rem;
}

.testimonial {
    background: var(--color-bg-alt);
    padding: 30px;
    border-radius: var(--radius-lg);
    border: 1px solid var(--color-border);
    position: relative;
}

.testimonial::before {
    content: '"';
    position: absolute;
    top: 10px;
    left: 20px;
    font-size: 60px;
    font-family: var(--font-display);
    color: var(--color-primary);
    opacity: 0.3;
    line-height: 1;
}

.testimonial p {
    font-style: italic;
    color: var(--color-text-muted);
    margin-bottom: 1rem;
    position: relative;
    z-index: 1;
}

.testimonial footer {
    color: var(--color-primary);
    font-weight: 600;
}

/* Contact Section */
.contact {
    padding: 100px 0;
    background: var(--color-bg-alt);
}

.contact-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 60px;
}

.contact-info p {
    color: var(--color-text-muted);
    margin-bottom: 2rem;
}

.contact-details p {
    margin-bottom: 0.5rem;
}

.social-links {
    display: flex;
    gap: 15px;
    margin-top: 2rem;
}

.social-link {
    width: 50px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    background: var(--color-bg);
    border: 1px solid var(--color-border);
    border-radius: 50%;
    transition: all var(--transition);
}

.social-link:hover {
    border-color: var(--color-primary);
    transform: translateY(-3px);
}

.contact-form {
    display: flex;
    flex-direction: column;
    gap: 20px;
}

/* Cart Sidebar */
.cart-sidebar {
    position: fixed;
    top: 0;
    right: -400px;
    width: 400px;
    max-width: 100%;
    height: 100vh;
    background: var(--color-bg-alt);
    z-index: 2000;
    display: flex;
    flex-direction: column;
    transition: right var(--transition);
    border-left: 1px solid var(--color-border);
}

.cart-sidebar.open {
    right: 0;
}

.cart-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    border-bottom: 1px solid var(--color-border);
}

.cart-header h3 {
    font-family: var(--font-display);
    font-size: 1.5rem;
}

.cart-close {
    font-size: 2rem;
    color: var(--color-text-muted);
    transition: color var(--transition-fast);
}

.cart-close:hover {
    color: var(--color-primary);
}

.cart-items {
    flex: 1;
    overflow-y: auto;
    padding: 20px;
}

.cart-empty {
    text-align: center;
    color: var(--color-text-muted);
    padding: 40px 0;
}

.cart-item {
    display: flex;
    gap: 15px;
    padding: 15px 0;
    border-bottom: 1px solid var(--color-border);
}

.cart-item-image {
    width: 60px;
    height: 70px;
    background: var(--color-bg);
    border-radius: var(--radius-sm);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 24px;
}

.cart-item-details {
    flex: 1;
}

.cart-item-name {
    font-weight: 600;
    margin-bottom: 5px;
}

.cart-item-price {
    color: var(--color-primary);
}

.cart-item-remove {
    color: var(--color-text-muted);
    font-size: 1.2rem;
    transition: color var(--transition-fast);
}

.cart-item-remove:hover {
    color: #ff4444;
}

.cart-footer {
    padding: 20px;
    border-top: 1px solid var(--color-border);
}

.cart-total {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 15px;
    font-size: 1.2rem;
}

.cart-total strong {
    font-size: 1.5rem;
    color: var(--color-primary);
}

.cart-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.7);
    z-index: 1999;
    opacity: 0;
    visibility: hidden;
    transition: all var(--transition);
}

.cart-overlay.open {
    opacity: 1;
    visibility: visible;
}

/* Footer */
.footer {
    padding: 80px 0 30px;
    border-top: 1px solid var(--color-border);
}

.footer-grid {
    display: grid;
    grid-template-columns: 2fr 1fr 1fr 2fr;
    gap: 40px;
    margin-bottom: 40px;
}

.footer-brand .logo-icon {
    font-size: 2rem;
}

.footer-brand .logo-text {
    font-family: var(--font-display);
    font-size: 1.2rem;
}

.footer-brand p {
    color: var(--color-text-muted);
    margin-top: 1rem;
}

.footer-links h4 {
    font-family: var(--font-display);
    margin-bottom: 1rem;
    color: var(--color-primary);
}

.footer-links ul {
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.footer-links a {
    color: var(--color-text-muted);
    transition: color var(--transition-fast);
}

.footer-links a:hover {
    color: var(--color-text);
}

.footer-newsletter h4 {
    font-family: var(--font-display);
    margin-bottom: 1rem;
    color: var(--color-primary);
}

.footer-newsletter p {
    color: var(--color-text-muted);
    margin-bottom: 1rem;
}

.newsletter-form {
    display: flex;
    gap: 10px;
}

.newsletter-form input {
    flex: 1;
    padding: 12px 16px;
    background: var(--color-bg-alt);
    border: 1px solid var(--color-border);
    border-radius: var(--radius-full);
    color: var(--color-text);
}

.newsletter-form input:focus {
    outline: none;
    border-color: var(--color-primary);
}

.newsletter-form .btn {
    padding: 12px 20px;
}

.footer-bottom {
    text-align: center;
    padding-top: 30px;
    border-top: 1px solid var(--color-border);
    color: var(--color-text-muted);
}

/* Toast Notification */
.toast {
    position: fixed;
    bottom: 30px;
    left: 50%;
    transform: translateX(-50%) translateY(100px);
    background: var(--color-primary);
    color: #000;
    padding: 15px 30px;
    border-radius: var(--radius-full);
    font-weight: 600;
    z-index: 3000;
    opacity: 0;
    transition: all var(--transition);
}

.toast.show {
    transform: translateX(-50%) translateY(0);
    opacity: 1;
}

/* Responsive Design */
@media (max-width: 1024px) {
    .hero {
        grid-template-columns: 1fr;
        text-align: center;
        padding-top: 100px;
    }
    
    .hero-subtitle {
        margin-left: auto;
        margin-right: auto;
    }
    
    .hero-cta {
        justify-content: center;
    }
    
    .about-grid,
    .customize-grid,
    .contact-grid {
        grid-template-columns: 1fr;
    }
    
    .about-image {
        order: -1;
    }
    
    .footer-grid {
        grid-template-columns: 1fr 1fr;
    }
}

@media (max-width: 768px) {
    .nav-toggle {
        display: flex;
    }
    
    .nav-menu {
        position: fixed;
        top: 70px;
        left: 0;
        right: 0;
        background: var(--color-bg);
        flex-direction: column;
        padding: 30px;
        gap: 20px;
        border-bottom: 1px solid var(--color-border);
        transform: translateY(-100%);
        opacity: 0;
        visibility: hidden;
        transition: all var(--transition);
    }
    
    .nav-menu.open {
        transform: translateY(0);
        opacity: 1;
        visibility: visible;
    }
    
    .products-grid {
        grid-template-columns: 1fr;
    }
    
    .footer-grid {
        grid-template-columns: 1fr;
        text-align: center;
    }
    
    .footer-brand {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    
    .tee-mockup {
        width: 250px;
        height: 300px;
    }
    
    .tee-body {
        width: 160px;
        height: 200px;
    }
    
    .tee-design {
        font-size: 60px;
    }
    
    .cart-sidebar {
        width: 100%;
        right: -100%;
    }
}

@media (max-width: 480px) {
    .hero-cta {
        flex-direction: column;
        width: 100%;
    }
    
    .hero-cta .btn {
        width: 100%;
    }
    
    .filter-bar {
        gap: 5px;
    }
    
    .filter-btn {
        padding: 8px 12px;
        font-size: 0.85rem;
    }
}
