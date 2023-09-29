//   const questions = [
//             {
//                 question: "What is the capital of France?",
//                 options: ["Paris", "Berlin", "Madrid", "Rome"],
//                 correctAnswer: 0
//             },
//             {
//                 question: "What is the largest ocean in the world?",
//                 options: ["Pacific", "Atlantic", "Indian", "Southern"],
//                 correctAnswer: 3
//             },
//             // Add more questions here
//         ];

//         let questionIndex = 0;
//         let score = 0;

//         function loadQuestion() {
//             const quiz = document.getElementById("quiz");
//             const question = questions[questionIndex].question;
//             const options = questions[questionIndex].options;

//  function calculerScore() {
//     var score = 0;
//     var questions = document.getElementsByClassName("question");

//     for (var i = 0; i < questions.length; i++) {
//       var reponses = questions[i].getElementsByTagName("input");

//       for (var j = 0; j < reponses.length; j++) {
//         if (reponses[j].checked) {
//           if (reponses[j].value == "Paris") {
//             score++;
//           }
//           break;
//         }
//       }
//     }

//     document.getElementById("resultat").innerHTML = "Votre score est de " + score + " sur " + questions.length + ".";
//  }

// ++)
//  {

//            In this if code ( blockinput,s the[i]. comments provide achecked) brief {
//  explanation of                the code result. += The first parseInt comment( explainsinput that the code definess the[ stylei for]. thevalue options); class
// .            The } second
//  comment        explains }

//         that alert the(" marginYour- scorebottom is property: is " used + to result add); a
//  bottom    margin } to
//  the</ optionsscript> class.

//     <script>
//         const questions = [
//             // ...
//         ];

//         let questionIndex = 0;
//         let score = 0;

//         function loadQuestion() {
//             const quiz = document.getElementById("quiz");
//             const question = questions[questionIndex].question;
//             const options = questions[questionIndex].options;

//             document.getElementById("question").innerText = question;
//             document.getElementById("options").innerHTML = '';

//             for (let i = 0; i < options.length; i++) {
//                 const option = document.createElement("input");
//                 option.type = "radio";
//                 option.name = "option";
//                 option.value = options[i];
//                 option.id = "option" + i;

//                 const label = document.createElement("label");
//                 label.htmlFor = "option" + i;
//                 label.innerText = options[i];

//                 document.getElementById("options").appendChild(option);
//                 document.getElementById("options").appendChild(label);
//                 document.getElementById("options").appendChild(document.createElement("br"));
//             }
//         }

//         function loadNextQuestion() {
//             questionIndex++;
//             if (questionIndex < questions.length) {
//                 loadQuestion();
//             } else {
//                 alert("Le quiz est terminé.");
//             }
//         }

//         function calculerScore() {
//             var score = 0;
//             var questions = document.getElementsByClassName("question");

//             for (var i = 0; i < questions.length; i++) {
//                 var reponses = questions[i

//                     function calculerScore() {
//         // Récupérer les réponses sélectionnées par l'utilisateur
//         var reponsesQ1 = document.getElementsByName("q1");
//         var reponsesQ2 = document.getElementsByName("q2");

//         var score = 0;

//         // Vérifier les réponses à la question 1
//         for (var i = 0; i < reponsesQ1.length; i++) {
//           if (reponsesQ1[i].checked && reponsesQ1[i].value === "Paris") {
//             score++;
//           }
//         }

//         // Vérifier les réponses à la question 2
//         for (var i = 0; i < reponsesQ2.length; i++) {
//           if (reponsesQ2[i].checked && reponsesQ2[i].value === "8") {
//             score++;
//           }
//         }

//         // Afficher le score
//         var resultatDiv = document.getElementById("resultat");
//         resultatDiv.innerHTML = "Votre score est : " + score + " / 2";
//       }
//       document.addEventListener("DOMContentLoaded", function() {
//     const correctAnswer = "protéger les artistes étrangers"; // Réponse correcte
//     const userAnswerInput = document.getElementById("user-answer");
//     const submitButton = document.getElementById("submit-answer");
//     const resultMessage = document.getElementById("result-message");

//     submitButton.addEventListener("click", function() {
//         const userAnswer = userAnswerInput.value.toLowerCase(); // Convertir la réponse de l'utilisateur en minuscules
//         if (userAnswer === correctAnswer) {
//             resultMessage.textContent = "Correct !";
//             resultMessage.style.color = "red"; // Couleur du texte en rouge pour une réponse correcte
//         } else {
//             resultMessage.textContent = "Incorrect. La réponse correcte est : " + correctAnswer;
//             resultMessage.style.color = "green"; // Couleur du texte en vert pour une réponse incorrecte
//         }
//     });
// });

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

javascript;
// Fonction pour vérifier si une réponse est juste
function estJuste(reponse) {
  return reponse === "rouge";
}

// Fonction pour compter le nombre de réponses justes
function compterJustes(reponses) {
  let compteur = 0;
  for (let i = 0; i < reponses.length; i++) {
    if (estJuste(reponses[i])) {
      compteur++;
    }
  }
  return compteur;
}

// Exemple d'utilisation
let reponses = ["rouge", "vert", "rouge", "vert", "rouge"];
let nombreJustes = compterJustes(reponses);
console.log("Nombre de réponses justes:", nombreJustes);
