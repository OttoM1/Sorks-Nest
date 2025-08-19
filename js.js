





/*
document.addEventListener("DOMContentLoaded", () => {
    const pageBgPicker = document.getElementById("pageBgColor");
    pageBgPicker.oninput = () => {
      document.body.style.backgroundColor = pageBgPicker.value;
      document.documentElement.style.backgroundColor = pageBgPicker.value; 
    };
  });

*/

  document.addEventListener("DOMContentLoaded", () => {
    const observerOptions = {
        root: null,
        threshold: 0.24
    };

    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");

            } else {
                entry.target.classList.remove("visible");
            }
        });
    }, observerOptions);

    const applyAnimationClass = (section) => {
        const animationSelect = document.getElementById("animationSelect");
        const animationClass = animationSelect.value;
        
        section.classList.remove("fade-in", "slide-in", "scale-up");
        
        section.classList.add(animationClass);
        observer.observe(section);
    };

    document.querySelectorAll(".gallery-section").forEach(sec => applyAnimationClass(sec));

    window.observeNewSection = (section) => applyAnimationClass(section);
    window.galleryObserver = observer;
    
    const animationSelect = document.getElementById("animationSelect");
    animationSelect.addEventListener("change", () => {
        document.querySelectorAll(".gallery-section").forEach(sec => {
            sec.classList.remove("visible"); 
            applyAnimationClass(sec);
        });
    });
});






const pageBgPicker = document.getElementById("pageBgColor");
pageBgPicker.addEventListener("input", () => {
  document.body.style.backgroundColor = pageBgPicker.value;

  const s2 = document.getElementById("s2");
  s2.style.backgroundImage = "none"; 
});


































document.addEventListener("DOMContentLoaded", () => {
    const sectionAnimations = ["fade-in", "slide-in", "scale-up"];
    const textAnimations = ["text-fade", "text-bounce", "text-typewriter"];

    const observerOptions = {
        root: null,
        threshold: 0.8
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            } else {
                entry.target.classList.remove("visible");
            }
        });
    }, observerOptions);

    const applySectionAnimation = (section) => {
        const animationSelect = document.getElementById("animationSelect");
        const animationClass = animationSelect.value;

        section.classList.remove(...sectionAnimations);
        section.classList.add(animationClass);

        observer.observe(section);
    };

    document.querySelectorAll(".gallery-section").forEach(sec => applySectionAnimation(sec));

    const sectionSelect = document.getElementById("animationSelect");
    sectionSelect.addEventListener("change", () => {
        document.querySelectorAll(".gallery-section").forEach(sec => {
            sec.classList.remove("visible");
            applySectionAnimation(sec);
        });
    });


    const applyTextAnimation = (textEl) => {
        const textSelect = document.getElementById("textAnimationSelect");
        const animationClass = textSelect.value;

        textEl.classList.remove(...textAnimations);
        textEl.classList.add(animationClass);

        observer.observe(textEl);
    };

    document.querySelectorAll(".editable-text").forEach(txt => applyTextAnimation(txt));

    const textSelect = document.getElementById("textAnimationSelect");
    textSelect.addEventListener("change", () => {
        document.querySelectorAll(".editable-text").forEach(txt => {
            txt.classList.remove("visible");
            applyTextAnimation(txt);
        });
    });


    window.observeNewText = (textEl) => applyTextAnimation(textEl);
    window.observeNewSection = (sec) => applySectionAnimation(sec);
});


function addTextToSection(section, sectionText) {
    if (sectionText) {
        const textElement = document.createElement("p");
        textElement.textContent = sectionText;
        textElement.contentEditable = "true";
        textElement.className = "editable-text";
        textElement.style.position = "absolute";
        textElement.style.fontSize = "2rem";
        textElement.style.zIndex = "10";
        textElement.style.userSelect = "none";
        textElement.style.color = "white";
        textElement.style.fontFamily = "Arial, sans-serif";

        textElement.style.top = "20%";
        textElement.style.left = "20%";

        section.appendChild(textElement);
        makeDraggableAndResizable(textElement);

        window.observeNewText(textElement);
    }
}