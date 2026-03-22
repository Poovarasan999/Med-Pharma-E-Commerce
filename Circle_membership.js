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

            var pd = p.querySelector(".dot");
            var pc = p.querySelector(".circle");
            if (pd) pd.classList.add("hidden");
            if (pc) pc.classList.remove("border-orange-500");
        });

        // add active to clicked
        this.classList.add("bg-[#F5E9DC]", "text-black", "border-orange-500");

        var dot = this.querySelector(".dot");
        var circle = this.querySelector(".circle");
        if (dot) dot.classList.remove("hidden");
        if (circle) circle.classList.add("border-orange-500");

    });
});

// Circle_membership only: login + success (same behaviour as index.html / script.js)
var loginToggle = document.getElementById("loginToggle");
var loginOverlay = document.getElementById("loginOverlay");
var loginModal = document.getElementById("loginModal");
var loginClose = document.getElementById("loginClose");
var circleLoginForm = document.getElementById("circleLoginForm");
var loginError = document.getElementById("loginError");
var loginName = document.getElementById("loginName");
var loginEmail = document.getElementById("loginEmail");
var loginPassword = document.getElementById("loginPassword");
var successModal = document.getElementById("successModal");
var successOverlay = document.getElementById("successOverlay");
var successTitle = document.getElementById("successTitle");
var successMessage = document.getElementById("successMessage");
var successOkBtn = document.getElementById("successOkBtn");

function openLoginModal() {
    if (!loginModal || !loginOverlay || !loginError) return;
    loginModal.style.display = "block";
    loginOverlay.style.display = "block";
    loginError.style.color = "#dc2626";
    loginError.innerText = "";
}

function closeLoginModal() {
    if (!loginModal || !loginOverlay || !loginError) return;
    loginModal.style.display = "none";
    loginOverlay.style.display = "none";
    loginError.style.color = "#dc2626";
    loginError.innerText = "";
}

function openSuccessModal(titleText, messageText) {
    if (successTitle) successTitle.innerText = titleText;
    if (successMessage) successMessage.innerText = messageText;
    if (successModal) successModal.style.display = "block";
    if (successOverlay) successOverlay.style.display = "block";
}

function closeSuccessModal() {
    if (successModal) successModal.style.display = "none";
    if (successOverlay) successOverlay.style.display = "none";
}

function validateCircleLoginForm() {
    if (!loginName || !loginEmail || !loginPassword || !loginError) return;
    var nameValue = loginName.value.trim();
    var emailValue = loginEmail.value.trim();
    var passwordValue = loginPassword.value;
    loginError.style.color = "#dc2626";

    if (nameValue === "") {
        loginError.innerText = "Please enter your name.";
        return;
    }

    if (
        emailValue === "" ||
        emailValue.indexOf("@") === -1 ||
        emailValue.indexOf(".") === -1
    ) {
        loginError.innerText = "Please enter a valid email address.";
        return;
    }

    if (passwordValue.length < 6) {
        loginError.innerText = "Password must be at least 6 characters.";
        return;
    }

    closeLoginModal();
    openSuccessModal(
        "Login Successful",
        "Welcome " + nameValue + "! Login successful."
    );
}

if (loginToggle && loginModal && loginOverlay && loginError) {
    loginToggle.addEventListener("click", openLoginModal);
    if (loginClose) loginClose.addEventListener("click", closeLoginModal);
    loginOverlay.addEventListener("click", closeLoginModal);
    if (circleLoginForm) {
        circleLoginForm.addEventListener("submit", function (event) {
            event.preventDefault();
            validateCircleLoginForm();
        });
    }
}

if (successOkBtn) successOkBtn.addEventListener("click", closeSuccessModal);
if (successOverlay) successOverlay.addEventListener("click", closeSuccessModal);