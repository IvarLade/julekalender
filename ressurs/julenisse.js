document.addEventListener('DOMContentLoaded', function () {
    var svgOverlay = document.getElementById('svg-overlay');
  
    window.addEventListener('scroll', function () {
      var scrollPosition = window.scrollY;
      svgOverlay.style.transform = 'translateY(' + scrollPosition + 'px)';
    });
  });
  