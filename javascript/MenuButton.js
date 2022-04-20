class MenuButton {
    constructor() {
        this.buttonContainer = document.getElementById("menu-button-container");
        this.bar1 = document.getElementById("menu-button-bar1");
        this.bar2 = document.getElementById("menu-button-bar2");
        this.menu = document.querySelector("nav");
        this.voile = document.getElementById("menu-veil");
        this.menuVisible = false;
        this.mainColor = getComputedStyle(document.body).getPropertyValue("--main-color");
        this.evenementBouton();
        this.scrollChanging();

    }

    evenementBouton() {
        this.buttonContainer.addEventListener("click", this.afficherMenu.bind(this));
        this.voile.addEventListener("click", this.cacherMenu.bind(this));
    }

    afficherMenu() {
        this.menu.style.right = "0";
        this.buttonContainer.addEventListener("click", this.cacherMenu.bind(this));
        this.bar1.style.backgroundColor = "black";
        this.bar1.style.transform = "rotate(45deg) translateY(4px)";
        this.bar1.style.borderRadius = "2px";
        this.bar2.style.backgroundColor = "black";
        this.bar2.style.transform = "rotate(-45deg) translateX(5px)";
        this.bar2.style.borderRadius = "2px";
        this.menuVisible = true;
        this.buttonContainer.style.backgroundColor = "white";

        this.voile.style.opacity = "1";
        this.voile.style.pointerEvents = "auto";
    }

    cacherMenu() {
        this.menu.style.right = "-50vw";
        this.buttonContainer.addEventListener("click", this.afficherMenu.bind(this));
        this.bar1.style.backgroundColor = this.mainColor;
        this.bar1.style.transform = "rotate(0) translateY(0)";
        this.bar1.style.borderRadius = "0px";
        this.bar2.style.backgroundColor = this.mainColor;
        this.bar2.style.transform = "rotate(0) translateX(0)";
        this.bar2.style.borderRadius = "0px";
        this.buttonContainer.style.color = this.mainColor;
        this.menuVisible = false;
        this.checkPosition();

        this.voile.style.opacity = "0";
        this.voile.style.pointerEvents = "none";
    }

    scrollDownState() {
        if (this.menuVisible) return;
        this.buttonContainer.style.backgroundColor = "black";
        // this.buttonContainer.style.color = "white";
        this.bar1.style.backgroundColor = "white";
        this.bar2.style.backgroundColor = "white";
    }

    scrollUpState() {
        if (this.menuVisible) return;
        this.buttonContainer.style.backgroundColor = "white";
        this.bar1.style.backgroundColor = this.mainColor;
        this.bar2.style.backgroundColor = this.mainColor;
    }

    scrollChanging() {
        window.addEventListener("scroll", this.checkPosition.bind(this));
    }

    checkPosition() {
        if (window.scrollY > 200) {
            this.scrollDownState();
        } else {
            this.scrollUpState();
        }
    }
}

var menuButton = new MenuButton();