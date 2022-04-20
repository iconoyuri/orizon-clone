class CarouselSlider {
    constructor(element, size, direction) {
        this.element = element;
        this.size = size;
        this.direction = direction;

        this.tapis = this.element.querySelector(".tapis");
        this.leftButton = this.element.querySelector("#chevron-l");
        this.rightButton = this.element.querySelector("#chevron-r");
        this.slots = this.element.querySelectorAll(".slots>div>div");

        this.childrenNumber = this.tapis.children.length - 1;
        this.interval = null;
        this.intervalTime = 2000;
        this.index = 0;
        this.activateSlot(this.index);
        this.setAnimation();
        this.setEvents();
    }

    setEvents() {
        this.leftButton.addEventListener("click", this.buttonLeft.bind(this));
        this.rightButton.addEventListener("click", this.buttonRight.bind(this));
    }

    nextIndex() {
        this.index += 1;
        return this.modulateIndex();
    }

    previousIndex() {
        this.index -= 1;
        return this.modulateIndex();
    }

    modulateIndex() {
        if (this.index > -1) return (this.index %= this.childrenNumber);
        else return (this.index += this.childrenNumber);
    }

    buttonLeft() {
        this.goToPrevious();
        this.resetInterval();
    }

    buttonRight() {
        this.goToNext();
        this.resetInterval();
    }

    goToNext() {
        this.goToIndex(this.nextIndex());
    }

    goToPrevious() {
        this.goToIndex(this.previousIndex());
    }

    goToIndex(index) {
        this.setIndex(index);
        this.rollCarpet();
        this.activateSlot(index);
    }

    setIndex(index) {
        this.index = index;

        if (this.index == this.childrenNumber - 1) {
            setTimeout(
                function () {
                    this.tapis.style.transition = "none";
                    // this.index = 1;
                }.bind(this),
                500
            );
        }
        // else if (this.index == 0) {
        //     this.index = 1;
        //     setTimeout(
        //         function () {
        //             this.tapis.style.transition = "transform .5s";
        //         }.bind(this),
        //         500
        //     );
        // }
        else {
            setTimeout(
                function () {
                    this.tapis.style.transition = "transform .5s";
                }.bind(this),
                500
            );
        }
    }

    rollCarpet() {
        if (this.size)
            this.tapis.style.transform =
                "translate" +
                this.direction +
                "(-" +
                this.index * this.size +
                "px)";
        else
            this.tapis.style.transform =
                "translate" + this.direction + "(-" + this.index * 100 + "%)";
    }

    activateSlot(index) {
        for (let i = 0; i < this.slots.length; i++) {
            this.slots[i].style.backgroundColor = getComputedStyle(
                document.body
            ).getPropertyValue("--slots-color");
        }
        if (index <= this.childrenNumber - 2)
            this.slots[index].style.backgroundColor = "white";
        else this.slots[0].style.backgroundColor = "white";
    }

    setAnimation() {
        this.interval = setInterval(this.altern.bind(this), this.intervalTime);
    }

    altern() {
        this.goToNext();
    }

    resetInterval() {
        clearInterval(this.interval);
        this.setAnimation();
    }
}

new CarouselSlider(
    document.querySelector(".some-description-container"),
    850,
    "X"
);
new CarouselSlider(document.querySelector(".testimonies"), undefined, "X");
