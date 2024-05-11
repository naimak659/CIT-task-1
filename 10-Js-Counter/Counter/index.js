// Html DOM selection
const counter = [...document.querySelectorAll(".counter")];
const btnCounter = document.querySelector(".btn-counter");
console.log(counter);

counter.map((item) => {
  let total = item.dataset.count;
  increment(total, item);
});

// increment Funtion
function increment(total, element) {
  let num = 0;
  let interval;
  interval = setInterval(() => {
    if (num < total) {
      num++;
      element.innerHTML = `${num}+`;
    } else {
      clearInterval(interval);
    }
  }, 1);
}
// decrement Funtion
function decrement(total, element) {
  let num = 0;
  let interval;
  interval = setInterval(() => {
    if (total > num) {
      total--;
      element.innerHTML = `${total}+`;
    } else {
      clearInterval(interval);
    }
  }, 1);
}

let incremental = true;
btnCounter.addEventListener("click", (e) => {
  if (incremental) {
    counter.map((item) => {
      let total = item.dataset.count;
      decrement(total, item);
    });
    e.target.textContent = "+";
    incremental = false;
  } else {
    counter.map((item) => {
      let total = item.dataset.count;
      increment(total, item);
    });
    e.target.textContent = "-";

    incremental = true;
  }
});
