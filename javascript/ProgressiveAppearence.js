let hiddenOnesList = document.querySelectorAll(".not-hidden");
let observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(element => {
        if (element.isIntersecting)
            element.target.classList.remove("hidden")
    });
}, {
    root: null,
    rootMargin: "-80px",
    threshold: 0
})
for (let i = 0; i < hiddenOnesList.length; i++) {
    observer.observe(hiddenOnesList[i]);
}