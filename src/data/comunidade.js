export const filtrosTopico = ["Todos", "Geral", "FPS", "RPG", "Indie"];

export const topicos = [
  {
    id: "rpg-2024",
    titulo: "Melhor RPG de 2024?",
    categoria: "RPG",
    autor: "NovaPixel",
    quando: "há 2 horas",
    respostas: 12,
    texto:
      "Pessoal, entre Baldur's Gate 3 e Elden Ring (Shadow of the Erdtree), qual vocês consideram o RPG do ano?",
    comentarios: [
      {
        id: 1,
        autor: "KaitoFPS",
        iniciais: "KF",
        quando: "há 1 hora",
        texto: "Baldur's Gate 3. A liberdade de build ainda não foi superada.",
      },
      {
        id: 2,
        autor: "MiraQ",
        iniciais: "MQ",
        quando: "há 45 min",
        texto: "Sou time Elden Ring. O DLC sozinho já justificaria o título.",
      },
    ],
  },
  {
    id: "valorant-dicas",
    titulo: "Dicas para iniciantes em Valorant",
    categoria: "FPS",
    autor: "KaitoFPS",
    quando: "há 5 horas",
    respostas: 8,
    texto:
      "Comecei ontem e estou morrendo muito. Quais agentes vocês recomendam no ferro?",
    comentarios: [
      {
        id: 1,
        autor: "MiraQ",
        iniciais: "MQ",
        quando: "há 4 horas",
        texto: "Sage ou Sova. Joga deathmatch antes da ranqueada.",
      },
    ],
  },
  {
    id: "indie-gamepass",
    titulo: "Indie que vale a pena no Game Pass",
    categoria: "Indie",
    autor: "LunaSave",
    quando: "ontem",
    respostas: 6,
    texto: "Quero gastar pouco tempo e sair impressionado. Qual indie indicam?",
    comentarios: [
      {
        id: 1,
        autor: "RivenX",
        iniciais: "RX",
        quando: "ontem",
        texto: "Sea of Stars se você curte JRPG clássico.",
      },
    ],
  },
  {
    id: "cs2-spray",
    titulo: "Patch do CS2 estragou o spray?",
    categoria: "FPS",
    autor: "MiraQ",
    quando: "há 2 dias",
    respostas: 15,
    texto:
      "Depois do último patch a AK parece outro rifle. Alguém mais sentiu?",
    comentarios: [],
  },
];

export const grupos = [
  {
    id: "valorant-br",
    nome: "Clã Valorant BR",
    tag: "Valorant",
    descricao:
      "Fila ranqueada à noite, treinos de execute e call em português.",
    membros: 86,
  },
  {
    id: "speedrunners",
    nome: "Speedrunners",
    tag: "Speedrun",
    descricao: "Troca de rotas, PB da semana e lives de any%.",
    membros: 54,
  },
  {
    id: "coop",
    nome: "Coop de fim de semana",
    tag: "Coop",
    descricao: "It Takes Two, Deep Rock e o que sair de coop local ou online.",
    membros: 42,
  },
  {
    id: "souls",
    nome: "Souls-like",
    tag: "Souls",
    descricao:
      "Dicas de boss, builds e recados educados depois da décima morte.",
    membros: 71,
  },
  {
    id: "indie-br",
    nome: "Indie BR",
    tag: "Indie",
    descricao: "Divulgação de jogos nacionais, playtests e feedback de demo.",
    membros: 39,
  },
  {
    id: "retro",
    nome: "Retro/Pixel",
    tag: "Retro",
    descricao: "Pixel art, SNES, emulação e o ranking eterno de Castlevania.",
    membros: 28,
  },
];

export const enquetes = [
  {
    id: "esperado-2026",
    titulo: "Jogo mais esperado de 2026",
    status: "Aberta",
    descricao: "Qual lançamento você mais quer jogar no ano que vem?",
    opcoes: [
      { id: "gta", label: "GTA VI", votos: 42 },
      { id: "pragmata", label: "Pragmata", votos: 31 },
      { id: "outro", label: "Outro lançamento", votos: 27 },
    ],
  },
  {
    id: "pc-console",
    titulo: "PC ou console?",
    status: "Encerrada",
    descricao: "Onde a comunidade GameZone mais joga hoje.",
    opcoes: [
      { id: "pc", label: "PC", votos: 58 },
      { id: "console", label: "Console", votos: 34 },
      { id: "mobile", label: "Mobile", votos: 8 },
    ],
  },
];
