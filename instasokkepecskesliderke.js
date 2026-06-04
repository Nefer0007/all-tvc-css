document.querySelectorAll(".insta-sokkepek-bg").forEach(function(container) {
  const track = container.querySelector(".insta-sokkepek-bgke");
  const slides = container.querySelectorAll(".insta-sokkepek");
  const dotsContainer = container.querySelector(".instakepeksok-pontok");
  const leftBtn = container.querySelector(".insta-bal");
  const rightBtn = container.querySelector(".insta-jobb");

  let index = 0;
  const total = slides.length;
  const width = slides[0].offsetWidth;

  dotsContainer.innerHTML = "";

  for (let i = 0; i < total; i++) {
    const dot = document.createElement("div");
    dot.classList.add("pontocska-insta");

    dot.addEventListener("click", function() {
      index = i;
      update();
    });

    dotsContainer.appendChild(dot);
  }

  const dots = dotsContainer.querySelectorAll(".pontocska-insta");

  function update() {
    track.style.transform = "translateX(-" + (index * width) + "px)";

    dots.forEach(function(d) {
      d.classList.remove("active");
    });

    dots[index].classList.add("active");

    leftBtn.style.display = index === 0 ? "none" : "block";
    rightBtn.style.display = index === total - 1 ? "none" : "block";
  }

  rightBtn.onclick = function() {
    if (index < total - 1) {
      index++;
      update();
    }
  };

  leftBtn.onclick = function() {
    if (index > 0) {
      index--;
      update();
    }
  };

  update();
});