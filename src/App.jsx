import React, { useState, useEffect } from 'react';
import { 
  Menu, X, ArrowRight, Brain, Users, Target, 
  Check, MessageCircle, 
  Instagram, Youtube, Send, MapPin, BookOpen, Clock, Wallet,
  ChevronDown, ChevronUp 
} from 'lucide-react';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openServiceIdx, setOpenServiceIdx] = useState(null);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const toggleService = (idx) => {
    setOpenServiceIdx(openServiceIdx === idx ? null : idx);
  };

  const scrollTo = (id) => {
    setIsMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 45;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
  
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  // --- LINKS ---
  const LINKS = {
    tgChat: "https://t.me/pacificaana_psy",
    tgChannel: "https://t.me/+KIUMiGmN6FhkZmM6",
    whatsapp: "https://wa.me/79936399794",
    youtube: "https://www.youtube.com/@pacificaana_psy",
    instagram: "https://instagram.com/pacificaana",
    scholar: "https://scholar.google.cat/citations?user=Myc-CHcAAAAJ&hl=ru",
    scheduling: "https://calendly.com/anastasiia-druzhinina-meet/60"
  };

  // --- DATA ---
  const services = [
    {
      id: "service-personal",
      title: "Личная сессия",
      subtitle: "Индивидуальный формат",
      price: "6 000 ₽",
      duration: "60 минут",
      desc: "Разовые сессии на отдельный запрос или длительная работа с тем, что Вас больше не устраивает - онлайн и очно. Перед тем, как \"пойти\" в работу, мы обсудим ваш запрос и ожидания.",
      features: [
        "\"Мне больше не нравится то, как я живу, но не знаю, как по-другому\"",
        "\"Я хочу доверительных, надежных отношений\"",
        "\"Хочу повышения и нормальной зарплаты, но мне кажется, что я делаю недостаточно\"",
        "\"Я просыпаюсь уже с \"тревожкой\"",
        "\"Не могу похудеть, всё перепробовала\"",
        "\"Я не умею отдыхать\""
      ],
      icon: <Brain className="w-6 h-6" />,
      isPrimary: false
    },
    {
      id: "service-family",
      title: "Семейная ко-терапия",
      subtitle: "Работают 2 терапевта",
      price: "9 000 ₽",
      duration: "75-90 минут",
      desc: "Вместе с вами работают два терапевта одновременно. Это создает безопасное пространство, где слышан каждый. Мы смотрим на ситуацию как на живую систему, работая с отношениями, а не ищем «виноватого».",
      features: [
        "Затяжные конфликты и обиды",
        "Ощущение «разных языков»",
        "Кризисы (измены, переезды, финансы)",
        "Сложности с детьми и их психосоматика"
      ],
      icon: <Users className="w-6 h-6" />,
      isPrimary: true,
      tag: "для пар"
    },
    {
      id: "service-business",
      title: "Бизнес-Психология",
      subtitle: "Для команд",
      price: "По договоренности",
      duration: "от 90 минут",
      desc: "Системный анализ процессов в вашей команде, включая: позиционирование команды и ее участников, психологический и стратегический аспекты бизнес-процессов.",
      features: [
        "\"Как нам запустить поток идей, чтобы команда начала креативить?\"",
        "\"Мы внедрили модный фреймворк, но стало только больше рутины\"",
        "\"Мы общаемся только на корпоративах\"",
        "\"Говорят про дружный коллектив, но это только внешне\""
      ],
      icon: <Target className="w-6 h-6" />,
      isPrimary: false
    }
  ];

  // --- IMAGES ---
  const heroUrl = "/images/hero-picture.webp";
  const heroMobileUrl = "/images/hero-mobile.webp";
  const profileUrl = "/images/profile-picture.webp";
  const bioUrl = "/images/web-picture.webp";
  
  // LOGIC: Make 19, 20, 21 appear first, remove 18, then the rest
  const priorityCerts = [19, 20, 21];
  const otherCerts = Array.from({ length: 21 }, (_, i) => i + 1)
    .filter(id => id !== 18 && !priorityCerts.includes(id));
  
  const certImages = [...priorityCerts, ...otherCerts].map(id => `/images/${id}.webp`);

  const reviewImages = Array.from({ length: 9 }, (_, i) => `/images/social${i + 1}.webp`);

  const publications = [
    "Interactions between research and commercialization units (GISTAM 2025)",
    "Environmentally Neutral Technology (Scopus 2025)",
    "Data-Driven Approach in Higher Education (2024)"
  ];

  return (
    <div className="min-h-screen flex flex-col font-sans text-navy-900 bg-sand-50 selection:bg-gold-500 selection:text-white overflow-x-hidden">
      
      {/* --- NAVIGATION BAR --- */}
      <nav className="fixed w-full z-50 bg-sand-50/90 backdrop-blur-md border-b border-navy-900/5 transition-all">
        <div className="container mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex flex-col leading-none z-50">
            <span className="font-serif text-2xl font-bold tracking-tight text-navy-900">
              Anastasiia Druzhinina
            </span>
            <span className="text-[10px] uppercase tracking-[0.2em] text-slate-600 mt-1 font-bold">
              Psychologist
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-10 text-xs font-bold uppercase tracking-widest text-slate-600">
            {['Обо мне', 'Квалификация', 'Услуги', 'Отзывы'].map((item) => (
              <button 
                key={item} 
                onClick={() => scrollTo(item === 'Обо мне' ? 'about' : item === 'Квалификация' ? 'credentials' : item === 'Услуги' ? 'services' : 'reviews')}
                className="hover:text-navy-900 transition-colors"
              >
                {item}
              </button>
            ))}
            <button 
              onClick={() => scrollTo('contact')}
              className="text-amber-700 hover:text-amber-800 transition-colors font-extrabold"
            >
              Контакты
            </button>
          </div>

          {/* Mobile Burger Button */}
          <button 
            className="md:hidden text-navy-900 p-2 focus:outline-none" 
            onClick={() => setIsMenuOpen(true)}
            aria-label="Открыть меню"
          >
            <Menu size={28} />
          </button>
        </div>

        {/* --- MOBILE SIDEBAR --- */}
        <div 
          className={`fixed inset-0 bg-navy-900/60 backdrop-blur-sm z-[90] transition-opacity duration-300 md:hidden ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`} 
          onClick={() => setIsMenuOpen(false)}
        ></div>
        
        <div 
          className={`fixed top-0 left-0 h-[100dvh] w-[85%] max-w-[320px] bg-white shadow-2xl z-[100] transform transition-transform duration-300 ease-out md:hidden flex flex-col ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}
        >
            <div className="pt-10 pb-6 px-6 flex flex-col items-center border-b border-gray-100 relative shrink-0">
              <button 
                onClick={() => setIsMenuOpen(false)}
                className="absolute top-4 right-4 text-slate-500 hover:text-navy-900 p-2"
                aria-label="Закрыть меню"
              >
                <X size={24} />
              </button>

              <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white shadow-lg mb-4">
                <img 
                  src={profileUrl} 
                  alt="Anastasiia Druzhinina Profile" 
                  width="96" height="96"
                  loading="lazy"
                  className="w-full h-full object-cover object-top" 
                />
              </div>
              <h2 className="font-serif text-xl text-navy-900 font-bold text-center">Anastasiia<br/>Druzhinina</h2>
              <p className="text-[10px] uppercase tracking-widest text-amber-700 mt-2 font-bold">Семейный психотерапевт</p>
            </div>

            <div className="flex-1 py-8 px-6 flex flex-col gap-4 overflow-y-auto">
               {['Обо мне', 'Квалификация', 'Услуги', 'Отзывы'].map((item) => (
                <button 
                  key={item} 
                  onClick={() => scrollTo(item === 'Обо мне' ? 'about' : item === 'Квалификация' ? 'credentials' : item === 'Услуги' ? 'services' : 'reviews')}
                  className="text-center py-2 text-navy-900 font-serif text-xl hover:text-amber-700 transition-colors font-bold"
                >
                  {item}
                </button>
              ))}
              <div className="h-px bg-gray-100 w-1/2 mx-auto my-2"></div>
              <button onClick={() => scrollTo('contact')} className="text-center py-2 text-amber-700 font-bold uppercase tracking-widest text-xs">
                  Контакты
              </button>
            </div>

            <div className="p-8 bg-gray-50 mt-auto border-t border-gray-100 shrink-0">
               <div className="flex justify-center gap-6">
                  <a href={LINKS.tgChat} aria-label="Telegram" className="w-12 h-12 bg-white text-navy-900 border border-gray-200 flex items-center justify-center rounded-full hover:bg-blue-500 hover:text-white transition-all shadow-sm" target="_blank" rel="noreferrer">
                    <Send size={20} />
                  </a>
                  <a href={LINKS.whatsapp} aria-label="WhatsApp" className="w-12 h-12 bg-white text-navy-900 border border-gray-200 flex items-center justify-center rounded-full hover:bg-green-600 hover:text-white transition-all shadow-sm" target="_blank" rel="noreferrer">
                    <MessageCircle size={20} />
                  </a>
               </div>
            </div>
        </div>
      </nav>

      {/* --- HERO SECTION --- */}
      <header className="relative w-full min-h-screen pt-24 md:pt-28 flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 flex flex-col justify-center px-6 md:px-16 lg:px-24 py-12 md:py-12 bg-sand-50 z-10">
          <div className="animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 border border-navy-900/10 rounded-full bg-white">
              <span className="w-2 h-2 rounded-full bg-gold-500"></span>
              <span className="text-[10px] uppercase tracking-widest font-bold text-slate-600">
                Семейный психотерапевт и научный сотрудник
              </span>
            </div>
            <h1 className="font-serif text-5xl lg:text-7xl text-navy-900 mb-6 leading-[1.1] font-bold">
              Системный <br />
              подход <br />
              <span className="italic text-amber-700 font-normal">к Вашему здоровью</span>
            </h1>
            <p className="font-sans text-slate-600 text-lg leading-relaxed mb-10 max-w-md border-l-2 border-gold-200 pl-6 font-medium">
              Здесь про Вас и для Вас<br/>
              Через смех, плач и ярую злость<br/>
              без идеальных картинок и успешного успеха
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href={LINKS.scheduling} 
                target="_blank" 
                rel="noreferrer"
                className="bg-navy-900 text-white px-8 py-4 text-xs font-bold uppercase tracking-widest hover:bg-navy-800 transition-all flex items-center justify-center gap-2 group"
              >
                Выбрать формат <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform"/>
              </a>
              <a 
                href={LINKS.tgChat} target="_blank" rel="noreferrer"
                className="px-8 py-4 border border-navy-900/20 text-navy-900 text-xs font-bold uppercase tracking-widest hover:bg-white transition-all flex items-center justify-center gap-2"
              >
                Связаться
              </a>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2 h-[60vh] md:h-screen relative bg-stone-300 overflow-hidden">
           {/* RESPONSIVE IMAGE */}
           <img 
              srcSet={`${heroMobileUrl} 500w, ${heroUrl} 1000w`}
              sizes="(max-width: 768px) 500px, 1000px"
              src={heroUrl} 
              alt="Anastasiia Druzhinina Hero" 
              width="1000" height="1500"
              loading="eager"
              fetchPriority="high"
              className="w-full h-full object-cover object-top" 
           />
           <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-navy-900/80 to-transparent p-8 md:p-12">
             <p className="text-white font-serif text-2xl italic">"Хаос — это просто система, которую мы пока не поняли."</p>
           </div>
        </div>
      </header>

      {/* --- SCIENCE TICKER --- */}
      <div className="bg-navy-900 text-slate-400 py-10 overflow-hidden border-b border-white/5 relative">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex gap-8 justify-center flex-wrap px-4 text-xs uppercase tracking-widest font-bold">
            <span className="text-gold-500 opacity-80 mr-2">Публикации:</span>
            {publications.map((pub, i) => (
               <span key={i} className="flex items-center gap-2 text-center">
                 <span className="text-gold-500">✦</span> {pub}
               </span>
            ))}
          </div>
          <a 
            href={LINKS.scholar} 
            target="_blank" 
            rel="noreferrer"
            aria-label="Google Scholar Profile"
            className="shrink-0 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-gold-500 hover:text-white transition-colors border border-white/10 px-4 py-2 rounded-full"
          >
            <BookOpen size={14}/> Google Scholar
          </a>
        </div>
      </div>

      <main>
      {/* --- BIO SECTION --- */}
      <section id="about" className="pt-20 pb-0 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-12 gap-12 items-start">
            <div className="md:col-span-7 space-y-8 pb-12">
              <h2 className="font-serif text-4xl text-navy-900 font-bold">
                Путь <span className="line-through decoration-amber-700 decoration-2 text-slate-400">не</span>Героя и принципы в работе
              </h2>
              <div className="prose prose-slate text-slate-600 leading-loose text-lg">
                <p>
                  Мой путь в психологию начался не с получения «вышки», а со сферы управления проектами и исследований. Так, более 10 лет я работаю с командами — от наукоёмких стартапов в СНГ до компаний в Европе и Азии. За это время получилось сформировать для себя ключевые принципы, которые теперь применяю в психологической практике с клиентами и считаю основой любого взаимодействия человек-человек: доверие, интерес, честность.
                </p>
                <div className="space-y-4 mt-6">
                  <p>
                    <strong className="text-navy-900">Доверие к процессу и времени:</strong> В работе я применяю полимодальный подход, используя инструменты экзистенциально-гуманистического подхода, логотерапии, психоанализа и семейно-системной терапии. Это позволяет выстраивать работу с разными запросами и на разную глубину. Однако всё это будет по-настоящему помогать, только если в нашем контакте со временем возникнет доверие.
                  </p>
                  <p>
                    <strong className="text-navy-900">Интерес:</strong> я беру в работу не все запросы клиентов. Например, случаи с тяжёлыми формами зависимостей или подтверждёнными диагнозами биполярного или депрессивного расстройства, если клиент не наблюдается у психиатра. С теми же, с кем мы договариваемся о разовой сессии или длительной работе, результат достигается через мое полное включение и глубокий интерес к процессу.
                  </p>
                  <p>
                    <strong className="text-navy-900">Честность</strong> по отношению к вам, вашему запросу и всему процессу нашей терапии. Без напускной сложности в терминах и без замалчивания, если я вижу, что вы «проглатываете» или «засмеиваете» какие-то переживания.
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-6 border-t border-slate-100">
                {[
                  { label: "Лет практики с командами", val: "10+" }, 
                  { label: "Года клиентской практики", val: "3+" }, 
                  { label: "Публикаций", val: "Scopus" }, 
                  { label: "Методик", val: "8+" }
                ].map((stat, i) => (
                  <div key={i}>
                    <div className="font-serif text-3xl text-amber-700 font-bold">{stat.val}</div>
                    <div className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="md:col-span-5 relative mt-8 md:mt-0 self-end">
               <div className="aspect-[4/5] bg-slate-100 relative overflow-hidden rounded-sm">
                 <img 
                    src={bioUrl} 
                    alt="Anastasiia working process" 
                    width="600" height="750"
                    loading="lazy"
                    className="w-full h-full object-cover object-center" 
                 />
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- CREDENTIALS GALLERY --- */}
      <section id="credentials" className="py-20 bg-sand-100 overflow-hidden">
        <div className="container mx-auto px-6 mb-12 flex justify-between items-end">
          <div>
             <span className="text-xs font-bold uppercase tracking-widest text-amber-700 mb-2 block">подтверждение квалификации</span>
             <h2 className="font-serif text-3xl text-navy-900 font-bold">Дипломы и удостоверения</h2>
          </div>
          <div className="flex gap-2 text-slate-500 text-sm items-center">
            <span className="uppercase tracking-widest text-[10px] font-bold">Листать</span> <ArrowRight size={16}/>
          </div>
        </div>
        
        <div className="overflow-x-auto pb-8 px-6 -mx-6 md:mx-0 snap-x snap-mandatory hide-scrollbar">
          <div className="flex gap-6 w-max px-6">
            {certImages.map((imgSrc, idx) => (
              <div key={idx} className="snap-center shrink-0">
                <div className="relative w-[450px] h-[320px] bg-white shadow-md hover:shadow-xl transition-shadow duration-300 p-4 border border-navy-900/5 flex items-center justify-center">
                  <img 
                    src={imgSrc} 
                    alt={`Certificate`} 
                    width="450" height="320"
                    loading="lazy"
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- PROCESS (PROTOCOL) --- */}
      <section className="py-20 bg-navy-900 text-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold">Протокол работы</h2>
            <p className="text-slate-400 mt-4">Опорные точки</p>
          </div>
          <div className="grid md:grid-cols-4 gap-8 relative">
            <div className="hidden md:block absolute top-12 left-0 w-full h-px bg-white/10"></div>
            {[
              { num: "01", title: "Диагностика", text: "Заочный сбор информации в переписке. Выявление запроса и цели. Определение формата." },
              { num: "02", title: "Сеттинг", text: "Фиксация дня, времени и 100% предоплата - это создает безопасные границы и определенность." },
              { num: "03", title: "Сессия", text: "60-90 минут. Определение элементов сценария, которые больше не помогают, и простроение новых." },
              { num: "04", title: "Интеграция", text: "Обратная связь и домашнее задание для сохранения изменений в вашей жизни." },
            ].map((step, i) => (
              <div key={i} className="relative z-10 text-center md:text-left">
                <div className="w-24 h-24 bg-navy-800 border border-white/10 rounded-full flex items-center justify-center font-serif text-3xl text-gold-500 mb-6 mx-auto md:mx-0 font-bold">
                  {step.num}
                </div>
                <h3 className="font-bold text-lg mb-2">{step.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- SERVICES (GRID NAVIGATION) --- */}
      <section id="services" className="py-20 bg-sand-50">
        <div className="container mx-auto px-6">
          <div className="mb-12">
            <h2 className="font-serif text-4xl text-navy-900 font-bold">Возможные форматы</h2>
          </div>
          <div className="grid lg:grid-cols-3 gap-6 items-stretch">
            {services.map((s, i) => (
              <div 
                key={i} 
                className={`
                  flex flex-col relative bg-white border transition-all duration-300 h-full
                  ${s.isPrimary 
                    ? 'border-gold-500 shadow-xl z-10' 
                    : 'border-transparent hover:border-navy-900/10 hover:shadow-lg'}
                  rounded-none md:rounded-sm
                `}
              >
                <div 
                  className="p-6 md:p-10 cursor-pointer md:cursor-default flex justify-between items-center"
                  onClick={() => window.innerWidth < 1024 && toggleService(i)}
                >
                  <div className="w-full">
                    {s.tag && (
                      <div className="inline-block md:absolute top-0 right-0 bg-gold-500 text-white text-[10px] font-bold uppercase px-3 py-1 tracking-widest mb-2 md:mb-0">
                        {s.tag}
                      </div>
                    )}
                    <div className={`hidden md:flex w-12 h-12 items-center justify-center rounded-full mb-6 ${s.isPrimary ? 'bg-gold-50 text-gold-600' : 'bg-sand-100 text-navy-900'}`}>
                      {s.icon}
                    </div>
                    <h3 className="font-serif text-2xl text-navy-900 mb-1 font-bold">{s.title}</h3>
                    <p className="text-xs uppercase tracking-widest text-slate-500 font-bold">{s.subtitle}</p>
                    <p className="md:hidden mt-2 text-amber-700 font-serif text-sm font-bold">{s.price}</p>
                  </div>
                  <div className="md:hidden text-navy-900">
                    {openServiceIdx === i ? <ChevronUp /> : <ChevronDown />}
                  </div>
                </div>
                <div className={`px-6 pb-6 md:px-10 md:pb-10 flex-col flex-grow ${openServiceIdx === i ? 'flex' : 'hidden'} md:flex`}>
                  <p className="text-slate-600 text-sm leading-relaxed mb-8 flex-grow font-medium">{s.desc}</p>
                  <ul className="space-y-4 mb-8">
                    {s.features.map((f, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm text-navy-900 font-bold italic">
                        <div className="w-1.5 h-1.5 bg-gold-500 rounded-full shrink-0 mt-1.5"></div>
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-auto pt-6 border-t border-slate-100 w-full">
                    <div className="hidden md:flex justify-between items-baseline mb-6">
                      <span className="font-serif text-xl text-navy-900 font-bold">{s.price}</span>
                      <span className="text-xs text-slate-400 font-bold">{s.duration}</span>
                    </div>
                    <button 
                      onClick={() => scrollTo(s.id)} 
                      className={`w-full py-4 text-xs font-bold uppercase tracking-widest transition-all ${s.isPrimary ? 'bg-gold-600 text-white hover:bg-gold-700' : 'bg-navy-900 text-white hover:bg-navy-800'}`}
                      aria-label={`Подробнее о ${s.title}`}
                    >
                      Подробнее
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- DETAIL SECTION 1: PERSONAL SESSION --- */}
      <section id="service-personal" className="py-20 bg-white border-t border-navy-900/5">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="flex items-center gap-4 mb-8">
            <div className="p-3 bg-navy-900 text-white rounded-full"><Brain size={24} /></div>
            <div>
              <h2 className="font-serif text-3xl md:text-4xl text-navy-900 font-bold">Личная сессия</h2>
              <p className="text-amber-700 uppercase tracking-widest text-xs font-bold mt-1">Индивидуальный формат</p>
            </div>
          </div>

          <div className="grid md:grid-cols-12 gap-12">
            <div className="md:col-span-12 space-y-6 text-slate-600 leading-relaxed text-lg">
              <div className="flex gap-6 text-sm font-bold text-navy-900 border-b border-gray-100 pb-6 uppercase tracking-wider">
                <span className="flex items-center gap-2"><Clock size={16} className="text-gold-500"/> 60 минут</span>
                <span className="flex items-center gap-2"><MapPin size={16} className="text-gold-500"/> Онлайн / Очно (Мск/СПб)</span>
                <span className="flex items-center gap-2"><Wallet size={16} className="text-gold-500"/> 6000₽ / 6700₽</span>
              </div>

              <p>
                Наша работа начинается с первого сообщения. Чтобы сессии прошли для вас максимально полезно, мы уточним суть вашего запроса в переписке. После согласования темы сессии, формата и времени я вышлю ссылку для предоплаты (принимаю платежи из РФ, стран СНГ и ЕС). После этого ваше время будет закреплено.
              </p>
              <p>
                Первая сессия начнется со знакомства и обсуждения правил нашей работы. Далее мы перейдем к вашему запросу и детальному разбору ситуации. Иногда клиенты просят использовать в сессии конкретные подходы, например, проективные инструменты вроде МАК-карт или практики телесно-ориентированной терапии для проживания ситуации через тело. Это мы также согласуем в процессе и выберем самое оптимальное и безопасное решение.
              </p>
              <p>
                В завершение мы обсудим, что было для вас полезно. Я также предложу практики для самостоятельной работы, чтобы закрепить результат. Не каждый запрос требует долгой работы, но если я увижу, что он многогранный и нуждается в более глубокой проработке, мы обсудим подходящие варианты и план дальнейших действий.
              </p>

              <div className="bg-sand-50 p-8 rounded-lg border-l-4 border-navy-900 mt-8">
                <h3 className="font-serif text-2xl text-navy-900 mb-4 font-bold">Примеры запросов</h3>
                <ul className="space-y-4">
                  <li className="flex gap-3 font-medium"><Check className="text-gold-500 shrink-0 mt-1" size={20}/> «Я для мужчин — "свой парень", а не женщина. Меня не видят в романтическом ключе».</li>
                  <li className="flex gap-3 font-medium"><Check className="text-gold-500 shrink-0 mt-1" size={20}/> «Постоянный цейтнот и тревога: не могу расслабиться даже в душе, всё время "на взводе"».</li>
                  <li className="flex gap-3 font-medium"><Check className="text-gold-500 shrink-0 mt-1" size={20}/> «Телесные сбои "на ровном месте": внезапно перехватывает дыхание, пульсация в глазах, особенно перед важными событиями».</li>
                </ul>
              </div>

              <a 
                href={LINKS.scheduling} 
                target="_blank" 
                rel="noreferrer"
                aria-label="Забронировать личную сессию"
                className="inline-flex items-center gap-2 bg-navy-900 text-white px-8 py-4 text-xs font-bold uppercase tracking-widest hover:bg-navy-800 transition-all mt-6"
              >
                Забронировать <ArrowRight size={16}/>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* --- DETAIL SECTION 2: FAMILY SESSION --- */}
      <section id="service-family" className="py-20 bg-sand-50 border-t border-navy-900/5">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="flex items-center gap-4 mb-8">
            <div className="p-3 bg-gold-600 text-white rounded-full"><Users size={24} /></div>
            <div>
              <h2 className="font-serif text-3xl md:text-4xl text-navy-900 font-bold">Семейная ко-терапия</h2>
              <p className="text-amber-700 uppercase tracking-widest text-xs font-bold mt-1">для пар и семей</p>
            </div>
          </div>

          <div className="grid md:grid-cols-12 gap-12">
            <div className="md:col-span-12 space-y-6 text-slate-600 leading-relaxed text-lg">
              <div className="flex gap-6 text-sm font-bold text-navy-900 border-b border-gray-200 pb-6 uppercase tracking-wider">
                <span className="flex items-center gap-2"><Clock size={16} className="text-gold-500"/> 75-90 минут</span>
                <span className="flex items-center gap-2"><MapPin size={16} className="text-gold-500"/> Онлайн / Очно</span>
                <span className="flex items-center gap-2"><Wallet size={16} className="text-gold-500"/> 9000₽ / 10000₽</span>
              </div>

              <p>
                Сессии проводятся онлайн или очно для пар и семей (с детьми от 8 лет). Вместе с вами будут работать два терапевта одновременно — я и моя коллега. Мы создаем безопасное и сбалансированное пространство, где слышан будет каждый, а работа будет направлена на взаимодействие между вами, а не на поиск «виноватого».
              </p>

              <h3 className="font-bold text-navy-900 text-xl mt-6">Как мы начнем?</h3>
              <p>
                В переписке мы с вами обозначим главную тему-вопрос. Если он будет подходить больше для индивидуальной работы, я предложу контакты коллег или помогу перестроить для семейной консультации.
              </p>
              <p>
                После утверждения запроса, попрошу вас и каждого участника сессии ответить на несколько коротких вопросов — это поможет нам с ко-терапевтом подготовиться к работе над вашим случаем. Время бронируется после утверждения и предоплаты за сутки.
              </p>

              <h3 className="font-bold text-navy-900 text-xl mt-6">Что будет на самой встрече?</h3>
              <p>
                Познакомимся, обсудим правила, а затем вместе исследуем ваш запрос. Мы будем смотреть на ситуацию как на живую систему, где все элементы связаны. В процессе, вместе с ко-терапевтом, мы можем использовать техники работы с телом, гипнотерапию или ДПДГ — если это поможет сдвинуть ситуацию с мёртвой точки. В конце мы подведём итоги и договоримся о простых шагах.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mt-8">
                <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                  <h4 className="font-serif text-xl text-navy-900 mb-3 font-bold">Главные плюсы ко-терапии</h4>
                  <ul className="space-y-3 text-base">
                    <li><strong>Справедливость:</strong> Два терапевта гарантируют, что ни один из партнеров не будет «любимчиком». Мы держим баланс.</li>
                    <li><strong>Глубина и скорость:</strong> Наши разные профессиональные оптики позволяют быстро находить корень проблемы.</li>
                    <li><strong>Участники на сессии:</strong> Работаем с парами или целой семьей.</li>
                  </ul>
                </div>
                <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                  <h4 className="font-serif text-xl text-navy-900 mb-3 font-bold">Возможные темы на сессию</h4>
                  <ul className="space-y-2 text-base list-disc pl-4 marker:text-gold-500">
                    <li>Ощущение, что вы разговариваете на разных языках.</li>
                    <li>Затяжные конфликты, обиды, недоверие (в т.ч. измены).</li>
                    <li>Чувство, что вы «застряли».</li>
                    <li>Сложности с детьми: непослушание, агрессия.</li>
                    <li>Утрата близости и желания в паре.</li>
                  </ul>
                </div>
              </div>

              <div className="mt-6 p-6 bg-yellow-50 border border-yellow-200 rounded-md text-base text-yellow-900">
                <strong>Частый вопрос: «А можно мне прийти без партнера/семьи?»</strong><br/>
                К сожалению, нет. Семейная ко-терапия — это работа с отношениями, их "тканью". Чтобы изменить танец, нужны оба танцора.
              </div>

              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <a 
                  href={LINKS.scheduling} 
                  target="_blank" 
                  rel="noreferrer"
                  aria-label="Записаться"
                  className="inline-flex items-center justify-center gap-2 bg-gold-600 text-white px-8 py-4 text-xs font-bold uppercase tracking-widest hover:bg-gold-700 transition-all"
                >
                  Записаться
                </a>
                <span className="flex items-center text-sm text-slate-500 font-bold">
                  * Доступны пакеты из 3 или 5 встреч
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- DETAIL SECTION 3: BUSINESS PSYCHOLOGY --- */}
      <section id="service-business" className="py-20 bg-white border-t border-navy-900/5">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="flex items-center gap-4 mb-8">
            <div className="p-3 bg-navy-800 text-white rounded-full"><Target size={24} /></div>
            <div>
              <h2 className="font-serif text-3xl md:text-4xl text-navy-900 font-bold">Бизнес-Психология</h2>
              <p className="text-amber-700 uppercase tracking-widest text-xs font-bold mt-1">для команд, отделов, подразделений</p>
            </div>
          </div>

          <div className="grid md:grid-cols-12 gap-12">
            <div className="md:col-span-12 space-y-6 text-slate-600 leading-relaxed text-lg">
              <div className="flex gap-6 text-sm font-bold text-navy-900 border-b border-gray-100 pb-6 uppercase tracking-wider">
                <span className="flex items-center gap-2"><Clock size={16} className="text-gold-500"/> от 90 минут</span>
                <span className="flex items-center gap-2"><MapPin size={16} className="text-gold-500"/> Онлайн / Очно (РФ, Алжир)</span>
              </div>

              <p>
                <strong>Суть подхода:</strong> Я объединяю психологию системных изменений с практическим опытом управления международными проектами. Мы работаем не только с личными запросами, но и с «психологией» бизнес-процессов: коммуникацией, лидерством, групповой динамикой и кризисным управлением.
              </p>

              <h3 className="font-bold text-navy-900 text-xl mt-6">Как строится работа?</h3>
              
              <div className="space-y-6 border-l-2 border-slate-200 pl-6 ml-2">
                <div>
                  <h4 className="font-bold text-navy-900">1. Предварительный анализ</h4>
                  <p className="text-base mt-1">Определяем фокус: это запрос от лица компании/отдела или личный запрос руководителя. Это позволяет мне подготовить наиболее релевантный инструментарий.</p>
                </div>
                <div>
                  <h4 className="font-bold text-navy-900">2. Сессия (60-75 минут)</h4>
                  <p className="text-base mt-1">
                    <strong>Контракт:</strong> Четко договариваемся о цели и конфиденциальности.<br/>
                    <strong>Погружение:</strong> Работаем через призму системного и стратегического подходов. Исследуем скрытые механизмы и роли.<br/>
                    <strong>Решения:</strong> Формулируем конкретные шаги, ролевые модели и изменения в процессах.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-navy-900">3. Итог и развитие</h4>
                  <p className="text-base mt-1">Резюмируем инсайты. Если требуется глубокая трансформация, я предложу оптимальный формат.</p>
                </div>
              </div>

              <div className="bg-navy-900 text-slate-300 p-8 rounded-lg mt-8">
                <h3 className="font-serif text-xl text-white mb-6 font-bold">Возможно, вы столкнулись с такими вопросами:</h3>
                <div className="grid gap-6">
                    <ul className="space-y-4 text-base italic">
                      <li className="flex gap-3">
                        <span className="text-gold-500 font-bold">"</span>
                        Как нам запустить поток идей, чтобы команда начала креативить, а не повторять наработанное?
                      </li>
                      <li className="flex gap-3">
                        <span className="text-gold-500 font-bold">"</span>
                        Мы внедрили этот модный фреймворк, но что-то лучше не стало, только рутины добавилось
                      </li>
                      <li className="flex gap-3">
                        <span className="text-gold-500 font-bold">"</span>
                        Мы общаемся только на корпоративах, как будто в остальное время этого времени и нет
                      </li>
                      <li className="flex gap-3">
                        <span className="text-gold-500 font-bold">"</span>
                        У нас постоянно говорят про дружный коллектив и "мы - семья", но это только внешне
                      </li>
                    </ul>
                </div>
              </div>

              <div className="mt-6">
                <p className="font-bold text-navy-900">Стоимость по договоренности.</p>
                <p className="text-base mt-1">Доступны пакеты на цикл встреч и корпоративные программы.</p>
              </div>

              <a 
                href={LINKS.tgChat} 
                target="_blank" 
                rel="noreferrer"
                aria-label="Обсудить бизнес задачу"
                className="inline-flex items-center gap-2 bg-navy-900 text-white px-8 py-4 text-xs font-bold uppercase tracking-widest hover:bg-navy-800 transition-all mt-4"
              >
                Обсудить задачу <ArrowRight size={16}/>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* --- REVIEWS (SOCIAL PROOF) --- */}
      <section id="reviews" className="py-20 bg-white overflow-hidden">
        <div className="container mx-auto px-6 mb-12">
          <h2 className="font-serif text-4xl text-center mb-4 font-bold">Отзывы</h2>
          <p className="text-center text-slate-400 text-sm uppercase tracking-widest font-bold">Листайте вправо</p>
        </div>
        <div className="overflow-x-auto pb-8 px-6 -mx-6 md:mx-0 snap-x snap-mandatory hide-scrollbar">
          <div className="flex gap-8 w-max px-6">
            {reviewImages.map((imgSrc, idx) => (
              <div key={idx} className="snap-center shrink-0">
                <div className="w-[300px] h-[500px] bg-neutral-900 rounded-xl overflow-hidden shadow-soft border border-neutral-800 flex items-center justify-center">
                   <img 
                      src={imgSrc} 
                      alt={`Review ${idx + 1}`} 
                      width="300" height="500"
                      loading="lazy"
                      className="w-full h-full object-contain"
                   />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer id="contact" className="bg-navy-900 text-white py-24">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="font-serif text-5xl mb-8 leading-none font-bold">
                Готовы к <br /> <span className="italic text-gold-500 font-normal">изменениям?</span>
              </h2>
              <p className="text-slate-400 max-w-md mb-12 text-lg">
                Работа начинается с диагностики. Напишите мне в удобном мессенджере, обсудим и подберем время.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-md">
                <a href={LINKS.tgChat} aria-label="Telegram Личный" className="flex items-center justify-center gap-3 bg-white/10 hover:bg-[#229ED9] hover:text-white px-6 py-4 text-xs font-bold uppercase tracking-widest transition-all rounded-sm">
                  <MessageCircle size={18} /> Личный Telegram
                </a>
                <a href={LINKS.whatsapp} aria-label="WhatsApp" className="flex items-center justify-center gap-3 bg-white/10 hover:bg-[#25D366] hover:text-white px-6 py-4 text-xs font-bold uppercase tracking-widest transition-all rounded-sm">
                  <MessageCircle size={18} /> WhatsApp
                </a>
                <a href={LINKS.tgChannel} aria-label="Telegram Канал" className="flex items-center justify-center gap-3 bg-white/10 hover:bg-[#229ED9] hover:text-white px-6 py-4 text-xs font-bold uppercase tracking-widest transition-all rounded-sm">
                  <Send size={18} /> Telegram Канал
                </a>
                <a href={LINKS.instagram} aria-label="Instagram" className="flex items-center justify-center gap-3 bg-white/10 hover:bg-[#E1306C] hover:text-white px-6 py-4 text-xs font-bold uppercase tracking-widest transition-all rounded-sm">
                  <Instagram size={18} /> Instagram
                </a>
                <a href={LINKS.youtube} aria-label="YouTube" className="flex items-center justify-center gap-3 bg-white/10 hover:bg-[#FF0000] hover:text-white px-6 py-4 text-xs font-bold uppercase tracking-widest transition-all rounded-sm sm:col-span-2">
                  <Youtube size={18} /> YouTube
                </a>
              </div>
            </div>
            
            <div className="flex flex-col h-full justify-between space-y-8">
               {/* Spacer to push content down or keep it balanced */}
               <div className="hidden md:block"></div> 
               
               <div className="flex flex-col gap-6">
                 <div>
                   <strong className="text-white block mb-3 uppercase tracking-widest text-xs font-bold">Документы</strong>
                   <ul className="space-y-3 text-sm text-slate-400">
                     <li><a href="#" className="hover:text-gold-500 transition-colors">Договор оферты</a></li>
                     <li><a href="#" className="hover:text-gold-500 transition-colors">Политика конфиденциальности</a></li>
                   </ul>
                 </div>
                 <div className="h-px bg-white/10 w-full"></div>
                 <p className="text-xs leading-relaxed text-slate-500">
                   © 2026 Anastasiia Druzhinina. <br/>
                   Услуги не являются медицинской деятельностью. При клинических состояниях обратитесь к врачу-психиатру.
                 </p>
               </div>
            </div>
          </div>
        </div>
      </footer>
      </main>

    </div>
  );
};

export default App;