const noticias = [
    {
      id: 'gta-vi',
      titulo: 'GTA VI: Rockstar confirma janela de lançamento e detalhes do mapa',
      resumo:
        'A editora reforçou o calendário do próximo Grand Theft Auto e mostrou novos recortes de Vice City, com foco em mundo aberto, economia interna e modos online.',
      imagem: '/img/gta6.png',
      categoria: 'Lançamentos',
      data: '2026-09-08',
      dataLabel: '08 set 2026',
      autor: 'Redação GameZone',
      leitura: '6 min',
      destaque: true,
      slug: 'gta-vi',
    },
    {
      id: 'silent-hill',
      titulo: 'Silent Hill: nova demo chega com modo sobrevivência',
      resumo:
        'A Konami liberou uma build limitada com três rotas e colecionáveis exclusivos para quem testar até o fim do mês.',
      imagem: '/img/Silent_Hill.png',
      categoria: 'Reviews', // no HTML era "Terror" no chip do card; use o filtro que fizer sentido
      tag: 'Terror',
      data: '2026-09-07',
      dataLabel: '07 set',
      leitura: '4 min',
      destaque: false,
    },
    {
      id: 'battlefield',
      titulo: 'Battlefield: temporada traz mapa urbano e armas clássicas',
      resumo:
        'A atualização gratuita inclui um distrito vertical, balanceamento de classes e recompensas de batalha pass.',
      imagem: '/img/bf6.jpg',
      categoria: 'Esports',
      tag: 'FPS',
      data: '2026-09-06',
      dataLabel: '06 set',
      leitura: '5 min',
      destaque: false,
    },
    {
      id: 'cyberpunk',
      titulo: 'Cyberpunk 2077 recebe expansão com nova rota narrativa',
      resumo:
        'A CD Projekt Red detalhou missões laterais, veículos exclusivos e um final alternativo para quem já zerou Phantom Liberty.',
      imagem: '/img/cybp2077.jpg',
      categoria: 'Reviews',
      tag: 'RPG',
      data: '2026-09-05',
      dataLabel: '05 set',
      leitura: '7 min',
      destaque: false,
    },
    {
      id: 'zelda',
      titulo: 'Zelda: rumores apontam remaster em 4K para o próximo console',
      resumo:
        'Fontes próximas à Nintendo falam em taxa estável, modos de desempenho e DLC cosmético para o título clássico.',
      imagem: '/img/zelda.jpg',
      categoria: 'Hardware',
      tag: 'Nintendo',
      data: '2026-09-04',
      dataLabel: '04 set',
      leitura: '3 min',
      destaque: false,
    },
    {
      id: 'forza',
      titulo: 'Forza Motorsport ganha campeonato online com times BR',
      resumo:
        'A Turn 10 abriu inscrições para a temporada regional, com transmissão ao vivo e premiação em créditos do jogo.',
      imagem: '/img/forza.jpg',
      categoria: 'Esports',
      tag: 'Corrida',
      data: '2026-09-03',
      dataLabel: '03 set',
      leitura: '4 min',
      destaque: false,
    },
    {
      id: 'indie-br',
      titulo: 'Estúdios brasileiros anunciam fest de demos na Steam',
      resumo:
        'Mais de 40 jogos nacionais entram em playtest público, com tags de terror, puzzle e narrativa interativa.',
      imagem: '/img/baldurs.png',
      categoria: 'Indie',
      tag: 'Indie',
      data: '2026-09-02',
      dataLabel: '02 set',
      leitura: '5 min',
      destaque: false,
    },
  ]
  
  export const filtros = [
    'Todos',
    'Lançamentos',
    'Reviews',
    'Esports',
    'Indie',
    'Hardware',
  ]
  
  export const maisLidas = [
    { id: 1, titulo: 'Patch de Valorant muda o meta dos duelistas', meta: 'Esports · 12k leituras' },
    { id: 2, titulo: 'PS5 Pro: preços e disponibilidade no Brasil', meta: 'Hardware · 9k leituras' },
    { id: 3, titulo: 'Review: The Last of Us Part II Remastered', meta: 'Reviews · 8k leituras' },
    { id: 4, titulo: 'League of Legends: split de verão começa', meta: 'Esports · 7k leituras' },
    { id: 5, titulo: 'Indie BR: cinco demos para jogar no fim de semana', meta: 'Indie · 6k leituras' },
  ]
  
  export default noticias