const WEB_APP_URL = "https://script.google.com/macros/s/AKfycbzA2bguwnu99u945DCeUyiC8ZAh3bsKsMWfu7C-krC_oEsUmdA9MLFKSo02p1EMuTPu/exec";

document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
    const status = document.getElementById("status");

    // Validation
    if (name.length < 2 || !email.includes("@") || message.length < 5) {
        status.textContent = "Validation failed";
        status.style.color = "red";
        return;
    }

    status.textContent = "Sending...";
    status.style.color = "black";

    fetch(WEB_APP_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            name: name,
            email: email,
            message: message
        })
    })
        .then(res => res.text())
        .then(data => {
            if (data.includes("Success")) {
                status.textContent = "Message sent ✅";
                status.style.color = "green";
                document.getElementById("contactForm").reset();
            } else {
                status.textContent = "Server error";
                status.style.color = "red";
            }
        })
        .catch(err => {
            status.textContent = "Network error";
            status.style.color = "red";
            console.error(err);
        });
});

