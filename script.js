document.addEventListener("DOMContentLoaded", () => {

    const titles = document.querySelectorAll("h1");

    titles.forEach(title => {

        const text = title.innerText;
        title.textContent = "";
        title.classList.add("cursor-blink");

        let i = 0;

        function typeWriter() {
            if (i < text.length) {
                title.textContent += text.charAt(i);
                i++;
                setTimeout(typeWriter, 60);
            } else {
                title.classList.remove("cursor-blink");
            }
        }

        typeWriter();
    });

});

// const fadeElements = document.querySelectorAll("p, h2, h3", "li");

// fadeElements.forEach(el => {
//     el.style.opacity = "0";  // força estado inicial
//     el.classList.add("fade-text");
// });