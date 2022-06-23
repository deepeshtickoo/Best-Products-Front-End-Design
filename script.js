/* Set the width of the sidebar to 250px (show it) */
function openNav() {
    document.getElementById("mySidepanel").style.width = "270px";
}
  
/* Set the width of the sidebar to 0 (hide it) */
function closeNav() {
  document.getElementById("mySidepanel").style.width = "0";
}

function openCity(evt, cityName) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}

// if document.getElementById("input-email") contains "@edu.vaniercollege.qc.ca" then fine otherwise alert
function validateEmail() {
  if (document.getElementById("input-email").value.includes("@edu.vaniercollege.qc.ca")) {
    alert("Thank you for messaging us!");
  } else {
    alert("Please enter a valid Vanier email address.");
  }
}

function validateChat() {
  if (document.getElementById("chatarea").value != ''){
    alert("Thank you for chatting with us!");
  } else {
    alert("Please type something in chat first.");
  }
}