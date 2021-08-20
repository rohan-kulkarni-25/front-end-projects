const quizQuestions = [
  {
    "question": "Capital of INDIA 🏛️",
    "a": "Delhi",
    "b": "Pune",
    "c": "Kolkata",
    "d": "Mumbai",
    "correct": "a"
  },
  {
    "question": "Currency of India",
    "a": "Rupees",
    "b": "Dollar",
    "c": "Euro",
    "d": "None of the Above",
    "correct": "a"
  },
  {
    "question": "Which state has the largest area?",
    "a": "Maharashtra",
    "b": "Madhya Pradesh",
    "c": "Uttar Pradesh",
    "d": "Rajasthan",
    "correct": "d"
  },
  {
    "question": "Which state has the largest population?",
    "a": "Uttar Pradesh",
    "b": "Maharastra",
    "c": "Bihar",
    "d": "Andra Pradesh",
    "correct": "a"
  }
]

let currentQuestion = 0;
// let answerSelected = undefined;
let score = 0;

const userSelectedResponse = (currentQuestion) => {
  const optionsNL = document.querySelectorAll('.option')
  optionsNL.forEach(el => {
    if (el.checked) {
      console.log(quizQuestions[currentQuestion].correct);
      if (el.id === quizQuestions[currentQuestion].correct) {
        score++;
      }
    }

  });
  console.log(`Score ${score}`);
}






const quizLoad = (currentQuestion) => {


  const quizBoxData = document.getElementById('quiz--box--data');
  quizBoxData.innerHTML = `<h2 id="question">
  ${quizQuestions[currentQuestion].question}
</h2>
<label><input type="radio" class="option" name="answer" id="a">${quizQuestions[currentQuestion].a}</label>
<label><input type="radio" class="option" name="answer" id="b">${quizQuestions[currentQuestion].b}</label>
<label><input type="radio" class="option" name="answer" id="c">${quizQuestions[currentQuestion].c}</label>
<label><input type="radio" class="option" name="answer" id="d">${quizQuestions[currentQuestion].d}</label>`;
  document.getElementById('quiz--box').appendChild(quizBoxData)

}

quizLoad(currentQuestion);

const onSubmit = () => {
  userSelectedResponse(currentQuestion);
  currentQuestion++;
  if (currentQuestion >= quizQuestions.length) {
    results();
  }
  else {
    console.log(currentQuestion);
    quizLoad(currentQuestion);
  }
}

const results = () => {
  const quizBoxData = document.getElementById('quiz--box--data');
  quizBoxData.classList.add('results');

  quizBoxData.innerHTML = `<h3>Thanks for Attempting!!</h3>
  <h3>Your Score</h3>
  <h2>${score}/${quizQuestions.length}</h2>
  <div class="progressbar">
    <p id="scorewidth"></p>
  </div>`;
  const width = score * (25 / quizQuestions.length);
  document.getElementById('scorewidth').style.width = `${width}rem`;
  const submitBtn = document.getElementById('submit');
  submitBtn.classList.add('hidden');
  const resetBtn = document.getElementById('reset');
  resetBtn.classList.remove('hidden');
}


