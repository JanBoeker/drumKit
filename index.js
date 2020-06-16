// document.querySelectorAll(".drum").forEach(input => input.addEventListener("click", function () {
//   alert("I got clicked!");
// }));

for (var i=0; i<document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    alert("I got clicked!")
  });
}
