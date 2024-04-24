function toggleService(id) {
    var content = document.getElementById(id);
  if (window.getComputedStyle(content).display === "none") {
    content.style.display = "block";
    setTimeout(function() {
      content.style.opacity = "1";
    }, 10);
  } else {
    content.style.opacity = "0";
    setTimeout(function() {
      content.style.display = "none";
    }, 500); // Change the value here to match the transition duration
  }
  }

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));

        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});



  