document.addEventListener("DOMContentLoaded", function () {
  const phoneInput = document.getElementById("telefon-cifre-strict");

  if (!phoneInput) return;

  const showError = (message) => {
    const oldValue = phoneInput.value;
    const oldPlaceholder = phoneInput.placeholder;

    // Curăță conținutul și arată mesajul de eroare în placeholder
    phoneInput.value = "";
    phoneInput.placeholder = message;
    phoneInput.classList.add("error");

    // După 1,5 secunde revine la starea normală
    setTimeout(() => {
      phoneInput.classList.remove("error");
      phoneInput.placeholder = oldPlaceholder;
      phoneInput.value = oldValue;
    }, 1500);
  };

  // Blochează tastarea non-cifrelor
  phoneInput.addEventListener("keypress", function (e) {
    const char = String.fromCharCode(e.which);
    if (!/[0-9]/.test(char)) {
      e.preventDefault();
      showError("❌ Doar cifrele sunt permise!");
    }
  });

  // Blochează lipirea textului nevalid
  phoneInput.addEventListener("paste", function (e) {
    const paste = (e.clipboardData || window.clipboardData).getData("text");
    if (/[^0-9]/.test(paste)) {
      e.preventDefault();
      showError("❌ Doar cifrele sunt permise!");
    }
  });
});

/*pentru rubrica data si ora*/
document.addEventListener("DOMContentLoaded", function () {
  const dataOraInput = document.getElementById("data-ora-programare");
  if (dataOraInput) {
    const acum = new Date().toISOString().slice(0, 16);
    dataOraInput.min = acum;
  }
});
/* pentru selectare clinica*/
const form = document.querySelector("form");

form.addEventListener("submit", function (e) {
  const clinica = document.querySelector(".casuta-clinica").value;
  if (!clinica) {
    e.preventDefault(); // oprește trimiterea formularului
    alert("Te rog să selectezi o clinică!");
  }
});
