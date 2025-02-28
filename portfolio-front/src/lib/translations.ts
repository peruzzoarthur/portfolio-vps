type Translation = {
  english: string;
  spanish: string;
  portuguese: string;
};

type Translations = {
  [key: string]: Translation;
};

export const translations: Translations = {
  home: {
    english: "Home",
    spanish: "Inicio",
    portuguese: "Início",
  },
  about: {
    english: "About",
    spanish: "Sobre",
    portuguese: "Sobre"
  },
  contact: {
    english: "Contact",
    spanish: "Contacto",
    portuguese: "Contato"
  },
  publications: {
    english: "Publications",
    spanish: "Publicaciones",
    portuguese: "Publicações"
  },
  collaborators: {
    english: "Collaborators",
    spanish: "Colaboradores",
    portuguese: "Colaboradores"
  },
  contactUs: {
    english: "Contact us",
    spanish: "Contáctanos",
    portuguese: "Contate-nos"
  },
  pampaNegro: {
    english: "Pampa Negro Project: Archaeology of the African Diaspora in Pelotas",
    spanish: "Proyecto Pampa Negro: Arqueología de la Diáspora Africana en Pelotas",
    portuguese: "Projeto Pampa Negro: Arqueologia da Diáspora Africana em Pelotas"
  },
  archaeology: {
    english: "Archaeology",
    spanish: "Arqueología",
    portuguese: "Arqueologia",
  },
  dance: {
    english: "Dance",
    spanish: "Danza",
    portuguese: "Dança",
  },
  music: {
    english: "Music",
    spanish: "Música",
    portuguese: "Música",
  },
  memory: {
    english: "Memory",
    spanish: "Memoria",
    portuguese: "Memória",
  },
  culture: {
    english: "Culture",
    spanish: "Cultura",
    portuguese: "Cultura",
  },
  ancestrality: {
    english: "Ancestrality",
    spanish: "Ancestralidad",
    portuguese: "Ancestralidade",
  },
  dark: {
    english: "Dark",
    spanish: "Oscuro",
    portuguese: "Escuro"
  },
  light: {
    english: "Light",
    spanish: "Claro",
    portuguese: "Claro"
  }
};

