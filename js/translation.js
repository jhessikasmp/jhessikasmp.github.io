// Sistema de tradução
const translations = {
  en: {
    // Header
    home: "Home",
    about: "About",
    projects: "Projects",
    contact: "Contact",

    // Hero Section
    heroTitle: "Turning <span class='text-lightweight'>full stack</span> ideas into solutions that deliver results",
    heroSubtitle: "Transforming ideas into robust, scalable solutions that deliver real impact. I build modern web applications with clean architecture and reliable performance.",
    contactMe: "Contact me",
    greeting: "<span class='text-bold-accent'>Hello!</span> I'm Jhessika Sampaio",

    // About Section
    aboutTitle: "About <span class='text-dark'>Me</span>",
    aboutIntro: "<span class='text-accent-bold'>&lt;p&gt;</span> My path to software development has been shaped by diverse experiences that taught me valuable lessons. Working in luxury industries showed me the importance of attention to detail and meeting high standards. <span class='text-accent-bold'>&lt;/p&gt;</span>",
    aboutText: "I enjoy working across different parts of web development from databases to user interfaces. I like tackling challenges step by step, whether it's figuring out how to connect different systems or making sure everything works smoothly together. My background in technical support and various administrative roles gave me a good foundation for understanding what users actually need and how to translate that into <span class='text-accent-bold'>working solutions.</span> I prefer to keep things simple and focus on what really matters.",
    interestsTitle: "What Interests Me",
    interestsText: "I'm curious about how Artificial Intelligence might enhance web applications in the future. There's something exciting about the possibility of making technology more <span class='text-accent-bold'>helpful and intuitive for people.</span>",

    // Tech Stack
    frontend: "Frontend",
    frontendDesc: "&lt;p&gt; Frontend is the part of a site people see and use the pages, buttons, and forms built to be clear, fast, and consistent on any device or browser.&lt;/p&gt;",
    backend: "Backend",
    backendDesc: "({ Backend is the server side that stores data, applies business rules, and powers the features the user sees securely and reliably })",
    databaseOthers: "Database & Others",
    databaseDesc: "[{ \"Databases organize and retrieve data; Adobe products shape the visuals; WP manages content; Docker keeps the whole setup consistent and easy to run anywhere.\" }]",

    // Projects
    projectsTitle: "My Projects",
    projectTitle: [
      "Restaurant Reservation API",
      "Inventory Management API",
      "Invoice API",
      "Employment Agency API",
      "Booking Platform",
      "JSFianceApp"
    ],
    projectDesc: [
      "This project is a digital tool that helps restaurants organize their reservations in a simple and automatic way. With it, customers can book a table by entering their name, date, time, and number of people, all online, without having to call or wait. The system shows all reservations made, allows you to change the number of people or cancel if needed. Each reservation gets a unique code to make control easier. The restaurant can track all reservations in real time, making service faster and more efficient. It is ideal for small businesses that want to modernize the reservation process and avoid confusion with times or occupied tables.",
      "This project is a simple and efficient system for managing product inventory, designed for small businesses. With it, you can add, view, update, and delete products, as well as register sales that automatically adjust stock levels. The API also generates weekly PDF reports to help track inventory and sales. All features are accessible online, making it easy to keep your stock organized and up to date. The system is built with modern technologies and includes interactive documentation, so you can test and understand how everything works, even if you are not a programmer.",
      "Invoice API is a smart and practical solution for anyone who needs to create and send invoices easily. With this system, you can register your customers and products, generate invoices with all calculations done automatically (including taxes), and send them as professional PDFs directly by email. You can also keep a complete history of all invoices and clients, making it simple to organize your business. The interface is designed to be intuitive, so even those with no technical experience can use it without difficulty. It is perfect for freelancers, small businesses, and anyone who wants to save time and avoid mistakes in billing.",
      "This project is a management system for employment agencies, designed to help organize job offers, companies, and candidates. The API allows you to create and manage job postings, register companies and candidates, and automatically match candidates to suitable jobs. It also sends email notifications and provides interactive documentation. The system is ideal for agencies that want to digitalize their recruitment process and make it easier to find the right candidate for each job.",
      "Online platform for booking services, appointments, or events with calendar integration.",
      "Personal finance app to track expenses, set budgets, and visualize financial goals."
    ],
    demoBtn: "Access DEMO version",

    // Contact
    contactHeading: "Let's build together",
    contactSubheading: "A project on your mind? Let's make it real.",
    locationText: "Treviso - VE",
    getInTouch: "Get in Touch",
    viewResume: "View Resume",

    // Footer
    footerCredits: "Designed & built by <span class='text-white'>JSDev</span> with <span class='text-white'>accuracy</span>"
  },

  pt: {
    // Header
    home: "Início",
    about: "Sobre",
    projects: "Projetos",
    contact: "Contato",

    // Hero Section
    heroTitle: "Transformando ideias <span class='text-lightweight'>full stack</span> em soluções que entregam resultados",
    heroSubtitle: "Transformando ideias em soluções robustas e escaláveis que entregam impacto real. Construo aplicações web modernas com arquitetura limpa e performance confiável.",
    contactMe: "Entre em contato",
    greeting: "<span class='text-bold-accent'>Olá!</span> Eu sou Jhessika Sampaio",

    // About Section
    aboutTitle: "Sobre <span class='text-dark'>Mim</span>",
    aboutIntro: "<span class='text-accent-bold'>&lt;p&gt;</span> Meu caminho para o desenvolvimento de software foi moldado por experiências diversas que me ensinaram lições valiosas. Trabalhar em indústrias de luxo me mostrou a importância da atenção aos detalhes e da reunião de altos padrões. <span class='text-accent-bold'>&lt;/p&gt;</span>",
    aboutText: "Gosto de trabalhar em diferentes partes do desenvolvimento web, desde bancos de dados até interfaces de usuário. Gosto de enfrentar desafios passo a passo, seja descobrindo como conectar diferentes sistemas ou certificando-me de que tudo funciona bem junto. Meu histórico em suporte técnico e vários papéis administrativos me deu uma boa base para entender o que os usuários realmente precisam e como traduzir isso em <span class='text-accent-bold'>soluções funcionais.</span> Prefiro manter as coisas simples e focar no que realmente importa.",
    interestsTitle: "O que me interessa",
    interestsText: "Estou curiosa sobre como a Inteligência Artificial pode melhorar aplicações web no futuro. Há algo empolgante na possibilidade de tornar a tecnologia mais <span class='text-accent-bold'>útil e intuitiva para as pessoas.</span>",

    // Tech Stack
    frontend: "Frontend",
    frontendDesc: "&lt;p&gt; Frontend é a parte do site que as pessoas veem e usam - páginas, botões e formulários construídos para serem claros, rápidos e consistentes em qualquer dispositivo ou navegador.&lt;/p&gt;",
    backend: "Backend",
    backendDesc: "({ Backend é o lado servidor que armazena dados, aplica regras de negócio e alimenta os recursos que o usuário vê de forma segura e confiável })",
    databaseOthers: "Banco de Dados & Outros",
    databaseDesc: "[{ \"Bancos de dados organizam e recuperam dados; Produtos Adobe moldam os visuais; WP gerencia conteúdo; Docker mantém tudo consistente e fácil de executar em qualquer lugar.\" }]",

    // Projects
    projectsTitle: "Meus Projetos",
    projectTitle: "Título do Projeto",
    projectDesc: "Uma breve descrição do projeto em português, que dará acesso a uma descrição maior",
    demoBtn: "Acesse versão DEMO",

    // Contact
    contactHeading: "Vamos construir juntos",
    contactSubheading: "Um projeto em mente? Vamos torná-lo real.",
    locationText: "Treviso - VE",
    getInTouch: "Entre em Contato",
    viewResume: "Ver Currículo",

    // Footer
    footerCredits: "Desenvolvido por <span class='text-white'>JSDev</span> com <span class='text-white'>precisão</span>"
  },

  it: {
    // Header
    home: "Home",
    about: "Chi Sono",
    projects: "Progetti",
    contact: "Contatto",

    // Hero Section
    heroTitle: "Trasformando idee <span class='text-lightweight'>full stack</span> in soluzioni che danno risultati",
    heroSubtitle: "Trasformando idee in soluzioni robuste e scalabili che danno un impatto reale. Costruisco applicazioni web moderne con architettura pulita e performance affidabile.",
    contactMe: "Contattami",
    greeting: "<span class='text-bold-accent'>Ciao!</span> Sono Jhessika Sampaio",

    // About Section
    aboutTitle: "Chi <span class='text-dark'>Sono</span>",
    aboutIntro: "<span class='text-accent-bold'>&lt;p&gt;</span> Il mio percorso verso lo sviluppo software è stato plasmato da esperienze diverse che mi hanno insegnato lezioni preziose. Lavorare nelle industrie di lusso mi ha mostrato l'importanza dell'attenzione ai dettagli e del raggiungimento di alti standard. <span class='text-accent-bold'>&lt;/p&gt;</span>",
    aboutText: "Mi piace lavorare in diverse parti dello sviluppo web, dai database alle interfacce utente. Mi piace affrontare le sfide passo dopo passo, sia scoprendo come connettere sistemi diversi che assicurandomi che tutto funzioni bene insieme. Il mio background nel supporto tecnico e vari ruoli amministrativi mi ha dato una buona base per capire cosa gli utenti hanno davvero bisogno e come tradurlo in <span class='text-accent-bold'>soluzioni funzionanti.</span> Preferisco mantenere le cose semplici e concentrarmi su ciò che conta davvero.",
    interestsTitle: "Cosa mi interessa",
    interestsText: "Sono curiosa di come l'Intelligenza Artificiale potrebbe migliorare le applicazioni web in futuro. C'è qualcosa di eccitante nella possibilità di rendere la tecnologia più <span class='text-accent-bold'>utile e intuitiva per le persone.</span>",

    // Tech Stack
    frontend: "Frontend",
    frontendDesc: "&lt;p&gt; Frontend è la parte del sito che le persone vedono e usano - pagine, pulsanti e moduli costruiti per essere chiari, veloci e consistenti su qualsiasi dispositivo o browser.&lt;/p&gt;",
    backend: "Backend",
    backendDesc: "({ Backend è il lato server che memorizza dati, applica regole di business e alimenta le funzionalità che l'utente vede in modo sicuro e affidabile })",
    databaseOthers: "Database & Altri",
    databaseDesc: "[{ \"I database organizzano e recuperano dati; I prodotti Adobe modellano i visuali; WP gestisce contenuti; Docker mantiene tutto consistente e facile da eseguire ovunque.\" }]",

    // Projects
    projectsTitle: "I Miei Progetti",
    projectTitle: "Titolo del Progetto",
    projectDesc: "Una breve descrizione del progetto in italiano, che accederà a una descrizione più ampia",
    demoBtn: "Accedi versione DEMO",

    // Contact
    contactHeading: "Costruiamo insieme",
    contactSubheading: "Un progetto in mente? Rendiamolo reale.",
    locationText: "Treviso - VE",
    getInTouch: "Mettiti in Contatto",
    viewResume: "Visualizza Curriculum",

    // Footer
    footerCredits: "Progettato e costruito da <span class='text-white'>JSDev</span> con <span class='text-white'>precisione</span>"
  }
};

// Estado atual do idioma
let currentLanguage = localStorage.getItem('language') || 'en';

// Função para trocar idioma
function changeLanguage(lang) {
  if (!translations[lang]) return;

  currentLanguage = lang;
  localStorage.setItem('language', lang);

  // Atualizar todos os elementos com data-i18n
  document.querySelectorAll('[data-i18n]').forEach(element => {
    const key = element.getAttribute('data-i18n');
    if (translations[lang][key]) {
      element.innerHTML = translations[lang][key];
    }
  });

  // Atualizar elementos específicos que não usam data-i18n
  updateSpecificElements(lang);

  // Atualizar atributo lang do HTML
  document.documentElement.lang = lang;
}

// Função para atualizar elementos específicos
function updateSpecificElements(lang) {
  // Menu de navegação
  const navLinks = document.querySelectorAll('.main-nav a');
  if (navLinks.length >= 4) {
    navLinks[0].textContent = translations[lang].home;
    navLinks[1].textContent = translations[lang].about;
    navLinks[2].textContent = translations[lang].projects;
    navLinks[3].textContent = translations[lang].contact;
  }

  // Títulos das seções
  const projectsTitle = document.querySelector('.projects-title');
  if (projectsTitle) projectsTitle.textContent = translations[lang].projectsTitle;

  const contactHeading = document.querySelector('.contact-heading');
  if (contactHeading) contactHeading.textContent = translations[lang].contactHeading;

  const contactSubheading = document.querySelector('.contact-subheading');
  if (contactSubheading) contactSubheading.textContent = translations[lang].contactSubheading;

  // Botões
  const heroBtn = document.querySelector('.hero-btn');
  if (heroBtn) heroBtn.textContent = translations[lang].contactMe;

  // Todos os botões demo
  document.querySelectorAll('.btn-demo').forEach(btn => {
    btn.textContent = translations[lang].demoBtn;
  });

  // Todos os títulos de projeto
  document.querySelectorAll('.project-title').forEach(title => {
    title.textContent = translations[lang].projectTitle;
  });

  // Todas as descrições de projeto
  document.querySelectorAll('.project-description').forEach(desc => {
    desc.textContent = translations[lang].projectDesc;
  });

  // Localização
  const locationText = document.querySelector('.location-text');
  if (locationText) locationText.textContent = translations[lang].locationText;

  // Botões de contato
  const contactBtns = document.querySelectorAll('.btn-contact span');
  if (contactBtns.length >= 2) {
    contactBtns[0].textContent = translations[lang].getInTouch;
    contactBtns[1].textContent = translations[lang].viewResume;
  }

  // Elementos que precisam de innerHTML (com tags HTML)
  const greetingBox = document.querySelector('.greeting-box p');
  if (greetingBox) greetingBox.innerHTML = translations[lang].greeting;

  const aboutTitle = document.querySelector('.about-title');
  if (aboutTitle) aboutTitle.innerHTML = translations[lang].aboutTitle;

  const aboutIntro = document.querySelector('.about-text-small');
  if (aboutIntro) aboutIntro.innerHTML = translations[lang].aboutIntro;

  const aboutText = document.querySelectorAll('.about-text-large');
  if (aboutText.length >= 2) {
    aboutText[0].innerHTML = translations[lang].aboutText;
    aboutText[1].innerHTML = translations[lang].interestsText;
  }

  const interestsTitle = document.querySelector('.interests-title');
  if (interestsTitle) interestsTitle.textContent = translations[lang].interestsTitle;

  // Tech stack descriptions
  const stackInfos = document.querySelectorAll('.stack-info p');
  if (stackInfos.length >= 3) {
    stackInfos[0].innerHTML = translations[lang].frontendDesc;
    stackInfos[1].innerHTML = translations[lang].backendDesc;
    stackInfos[2].innerHTML = translations[lang].databaseDesc;
  }

  // Footer credits
  const footerCredits = document.querySelector('.footer-credits');
  if (footerCredits) footerCredits.innerHTML = translations[lang].footerCredits;
}

// Função para alternar entre idiomas
function toggleLanguage() {
  const languages = ['en', 'pt', 'it'];
  const currentIndex = languages.indexOf(currentLanguage);
  const nextIndex = (currentIndex + 1) % languages.length;
  changeLanguage(languages[nextIndex]);
  updateLanguageIcon(languages[nextIndex]);
}

// Função para atualizar o ícone de idioma
function updateLanguageIcon(lang) {
  const currentIcon = document.getElementById('current-lang-icon');
  const flagBr = document.querySelector('.flag-br');
  const flagIt = document.querySelector('.flag-it');

  // Esconde todas as bandeiras e ícone padrão
  currentIcon.style.display = 'none';
  flagBr.style.display = 'none';
  flagIt.style.display = 'none';

  // Mostra a bandeira correspondente ao idioma
  if (lang === 'pt') {
    flagBr.style.display = 'block';
  } else if (lang === 'it') {
    flagIt.style.display = 'block';
  } else {
    // Inglês - mostra ícone padrão
    currentIcon.style.display = 'block';
  }
}

// Inicializar tradução
document.addEventListener('DOMContentLoaded', () => {
  changeLanguage(currentLanguage);
  updateLanguageIcon(currentLanguage);
});
