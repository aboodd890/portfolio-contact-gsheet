const WEB_APP_URL =
    "https://script.google.com/macros/s/AKfycbzA2bguwnu99u945DCeUyiC8ZAh3bsKsMWfu7C-krC_oEsUmdA9MLFKSo02p1EMuTPu/exec";

document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
    const status = document.getElementById("status");

    if (name.length < 2 || !email.includes("@") || message.length < 3) {
        status.textContent = "Validation failed";
        status.style.color = "red";
        return;
    }

    // نرسل بدون انتظار رد
    fetch(WEB_APP_URL, {
        method: "POST",
        mode: "no-cors",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, message }),
    });

    status.textContent = "Message sent ✓";
    status.style.color = "green";
    document.getElementById("contactForm").reset();
});
