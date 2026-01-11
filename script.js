document.getElementById("contactForm").addEventListener("submit", async function(e) {
    e.preventDefault();
    const name = this.name.value;
    const email = this.email.value;
    const message = this.message.value;

    try {
        const response = await fetch("/api/sendMessage", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name, email, message })
        });

        const data = await response.json();
        document.getElementById("responseMsg").textContent = data.message;
        this.reset();
    } catch (err) {
        document.getElementById("responseMsg").textContent = "Error sending message.";
        console.error(err);
    }
});
