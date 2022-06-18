class Quiz {
  currentQuestionId = 1;
  rightAnswers = 0;
  questions = {
    1: {
      question: "Visual studio-кроссплатформенная IDE?",
      rightAnswer: "Да",
    },
    2: {
      question: "Лучшая ОС для работы в сфере информационной безопасности-Windows?",
      rightAnswer: "Нет",
    },
    3: {
      question: "Assembler это больно?",
      rightAnswer: "Да",
    },
    4: {
        question: "С# разрабатывался с 1998 года??",
      rightAnswer: "Да",
    },
    5: {
      question: "Python поддерживает ООП?",
      rightAnswer: "Да",
    },
    6: {
      question: "Вконтакте был написан на php?",
      rightAnswer: "Да",
    },
    7: {
      question: "JS это java?",
      rightAnswer: "Нет",
    },
    8: {
        question: "Алгоритм Дейкстры находит самый длинный путь от одной вершины до другой??",
      rightAnswer: "Нет",
    },
  };
  topics = [
    "WEB",
    "COMPUTER VISION",
    "GAME DEV",
    "МОБИЛЬНАЯ РАЗРАБОТКА",
    "Back end",
    "Маруся",
    "АНАЛИЗ ДАННЫХ",
    "VK Mini Apps",
  ];

  constructor() {}

  nextQuestion() {
    return this.questions[this.currentQuestionId].question;
  }

  getRecomendations() {
    if (this.rightAnswers === 0) {
      return "Рекомедуем Вам стоит подтянуть свои навыки, прежде чем учавствовать в вездекоде";
    }
    return `Рекомедуем Вам тему ${
      this.topics[Math.round(Math.random() * (this.topics.length - 1))]
    }`;
  }

  destroy() {
    this.sessionId = "";
    this.currentQuestionId = 1;
    this.rightAnswers = 0;
  }
}

module.exports = { Quiz };
