// 🌟 Smooth Scroll for Navigation Links
document.querySelectorAll("nav a").forEach(anchor => {
    anchor.addEventListener("click", function(event) {
        event.preventDefault();
        const section = document.querySelector(this.getAttribute("href"));
        section.scrollIntoView({ behavior: "smooth" });
    });
});

// 🏔️ Lightbox Effect for Gallery Images
document.querySelectorAll(".gallery-box img").forEach(img => {
    img.addEventListener("click", function() {
        const lightbox = document.createElement("div");
        lightbox.id = "lightbox";
        lightbox.innerHTML = `<img src="${this.src}" class="lightbox-img">`;
        document.body.appendChild(lightbox);

        lightbox.addEventListener("click", function() {
            document.body.removeChild(lightbox);
        });
    });
});

// 📧 Contact Form Validation
document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("#contact-form");
    if (form) {
        form.addEventListener("submit", function(event) {
            event.preventDefault();
            const name = document.querySelector("#name").value.trim();
            const email = document.querySelector("#email").value.trim();
            const message = document.querySelector("#message").value.trim();
            
            if (name === "" || email === "" || message === "") {
                alert("⚠️ Please fill in all fields before submitting.");
                return;
            }

            alert("✅ Thank you for contacting us! We will get back to you soon.");
            form.reset();
        });
    }
});

// 🔝 Back-to-Top Button
const topButton = document.createElement("button");
topButton.id = "back-to-top";
topButton.innerHTML = "⬆️";
document.body.appendChild(topButton);

window.addEventListener("scroll", function() {
    if (window.scrollY > 200) {
        topButton.style.display = "block";
    } else {
        topButton.style.display = "none";
    }
});

topButton.addEventListener("click", function() {
    window.scrollTo({ top: 0, behavior: "smooth" });
});
