


function validateForm() {
  var P = document.forms["myForm"]["fname"].value;
  if (P == "") {
    alert("Name must be filled out");
    return false;
  }
  var y = document.forms["myForm"]["lname"].value;
  if (y == "") {
    alert("Name must be filled out");
    return false;
  }
  if (!/^[a-zA-Z]*$/g.test(document.myForm.fname.value)) {
        alert("Invalid characters");
        document.myForm.name.focus();
        return false;
    }
    if (!/^[a-zA-Z]*$/g.test(document.myForm.lname.value)) {
        alert("Invalid characters");
        document.myForm.name.focus();
        return false;
    }
  
}

// burger menu

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}
