function resetForm() {
  var rate = document.getElementById("rate");
  var years = document.getElementById("years");
  var amount = document.getElementById("principal");

  rate.innerHTML = "10%";
  amount.innerHTML = "";
}

function compute() {
  var principal = document.getElementById("principal").value;

  if (principal <= 0) {
    alert("Principal must be positive");
    principal.focus();
    return;
  }

  var rate = document.getElementById("rate").value;
  var years = document.getElementById("years").value;
  var interest = (principal * rate * years) / 100;
  var year = new Date().getFullYear() + parseInt(years);

  document.getElementById("result").innerHTML =
    "After " +
    years +
    " years at " +
    rate +
    "% interest, the investment will be worth $" +
    (principal + interest) +
    ".";
}

function updateRate() {
  var rateval = document.getElementById("rate").value;
  document.getElementById("rate_val").innerHTML = rateval;
}
