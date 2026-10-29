let divs = document.querySelectorAll(".grid-container div");

function randomNumber(min, max) {
  return Math.random() * (max - min) + min;
}

function randomize() {
  console.log(divs.length, "randomize!");

  divs.forEach(function(div) {
    let scale = randomNumber(0.9, 1.1);
    let translateX = randomNumber(-8, 8);
    let translateY = randomNumber(-5, 5);
    let rotate = randomNumber(-8, -8);

    if (Math.random() > 0.5) {
      scale = 1;
      translateX = randomNumber(-12, 12);
      translateY = randomNumber(-8, 8);
    }

    div.style.transform = `scale(${scale}) translate(${translateX}%, ${translateY}%) rotate(${rotate}deg)`;
  });
}

document.addEventListener("click", randomize);