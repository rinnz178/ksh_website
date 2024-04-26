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


// Scroll Transition

// Function to check if an element is in the viewport
function isInViewport(element) {
  var rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// Function to handle scroll event
function handleScroll() {
  const sections = document.querySelectorAll('section');
  sections.forEach(section => {
    if (isInViewport(section)) {
      section.classList.add('show');
      window.removeEventListener('scroll', handleScroll); // Remove scroll event listener once animation is triggered
    }
  });
}

// Add scroll event listener
window.addEventListener('scroll', handleScroll);



  