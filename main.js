document.getElementById("city").onchange = function () {
  var city = document.getElementById("city").value;
  document.getElementById("output1").innerText = city;
  console.log(city);

  var Nairobi = "Nairobi";
  var Eldoret = "Eldoret";
  var Mombasa = "Mombasa";

  if (city == Nairobi) {
    document.getElementById("qty").onkeyup = function () {
      var qty = document.getElementById("qty").value;

      var qtyInt = parseInt(qty);
      var price = 2499;

      var total = qtyInt * price;

      document.getElementById("output2").innerHTML = total;
    };
  } else if (city == Eldoret) {
    document.getElementById("qty").onkeyup = function () {
      var qty = document.getElementById("qty").value;

      var qtyInt = parseInt(qty);
      var price = 4433;

      var total = qtyInt * price;
      document.getElementById("output2").innerHTML = total;
    };
  } else if (city == Mombasa) {
    document.getElementById("qty").onkeyup = function () {
      var qty = document.getElementById("qty").value;

      var qtyInt = parseInt(qty);
      var price = 4443;

      var total = qtyInt * price;
      document.getElementById("output2").innerHTML = total;
    };
  }
};
