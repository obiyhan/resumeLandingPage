const emailInput = document.getElementById("emailInput");
const downloadBtn = document.getElementById("downloadBtn");
const message = document.getElementById("message");
const resumeLink = document.getElementById("resumeLink");

downloadBtn.addEventListener("click", function () {
  const email = emailInput.value;

  if (email) {
    message.textContent = "Email accepted. You can download the resume below.";
    message.style.color = "green";

    resumeLink.style.display = "inline-block";
  } else {
    message.textContent = "Please enter an email address.";
    message.style.color = "red";

    resumeLink.style.display = "none";
  }
});
