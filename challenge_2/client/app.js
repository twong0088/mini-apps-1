var newEntry = {
  firstName: undefined,
  lastName: undefined,
  county: undefined,
  city: undefined,
  role: undefined,
  sales: undefined
}

function submitForm(event) {
  event.preventDefault();
  newEntry.firstName = event.target[0].value;
  newEntry.lastName = event.target[1].value;
  newEntry.county = event.target[2].value;
  newEntry.city = event.target[3].value;
  newEntry.role = event.target[4].value;
  newEntry.sales = Number(event.target[5].value);

  document.getElementById("main").reset();
}



