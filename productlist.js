function showCategory(category) {

  var phones = document.getElementById('phones');
  var laptops = document.getElementById('laptops');
  var tvs = document.getElementById('tvs');

  phones.style.display = 'none';
  laptops.style.display = 'none';
  tvs.style.display = 'none';

  if (category === 'phones') {
    phones.style.display = 'block';
  } else if (category === 'laptops') {
    laptops.style.display = 'block';
  } else if (category === 'tvs') {
    tvs.style.display = 'block';
  }
}


function applyFilters(tableId, prefix) {

  var yearValue = document.getElementById(prefix + 'Year').value;
  var brandValue = document.getElementById(prefix + 'Brand').value.toLowerCase();
  var priceValue = document.getElementById(prefix + 'Price').value;

  var table = document.getElementById(tableId);
  var tbody = table.getElementsByTagName('tbody')[0];
  var rows = tbody.getElementsByTagName('tr');

  for (var i = 0; i < rows.length; i++) {
    var cells = rows[i].getElementsByTagName('td');

    var rowYear = cells[1].textContent.trim();
    var rowBrand = cells[2].textContent.trim().toLowerCase();
    var rowPrice = cells[3].textContent.trim();

    var showRow = true;

    if (yearValue !== "" && rowYear !== yearValue) {
      showRow = false;
    }

    if (brandValue !== "" && rowBrand.indexOf(brandValue) === -1) {
      showRow = false;
    }

    if (priceValue !== "" && parseFloat(rowPrice) > parseFloat(priceValue)) {
      showRow = false;
    }

    if (showRow) {
      rows[i].style.display = "";
    } else {
      rows[i].style.display = "none";
    }
  }
}

function resetFilters(tableId) {

  var inputs = document.querySelectorAll('.filters input');
  for (var i = 0; i < inputs.length; i++) {
    inputs[i].value = "";
  }

  var table = document.getElementById(tableId);
  var tbody = table.getElementsByTagName('tbody')[0];
  var rows = tbody.getElementsByTagName('tr');

  for (var i = 0; i < rows.length; i++) {
    rows[i].style.display = "";
  }
}
