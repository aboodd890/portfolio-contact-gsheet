const WEB_APP_URL = "https://script.google.com/macros/s/AKfycbxcu4L1rWtQv3uBHIVGp0E92hOXI56IlFN5C0dNGY67BRi5TCq_TE_j1qJEU4t6_3U7/exec";

document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
    const status = document.getElementById("status");

    // Validation
    if (name.length < 2 || !email.includes("@") || message.length < 5) {
        status.textContent = "Validation failed";
        return;
    }

    status.textContent = "Sending...";

    fetch(WEB_APP_URL, {
        method: "POST",
        body: JSON.stringify({
            name: name,
            email: email,
            message: message
        })
    })
        .then(response => response.text())
        .then(text => {
            console.log(text);
            status.textContent = "Message sent ✅";
            document.getElementById("contactForm").reset();
        })
        .catch(err => {
            console.error(err);
            status.textContent = "Network error ❌";
        });
});
