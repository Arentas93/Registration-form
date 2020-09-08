//---------Mobile Nav--------------
function responsiveNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
$(document).ready(function () {
  //---------Enabling Popovers---------

  $(function () {
    $('[data-toggle="popover"]').popover();
  });

  //------Customizing Popovers----------

  $("#surname").popover("disable"); //Dissabling surname popover
  $("#email-input").popover("disable"); //Dissabling email popover

  var surnameTextBox = document.getElementById("surname");

  surnameTextBox.addEventListener("keyup", function () {
    var surnameTextInput = document.getElementById("surname").value;
    if (surnameTextInput.length > 4) {
      //Controlling the length of input
      //console.log(surnameTextInput);
      $("#surname").popover("enable");
      $("#surname").popover("show");
      surnameTextBox.classList.add("green-border"); // adding green border
    }
  });
  //-------Checking Email-------------
  var emailadres = document.getElementById("email-input");
  var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

  emailadres.addEventListener("keyup", function () {
    var emailadresvalue = document.getElementById("email-input").value;
    if (reg.test(emailadresvalue)) {
      //console.log("Teisingas");
      $("#email-input").popover("disable");
      $("#email-input").popover("hide");
      emailadres.classList.remove("red-border"); // removing red border
    } else if (!reg.test(emailadresvalue) && emailadresvalue.length > 5) {
      //console.log("neteisingas", emailadresvalue);
      $("#email-input").popover("enable");
      $("#email-input").popover("show");
      emailadres.classList.add("red-border"); //adding red border
    }
  });
});
