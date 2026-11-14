(function () {
  var form = document.getElementById("intake-form");
  if (!form) return;
  var msg = document.getElementById("form-msg");
  var btn = form.querySelector('[type="submit"]');

  function show(text, isError) {
    if (!msg) return;
    msg.textContent = text;
    msg.classList.add("show");
    if (isError) msg.classList.add("error");
    else msg.classList.remove("error");
  }

  form.addEventListener("submit", function (e) {
    var consent = form.querySelector('[name="consent"]');
    var hp = form.querySelector('[name="_honey"]');
    if (!consent || !consent.checked) {
      e.preventDefault();
      show(form.getAttribute("data-need-consent") || "", true);
      return;
    }
    if (hp && hp.value) {
      e.preventDefault();
      show(form.getAttribute("data-ok-msg") || "", false);
      form.reset();
      return;
    }
    if (!form.checkValidity()) {
      e.preventDefault();
      form.reportValidity();
      return;
    }
    if (btn) btn.disabled = true;
  });
})();
