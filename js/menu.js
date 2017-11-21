(function (cb) {

    // browser event has already occurred.
    if (document.readyState === "complete") {
        return setTimeout(cb);
    }

    // Mozilla, Opera and webkit style
    if (window.addEventListener) {
        return window.addEventListener("load", cb, false);
    }

    // If IE event model is used
    if (window.attachEvent) {
        return window.attachEvent("onload", cb);
    }

})(function () {

    document.querySelectorAll('.nav__btn').forEach(function (el) {
        el.addEventListener('click', function () {
            var nav = this.parentElement.parentElement,
                _class = 'nav--open';

            nav.classList.contains(_class) ?
                nav.classList.remove(_class) :
                nav.classList.add(_class)
        });
    });

});



(function () {
    let windowWidth = window.innerWidth;
    let hiddenButton = document.querySelector('.nav__btn--hidden');
    let visibleButtons = document.querySelectorAll('.main');
    let openedLinks = document.querySelectorAll('.nav__link');
    const nav = document.querySelector('.nav');
    if (windowWidth < 768) {

        hiddenButton.classList.remove('nav__btn--hidden');
        visibleButtons.forEach(function (el) {
                el.classList.add('nav__btn--hidden');
            });
        }
        else {
            hiddenButton.classList.add('nav__btn--hidden');
        
        visibleButtons.forEach(function (el) {
                el.classList.remove('nav__btn--hidden');
        });
    }

    window.addEventListener('resize', function () {

        let windowWidth = window.innerWidth;
        if (windowWidth < 768) {
            hiddenButton.classList.remove('nav__btn--hidden');
        } else {
            hiddenButton.classList.add('nav__btn--hidden');
        }
    });

    window.addEventListener('resize', function () {
        let windowWidth = window.innerWidth;
        visibleButtons.forEach(function (el) {
            if (windowWidth < 768) {
                el.classList.add('nav__btn--hidden');

            } else {
                el.classList.remove('nav__btn--hidden');
            }
        });
    });
    
 openedLinks.forEach(link => link.addEventListener('click', function() {
     nav.classList.remove('nav--open');
 }));
})();
