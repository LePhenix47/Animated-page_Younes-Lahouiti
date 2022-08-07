const cursor = document.querySelector(".cursor");

window.addEventListener("mousemove", followMouse);

function followMouse(e) {
  let x = e.pageX;
  let y = e.pageY;
  let newMousePosition = `translate(calc(${x}px - 50%), calc(${y}px - 50%))`;
  cursor.style.transform = newMousePosition;
  console.log(newMousePosition, " style: ", cursor.style.transform);
}
