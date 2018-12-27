(function () {
  document.addEventListener("DOMContentLoaded", function () {
      const ctas = document.querySelectorAll("button.burger");
      const mainNavigation = document.querySelector('#main-navigation');
      const mainNavigationLinks = mainNavigation.querySelectorAll('a, button');

      Array.prototype.forEach.call(ctas, function (el, i) {
          const currentCta = ctas[i];

          currentCta.addEventListener("click", function () {
            toggleNavigation(mainNavigation, currentCta);
          });

          Array.prototype.forEach.call(mainNavigationLinks, function (el, i) {
            const currentLink = mainNavigationLinks[i];
  
            currentLink.addEventListener("click", function () {
              toggleNavigation(mainNavigation, currentCta);
            });
        });

          document.onkeydown = function (evt) {
            if(evt.keyCode == keyList.escape) {
              closeNavigation(mainNavigation, currentCta);
            }
          };
      });

  });

  function toggleNavigation(nav, currentElement) {
      if (currentElement.classList.contains('is-open')){
        closeNavigation(nav, currentElement)
      } else {
        openNavigation(nav, currentElement)
      }
  };

  function closeNavigation(nav, currentElement) {
    const body = document.querySelector("body");
    const bodyDirectChildren = document.querySelectorAll("body > *:not(.nav-bar-container):not(.main-navigation)");
    currentElement.classList.remove('is-open');
    nav.classList.remove('is-open');
    body.classList.remove('has-modal-open');
    Array.prototype.forEach.call(bodyDirectChildren, function (el, i) {
      el.inert = false;
    });
    nav.inert = true;
  };

  function openNavigation(nav, currentElement) {
    const body = document.querySelector("body");
    const bodyDirectChildren = document.querySelectorAll("body > *:not(.nav-bar-container):not(.main-navigation)");
    currentElement.classList.add('is-open');
    nav.classList.add('is-open');
    body.classList.add('has-modal-open');
    Array.prototype.forEach.call(bodyDirectChildren, function (el, i) {
      el.inert = true;
    });
    nav.inert = false;
  }
})();