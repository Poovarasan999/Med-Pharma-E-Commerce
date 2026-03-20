// Page JS
var ques = document.querySelectorAll(".ques");

ques.forEach(function (q) {
    q.addEventListener("click", function () {

        var ans = this.nextElementSibling;
        var isOpen = !ans.classList.contains("hidden");

        // close all
        document.querySelectorAll(".ans").forEach(function (a) {
            a.classList.add("hidden");
        });

        // open only clicked (if it was closed)
        if (!isOpen) {
            ans.classList.remove("hidden");
        }

    });
});

// Subscription Page
const plans = document.querySelectorAll(".plan");

plans.forEach(plan => {
    plan.addEventListener("click", function () {

        // remove active from all
        plans.forEach(p => {
            p.classList.remove("bg-[#F5E9DC]", "text-black", "border-orange-500");

            p.querySelector(".dot").classList.add("hidden");
            p.querySelector(".circle").classList.remove("border-orange-500");
        });

        // add active to clicked
        this.classList.add("bg-[#F5E9DC]", "text-black", "border-orange-500");

        this.querySelector(".dot").classList.remove("hidden");
        this.querySelector(".circle").classList.add("border-orange-500");

    });
});

// Footer JS
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

function openLocationPanel() {
    locationPanel.style.left = "0";
    locationOverlay.style.display = "block";
}

function closeLocationPanel() {
    locationPanel.style.left = "-100%";
    locationOverlay.style.display = "none";
}

function openCartModal() {
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

loginToggle.addEventListener("click", openLoginModal);
loginClose.addEventListener("click", closeLoginModal);
loginOverlay.addEventListener("click", closeLoginModal);

loginSubmit.addEventListener("click", function () {
    loginError.innerText = "";
});