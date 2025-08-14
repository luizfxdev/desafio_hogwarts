/**
 * Dados das perguntas do Quiz de Hogwarts
 *
 * Cada pergunta contém:
 * - id: identificador único
 * - text: texto da pergunta
 * - options: array de opções com:
 *   - label: texto da opção
 *   - points: objeto com pontuação para cada casa
 *
 * Sistema de pontuação:
 * - Respostas normais: +2 pontos para a casa correspondente
 * - Pergunta 8 (negativa): -3 pontos para a casa escolhida
 */

export const questions = [
  {
    id: 1,
    text: 'Qual das seguintes opções você mais deseja?',
    options: [
      {
        label: 'Aventure-se e enfrente desafios',
        points: { gryffindor: 2, slytherin: 0, ravenclaw: 0, hufflepuff: 0 }
      },
      {
        label: 'Ter poder e influência',
        points: { gryffindor: 0, slytherin: 2, ravenclaw: 0, hufflepuff: 0 }
      },
      {
        label: 'Adquirir conhecimento e sabedoria',
        points: { gryffindor: 0, slytherin: 0, ravenclaw: 2, hufflepuff: 0 }
      },
      {
        label: 'Paz, amizade e justiça',
        points: { gryffindor: 0, slytherin: 0, ravenclaw: 0, hufflepuff: 2 }
      }
    ]
  },
  {
    id: 2,
    text: 'Você está andando pela Floresta Proibida à noite e ouve um som estranho. O que faz?',
    options: [
      {
        label: 'Saco minha varinha e vou investigar',
        points: { gryffindor: 2, slytherin: 0, ravenclaw: 0, hufflepuff: 0 }
      },
      {
        label: 'Me escondo e observo com cautela',
        points: { gryffindor: 0, slytherin: 2, ravenclaw: 0, hufflepuff: 0 }
      },
      {
        label: 'Tento identificar a criatura pelo som',
        points: { gryffindor: 0, slytherin: 0, ravenclaw: 2, hufflepuff: 0 }
      },
      {
        label: 'Procuro ajuda para não enfrentar sozinho',
        points: { gryffindor: 0, slytherin: 0, ravenclaw: 0, hufflepuff: 2 }
      }
    ]
  },
  {
    id: 3,
    text: 'Qual das criaturas você mais gostaria de estudar?',
    options: [
      {
        label: 'Centauros',
        points: { gryffindor: 0, slytherin: 0, ravenclaw: 2, hufflepuff: 0 }
      },
      {
        label: 'Lobisomens',
        points: { gryffindor: 2, slytherin: 0, ravenclaw: 0, hufflepuff: 0 }
      },
      {
        label: 'Vampiros',
        points: { gryffindor: 0, slytherin: 2, ravenclaw: 0, hufflepuff: 0 }
      },
      {
        label: 'Hipogrifos',
        points: { gryffindor: 0, slytherin: 0, ravenclaw: 0, hufflepuff: 2 }
      }
    ]
  },
  {
    id: 4,
    text: 'Qual qualidade você mais valoriza em um amigo?',
    options: [
      {
        label: 'Coragem',
        points: { gryffindor: 2, slytherin: 0, ravenclaw: 0, hufflepuff: 0 }
      },
      {
        label: 'Astúcia',
        points: { gryffindor: 0, slytherin: 2, ravenclaw: 0, hufflepuff: 0 }
      },
      {
        label: 'Inteligência',
        points: { gryffindor: 0, slytherin: 0, ravenclaw: 2, hufflepuff: 0 }
      },
      {
        label: 'Lealdade',
        points: { gryffindor: 0, slytherin: 0, ravenclaw: 0, hufflepuff: 2 }
      }
    ]
  },
  {
    id: 5,
    text: 'Como você prefere resolver um conflito?',
    options: [
      {
        label: 'Com confronto direto',
        points: { gryffindor: 2, slytherin: 0, ravenclaw: 0, hufflepuff: 0 }
      },
      {
        label: 'Manipulando a situação a seu favor',
        points: { gryffindor: 0, slytherin: 2, ravenclaw: 0, hufflepuff: 0 }
      },
      {
        label: 'Buscando um acordo lógico',
        points: { gryffindor: 0, slytherin: 0, ravenclaw: 2, hufflepuff: 0 }
      },
      {
        label: 'Conversando e mantendo a harmonia',
        points: { gryffindor: 0, slytherin: 0, ravenclaw: 0, hufflepuff: 2 }
      }
    ]
  },
  {
    id: 6,
    text: 'Qual dessas cores combina mais com você?',
    options: [
      {
        label: 'Vermelho e dourado',
        points: { gryffindor: 2, slytherin: 0, ravenclaw: 0, hufflepuff: 0 }
      },
      {
        label: 'Verde e prata',
        points: { gryffindor: 0, slytherin: 2, ravenclaw: 0, hufflepuff: 0 }
      },
      {
        label: 'Azul e bronze',
        points: { gryffindor: 0, slytherin: 0, ravenclaw: 2, hufflepuff: 0 }
      },
      {
        label: 'Amarelo e preto',
        points: { gryffindor: 0, slytherin: 0, ravenclaw: 0, hufflepuff: 2 }
      }
    ]
  },
  {
    id: 7,
    text: 'Se estivesse prestes a entrar em Hogwarts, o que mais te animaria?',
    options: [
      {
        label: 'Duelo de feitiços',
        points: { gryffindor: 2, slytherin: 0, ravenclaw: 0, hufflepuff: 0 }
      },
      {
        label: 'Clube de estratégia',
        points: { gryffindor: 0, slytherin: 2, ravenclaw: 0, hufflepuff: 0 }
      },
      {
        label: 'Biblioteca infinita',
        points: { gryffindor: 0, slytherin: 0, ravenclaw: 2, hufflepuff: 0 }
      },
      {
        label: 'Comunidade unida',
        points: { gryffindor: 0, slytherin: 0, ravenclaw: 0, hufflepuff: 2 }
      }
    ]
  },
  {
    id: 8,
    text: 'Qual Casa de Hogwarts menos combina com você?',
    options: [
      {
        label: 'Grifinória',
        points: { gryffindor: -3, slytherin: 0, ravenclaw: 0, hufflepuff: 0 }
      },
      {
        label: 'Sonserina',
        points: { gryffindor: 0, slytherin: -3, ravenclaw: 0, hufflepuff: 0 }
      },
      {
        label: 'Corvinal',
        points: { gryffindor: 0, slytherin: 0, ravenclaw: -3, hufflepuff: 0 }
      },
      {
        label: 'Lufa-Lufa',
        points: { gryffindor: 0, slytherin: 0, ravenclaw: 0, hufflepuff: -3 }
      }
    ]
  }
];

/**
 * Informações sobre as casas de Hogwarts
 * Contém nome, descrição e características de cada casa
 */
export const housesInfo = {
  gryffindor: {
    name: 'Grifinória',
    description:
      'Casa dos corajosos, audaciosos e cavalheirescos. Os grifinórios valorizam a bravura, a coragem e a determinação acima de tudo.',
    founder: 'Godrico Gryffindor',
    traits: ['Coragem', 'Bravura', 'Determinação', 'Cavalheirismo'],
    colors: ['Vermelho', 'Dourado']
  },
  slytherin: {
    name: 'Sonserina',
    description:
      'Casa dos astutos, ambiciosos e determinados. Os sonserinos valorizam a astúcia, a liderança e a preservação das tradições.',
    founder: 'Salazar Slytherin',
    traits: ['Astúcia', 'Ambição', 'Liderança', 'Determinação'],
    colors: ['Verde', 'Prata']
  },
  ravenclaw: {
    name: 'Corvinal',
    description:
      'Casa dos sábios, criativos e curiosos. Os corvinais valorizam a inteligência, o conhecimento e a sabedoria acima de tudo.',
    founder: 'Rowena Ravenclaw',
    traits: ['Inteligência', 'Sabedoria', 'Criatividade', 'Curiosidade'],
    colors: ['Azul', 'Bronze']
  },
  hufflepuff: {
    name: 'Lufa-Lufa',
    description:
      'Casa dos leais, justos e trabalhadores. Os lufa-lufanos valorizam a lealdade, a paciência e o trabalho árduo.',
    founder: 'Helga Hufflepuff',
    traits: ['Lealdade', 'Paciência', 'Trabalho árduo', 'Justiça'],
    colors: ['Amarelo', 'Preto']
  }
};
