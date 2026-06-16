// ===== ملف script.js =====
// هذا الملف يحتوي على وظائف تفاعلية للموقع باستخدام JavaScript

// ✅ وظيفة اختبار الذكاء الاصطناعي (quiz.html)
function submitQuiz() {
  // جلب جميع الأسئلة والإجابات
  const answers = document.querySelectorAll('input[type="radio"]:checked');
  let score = 0;

  // التحقق من الإجابات الصحيحة
  answers.forEach(answer => {
    if (answer.value === "correct") {
      score++;
}
});

  // عرض النتيجة
  const result = document.getElementById("result");
  result.innerHTML = `<h3>Your score: ${score} / ${answers.length}</h3>`;
}

// ✅ إنشاء الأسئلة تلقائيًا داخل quiz.html
document.addEventListener("DOMContentLoaded", () => {
  const quizContainer = document.getElementById("quiz-container");

  // مصفوفة الأسئلة والأجوبة
  const questions = [
    {
      question: "What does AI stand for?",
      options: ["Artificial Intelligence", "Automated Interface", "Advanced Input", "Analog Integration"],
      correct: 0
},
    {
      question: "Which field is AI commonly used in?",
      options: ["Healthcare", "Cooking", "Painting walls", "Plumbing"],
      correct: 0
},
    {
      question: "Which of these is an AI assistant?",
      options: ["Alexa", "Excel", "Photoshop", "PowerPoint"],
      correct: 0
}
  ];

  // إنشاء العناصر داخل الصفحة
  questions.forEach((q, index) => {
    const div = document.createElement("div");
    div.classList.add("question");

    const title = document.createElement("p");
    title.textContent = `${index + 1}. ${q.question}`;
    div.appendChild(title);

    q.options.forEach((option, i) => {
      const label = document.createElement("label");
      const input = document.createElement("input");
      input.type = "radio";
      input.name = `question${index}`;
      input.value = i === q.correct? "correct": "wrong";
      label.appendChild(input);
      label.appendChild(document.createTextNode(option));
      div.appendChild(label);
      div.appendChild(document.createElement("br"));
});

    quizContainer.appendChild(div);
});
});
