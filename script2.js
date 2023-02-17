const adviceHeader = document.getElementById("advice-header");
const adviceText = document.getElementById("advice-text");
const button = document.getElementById("button");

button.addEventListener("click", () => {
  getAdvice();
});

window.onload = () => {
  getAdvice();
};

function getAdvice() {
  fetch(`https://api.adviceslip.com/advice`)
    .then((response) => {
      return response.json();
    })
    .then((adviseInfo) => {
      const advises = adviseInfo.slip;
      adviceHeader.innerText = `ADVICE#${advises.id}`;
      adviceText.innerText = `"${advises.advice}".`;
    })
    .catch((error) => {
      console.log(error);
    });
}
