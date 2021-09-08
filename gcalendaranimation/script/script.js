const backpage = document.getElementById('back');
const statictop = document.getElementById('ST');
const toppage = document.getElementById('Top');
const bottom = document.getElementById('Bot');
const staticbot = document.getElementById('SB');
const date = document.getElementById('date');


let pageColor = '#fff'



setTimeout(() => {
  pageColor = '#4285f4'
  statictop.style.backgroundColor = `${pageColor}`;
  toppage.style.backgroundColor = `${pageColor}`;
  toppage.style.animationPlayState = 'running'
  setTimeout(() => {
    pageColor = '#4285f4'
    bottom.style.backgroundColor = `${pageColor}`;
    staticbot.style.backgroundColor = `${pageColor}`;
  }, 400);
  let counter = 1;

  date.innerText = counter;
  setInterval(() => {
    date.innerText = counter;
    counter++
    if (counter >= 31) {
      counter = 31;
    }
    if (counter == 31) {
      toppage.style.animationPlayState = 'paused';
      setTimeout(() => {
        toppage.style.display = 'none';
      }, 100);
    }
  }, 100);

}, 1200);



toppage.style.animationPlayState = 'paused'
statictop.style.backgroundColor = `${pageColor}`;
toppage.style.backgroundColor = `${pageColor}`;
bottom.style.backgroundColor = `${pageColor}`;
staticbot.style.backgroundColor = `${pageColor}`;


setInterval(() => {
  location.reload();
}, 6000);




