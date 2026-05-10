// SELECT FORM
const form = document.getElementById("form");

// FORM SUBMIT
form.addEventListener("submit", function(event) {
  event.preventDefault(); 
  // WHY: stop default form submission (page reload)

  // GET USER INPUT
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const message = document.getElementById("message").value.trim();

  // SIMPLE VALIDATION
  if (!name || !email || !phone || !message) {
    alert("Please fill all fields");
    return;
  }

  // CREATE MESSAGE FORMAT
  const text = 
`*Hospital Contact Request*
Name: ${name}
Email: ${email}
Phone: ${phone}
Message: ${message}`;

  // ENCODE TEXT FOR URL
  const encodedText = encodeURIComponent(text);

  //  HOSPITAL WHATSAPP NUMBER
  const whatsappNumber = "+2349065476623";

  // OPEN WHATSAPP
  const url = `https://wa.me/${whatsappNumber}?text=${encodedText}`;
  window.open(url, "_blank");

  // OPTIONAL: RESET FORM AFTER CLICK
  form.reset();
});