function updatePrice() {

  let s = document.getElementsByName("prodType");
  let select = s[0];
  let price = 0;
  let prices = getPrices();
  let priceIndex = parseInt(select.value) - 1;
  if (priceIndex >= 0) {
    price = prices.prodTypes[priceIndex];
  }
  

  let radioDiv = document.getElementById("radio-but");
  radioDiv.style.display = (select.value == "3" ? "block" : "none");
  

  let radios = document.getElementsByName("radoptions");
  radios.forEach(function(radio) {
    if (radio.checked) {
      let optionPrice = prices.radoptions[radio.value];
      if (optionPrice !== undefined) {
        price += optionPrice;
      }
    }
  });


  let checkDiv = document.getElementById("checkboxes");
  checkDiv.style.display = (select.value == "3" ? "none" : "block");


  let checkboxes = document.querySelectorAll("#checkboxes input");
  checkboxes.forEach(function(checkbox) {
    if (checkbox.checked) {
      let propPrice = prices.prodProperties[checkbox.name];
      if (propPrice !== undefined) {
        price += propPrice;
      }
    }
  });
  
  let prodPrice = document.getElementById("result");
  prodPrice.innerHTML = price + " рублей";
}
  
  function calculate() {
    let regexp = /\D/g;
    let productAmount = document.getElementsByName("count")[0].value;
    let r = document.getElementById("result");

    if (Boolean(productAmount)) {
        if (regexp.test(productAmount)) {
           r.innerText = "Данные введены не корректно";
        } else {
            regexp = /\d/g;
            productAmount = parseInt(productAmount.match(regexp).join(""));
            let productPrice = r.innerText.match(/\d+/g);
            r.innerText = `${productPrice * productAmount} рублей`;
        }
    }
    return false;
}


function getPrices() {
  return {
    prodTypes: [100, 200, 150],
    prodOptions: {
      option2: 10,
      option3: 5,
    },
    prodProperties: {
      box1: 1,
      box2: 2,
    }
  };
}

window.addEventListener('DOMContentLoaded', function (event) {
  let radioDiv = document.getElementById("radio-but");
  radioDiv.style.display = "none";

  let s = document.getElementsByName("prodType");
  let select = s[0];

  select.addEventListener("change", function(event) {
    let target = event.target;
    console.log(target.value);
    updatePrice();
  });
  
  
  let radios = document.getElementsByName("prodOptions");
  radios.forEach(function(radio) {
    radio.addEventListener("change", function(event) {
      let r = event.target;
      console.log(r.value);
      updatePrice();
    });
  });

  
  let checkboxes = document.querySelectorAll("#checkboxes input");
  checkboxes.forEach(function(checkbox) {
    checkbox.addEventListener("change", function(event) {
      let c = event.target;
      console.log(c.name);
      console.log(c.value);
      updatePrice();
    });
  });

  updatePrice();
  
  let button = document.getElementById("calculate-button");
    button.addEventListener("click", calculate);

});
