// First Page Welcome page

const countrylist = fetch('https://restcountries.eu/rest/v2/all')
  .then(function (response) {
    // console.log(response);
    return response.json();
  })
  .then(function (data) {
    let object = data;

    for (let index = 0; index < data.length; index++) {

      console.log(object[index]);
      const countrytile = document.createElement('div');
      countrytile.classList.add('country--box');
      countrytile.id = `${object[index].callingCodes}`
      countrytile.innerHTML = `
      <img src="${object[index].flag}" class="country__img">
      <p class="country___name">${object[index].name}</p>`;
      document.querySelector('.countryList').appendChild(countrytile);

    }
  });

document.addEventListener('click', function (e) {
  const elementclicked = e.target;
  const getcountry = elementclicked.parentElement;
  const countrycode = getcountry.id;
  console.log(countrycode);

  const typeis = (Number(countrycode))
  console.log(typeis)

  if (typeis > 0) {
    showcountry(countrycode);
  }



})

function showcountry(code) {
  // Second Page when user clicks

  document.getElementById('head').innerHTML = `<p>Country Information</p><p>Made By <a href="https://rohankulkarni.tech">Rohan Kulkarni</a></p>

  <p><button onclick="location.reload()">Select Different Country</button> </p>`

  document.getElementById('countryListid').style.display = 'none';
  const ccode = code
  const countrylist = fetch(`https://restcountries.eu/rest/v2/callingcode/${ccode}`)
    .then(function (response) {
      // console.log(response);
      return response.json();
    })
    .then(function (data) {
      let object = data[0];
      console.log(object);

      const countryBox = document.createElement('div');
      countryBox.classList.add('country--box');
      countryBox.innerHTML = `<img class="country__img" src="${object.flag}" />
    <div class="country__data">
        <h3 class="country__name">${object.name}</h3>
        <h4 class="country__region">${object.region}</h4>
        <p class="country__row"><span>🏛️</span>${object.capital}</p>
        <p class="country__row"><span>👫</span>${object.population}</p>
        <p class="country__row"><span>💰</span>${object.currencies[0].name}</p>
    </div>`
      document.getElementById('container').appendChild(countryBox);
      const neighbour = [...object.borders];

      neighbour.forEach(element => {
        console.log(element);

        const countrylist = fetch(`https://restcountries.eu/rest/v2/alpha/${element}`)
          .then(function (response) {
            // console.log(response);
            return response.json();
          })
          .then(function (data) {
            let object = data;

            const countryBox = document.createElement('div');
            countryBox.classList.add('neighbour');
            countryBox.innerHTML = `<img class="country__img" src="${object.flag}" />
        <div class="country__data">
            <h3 class="country__name">${object.name}</h3>
            <h4 class="country__region">${object.region}</h4>
            <p class="country__row"><span>🏛️</span>${object.capital}</p>
            <p class="country__row"><span>👫</span>${object.population}</p>
            <p class="country__row"><span>💰</span>${object.currencies[0].name}</p>
        </div>`;
            document.getElementById('container').appendChild(countryBox);

          });
      });
    });
}

