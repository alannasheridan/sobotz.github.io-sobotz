document.addEventListener("DOMContentLoaded", function() {
    fetch("navbar.html")
      .then(function(response) {
        return response.text();
      })
      .then(function(html) {
        document.getElementById("navbar-placeholder").innerHTML = html;
      })
});