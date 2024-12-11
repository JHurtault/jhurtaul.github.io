// retrieve and document user input for contact information
document.getElementById("contact").addEventListener("submit", function (event) {
  event.preventDefault(); // recommended default action

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  // Display message to user
  alert(`Thank you, ${name}! I will contact you by ${email} shortly`);

  // log user information to console

  console.log("Name:", name);
  console.log("Email:", email);
  console.log("Message:", message);
  // clear information from form once submitted
  document.getElementById("contact").reset();
});
