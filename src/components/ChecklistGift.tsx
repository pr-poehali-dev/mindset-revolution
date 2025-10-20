import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import Icon from '@/components/ui/icon';

const ChecklistGift = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Запрос чек-листа:%0A%0AEmail: ${email}`;
    window.open(`https://t.me/darya_tsybulskaya22?text=${text}`, '_blank');
    setEmail('');
    setIsFormOpen(false);
  };

  const checklist = [
    "Тест на определение уровня выгорания (5 вопросов)",
    "7 признаков токсичного мышления в бизнесе",
    "Упражнение 'Точка энергии' для быстрого восстановления",
    "Матрица приоритетов: что делегировать прямо сейчас",
    "3 вопроса для проверки целей на жизнеспособность",
    "Техника 'Стоп-кран' для выхода из стресса за 2 минуты",
    "План действий на первые 7 дней после мастер-класса"
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-accent/5 via-background to-primary/5 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto max-w-5xl relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-semibold">
              <Icon name="Gift" size={18} />
              <span>Бесплатный подарок</span>
            </div>

            <h2 className="text-3xl md:text-4xl font-heading font-bold text-secondary">
              Чек-лист для трансформации мышления предпринимателя
            </h2>

            <p className="text-lg text-muted-foreground">
              Практическое руководство, которое поможет вам начать менять мышление уже сегодня — 
              до участия в мастер-классе
            </p>

            <div className="space-y-3">
              {checklist.slice(0, 4).map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-r from-primary to-accent flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Icon name="Check" size={14} className="text-white" />
                  </div>
                  <span className="text-foreground">{item}</span>
                </div>
              ))}
              <div className="pl-9 text-muted-foreground italic">
                + ещё 3 практических инструмента...
              </div>
            </div>

            {!isFormOpen ? (
              <Button
                size="lg"
                className="w-full md:w-auto text-lg px-8 py-6 bg-gradient-to-r from-primary to-accent hover:opacity-90 animate-pulse-gentle"
                onClick={() => setIsFormOpen(true)}
              >
                <Icon name="Gift" size={20} className="mr-2" />
                Получить в подарок
              </Button>
            ) : (
              <Card className="border-2 border-primary/20 shadow-xl animate-fade-in">
                <CardContent className="pt-6">
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="text-sm font-semibold text-foreground mb-2 block">
                        Укажите ваш email:
                      </label>
                      <Input
                        type="email"
                        placeholder="your@email.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="border-gray-300"
                      />
                    </div>
                    <div className="flex gap-3">
                      <Button
                        type="submit"
                        className="flex-1 bg-gradient-to-r from-primary to-accent hover:opacity-90"
                      >
                        Отправить
                      </Button>
                      <Button
                        type="button"
                        variant="outline"
                        onClick={() => setIsFormOpen(false)}
                      >
                        Отмена
                      </Button>
                    </div>
                  </form>
                </CardContent>
              </Card>
            )}

            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Icon name="Lock" size={16} />
              <span>Мы не передаём ваши данные третьим лицам</span>
            </div>
          </div>

          <div className="relative animate-scale-in">
            <div className="absolute -inset-4 bg-gradient-to-r from-amber-500/30 to-yellow-500/30 rounded-2xl blur-2xl opacity-60" />
            <Card className="relative bg-black border-4 border-amber-400 shadow-2xl shadow-amber-500/20">
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div className="text-center pb-4 border-b border-amber-400/50">
                    <h3 className="text-2xl font-heading font-bold text-amber-400 mb-2">
                      ЧЕК-ЛИСТ
                    </h3>
                    <p className="text-sm text-white/90">
                      Трансформация мышления предпринимателя
                    </p>
                  </div>

                  {checklist.map((item, index) => (
                    <div key={index} className="flex items-start gap-3 group">
                      <div className="w-5 h-5 border-2 border-amber-400 rounded flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-amber-400 transition-colors">
                        <Icon name="Check" size={12} className="text-black opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                      <span className="text-sm text-white leading-snug">{item}</span>
                    </div>
                  ))}

                  <div className="pt-4 border-t border-amber-400/50 flex items-center justify-center gap-2 text-xs text-amber-400">
                    <Icon name="Sparkles" size={14} className="text-amber-400" />
                    <span>Готовый инструмент для работы</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChecklistGift;