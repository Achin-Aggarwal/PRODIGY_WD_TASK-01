function save(){	 
    var userPreference;

      if (confirm("Do you want to Sign Out?") == true) {
          userPreference = "Data saved successfully!";
      } else {
          userPreference = "Save Canceled!";
      }

      document.getElementById("msg").innerHTML = userPreference; 
}

window.addEventListener("scroll" , function(){
    var header = this.document.querySelector("header");
    header.classList.toggle("fixed",window.scrollY > 0);
})

