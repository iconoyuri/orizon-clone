class Scroller {
    constructor(element, height, direction) {
        this.height = height;
        this.element = element;
        this.tapis = element.querySelector(".tapis");
        this.elementChildren = this.tapis.children;
        this.index = 0;
        this.interval = 0;
        this.direction = direction;
        this.setAnimation();
    }

    setAnimation() {
        this.interval = setInterval(this.altern.bind(this), 3000);
    }

    altern() {
        this.index += 1;
        this.index %= this.elementChildren.length;
        this.tapis.style.transform = "translate" + this.direction + "(-" + (this.index * this.height) + "px)";
        if (this.index == 0) {
            this.element.removeChild(this.tapis);
            this.element.appendChild(this.tapis);
        }
    }
}

var someItemsScroll = new Scroller(document.querySelector(".some-items"), 50, "Y");
var listeDivs = document.querySelectorAll(".partners > div");
var listeObjetsScroll = [];
for (let i = 0; i < listeDivs.length; i++) {
    setTimeout(function () {
        listeObjetsScroll[listeObjetsScroll.length] = new Scroller(listeDivs[i], 100, "Y")
    }, i * 700);
}
