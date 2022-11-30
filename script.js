function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
      document.getElementById("présentations").style.marginBottom= '-30px';
      
    } else {
      x.className = "topnav";
      document.getElementById("présentations").style.marginBottom= '0px';
      
    }
  }