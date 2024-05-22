
document.addEventListener('mousemove', (e) => {
  let x = e.pageX;
  let y = e.pageY;
  document.getElementById("cursor").style.left = (x - 22) + "px";
  document.getElementById("cursor").style.top = (y - 22) + "px";
});

document.addEventListener('mouseleave', (e) => {
  let x = e.pageX;
  let y = e.pageY;
  document.getElementById("cursor").style.left = (x - 22) + "px";
  document.getElementById("cursor").style.top = (y - 22) + "px";
});

