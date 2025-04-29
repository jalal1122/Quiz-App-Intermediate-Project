let bgMusic = new Audio("assets/quizBgMusic.mp3");

document.querySelector(".startBtn").addEventListener("click", () => {
  document.querySelector(".container1").style.display = "none";

  document.querySelector(".container").style.display = "flex";

  time = 30;
  timecont.innerHTML = 30;

  bgMusic.loop = true;
  bgMusic.volume = 0.3;
  bgMusic.muted = false;
  bgMusic.currentTime = 0;
  bgMusic.play();
});

const quizQuestions = [
  {
    question: "What does HTML stand for?",
    options: [
      "Hyper Text Markup Language",
      "Home Tool Markup Language",
      "Hyperlinks and Text Markup Language",
      "Hyperlink Text Marking Language",
    ],
    answer: "Hyper Text Markup Language",
  },
  {
    question: "Which language is used for styling web pages?",
    options: ["HTML", "JQuery", "CSS", "XML"],
    answer: "CSS",
  },
  {
    question: "Which is not a JavaScript Framework?",
    options: ["Python Script", "JQuery", "Django", "NodeJS"],
    answer: "Django",
  },
  {
    question: "Which symbol is used for comments in JavaScript?",
    options: ["//", "/* */", "#", "&lt;!-- --&gt;"],
    answer: "//",
  },
  {
    question: "Inside which HTML element do we put the JavaScript?",
    options: [
      "&lt;script&gt;",
      "&lt;js&gt;",
      "&lt;javascript&gt;",
      "&lt;scripting&gt;",
    ],
    answer: "&lt;script&gt;",
  },
  {
    question: "What year was JavaScript created?",
    options: ["1995", "2005", "1985", "2015"],
    answer: "1995",
  },
  {
    question: "Which company developed JavaScript?",
    options: ["Netscape", "Mozilla", "Microsoft", "Google"],
    answer: "Netscape",
  },
  {
    question: "How do you create a function in JavaScript?",
    options: [
      "function myFunction()",
      "function:myFunction()",
      "function = myFunction()",
      "def myFunction()",
    ],
    answer: "function myFunction()",
  },
  {
    question: "Which operator is used to assign a value to a variable?",
    options: ["=", "*", "-", "+"],
    answer: "=",
  },
  {
    question: "What does CSS stand for?",
    options: [
      "Creative Style Sheets",
      "Cascading Style Sheets",
      "Colorful Style Sheets",
      "Computer Style Sheets",
    ],
    answer: "Cascading Style Sheets",
  },
  {
    question: "What is the correct HTML for creating a hyperlink?",
    options: [
      "&lt;a&gt;https://example.com&lt;/a&gt;",
      "&lt;a href='https://example.com'&gt;Link&lt;/a&gt;",
      "&lt;link&gt;https://example.com&lt;/link&gt;",
      "&lt;href&gt;example&lt;/href&gt;",
    ],
    answer: "&lt;a href='https://example.com'&gt;Link&lt;/a&gt;",
  },
  {
    question: "How do you write 'Hello World' in an alert box in JavaScript?",
    options: [
      "msgBox('Hello World')",
      "alert('Hello World')",
      "msg('Hello World')",
      "alertBox('Hello World')",
    ],
    answer: "alert('Hello World')",
  },
  {
    question:
      "Which HTML attribute specifies an alternate text for an image if it cannot be displayed?",
    options: ["alt", "src", "title", "longdesc"],
    answer: "alt",
  },
  {
    question:
      "What is the correct syntax for referring to an external script called 'script.js'?",
    options: [
      "&lt;script src='script.js'&gt;",
      "&lt;script href='script.js'&gt;",
      "&lt;script ref='script.js'&gt;",
      "&lt;script name='script.js'&gt;",
    ],
    answer: "&lt;script src='script.js'&gt;",
  },
  {
    question: "Which event occurs when the user clicks on an HTML element?",
    options: ["onmouseclick", "onchange", "onclick", "onmouseover"],
    answer: "onclick",
  },
  {
    question: "Which property is used to change the background color in CSS?",
    options: ["color", "backgroundColor", "bgcolor", "background-color"],
    answer: "background-color",
  },
  {
    question: "Which HTML element is used to display a picture?",
    options: ["&lt;pic&gt;", "&lt;photo&gt;", "&lt;img&gt;", "&lt;image&gt;"],
    answer: "&lt;img&gt;",
  },
  {
    question: "What is the default value of the position property in CSS?",
    options: ["fixed", "relative", "static", "absolute"],
    answer: "static",
  },
  {
    question: "How can you make a numbered list in HTML?",
    options: ["&lt;ul&gt;", "&lt;ol&gt;", "&lt;dl&gt;", "&lt;list&gt;"],
    answer: "&lt;ol&gt;",
  },
  {
    question: "Which tag is used to make text bold in HTML?",
    options: [
      "&lt;b&gt;",
      "&lt;bold&gt;",
      "&lt;strong&gt;",
      "both &lt;b&gt; and &lt;strong&gt;",
    ],
    answer: "both &lt;b&gt; and &lt;strong&gt;",
  },
];

let remainingQuestions = quizQuestions;

let questionCont = document.querySelector(".question");
let option1 = document.querySelector(".option1");
let option2 = document.querySelector(".option2");
let option3 = document.querySelector(".option3");
let option4 = document.querySelector(".option4");

let score = document.querySelector(".Score>span");

let timecont = document.querySelector(".timer");

let questionTimer = null;

let time = 30;

let answer = "";

getRandomQuestion();

timecont.innerHTML = 30;

function getRandomQuestion() {
  console.log("Remaining Questions: ", remainingQuestions.length);

  let rndIndex = Math.floor(Math.random() * remainingQuestions.length);

  let question = remainingQuestions[rndIndex].question;
  let options = remainingQuestions[rndIndex].options;
  answer = remainingQuestions[rndIndex].answer;

  remainingQuestions.splice(rndIndex, 1);

  questionCont.innerHTML = question;
  option1.innerHTML = options[0].toString();
  option2.innerHTML = options[1].toString();
  option3.innerHTML = options[2].toString();
  option4.innerHTML = options[3].toString();

  // Update question number
  document.querySelector(".questionNo>span").innerHTML =
    quizQuestions.length - (remainingQuestions.length + 1);

  if (questionTimer) {
    clearInterval(questionTimer);
  }
  questionTimer = setInterval(() => {
    time--;
    timecont.innerHTML = parseInt(timecont.innerHTML) - 1;
    if (time < 1) {
      console.log("Time is less than 25 seconds");

      clearInterval(questionTimer);
      time = 30;
      timecont.innerHTML = 30;
      getRandomQuestion();
    }
  }, 1000);
}

function resetTimerAndCheck() {
  clearInterval(questionTimer);
  timecont.innerHTML = 30;
  time = 30;
  checkFinished();
}

function optionFunc(e) {
  disableOptions();
  if (e.target.innerHTML === answer) {
    score.innerHTML = parseInt(score.innerHTML) + 5;
    e.target.classList.add("correct");
    setTimeout(() => {
      e.target.classList.remove("correct");
      enableOptions();
      resetTimerAndCheck();
    }, 1000);
  } else {
    e.target.classList.add("incorrect");
    setTimeout(() => {
      e.target.classList.remove("incorrect");
      enableOptions();
      resetTimerAndCheck();
    }, 1000);
  }
}

function disableOptions() {
  document.querySelectorAll(".options button").forEach((btn) => {
    btn.disabled = true;
  });
}

function enableOptions() {
  document.querySelectorAll(".options button").forEach((btn) => {
    btn.disabled = false;
  });
}

function checkFinished() {
  if (remainingQuestions.length === 18) {
    document.querySelector(".tint").style.display = "block";
    document.querySelector(".winingContainer").style.display = "block";
    document.querySelector(".winingScore").innerHTML =
      "Score: " + score.innerHTML;
    if (parseInt(score.innerHTML) > 90) {
      document.querySelector(".winingText").innerHTML =
        "Excellent! You are a Genius!";
    } else if (parseInt(score.innerHTML) > 80) {
      document.querySelector(".winingText").innerHTML =
        "Awesome! You are a Genius!";
    } else if (parseInt(score.innerHTML) < 50) {
      document.querySelector(".winingText").innerHTML = "You Failed";
    } else if (parseInt(score.innerHTML) > 50) {
      document.querySelector(".winingText").innerHTML = "You Passed";
    }

    remainingQuestions = quizQuestions;
  } else {
    getRandomQuestion();
  }
}

document.querySelector(".skipBtn").addEventListener("click", () => {
  clearInterval(questionTimer);
  timecont.innerHTML = 30;
  time = 30;
  getRandomQuestion();
});

document.querySelector(".playAgainBtn").addEventListener("click", () => {
  document.querySelector(".tint").style.display = "none";
  document.querySelector(".winingContainer").style.display = "none";
  score.innerHTML = 0;
  time = 30;
  timecont.innerHTML = 30;
  // remainingQuestions = quizQuestions;
  getRandomQuestion();
});
