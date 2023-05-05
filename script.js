// document.getElementById("result").innerHTML = "Button clicked";
const result = document.querySelector("#result");
const btn = document.querySelector(".btn");

btn.addEventListener("click", function () {
  alert("HELLO WORLD!");
  result.style.display = "block";
});
