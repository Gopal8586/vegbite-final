// Mixitup connects with menu
var products = document.querySelector(".products");
var mixer = mixitup(products);

// Cursor
document.addEventListener("mousemove", (e) => {
    const cursor = document.querySelector(".cursor");
    if (cursor) {
        cursor.style.left = e.pageX + "px";
        cursor.style.top = e.pageY + "px";
    }
});

// Search bar for menu
const search = () => {
    const searchbox = document.getElementById("search-item").value.toUpperCase();
    const products = document.getElementsByClassName("mix");

    for (var i = 0; i < products.length; i++) {
        const h3Tags = products[i].getElementsByTagName("h3");
        let shouldDisplay = false;
        for (let h of h3Tags) {
            if ((h.textContent || h.innerHTML).toUpperCase().indexOf(searchbox) > -1) {
                shouldDisplay = true;
                break;
            }
        }
        products[i].style.display = shouldDisplay ? "" : "none";
    }
};

// ============================================================
//  🔐 CART — LOGIN-PROTECTED
// ============================================================

let cart = JSON.parse(localStorage.getItem('cart')) || [];

function updateCartIcon() {
    const el = document.getElementById('cart-count');
    if (el) {
        const totalQty = cart.reduce((sum, item) => sum + (item.quantity || 1), 0);
        el.textContent = totalQty;
    }
}

// Show toast notification
function showLoginToast() {
    const existing = document.getElementById('vb-login-toast');
    if (existing) existing.remove();

    if (!document.getElementById('vb-toast-style')) {
        const style = document.createElement('style');
        style.id = 'vb-toast-style';
        style.textContent = `
            @keyframes toastUp {
                from { opacity:0; transform:translateX(-50%) translateY(20px); }
                to   { opacity:1; transform:translateX(-50%) translateY(0); }
            }
            #vb-login-toast {
                position:fixed; bottom:32px; left:50%; transform:translateX(-50%);
                background:#1b5e20; color:#fff; padding:14px 28px;
                border-radius:999px; font-size:.95rem; font-weight:500;
                box-shadow:0 8px 30px rgba(0,0,0,.3); z-index:999999;
                animation:toastUp .35s ease; white-space:nowrap;
            }
            #vb-login-toast a { color:#4ade80; font-weight:700; text-decoration:underline; }
        `;
        document.head.appendChild(style);
    }

    const toast = document.createElement('div');
    toast.id = 'vb-login-toast';
    toast.innerHTML = `🔒 Please <a href="/login">login</a> to add items to your cart!`;
    document.body.appendChild(toast);

    setTimeout(() => {
        toast.style.transition = 'opacity .4s';
        toast.style.opacity = '0';
        setTimeout(() => toast.remove(), 400);
    }, 3000);
}

// ─── PRIMARY CHECK: Is the "LOG IN" button visible in the navbar? ─────────────
// menu.html always renders "LOG IN" for guests, so this is instant & reliable.
function isUserLoggedIn() {
    // Check if the user dropdown profile exists (added by Script.js when logged in)
    if (document.getElementById('userDropdown')) {
        return true;
    }

    // Check if localStorage has the username cached
    if (localStorage.getItem('vb_user_name')) {
        return true;
    }

    // Fallback: check for a logout link (server-rendered pages may have it)
    const logoutLink = document.querySelector('a[href="/logout"]');
    if (logoutLink) return true;

    // Default to blocking (safe side)
    return false;
}

// ─── ASYNC BACKUP CHECK: Confirm with server session ─────────────────────────
async function isUserLoggedInServer() {
    try {
        const res = await fetch('/api/auth-status');
        if (!res.ok) return false;           // Server restart pending — block
        const data = await res.json();
        return data.loggedIn === true;
    } catch (_) {
        return false;                         // Network error — block
    }
}

// ─── Core add-to-cart handler ─────────────────────────────────────────────────
async function handleAddToCart(button) {
    // STEP 1 — Instant DOM check (no server needed)
    if (!isUserLoggedIn()) {
        showLoginToast();
        return;
    }

    // STEP 2 — Confirm with server (catches session expiry, etc.)
    const serverOk = await isUserLoggedInServer();
    if (!serverOk) {
        showLoginToast();
        return;
    }

    // ✅ User is authenticated — add to cart
    const itemEl = button.closest('.mix');
    if (!itemEl) return;

    const imgEl   = itemEl.querySelector('img');
    const nameEl  = itemEl.querySelector('.detail h3') || itemEl.querySelector('h3');
    const priceEl = itemEl.querySelector('.price');

    if (!nameEl || !priceEl) return;

    const item = {
        image:    imgEl ? imgEl.src : '',
        name:     nameEl.textContent.trim(),
        price:    priceEl.textContent.trim(),
        quantity: 1
    };

    const idx = cart.findIndex(c => c.name === item.name);
    if (idx === -1) {
        cart.push(item);
    } else {
        cart[idx].quantity += 1;
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartIcon();

    // Flash button feedback
    const original = button.textContent;
    button.textContent = '✅ Added!';
    button.style.background = '#22c55e';
    button.style.color = '#fff';
    setTimeout(() => {
        button.textContent = original;
        button.style.background = '';
        button.style.color = '';
    }, 1200);
}

// ─── Attach listeners on page load ───────────────────────────────────────────
document.addEventListener("DOMContentLoaded", function () {
    updateCartIcon();

    // Target only buttons inside .mix cards
    document.querySelectorAll('.mix button, .mix .add-to-cart').forEach(button => {
        button.addEventListener('click', function (e) {
            e.preventDefault();
            handleAddToCart(this);
        });
    });
});