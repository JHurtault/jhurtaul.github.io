// retrieve and document user input for contact information
document.getElementById("contact").addEventListener("submit", function (event) {
  event.preventDefault(); // recommended default action

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  // Display pop up box to user
  const modal = document.getElementById("thank-you-modal");
  const modalMessage = document.getElementById("modal-message");

  // Message to user
  modalMessage.textContent = `Thank you, ${name}! I will contact you by email ${email} shortly.`;

  // Show the modal
  modal.style.display = "block";

  // log user information to console

  console.log("Name:", name);
  console.log("Email:", email);
  console.log("Message:", message);

  // clear information from form once submitted
  document.getElementById("contact").reset();
});

// Close the popup box when the user clicks the close button
document.getElementById("close-modal").addEventListener("click", function () {
  const modal = document.getElementById("thank-you-modal");
  modal.style.display = "none";
});
