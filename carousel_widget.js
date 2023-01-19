const slide1 = {
  title: "Learn new things",
  content: "This line should have more information about the product it's selling. This could be any kind of infoormation, but not too long.",
  icon: "far fa-copy"
}

const slide2 = {
  title: "Make Videos",
  content: "This line should have more information about the product it's selling. This could be any kind of infoormation, but not too long. This line should have more information about the product it's selling. This could be any kind of infoormation, but not too long. This line should have more information about the product it's selling. This could be any kind of infoormation, but not too long.",
  icon: "fas fa-video"
}

const slide3 = {
  title:"Talk and Talk More",
  content: "This line should have more information about the product it's selling. This could be any kind of infoormation, but not too long.",
  icon:"fas fa-chalkboard-teacher"
}

const slide4 = {
  title:"Don't Stop Playing",
  content: "This line should have more information about the product it's selling. This could be any kind of infoormation, but not too long.",
  icon:"fas fa-gamepad"
}
const slides = []
slides[0] = slide1
slides[1] = slide2
slides[2] = slide3
slides[3] = slide4

// the left and right arrows of the carousel
document.querySelector("#arrow-left").addEventListener("click", (event) => {
  const nodeId = document.querySelector(".orange").id;
  document.querySelector(".orange").classList.remove("orange");
  changeSlideLeft(nodeId);
});

document.querySelector("#arrow-right").addEventListener("click", (event) => {
  const nodeId = document.querySelector(".orange").id;
  document.querySelector(".orange").classList.remove("orange");
  changeSlideRight(nodeId);
});

// To not repeat this code, there are two change slide functions for left and right
const changeSlideRight = (nodeId) => {
  if (Number(nodeId) < 4) {
    document.getElementById(`${Number(nodeId) + 1}`).classList.add("orange");
    document.getElementById('title').innerHTML = slides[nodeId].title;
    document.getElementById('content').innerHTML = slides[nodeId].content;
    document.getElementById('icon').className = slides[nodeId].icon;
  } else {
    document.getElementById("1").classList.add("orange");
    document.getElementById('title').innerHTML = slides[0].title;
    document.getElementById('content').innerHTML = slides[0].content;
    document.getElementById('icon').className = slides[0].icon;
  }
};

const changeSlideLeft = (nodeId) => {
  if (Number(nodeId) > 1) {
    document.getElementById(`${Number(nodeId) - 1}`).classList.add("orange");
    document.getElementById('title').innerHTML = slides[nodeId - 2].title;
    document.getElementById('content').innerHTML = slides[nodeId - 2].content;
    document.getElementById('icon').className = slides[nodeId - 2].icon;
  } else {
    document.getElementById("4").classList.add("orange");
    document.getElementById('title').innerHTML = slides[3].title;
    document.getElementById('content').innerHTML = slides[3].content;
    document.getElementById('icon').className = slides[3].icon;
  }
};

// these are the circle buttons of the carousel
const circleArray = document.querySelectorAll(".circle");

circleArray.forEach(function (circle) {
  circle.addEventListener("click", (event) => {
    const previousActive = document.querySelector(".orange");
    if (event.currentTarget != previousActive ) {
      previousActive.classList.remove("orange");
      const nodeClicked = event.currentTarget;
      changeSlideRight(nodeClicked.id - 1);
    };
  });
});

// swipe functionality
let startX = 0;
let endX = 0;

const touchField = document.getElementById('touch');

touchField.addEventListener('touchstart', function(event) {
    startX = event.changedTouches[0].screenX;
}, false);

touchField.addEventListener('touchend', function(event) {
    endX = event.changedTouches[0].screenX;
    touchDirection();
}, false);

const touchDirection = () => {
  if (endX != startX) {
    const nodeId = document.querySelector(".orange").id;
    document.querySelector(".orange").classList.remove("orange");
    if (endX < startX) {
      changeSlideRight(nodeId);
    } else if (endX > startX) {
      changeSlideLeft(nodeId);
    };
  }
};
