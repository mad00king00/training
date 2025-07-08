window.onload = function() {


  var form = document.getElementById('employeeForm');


  var tableBody = document.getElementById('employeeTable').getElementsByTagName('tbody')[0];
  

  form.onsubmit = function(e) {
    e.preventDefault(); 

  
    var salutation = document.getElementById('salutation').value;
    var name = document.getElementById('name').value;
    var age = document.getElementById('age').value;
    var state = document.getElementById('state').value;
    var pincode = document.getElementById('pincode').value;
    var about = document.getElementById('about').value;
   // var gender = document.getElementById('gender').value;
   // var hobbies = document.getElementById('hobbies').value;

 var gender = "";
    var genderOptions = document.getElementsByName('gender');
    for (var i = 0; i < genderOptions.length; i++) {
      if (genderOptions[i].checked) {
        gender = genderOptions[i].value;
      }
    }


    var hobbies = "";
    var hobbyOptions = document.getElementsByName('hobbies');
    var hobbyList = [];
    for (var i = 0; i < hobbyOptions.length; i++) {
      if (hobbyOptions[i].checked) {
        hobbyList.push(hobbyOptions[i].value);
      }
    }
    hobbies = hobbyList.join(", ");

   
   
   
    var newRow = tableBody.insertRow();

    newRow.insertCell(0).innerHTML = salutation;
    newRow.insertCell(1).innerHTML = name;
    newRow.insertCell(2).innerHTML = age;
    newRow.insertCell(3).innerHTML = gender;  
    newRow.insertCell(4).innerHTML = hobbies;
    newRow.insertCell(5).innerHTML = state;
    newRow.insertCell(6).innerHTML = pincode;
    newRow.insertCell(7).innerHTML = about;

    
    form.reset();
  };

};
