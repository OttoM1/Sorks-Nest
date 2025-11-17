const images = ['mount.png', 'mount2.png', 'mount3.png', 'mount5.mp4'];
images.forEach(src => {
  const img = new Image();
  img.src = src;
});




document.addEventListener("DOMContentLoaded", () => {
    const target = document.getElementById("headline1");

    const observerOptions = {
        root: null, 
        threshold: 0.7
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visibleHeadline1");
                observer.unobserve(entry.target); }
        });
    }, observerOptions);

    observer.observe(target);
}); 





document.addEventListener("DOMContentLoaded", () => {
    const target = document.getElementById("headline2");

    const observerOptions = {
        root: null, 
        threshold: 0.72
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visibleHeadline2");
            } else {
                entry.target.classList.remove("visibleHeadline2");
            }
        });
    }, observerOptions);

    observer.observe(target);
}); 




document.addEventListener("DOMContentLoaded", () => {
    const target = document.getElementById("headline3");

    const observerOptions = {
        root: null, 
        threshold: 0.8
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visibleHeadline3");
            } else {
                entry.target.classList.remove("visibleHeadline3");
            }
        });
    }, observerOptions);

    observer.observe(target);
}); 



document.addEventListener("DOMContentLoaded", () => {
    const target = document.getElementById("headline4");

    const observerOptions = {
        root: null, 
        threshold: 0.8
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visibleHeadline4");
            } else {
                entry.target.classList.remove("visibleHeadline4");
          }
        });
    }, observerOptions);

    observer.observe(target);
}); 










document.addEventListener("DOMContentLoaded", () => {
    const target = document.getElementById("s0Div1");

    const observerOptions = {
        root: null, 
        threshold: 0.63
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible1");
                observer.unobserve(entry.target); }
        });
    }, observerOptions);

    observer.observe(target);
}); 







window.addEventListener('scroll', () => {
    document.documentElement.style.setProperty('--scroll', window.scrollY);
  });





  (function() {
    const ua = navigator.userAgent;
  
    // Detect Safari (excluding Chrome, Edge, etc.)
    const isSafari = /^((?!chrome|android).)*safari/i.test(ua);
  
    if (isSafari) {
      const style = document.createElement('style');
      style.textContent = `* { overflow-x: hidden !important; }`;
      document.head.appendChild(style);
    }
  })();



