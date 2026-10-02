# GameZone (React)

Landing page e páginas diferenciais do trabalho de Frontend II — migração da Parte 1 (HTML/CSS/Bootstrap) para React + Vite + Bootstrap 5.

## Autor

- **Nome:** Jefferson de Oliveira Rodrigues
- **GitHub:** [Orjefferson](https://github.com/Orjefferson)
- **Repositório deste projeto:** https://github.com/Orjefferson/GameZone-react

## Origem (Parte 1)

- Repositório do grupo: https://github.com/lupalaureano/GameZone
- Páginas que eu fiz na Parte 1: Comunidade, Notícias e Notícia GTA VI
- Autor do `index.html` original (Hero / Lançamentos / Gêneros): lupalaureano

A pasta `referencia-html/` contém as páginas originais da Parte 1 usadas como referência na migração (`index.html`, `noticias.html`, `comunidade.html`, `noticia-gta-vi.html` e assets).

## Deploy

- Site no Netlify: https://jeff-gamezone.netlify.app/

## Stack

- Vite + React
- React Router
- Bootstrap 5 + React Bootstrap
- Bootstrap Icons

## Como rodar

```bash
npm install
npm run dev
```

Build e preview de produção:

```bash
npm run build
npm run preview
```

No Netlify: **Build command** `npm run build` · **Publish directory** `dist`. O arquivo `public/_redirects` garante que as rotas do React Router funcionem no refresh.

## Estrutura da entrega

| Rota | O que é | Origem |
|---|---|---|
| `/` | Landing (index do grupo + Notícias) | `index.html` + `noticias.html` |
| `/comunidade` | Página diferencial | `comunidade.html` |
| `/noticias/gta-vi` | Página diferencial (matéria) | `noticia-gta-vi.html` |

## Seções da Landing × origem

| Seção | Origem |
|---|---|
| Hero | `index.html` |
| Lançamentos | `index.html` |
| Gêneros | `index.html` |
| Notícias (filtros, destaque, cards, aside) | `noticias.html` |
| Chamada final (`#cta`) | Nova — ponte para a Comunidade |
| Navbar / Footer | Layout compartilhado do grupo (um menu e um rodapé) |

## Destaques técnicos

- Componentes reutilizáveis (`CardNoticia`, `ChipFiltro`, `CardLancamento`, etc.)
- Listas geradas com `map()` a partir de `src/data/`
- Filtros, comentários e votos com `useState`
- Rotas com React Router e empty states quando o filtro não retorna itens
- Design tokens em `src/styles/tokens.css` (cores centralizadas)
