const questions = [
  {
    question: "Quelle est la mission de l'ASBL Artista ?",
    options: [
      "Protéger les artistes étrangers",
      "Promouvoir la musique",
      "Organiser des expositions",
      "Enseigner l'art",
    ],
    correctAnswer: 0,
  },
  // Ajoutez plus de questions ici
];

let questionIndex = 0;
let score = 0;

function loadQuestion() {
  const questionElement = document.getElementById("question");
  const optionsElement = document.getElementById("options");
  const submitButton = document.getElementById("submit-answer");
  const resultMessage = document.getElementById("result-message");

  if (questionIndex < questions.length) {
    questionElement.textContent = questions[questionIndex].question;
    optionsElement.innerHTML = "";

    questions[questionIndex].options.forEach((option, index) => {
      const optionElement = document.createElement("input");
      optionElement.type = "radio";
      optionElement.name = "option";
      optionElement.value = index;

      const label = document.createElement("label");
      label.innerText = option;

      optionsElement.appendChild(optionElement);
      optionsElement.appendChild(label);
      optionsElement.appendChild(document.createElement("br"));
    });

    submitButton.addEventListener("click", () => {
      const selectedOption = document.querySelector(
        "input[name='option']:checked"
      );

      if (!selectedOption) {
        resultMessage.textContent = "Veuillez sélectionner une réponse.";
        return;
      }

      const userAnswer = parseInt(selectedOption.value);
      if (userAnswer === questions[questionIndex].correctAnswer) {
        score++;
      }

      questionIndex++;
      if (questionIndex < questions.length) {
        loadQuestion();
      } else {
        resultMessage.textContent =
          "Quiz terminé. Votre score est de " +
          score +
          " sur " +
          questions.length +
          ".";
      }
    });
  }
}

// Chargement de la première question au chargement de la page
loadQuestion();
