// Initialize EmailJS
emailjs.init("an2OdEuJZD_acfNU9");

document.getElementById("contact-form").addEventListener("submit", function (e) {
  e.preventDefault();

  emailjs.sendForm("service_ykizfat", "template_b90u87c", this)
    .then(function () {
      alert("Message sent successfully!");
    }, function (error) {
      alert("Failed to send message: " + JSON.stringify(error));
    });
});
