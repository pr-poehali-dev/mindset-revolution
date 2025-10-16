import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';
import NeuralBackground from '@/components/NeuralBackground';

const Index = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const h1Variants = [
    "Измените мышление — измените бизнес и жизнь за один вечер",
    "Почему ваш бизнес стоит на месте? Дело в мышлении",
    "От выгорания к прорыву: практические инструменты для предпринимателей",
    "Работаете на износ, но результатов нет? Проблема не в усилиях",
    "Секреты мышления успешных: что знают те, кто растёт быстрее"
  ];

  const [currentH1, setCurrentH1] = useState(0);

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="font-heading text-2xl font-bold text-primary">ПроЖИзнь</div>
          <div className="hidden md:flex gap-6">
            {['Программа', 'О спикере', 'Кому подходит', 'Отзывы', 'Регистрация'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase().replace(/\s+/g, '-'))}
                className="text-sm font-medium text-foreground hover:text-primary transition-colors"
              >
                {item}
              </button>
            ))}
          </div>
          <Button 
            onClick={() => window.open('https://t.me/darya_tsybulskaya22', '_blank')}
            className="animate-pulse-gentle"
          >
            Записаться
          </Button>
        </div>
      </nav>

      <section className="pt-32 pb-20 px-4 bg-gradient-to-br from-primary/5 via-background to-accent/5 relative overflow-hidden">
        <NeuralBackground />
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in-up">
              <div className="inline-block">
                <span className="px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-semibold">
                  Бесплатный мастер-класс
                </span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold leading-tight text-secondary">
                {h1Variants[currentH1]}
              </h1>
              
              <p className="text-lg md:text-xl text-muted-foreground">
                Бесплатный офлайн мастер-класс от эксперта по ресурсам мозга Станислава Цыбульского. 
                <span className="font-semibold text-foreground"> 20 октября, Владивосток</span>
              </p>

              <div className="flex flex-col gap-4 pt-4">
                <Button 
                  size="lg" 
                  className="w-full md:w-auto text-lg px-8 py-6 animate-pulse-gentle"
                  onClick={() => window.open('https://t.me/darya_tsybulskaya22', '_blank')}
                >
                  Забронировать место бесплатно
                </Button>
                <div className="flex items-center gap-2 text-sm">
                  <Icon name="Users" size={18} className="text-primary" />
                  <span className="font-semibold text-primary">Осталось 23 места из 50</span>
                </div>
              </div>

              <div className="flex gap-4 text-xs pt-4">
                {h1Variants.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentH1(index)}
                    className={`h-1.5 rounded-full transition-all ${
                      index === currentH1 ? 'w-8 bg-primary' : 'w-1.5 bg-gray-300'
                    }`}
                    aria-label={`Вариант заголовка ${index + 1}`}
                  />
                ))}
              </div>
            </div>

            <div className="relative animate-scale-in">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-accent/20 rounded-3xl blur-2xl opacity-50" />
              <img
                src="https://cdn.poehali.dev/projects/fe07abdb-01e7-47be-bfad-ede739027c70/files/553420aa-8dd1-4e06-8ae8-2f2961194796.jpg"
                alt="Станислав Цыбульский"
                className="relative rounded-3xl shadow-2xl w-full object-cover object-top aspect-[3/4] border-4 border-primary/20"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-card">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center space-y-6 animate-fade-in">
            <div className="mx-auto w-fit">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" className="mx-auto">
                <path d="M12 2L12 16" stroke="url(#gradient1)" strokeWidth="3" strokeLinecap="round"/>
                <circle cx="12" cy="21" r="1.5" fill="url(#gradient2)"/>
                <defs>
                  <linearGradient id="gradient1" x1="12" y1="2" x2="12" y2="16" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#ff6b35"/>
                    <stop offset="1" stopColor="#f7931e"/>
                  </linearGradient>
                  <linearGradient id="gradient2" x1="12" y1="19.5" x2="12" y2="22.5" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#ff6b35"/>
                    <stop offset="1" stopColor="#f7931e"/>
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-secondary">
              Знакомо ли вам это ощущение?
            </h2>
            <div className="space-y-4 text-lg text-muted-foreground max-w-3xl mx-auto">
              <p>
                Вы работаете по 12 часов в сутки, вкладываете все силы в бизнес, но результаты не оправдывают ожиданий. 
                Доход стоит на месте или растет слишком медленно. Личная жизнь страдает — не хватает времени и энергии.
              </p>
              <p>
                Вы знаете, что нужно делать, но почему-то не делаете или делаете без радости. 
                <span className="font-semibold text-secondary"> Причина — как работает ваше мышление.</span>
              </p>
            </div>
            <Card className="bg-amber-950/20 border-amber-700/30 max-w-2xl mx-auto mt-8">
              <CardContent className="pt-6">
                <p className="text-sm italic text-amber-200">
                  "78% предпринимателей испытывают выгорание, лишь 23% понимают причину" — Harvard Business Review
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="space-y-8 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-secondary text-center">
              Что происходит, когда вы игнорируете сигналы
            </h2>
            <div className="space-y-6 text-lg text-muted-foreground">
              <p>
                Игнорирование приводит к эффекту снежного кома. Через полгода выгорание усиливается, бизнес становится обузой.
              </p>
              <p>
                Последствия — раздражительность и конфликты, потеря прибыли и отношений. 
                <span className="font-semibold text-destructive"> Предприниматели, не работающие с мышлением, в 3 раза чаще закрывают бизнес в течение 5 лет.</span>
              </p>
            </div>
            <Card className="bg-gradient-to-br from-secondary/10 to-destructive/10 border-secondary/30">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <Icon name="User" size={40} className="text-secondary flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-secondary mb-2">Случай из практики:</p>
                    <p className="text-muted-foreground">
                      Александр, владелец IT-компании, попал в больницу с паническими атаками. 
                      Причина — не в бизнес-модели, а в мышлении.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-card">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center space-y-6 animate-fade-in">
            <Icon name="Sparkles" size={48} className="mx-auto text-accent" />
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-secondary">
              Но есть способ изменить всё — и он проще, чем кажется
            </h2>
            <div className="space-y-4 text-lg text-muted-foreground max-w-3xl mx-auto">
              <p>
                Мышление можно перепрограммировать. Нейропластичность мозга доказана наукой.
              </p>
              <p>
                Тысячи предпринимателей уже изменили свои установки и добились баланса. 
                На мастер-классе вы узнаете практические техники для изменений.
              </p>
            </div>
            <Card className="bg-accent/20 border-accent/40 max-w-2xl mx-auto mt-8">
              <CardContent className="pt-6">
                <p className="text-sm italic text-accent-foreground">
                  "Когда я понял, что могу управлять мышлением, всё изменилось — рост бизнеса на 60%." — Дмитрий К.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="программа" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-secondary mb-4">
              Как работает мастер-класс и что вы получите
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="animate-fade-in-up">
              <CardContent className="pt-6">
                <h3 className="text-xl font-heading font-bold text-secondary mb-4">Вы получите:</h3>
                <ul className="space-y-3">
                  {[
                    'Диагностика текущего состояния — выявление ментальных барьеров',
                    'Инструменты работы с мышлением — 3 техники управления состоянием',
                    'Стратегия личностного роста — баланс между бизнесом и жизнью',
                    'Персональные рекомендации — Q&A со спикером',
                    'Доступ к комьюнити программы "ПроЖИзнь"'
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Icon name="CheckCircle2" size={20} className="text-accent flex-shrink-0 mt-1" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              <CardContent className="pt-6">
                <h3 className="text-xl font-heading font-bold text-secondary mb-4">Программа:</h3>
                <ul className="space-y-4">
                  {[
                    { time: '19:00', text: 'Знакомство и цели' },
                    { time: '19:15', text: 'Как мозг создает ограничения' },
                    { time: '19:45', text: 'Техники разблокировки мышления, практика' },
                    { time: '20:30', text: 'Стратегия роста: от инсайта к действию' },
                    { time: '21:00', text: 'Q&A, нетворкинг' }
                  ].map((item, index) => (
                    <li key={index} className="flex gap-4">
                      <span className="font-semibold text-primary flex-shrink-0">{item.time}</span>
                      <span className="text-muted-foreground">{item.text}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="о-спикере" className="py-20 px-4 bg-gradient-to-br from-secondary/10 to-primary/10">
        <div className="container mx-auto max-w-4xl">
          <div className="grid md:grid-cols-3 gap-8 items-center animate-fade-in">
            <div className="md:col-span-1">
              <div className="relative">
                <div className="absolute -inset-3 bg-gradient-to-br from-primary/30 to-accent/30 rounded-3xl blur-xl opacity-40" />
                <img
                  src="https://cdn.poehali.dev/files/52396a75-116d-46ea-8a9f-3e1ea73ed3b2.png"
                  alt="Станислав Цыбульский"
                  className="relative rounded-2xl shadow-2xl w-full aspect-[3/4] object-cover object-center border-4 border-primary/20"
                />
              </div>
            </div>
            <div className="md:col-span-2 space-y-4">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-secondary">
                Станислав Цыбульский
              </h2>
              <p className="text-lg text-muted-foreground">
                Тренер по личностному росту, создатель программы "ПроЖИзнь". 
                12 лет опыта, более 150 мастер-классов, более 3000 выпускников.
              </p>
              <div className="flex flex-wrap gap-3 pt-4">
                <div className="px-4 py-2 bg-primary/10 rounded-lg">
                  <span className="text-sm font-semibold text-primary">Эксперт по нейропластичности</span>
                </div>
                <div className="px-4 py-2 bg-accent/10 rounded-lg">
                  <span className="text-sm font-semibold text-accent">Сертифицированный коуч ICF</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="кому-подходит" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-secondary mb-4">
              Этот мастер-класс для вас, если вы:
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {[
              { icon: 'Briefcase', text: 'Предприниматель, ищущий рост' },
              { icon: 'Users', text: 'Руководитель для мотивации команды' },
              { icon: 'TrendingUp', text: 'Специалист для карьерного роста' },
              { icon: 'Flame', text: 'Испытываете выгорание и ищете баланс' },
              { icon: 'Heart', text: 'Хотите улучшить отношения через работу с мышлением' }
            ].map((item, index) => (
              <Card key={index} className="animate-fade-in-up hover:shadow-lg transition-shadow" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <Icon name={item.icon as any} size={24} className="text-primary" />
                    </div>
                    <p className="text-muted-foreground pt-2">{item.text}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="отзывы" className="py-20 px-4 bg-card">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-secondary mb-4">
              Отзывы участников программы "ПроЖИзнь"
            </h2>
            <p className="text-lg text-muted-foreground">Более 3000 участников</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                name: 'Андрей Соколов',
                role: 'Владелец маркетингового агентства',
                text: 'Выручка выросла на 35%. Нашёл баланс между работой и семьёй.',
                rating: 5,
                photo: 'https://cdn.poehali.dev/projects/fe07abdb-01e7-47be-bfad-ede739027c70/files/33a2f3aa-27e0-49fa-9cb6-2f10f1273676.jpg'
              },
              {
                name: 'Елена Марченко',
                role: 'HR-директор',
                text: 'Техники работают — улучшились отношения в команде.',
                rating: 5,
                photo: 'https://cdn.poehali.dev/projects/fe07abdb-01e7-47be-bfad-ede739027c70/files/e4cad2d8-fb26-48ac-9e38-ba73fea01586.jpg'
              }
            ].map((testimonial, index) => (
              <Card key={index} className="animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="pt-6">
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Icon key={i} name="Star" size={18} className="text-amber-400 fill-amber-400" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 italic">"{testimonial.text}"</p>
                  <div className="flex items-center gap-3">
                    <img 
                      src={testimonial.photo} 
                      alt={testimonial.name}
                      className="w-14 h-14 rounded-full object-cover border-2 border-primary/20"
                    />
                    <div>
                      <p className="font-semibold text-secondary">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-secondary mb-4">
              Видео отзывы участников
            </h2>
            <p className="text-lg text-muted-foreground">Настоящие истории изменений</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                name: 'Ирина Волкова',
                role: 'Основатель IT-стартапа',
                videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
                preview: 'https://cdn.poehali.dev/projects/fe07abdb-01e7-47be-bfad-ede739027c70/files/e4cad2d8-fb26-48ac-9e38-ba73fea01586.jpg'
              },
              {
                name: 'Максим Петров',
                role: 'Управляющий партнёр',
                videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
                preview: 'https://cdn.poehali.dev/projects/fe07abdb-01e7-47be-bfad-ede739027c70/files/33a2f3aa-27e0-49fa-9cb6-2f10f1273676.jpg'
              }
            ].map((video, index) => (
              <Card key={index} className="overflow-hidden animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-0">
                  <div className="aspect-video bg-muted relative group cursor-pointer">
                    <iframe
                      className="w-full h-full"
                      src={video.videoUrl}
                      title={`Видео отзыв ${video.name}`}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3">
                      <img 
                        src={video.preview} 
                        alt={video.name}
                        className="w-12 h-12 rounded-full object-cover border-2 border-primary/20"
                      />
                      <div>
                        <p className="font-semibold text-secondary">{video.name}</p>
                        <p className="text-sm text-muted-foreground">{video.role}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="регистрация" className="py-20 px-4 bg-gradient-to-br from-primary via-primary to-accent">
        <div className="container mx-auto max-w-2xl">
          <div className="text-center space-y-8 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
              Зарегистрироваться на мастер-класс
            </h2>
            <p className="text-white/90 text-lg">
              Свяжитесь с нами в Telegram для быстрой регистрации
            </p>
            <Button 
              size="lg" 
              className="bg-white text-primary hover:bg-white/90 text-lg px-12 py-7 animate-pulse-gentle shadow-2xl"
              onClick={() => window.open('https://t.me/darya_tsybulskaya22', '_blank')}
            >
              <Icon name="Send" size={24} className="mr-2" />
              Написать в Telegram
            </Button>
            <p className="text-white/70 text-sm">@darya_tsybulskaya22</p>
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-secondary mb-4">
              Условия участия
            </h2>
          </div>
          <Card className="bg-accent/10 border-accent/40">
            <CardContent className="pt-6">
              <div className="text-center space-y-4">
                <p className="text-lg text-muted-foreground">
                  Мастер-класс бесплатный. Нет скрытых платежей и обязательств. 
                  Только ценные инструменты и честная поддержка.
                </p>
                <div className="flex justify-center gap-8 pt-4">
                  <div className="flex flex-col items-center gap-2">
                    <Icon name="Shield" size={32} className="text-accent" />
                    <span className="text-sm font-semibold">Безопасность</span>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <Icon name="Gift" size={32} className="text-accent" />
                    <span className="text-sm font-semibold">Бесплатно</span>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <Icon name="Check" size={32} className="text-accent" />
                    <span className="text-sm font-semibold">Нет обязательств</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="py-20 px-4 bg-card">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-secondary mb-4">
              Часто задаваемые вопросы
            </h2>
          </div>
          <Accordion type="single" collapsible className="space-y-4">
            {[
              {
                question: 'Сколько длится мастер-класс?',
                answer: '2,5 часа — теория, практика, Q&A, нетворкинг.'
              },
              {
                question: 'Нужна ли подготовка?',
                answer: 'Мастер-класс для всех, уровень знаний не важен.'
              },
              {
                question: 'Что взять с собой?',
                answer: 'Блокнот и ручку для заметок.'
              },
              {
                question: 'Будет ли запись?',
                answer: 'Нет, только в живом формате для максимального эффекта.'
              },
              {
                question: 'Как добраться?',
                answer: 'Владивосток, ул. Тигровая 16а, есть парковка.'
              },
              {
                question: 'Что если не получится прийти?',
                answer: 'Добавим вас в лист ожидания на следующий мастер-класс.'
              }
            ].map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="bg-background rounded-lg px-6 border">
                <AccordionTrigger className="text-left font-semibold text-secondary hover:no-underline">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-r from-primary to-accent">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="space-y-8 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white">
              Сомневаетесь? Вот 3 причины прийти уже сейчас
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                'Бесплатно и без обязательств',
                'Практические техники, которые работают',
                'Сообщество единомышленников'
              ].map((reason, index) => (
                <Card key={index} className="bg-white/10 backdrop-blur-sm border-white/20">
                  <CardContent className="pt-6">
                    <p className="text-white font-semibold">{reason}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button 
                size="lg" 
                className="bg-white text-primary hover:bg-white/90 animate-pulse-gentle"
                onClick={() => window.open('https://t.me/darya_tsybulskaya22', '_blank')}
              >
                Да, хочу изменить свою жизнь
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white/10"
                onClick={() => scrollToSection('о-спикере')}
              >
                Узнать больше о "ПроЖИзнь"
              </Button>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-12 px-4 bg-secondary text-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="font-heading font-bold text-xl mb-4">Контакты</h3>
              <div className="space-y-2 text-white/80">
                <div className="flex items-center gap-2">
                  <Icon name="Mail" size={18} />
                  <span>info@prozhizn.ru</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Phone" size={18} />
                  <span>+7-914-704-73-92</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="MapPin" size={18} />
                  <span>Владивосток, ул. Тигровая 16а</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-heading font-bold text-xl mb-4">Программа "ПроЖИзнь"</h3>
              <p className="text-white/80">
                Комплексная программа личностного и профессионального развития для предпринимателей
              </p>
            </div>

            <div>
              <h3 className="font-heading font-bold text-xl mb-4">Социальные сети</h3>
              <div className="flex gap-4">
                <Button size="icon" variant="outline" className="border-white/30 hover:bg-white/10">
                  <Icon name="Instagram" size={20} />
                </Button>
                <Button size="icon" variant="outline" className="border-white/30 hover:bg-white/10">
                  <Icon name="Facebook" size={20} />
                </Button>
                <Button size="icon" variant="outline" className="border-white/30 hover:bg-white/10">
                  <Icon name="Send" size={20} />
                </Button>
              </div>
            </div>
          </div>

          <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/60">
            <p>© 2025 Станислав Цыбульский. Программа "ПроЖИзнь"</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition-colors">Политика конфиденциальности</a>
              <a href="#" className="hover:text-white transition-colors">Пользовательское соглашение</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;