var items = [];

function guardarNumeros() {
  boxvalue = document.getElementById('fname').value;
  boxvalue2 = document.getElementById('lname').value;
  boxvalue3 = document.getElementById('text-content').value;
  items.push(boxvalue);
  items.push(boxvalue2);
  items.push(boxvalue3);
  console.log(items);
  return false; // stop submission
}

//  turning array elements into string for displaying
function myFunction() {
    items.toString();
    document.getElementById("demo").innerHTML = items;

}
