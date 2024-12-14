document.getElementById("length").value = 8;

function generateNewPassword() {
  const length = parseInt(document.getElementById("length").value);

  const useUppercase = document.getElementById("upercase").checked;
  const useLowercase = document.getElementById("lowerCase").checked;
  const useNumbers = document.getElementById("numbers").checked;
  const useSymbols = document.getElementById("symbols").checked;

  const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  const numberChars = "0123456789";
  const symbolChars = "!@#$%^&*()_+[]{}|;:,.<>?";

  let allChars = "";
  if (useUppercase) allChars += uppercaseChars;
  if (useLowercase) allChars += lowercaseChars;
  if (useNumbers) allChars += numberChars;
  if (useSymbols) allChars += symbolChars;

  let password = "";
  for (let i = 0; i < length; i++) {
    if (allChars == "") {
      return;
    }
    const randomIndex = Math.floor(Math.random() * allChars.length);
    password += allChars[randomIndex];
  }

  document.getElementById("generatedPassword").value = password;
}

function copyPassword() {
  const passwordField = document.getElementById("generatedPassword");

  if (passwordField.value != "") {
    navigator.clipboard.writeText(passwordField.value);
    alert("Password copied to clipboard!");
  } else {
    return;
  }
}
