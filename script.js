// Quiz questions with options and corresponding houses
const questions = [
  {
    question:
      'Uma vez a cada século, o arbusto Flutterby produz flores que adaptam seu perfume para atrair os incautos. Se atraísse você, cheiraria a:',
    options: [
      { text: 'Uma fogueira', house: 'gryffindor' },
      { text: 'O mar', house: 'slytherin' },
      { text: 'Livros Novos', house: 'ravenclaw' },
      { text: 'Sua casa', house: 'hufflepuff' }
    ]
  },
  {
    question: 'Como você gostaria de ser conhecido pela história?',
    options: [
      { text: 'O sábio', house: 'ravenclaw' },
      { text: 'O grande', house: 'slytherin' },
      { text: 'O bom', house: 'hufflepuff' },
      { text: 'O ousado', house: 'gryffindor' }
    ]
  },
  {
    question: 'Se você pudesse ter algum poder, qual você escolheria?',
    options: [
      { text: 'O poder de mudar sua aparência à vontade.', house: 'hufflepuff' },
      { text: 'O poder de mudar o passado.', house: 'slytherin' },
      { text: 'O poder da invisibilidade.', house: 'ravenclaw' },
      { text: 'O poder da força sobre-humana.', house: 'gryffindor' }
    ]
  },
  {
    question: 'O que você mais espera aprender em Hogwarts?',
    options: [
      { text: 'Feitiços e Azarações?', house: 'slytherin' },
      { text: 'Todas as matérias possíveis?', house: 'ravenclaw' },
      { text: 'Segredos sobre o castelo e a Floresta Sombria?', house: 'gryffindor' },
      { text: 'Tudo sobre magizoologia?', house: 'hufflepuff' }
    ]
  },
  {
    question: 'O que você prefere ser?',
    options: [
      { text: 'Temido', house: 'slytherin' },
      { text: 'Imitado', house: 'ravenclaw' },
      { text: 'Confiável', house: 'hufflepuff' },
      { text: 'Elogiado', house: 'gryffindor' }
    ]
  },
  {
    question: 'Qual animal você levaria para Hogwarts?',
    options: [
      { text: 'Coruja?', house: 'ravenclaw' },
      { text: 'Sapo?', house: 'hufflepuff' },
      { text: 'Gato?', house: 'gryffindor' },
      { text: 'Morcego?', house: 'slytherin' }
    ]
  },
  {
    question: 'Qual Casa de Hogwarts mais admira? ',
    options: [
      { text: 'Corvinal', house: 'ravenclaw' },
      { text: 'Grifinória', house: 'gryffindor' },
      { text: 'Lufa-Lufa', house: 'hufflepuff' },
      { text: 'Sonserina', house: 'slytherin' }
    ],
    weight: 2
  },
  {
    question: 'Qual Casa de Hogwarts MENOS admira? ',
    options: [
      { text: 'Corvinal', house: 'ravenclaw' },
      { text: 'Grifinória', house: 'gryffindor' },
      { text: 'Lufa-Lufa', house: 'hufflepuff' },
      { text: 'Sonserina', house: 'slytherin' }
    ],
    weight: 3
  }
];

// House assets with images
const houseAssets = {
  gryffindor: {
    name: 'Grifinória',
    description:
      'Sua morada é a Grifinória, casa onde habitam os corações indômitos. Ousadia e sangue-frio e nobreza destacam os alunos da Grifinória dos demais.',
    color: 'gryffindor',
    bannerImage: '/images/grifinória.jpg',
    crestImage: '/imges/grifbadge.png'
  },
  slytherin: {
    name: 'Sonserina',
    description:
      'Sua moradia é a Sonserina! Ali fará seus verdadeiros amigos, homens de astúcia que usam quaisquer meios para atingir os fins que antes colimaram.',
    color: 'slytherin',
    bannerImage: '/images/sonserina.jpg',
    crestImage: '/images/slythbadge.png'
  },
  ravenclaw: {
    name: 'Corvinal',
    description:
      'Sua moradia é a velha e sábia Corvinal, a casa dos que têm a mente sempre alerta, onde os homens de grande espírito e saber sempre encontrarão companheiros seus iguais.',
    color: 'ravenclaw',
    bannerImage: '/images/corvinal.png',
    crestImage: '/images/ravenbadge.png'
  },
  hufflepuff: {
    name: 'Lufa-Lufa',
    description:
      'Sua moradia é na Lufa-Lufa, onde seus moradores são justos e leais, pacientes, sinceros, sem medo da dor.',
    color: 'hufflepuff',
    bannerImage: '/images/lufalufa.png',
    crestImage: '/images/huflebadge.jpg'
  }
};

// DOM elements
const quizContainer = document.getElementById('quiz');
const selectBtn = document.getElementById('select-btn');
const returnBtn = document.getElementById('return-btn');
const resultContainer = document.getElementById('result-container');
const resultCard = document.getElementById('result-card');
const houseTitle = document.getElementById('house-title');
const houseDescription = document.getElementById('house-description');
const houseImage = document.getElementById('house-image');
const houseCrestImg = document.getElementById('house-crest-img');
const quizSummary = document.getElementById('quiz-summary');

// Quiz state
let currentQuestionIndex = 0;
let selectedOptions = [];
let housePoints = {
  gryffindor: 0,
  slytherin: 0,
  ravenclaw: 0,
  hufflepuff: 0
};

// Initialize the quiz
function initQuiz() {
  renderQuestion();

  // Event listeners
  selectBtn.addEventListener('click', selectOption);
  returnBtn.addEventListener('click', resetQuiz);
}

// Render current question
function renderQuestion() {
  if (currentQuestionIndex >= questions.length) {
    showResults();
    return;
  }

  const question = questions[currentQuestionIndex];
  let optionsHTML = '';

  question.options.forEach((option, index) => {
    optionsHTML += `
            <div class="option" data-index="${index}">
                ${option.text}
            </div>
        `;
  });

  quizContainer.innerHTML = `
        <div class="question">
            <h3>${question.question}</h3>
            <div class="options">
                ${optionsHTML}
            </div>
        </div>
    `;

  // Add click event to options
  document.querySelectorAll('.option').forEach(option => {
    option.addEventListener('click', function () {
      document.querySelectorAll('.option').forEach(opt => opt.classList.remove('selected'));
      this.classList.add('selected');
    });
  });
}

// Select option and move to next question
function selectOption() {
  const selectedOption = document.querySelector('.option.selected');

  if (!selectedOption) {
    alert('Por favor, selecione uma opção antes de continuar.');
    return;
  }

  const optionIndex = parseInt(selectedOption.dataset.index);
  const currentQuestion = questions[currentQuestionIndex];
  const selectedHouse = currentQuestion.options[optionIndex].house;
  const weight = currentQuestion.weight || 1;

  // Store selected option for summary
  selectedOptions.push({
    question: currentQuestion.question,
    answer: currentQuestion.options[optionIndex].text,
    house: selectedHouse
  });

  // Add points with weight
  housePoints[selectedHouse] += weight;

  // Move to next question
  currentQuestionIndex++;
  renderQuestion();
}

// Show final results
function showResults() {
  // Determine the house with most points
  let maxPoints = -1;
  let selectedHouse = '';

  for (const house in housePoints) {
    if (housePoints[house] > maxPoints) {
      maxPoints = housePoints[house];
      selectedHouse = house;
    }
  }

  const house = houseAssets[selectedHouse];

  // Display result with images
  resultContainer.classList.remove('hidden');
  resultCard.className = `result-card ${house.color}`;
  houseTitle.textContent = house.name;
  houseDescription.textContent = house.description;
  houseImage.src = house.bannerImage;
  houseImage.alt = `Imagem da ${house.name}`;
  houseCrestImg.src = house.crestImage;
  houseCrestImg.alt = `Brasão da ${house.name}`;

  // Display quiz summary
  let summaryHTML = '<h3>Resumo do seu Quiz</h3>';

  selectedOptions.forEach((item, index) => {
    const weight = index === 6 ? 2 : index === 7 ? 3 : 1;
    summaryHTML += `
            <div class="summary-item ${item.house}">
                <p><strong>Pergunta ${index + 1}:</strong> ${item.question}</p>
                <p><strong>Sua resposta:</strong> ${item.answer} (${weight} ponto${weight > 1 ? 's' : ''} para ${
      item.house
    })</p>
            </div>
        `;
  });

  quizSummary.innerHTML = summaryHTML;

  // Scroll to results
  resultContainer.scrollIntoView({ behavior: 'smooth' });
}

// Reset the quiz
function resetQuiz() {
  currentQuestionIndex = 0;
  selectedOptions = [];
  housePoints = {
    gryffindor: 0,
    slytherin: 0,
    ravenclaw: 0,
    hufflepuff: 0
  };

  resultContainer.classList.add('hidden');
  renderQuestion();

  // Scroll to top
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Initialize the quiz when page loads
document.addEventListener('DOMContentLoaded', initQuiz);
