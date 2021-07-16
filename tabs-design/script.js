const click = document.getElementById('btn--tab');
// const goldbtn = document.getElementById('gold');

click.addEventListener('click', function (e) {

    if (e.target.classList.contains('div--btn')) {
        document.getElementById('gold').classList.remove('btn--3');
        document.getElementById('silver').classList.remove('btn--2');
        document.getElementById('free').classList.remove('btn--1');
        document.getElementById('2').classList.remove('div--tab--2');
        document.getElementById('3').classList.remove('div--tab--3');
        const tileNo = e.target.dataset.btn;
        const tile = document.getElementById(tileNo);
        const alltile = document.querySelectorAll('.div--tabs--tile');
        alltile.forEach(el => (el.classList.remove('div--tabs--tile--active')));
        tile.classList.add('div--tabs--tile--active', `div--tab--${tileNo}`);
        e.target.classList.add(`btn--${tileNo}`);

    }
    else {
        const alltile = document.querySelectorAll('.div--tabs--tile');
        alltile.forEach(el => (el.classList.remove('div--tabs--tile--active')));
    }

});

const clicks = document.getElementById('section--tabs');
clicks.addEventListener('click', function (e) {
    if (!(e.target.classList.contains('div--btn'))) {
        const alltile = document.querySelectorAll('.div--tabs--tile');
        alltile.forEach(el => (el.classList.remove('div--tabs--tile--active')));

        document.getElementById('gold').classList.remove('btn--3');
        document.getElementById('silver').classList.remove('btn--2');
        document.getElementById('free').classList.remove('btn--1');
        // document.getElementById('1').classList.remove('btn--3');
        document.getElementById('2').classList.remove('div--tab--2');
        document.getElementById('3').classList.remove('div--tab--3');
    }
});


