class Showreel{
    constructor() {
        this.activator = document.getElementById("showreel-activator");
        this.disabler = document.getElementById("showreel-filler");
        this.showreel = document.getElementById("showreel-video");
        this.videoPlayer = document.getElementById("showreel-video-player");
        this.events();
    }

    events() {
        this.activator.addEventListener("click", this.view.bind(this));
        this.disabler.addEventListener("click", this.hide.bind(this));
    }

    view() {
        this.showreel.style.opacity = 1;
        this.showreel.style.pointerEvents = "auto";
        this.videoPlayer.play();
    }

    hide() {
        this.showreel.style.opacity = 0;
        this.showreel.style.pointerEvents = "none";
        this.videoPlayer.pause();
    }
}


var showreel = new Showreel();