function submitForm(event) {
  event.preventDefault();

  var newEntry = {
    firstName: undefined,
    lastName: undefined,
    county: undefined,
    city: undefined,
    role: undefined,
    sales: undefined
  }
  newEntry.firstName = event.target[0].value;
  newEntry.lastName = event.target[1].value;
  newEntry.county = event.target[2].value;
  newEntry.city = event.target[3].value;
  newEntry.role = event.target[4].value;
  newEntry.sales = Number(event.target[5].value);

  document.getElementById("main").reset();
  postNewEntry(newEntry);
}

function download() {
  let http = new XMLHttpRequest();
  http.open('GET', '/users', true);

   // onload function to get data
   http.onload = function () {
      if (this.status === 200) {
          downloadString(this.responseText);
      }
   }
  // Send function to send data
  http.send()

}

function postNewEntry(newEntry) {
  let xhr = new XMLHttpRequest();
   xhr.open('POST',
   '/newuser', true);

   xhr.setRequestHeader('Content-type', 'application/json');

   xhr.onload = function () {
       if(this.status === 200){
           console.log(this.responseText)
       }
       else {
           console.log("Some error occured")
       }
   }

   xhr.send(JSON.stringify(newEntry));
}


function downloadString(text, fileType, fileName) {
  var blob = new Blob([text], { type: fileType });

  var a = document.createElement('a');
  a.download = fileName;
  a.href = URL.createObjectURL(blob);
  a.dataset.downloadurl = [fileType, a.download, a.href].join(':');
  a.style.display = "none";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  setTimeout(function() { URL.revokeObjectURL(a.href); }, 1500);
}

