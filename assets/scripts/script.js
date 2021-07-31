let div = document.querySelectorAll('.project--box')
console.log(div)
div.forEach(el => {
  let R = Math.trunc(Math.random() * 255);
  let G = Math.trunc(Math.random() * 255);
  let B = Math.trunc(Math.random() * 255);
  el.style.backgroundColor = `rgb(${R},${G},${B})`;
})
