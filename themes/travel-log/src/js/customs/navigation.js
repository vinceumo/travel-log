(function () {
  document.addEventListener("DOMContentLoaded", function () {
      var ctas = document.querySelectorAll("button.burger");
      var mainNavigation = document.querySelector('#main-navigation');

      Array.prototype.forEach.call(ctas, function (el, i) {
          var currentCta = ctas[i];

          //Event handler 1 for exemple click
          currentCta.addEventListener("click", function () {
            toggleNavigation(mainNavigation, currentCta);
          });
      });

  });

  function toggleNavigation(nav, currentElement) {
      if (currentElement.classList.contains('is-open')){
        currentElement.classList.remove('is-open');
        nav.classList.remove('is-open');
        nav.inert = true;
      } else {
        currentElement.classList.add('is-open');
        nav.classList.add('is-open');
        nav.inert = false;
      }
  }
})();