function perspective(container, inner) {
  // Init
  var container = container,
    inner = inner;

  // Mouse
  var mouse = {
    _x: 0,
    _y: 0,
    x: 0,
    y: 0,
    updatePosition: function (event) {
      var e = event || window.event;
      this.x = e.clientX - this._x;
      this.y = (e.clientY - this._y) * -1;
    },
    setOrigin: function (e) {
      this._x = e.offsetLeft + Math.floor(e.offsetWidth / 2);
      this._y = e.offsetTop + Math.floor(e.offsetHeight / 2);
    },
    show: function () {
      return "(" + this.x + ", " + this.y + ")";
    }
  };

  // Track the mouse position relative to the center of the container.
  mouse.setOrigin(container);

  //----------------------------------------------------

  var counter = 0;
  var refreshRate = 10;
  var isTimeToUpdate = function () {
    return counter++ % refreshRate === 0;
  };

  //----------------------------------------------------

  var onMouseEnterHandler = function (event) {
    update(event);
  };

  var onMouseLeaveHandler = function () {
    inner.style = "";
  };

  var onMouseMoveHandler = function (event) {
    if (isTimeToUpdate()) {
      update(event);
    }
  };

  //----------------------------------------------------

  var update = function (event) {
    mouse.updatePosition(event);
    updateTransformStyle(
      (mouse.y / inner.offsetHeight / 2).toFixed(2),
      (mouse.x / inner.offsetWidth / 2).toFixed(2)
    );
  };

  var updateTransformStyle = function (x, y) {
    var style = "rotateX(" + x + "deg) rotateY(" + y + "deg)";
    inner.style.transform = style;
    inner.style.webkitTransform = style;
    inner.style.mozTranform = style;
    inner.style.msTransform = style;
    inner.style.oTransform = style;
  };


  container.onmousemove = onMouseMoveHandler;
  container.onmouseleave = onMouseLeaveHandler;
  container.onmouseenter = onMouseEnterHandler;
};

let perspectiveDivsList = document.getElementsByClassName("container");
for (let i = 0; i < perspectiveDivsList.length; i++) {
  console.log(perspectiveDivsList[i] + "\n" + perspectiveDivsList[i].querySelector("perspective"));
  perspective(perspectiveDivsList[i], perspectiveDivsList[i].querySelector(".perspective"));
}

// function perspectiveHover(el, intensity) {

//   var self = this;
//   this.mousePosition = function (e, el) {
//     var el = el;

//     var elX = el.offsetLeft,
//       elY = el.offsetTop,
//       elWidth = el.offsetWidth,
//       elHeight = el.offsetHeight;

//     var mouseX = e.pageX,
//       mouseY = e.pageY;

//     if (mouseX >= elX && mouseX <= elX + elWidth) {
//       if (mouseY >= elY && mouseY <= elY + elHeight) {
//         var rotateY = -(((elWidth / 2) - (mouseX - elX)) / (elWidth / 2) * intensity),
//           rotateX = ((elHeight / 2) - (mouseY - elY)) / (elHeight / 2) * intensity;
//         el.style.transform = 'rotateX(' + rotateX + 'deg) rotateY(' + rotateY + 'deg)';
//         return true;
//       }
//     }
//   }

//   this.reset = function () {
//     el.style.transform = 'rotateX(0deg) rotateY(0deg)';
//   }

//   let perspectiveDivs = document.getElementsByClassName(el);
//   for (let i = 0; i < perspectiveDivs.length; i++) {
//     perspectiveDivs[i].addEventListener('mousemove', function (e) {
//       self.mousePosition(e, this);
//     });
//   }
// }


// function perspectiveHover(el, intensity) {

//   var self = this,
//     parent = document.querySelector('.js-perspective');

//   this.perspective = function (e, el) {

//     var elX = el.offsetLeft,
//       elY = el.offsetTop,
//       elWidth = el.offsetWidth,
//       elHeight = el.offsetHeight;

//     var mouseX = e.pageX,
//       mouseY = e.pageY;
//     var rotateY = -((elWidth / 2 - (mouseX - elX)) / (elWidth / 2) * intensity),
//       rotateX = (elHeight / 2 - (mouseY - elY)) / (elHeight / 2) * intensity;
//     el.style.transform = 'rotateX(' + rotateX + 'deg) rotateY(' + rotateY + 'deg)';

//   }

//   parent.addEventListener('mousemove', function (e) {

//     if (e.target.classList.contains('js-perspective-card')) {
//       self.perspective(e, e.target);
//     }

//   });
// }

// perspectiveHover('.js-perspective-card', 12);


// perspectiveHover("perspective-hover", 10);