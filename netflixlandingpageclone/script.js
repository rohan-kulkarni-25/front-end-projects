function clickedbtn(e) {

  const eventEl = e.target;
  const ans = eventEl.nextElementSibling;

  if (ans.classList[1] == 'hide') {
    let answers = [...document.getElementsByClassName('faq-ans')];
    answers.forEach(el => {
      el.classList.add('hide');
    })
    ans.classList.remove('hide');
  }
  else {
    let answers = [...document.getElementsByClassName('faq-ans')];
    answers.forEach(el => {
      el.classList.add('hide');
    })
  }

  if (ans.classList[1] != 'hide') {
    const plus = eventEl.childNodes[3];
    plus.style.transform = 'rotate(45deg)';
    console.log('Once Click')
  }
  else {
    const plus = eventEl.childNodes[3];
    plus.style.transform = 'rotate(90deg)';
    console.log('Two click')
  }
}


function clickedplus(e) {

  let eventEl = e.target;
  eventEl = eventEl.parentNode;
  const ans = eventEl.nextElementSibling;

  if (ans.classList[1] == 'hide') {
    let answers = [...document.getElementsByClassName('faq-ans')];
    answers.forEach(el => {
      el.classList.add('hide');
    })
    ans.classList.remove('hide');
  }
  else {
    let answers = [...document.getElementsByClassName('faq-ans')];
    answers.forEach(el => {
      el.classList.add('hide');
    })
  }

  if (ans.classList[1] != 'hide') {
    const plus = eventEl.childNodes[3];
    plus.style.transform = 'rotate(45deg)';
    console.log('Once Click')
  }
  else {
    const plus = eventEl.childNodes[3];
    plus.style.transform = 'rotate(90deg)';
    console.log('Two click')
  }
}