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
      const advise1 = adviseInfo.slip;
      adviceHeader.innerHTML = `ADVICE# ${advise1.id}`;
      adviceText.innerHTML = `"${advise1.advice}"`;
    })

    .catch((error) => {
      console.log(error);
    });
}
