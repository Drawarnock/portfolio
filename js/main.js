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

    document.querySelectorAll('.nav__btn').forEach(el => {
        el.addEventListener('click', function () {
            var nav = this.parentElement.parentElement;
            nav.classList.contains('nav--open') ? nav.classList.remove('nav--open') : nav.classList.add('nav--open')
        });
    });
});

(function () {
    let windowInnerWidth = window.innerWidth;
    const hiddenButton = document.querySelector('[data-visibility="hidden"]');
    const visibleButtons = document.querySelectorAll('[data-visibility="visible"]');
    const hiddenAnchors = document.querySelectorAll('.nav__link');
    const nav = document.querySelector('.nav');
    if (windowInnerWidth < 768) { 
        hiddenButton.classList.remove('nav__btn--hidden'); // show menu bar (when website is loaded)
        visibleButtons.forEach( el => el.classList.add('nav__btn--hidden')); // hide menu buttons (when website is loaded)
    } else {
        hiddenButton.classList.add('nav__btn--hidden'); // hide menu bar (when website is loaded)
        visibleButtons.forEach( el => el.classList.remove('nav__btn--hidden')); // show menu buttons  (when website is loaded)
    }

    window.addEventListener('resize', () => {
        windowInnerWidth = window.innerWidth; // windowInnerWidth is changing value on window resize 

        if (windowInnerWidth < 768) { // this is the same as above but it's working on window resize
            hiddenButton.classList.remove('nav__btn--hidden');
            visibleButtons.forEach( el => el.classList.add('nav__btn--hidden'));
        } else {
            hiddenButton.classList.add('nav__btn--hidden');
            visibleButtons.forEach( el => el.classList.remove('nav__btn--hidden'));
        }

        if (nav.classList.contains('nav--open') && windowInnerWidth >=768)   {
            nav.classList.remove('nav--open')
        } 

    });

    hiddenAnchors.forEach(link => link.addEventListener('click', () => nav.classList.remove('nav--open'))); // closing menu after click on link in hidden menu

    window.addEventListener('scroll', () => { //sticky nav
        if(window.scrollY>0) {
            nav.classList.add('nav--sticky');
        } else {
            nav.classList.remove('nav--sticky');
        } 
        });

    //smooth scroll
    const links = document.querySelectorAll('a[href^="#"]');
    const speed = 500;
    const movingFreq = 15;
   
    links.forEach(link => link.addEventListener('click', function(e) {
        e.preventDefault();
        let href;
        if(this.getAttribute('href').length>1)
        {
            href = this.getAttribute('href').toString();
        } else {
            return;
        }
        const targetElement = document.getElementById(href.slice(1));
        const documentScroll = window.scrollY
        const targetElementOffset = targetElement.offsetTop;
        const stepCount = Math.floor(speed/movingFreq);
        const stepCountGap = (targetElementOffset - documentScroll)/stepCount;
      
        for (var i = 1; i <= stepCount; i++)
        {
            (function()
            {
                let stepPosition = stepCountGap * i;
                setTimeout(() => window.scrollTo(0, stepPosition + documentScroll), movingFreq * i);
            })();
        }
    }));

    
    const sections = document.querySelectorAll('[data-section="mainly_sections"]');

     window.addEventListener('scroll', function(e) {
        sections.forEach(section => {
            sectionPositionY = section.offsetTop;
            sectionHeight = section.offsetHeight;
            const id = section.getAttribute('id');
            if(window.scrollY >= sectionPositionY && window.scrollY < (sectionPositionY + sectionHeight) )
            {
                const el = document.querySelector(`[href="#${id}"]`)
                el.classList.add('nav__btn--active');
            } else {
                const el = document.querySelector(`[href="#${id}"]`)
                el.classList.remove('nav__btn--active');
            }
        });
    });

    const sec = document.querySelector('.about__description');
    console.log(sec.offsetTop);
    console.log(document.getElementById('skills').offsetTop);
   
    window.addEventListener('scroll', checkPosition);
    
    function checkPosition() {
        const slideinAt = window.scrollY + window.innerHeight - sec.offsetHeight*0.25;
        console.log(window.scrollY)
        const pos = sec.parentNode.parentNode.offsetTop + sec.offsetTop+400 //+ sec.offsetHeight;
        console.log('pos = '+ pos);
        const isHalfShown = slideinAt > pos

        if(isHalfShown) {
            sec.classList.remove('about__description--slide-in')
            sec.classList.add('about__description--slide-in--active');
        }
    }

})();