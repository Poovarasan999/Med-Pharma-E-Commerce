function openMenu() {
    document.getElementById('sidebar').classList.add('open');
    document.getElementById('overlay').classList.add('show');
}
// Close sidebar
function closeMenu() {
    document.getElementById('sidebar').classList.remove('open');
    document.getElementById('overlay').classList.remove('show');
}

function closeHelpModal() {
    const modal = document.getElementById('helpModal');
    modal.classList.remove('show');
    setTimeout(() => {
        modal.style.display = 'none';
    }, 300);
}

function showHelpModal() {
    const modal = document.getElementById('helpModal');
    modal.style.display = 'flex';
    setTimeout(() => {
        modal.classList.add('show');
    }, 10);
}

window.addEventListener('load', () => {
    setTimeout(showHelpModal, 1000);
});

// Phone Number Validation Logic
const phoneInput = document.getElementById('phoneInput');
const callbackBtn = document.getElementById('callbackBtn');

phoneInput.addEventListener('input', function (e) {
    // Remove non-numeric characters
    this.value = this.value.replace(/\D/g, '');
    // Enable button only if length is exactly 10
    if (this.value.length === 10) {
        callbackBtn.disabled = false;
    } else {
        callbackBtn.disabled = true;
    }
});

// Search Filter Logic for Lab Tests
const searchInput = document.getElementById('searchInput');
const testCards = document.querySelectorAll('.test-card');

searchInput.addEventListener('input', function () {
    const query = this.value.toLowerCase().trim();

    testCards.forEach(card => {
        const testName = card.querySelector('h3').textContent.toLowerCase();
        if (testName.includes(query)) {
            card.style.display = 'flex';
        } else {
            card.style.display = 'none';
        }
    });
});

// --- Modal & Cart Logic ---
var addressToggle = document.getElementById("addressToggle");
var locationPanel = document.getElementById("locationPanel");
var locationOverlay = document.getElementById("locationOverlay");
var locationClose = document.getElementById("locationClose");
var cartToggle = document.getElementById("cartToggle");
var cartModal = document.getElementById("cartModal");
var cartOverlay = document.getElementById("cartOverlay");
var cartClose = document.getElementById("cartClose");
var loginToggle = document.getElementById("loginToggle");
var loginOverlay = document.getElementById("loginOverlay");
var loginModal = document.getElementById("loginModal");
var loginClose = document.getElementById("loginClose");
var loginSubmit = document.getElementById("loginSubmit");
var loginError = document.getElementById("loginError");

// Success Popup variables
var successModal = document.getElementById("successModal");
var successOverlay = document.getElementById("successOverlay");
var successTitle = document.getElementById("successTitle");
var successMessage = document.getElementById("successMessage");
var successOkBtn = document.getElementById("successOkBtn");

// --- Variables: Cart totals & list (modal UI) ---
var cartBadge = document.getElementById("cartBadge");
var cartItemsList = document.getElementById("cartItemsList");
var cartEmptyText = document.getElementById("cartEmptyText");
var cartItemsCount = document.getElementById("cartItemsCount");
var cartSubtotal = document.getElementById("cartSubtotal");
var cartDeliveryFee = document.getElementById("cartDeliveryFee");
var cartDiscount = document.getElementById("cartDiscount");
var cartTotal = document.getElementById("cartTotal");
var checkoutBtn = document.getElementById("checkoutBtn");

// --- Data: cart list ---
var cartItems = [];

function formatPrice(value) {
    return "Rs " + value.toFixed(2);
}

function updateCartDetails() {
    var i = 0;
    var subtotalValue = 0;
    var deliveryFeeValue = 0;
    var discountValue = 0;
    var totalValue = 0;
    var itemHtml = "";

    for (i = 0; i < cartItems.length; i = i + 1) {
        subtotalValue = subtotalValue + cartItems[i].price;
        itemHtml = itemHtml + "<p class='cart-modal__item'><span class='cart-modal__item-name'>" + cartItems[i].name + "</span><strong class='cart-modal__item-price'>" + formatPrice(cartItems[i].price) + "</strong></p>";
    }

    if (cartItems.length > 0) {
        deliveryFeeValue = 40;
    }

    if (subtotalValue >= 1500) {
        discountValue = 150;
    } else if (subtotalValue >= 700) {
        discountValue = 70;
    }

    totalValue = subtotalValue + deliveryFeeValue - discountValue;

    cartItemsList.innerHTML = itemHtml;
    cartItemsCount.innerText = cartItems.length;
    cartSubtotal.innerText = formatPrice(subtotalValue);
    cartDeliveryFee.innerText = formatPrice(deliveryFeeValue);
    cartDiscount.innerText = "- " + formatPrice(discountValue);
    cartTotal.innerText = formatPrice(totalValue);
    cartBadge.innerText = cartItems.length;

    if (cartItems.length === 0) {
        cartEmptyText.style.display = "block";
    } else {
        cartEmptyText.style.display = "none";
    }
}

function openLocationPanel() {
    locationPanel.style.left = "0";
    locationOverlay.style.display = "block";
}

function closeLocationPanel() {
    locationPanel.style.left = "-100%";
    locationOverlay.style.display = "none";
}

function openCartModal() {
    updateCartDetails();
    cartModal.style.display = "block";
    cartOverlay.style.display = "block";
}

function closeCartModal() {
    cartModal.style.display = "none";
    cartOverlay.style.display = "none";
}

function openLoginModal() {
    loginModal.style.display = "block";
    loginOverlay.style.display = "block";
    loginError.innerText = "";
}

function closeLoginModal() {
    loginModal.style.display = "none";
    loginOverlay.style.display = "none";
}

function openSuccessModal(titleText, messageText) {
    successTitle.innerText = titleText;
    successMessage.innerText = messageText;
    successModal.style.display = "block";
    successOverlay.style.display = "block";
}

function closeSuccessModal() {
    successModal.style.display = "none";
    successOverlay.style.display = "none";
}

function handleCheckoutSuccess() {
    if (cartItems.length === 0) {
        openSuccessModal("Cart Empty", "Your cart is empty. Please add items first.");
        return;
    }

    closeCartModal();
    openSuccessModal("Order Placed Successful", "Order placed successfully! Thank you for shopping with MedPharma.");
    cartItems = [];
    updateCartDetails();
    
    // Reset all "Added" buttons
    const btns = document.querySelectorAll('.btn-add-cart');
    btns.forEach(btn => {
        btn.innerHTML = '<i class="bx bx-cart-add"></i> Add to Cart';
        btn.style.backgroundColor = '';
        btn.style.color = '';
        btn.style.borderColor = '';
    });
}

addressToggle.addEventListener("click", openLocationPanel);
addressToggle.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        openLocationPanel();
    }
});
locationClose.addEventListener("click", closeLocationPanel);
locationOverlay.addEventListener("click", closeLocationPanel);

cartToggle.addEventListener("click", openCartModal);
cartClose.addEventListener("click", closeCartModal);
cartOverlay.addEventListener("click", closeCartModal);
checkoutBtn.addEventListener("click", handleCheckoutSuccess);

loginToggle.addEventListener("click", openLoginModal);
loginClose.addEventListener("click", closeLoginModal);
loginOverlay.addEventListener("click", closeLoginModal);

loginSubmit.addEventListener("click", function () {
    loginError.innerText = "";
    openSuccessModal("Success", "Login Successful! Welcome to Med-Pharma.");
    closeLoginModal();
});

successOkBtn.addEventListener("click", closeSuccessModal);
successOverlay.addEventListener("click", closeSuccessModal);

// Add to Cart Logic for Lab Tests
const addToCartButtons = document.querySelectorAll('.btn-add-cart');

addToCartButtons.forEach(button => {
    button.addEventListener('click', () => {
        const card = button.closest('.test-card');
        const titleElement = card.querySelector('h3');
        const priceElement = card.querySelector('.price-now');
        
        const itemName = titleElement.innerText;
        const priceText = priceElement.innerText;
        const priceValue = parseFloat(priceText.replace('₹', '').replace('Rs', '').replace(',', '').trim());

        cartItems.push({
            name: itemName,
            price: priceValue
        });

        updateCartDetails();
        
        // Visual feedback
        button.innerHTML = '<i class="bx bx-check"></i> Added';
        button.style.backgroundColor = '#4caf50';
        button.style.color = '#fff';
        button.style.borderColor = '#4caf50';
    });
});
