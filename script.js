
document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("survey-form");
    const confirmation = document.getElementById("confirmation");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        // Collect form data
        const formData = new FormData(form);
        const data = {};
        formData.forEach((value, key) => {
            data[key] = value;
        });

        // Display confirmation message
        const confirmationMessage = `Thank you, ${data.name}! Your response has been recorded.`;
        confirmation.innerText = confirmationMessage;
        confirmation.style.display = "block";
    });
});
