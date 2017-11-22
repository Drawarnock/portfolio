(function() {
  let nav = document.querySelector('.nav');
  window.addEventListener('scroll', function() {
    if(window.scrollY>0) {
        nav.classList.add('nav--sticky');
    } else {
        nav.classList.remove('nav--sticky');
    } 
  });
})();