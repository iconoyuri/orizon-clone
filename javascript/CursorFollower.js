class CursorFollower {
    constructor() {
        this.follower = document.getElementById("cursor-follower");
        this.eventsSet();
    }
    eventsSet() {
        var listeDeclencheurs = document.getElementsByClassName("follower-over");
        for (var i = 0; i < listeDeclencheurs.length; i++) {
            listeDeclencheurs[i].addEventListener("mouseover", this.overOn);
        }
    }
    overOn() {
        this.parentNode.appendChild(cursorFollower.follower);
    }
}
let cursorFollower = new CursorFollower();

window.addEventListener("mousemove", e => {
    setTimeout(s => {
        document.querySelector(".cursor-follower").style.setProperty("--cursorX", e.clientX + "px");
        document.querySelector(".cursor-follower").style.setProperty("--cursorY", e.clientY + "px");
    }, 100);
});