import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import Icon from '@/components/ui/icon';

interface RegistrationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const RegistrationModal = ({ isOpen, onClose }: RegistrationModalProps) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');

    try {
      const response = await fetch('https://functions.poehali.dev/e8840ffb-e4e3-4471-8e41-2c0555f725ed', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          phone,
          email: email || undefined,
          lead_type: 'masterclass'
        })
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setSubmitMessage('Спасибо! Вы успешно зарегистрированы на мастер-класс.');
        setName('');
        setPhone('');
        setEmail('');
        setTimeout(() => {
          onClose();
          setSubmitMessage('');
        }, 2500);
      } else {
        setSubmitMessage('Ошибка регистрации. Попробуйте ещё раз.');
      }
    } catch (error) {
      setSubmitMessage('Ошибка соединения. Проверьте интернет.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fade-in">
      <Card className="w-full max-w-md shadow-2xl animate-scale-in">
        <CardContent className="pt-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-2xl font-heading font-bold text-secondary">
                Регистрация на мастер-класс
              </h3>
              <p className="text-sm text-muted-foreground mt-1">
                20 октября, Владивосток
              </p>
            </div>
            <Button
              size="icon"
              variant="ghost"
              onClick={onClose}
              disabled={isSubmitting}
            >
              <Icon name="X" size={20} />
            </Button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="text-sm font-semibold text-foreground mb-2 block">
                Ваше имя:
              </label>
              <Input
                type="text"
                placeholder="Иван Иванов"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="border-gray-300"
              />
            </div>

            <div>
              <label className="text-sm font-semibold text-foreground mb-2 block">
                Телефон:
              </label>
              <Input
                type="tel"
                placeholder="+7 999 123-45-67"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
                className="border-gray-300"
              />
            </div>

            <div>
              <label className="text-sm font-semibold text-foreground mb-2 block">
                Email (необязательно):
              </label>
              <Input
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="border-gray-300"
              />
            </div>

            {submitMessage && (
              <div className={`text-sm p-3 rounded ${
                submitMessage.includes('Спасибо') 
                  ? 'bg-green-50 text-green-700 border border-green-200' 
                  : 'bg-red-50 text-red-700 border border-red-200'
              }`}>
                {submitMessage}
              </div>
            )}

            <div className="flex gap-3 pt-2">
              <Button
                type="submit"
                disabled={isSubmitting}
                className="flex-1 bg-gradient-to-r from-primary to-accent hover:opacity-90 disabled:opacity-50"
              >
                {isSubmitting ? 'Отправка...' : 'Зарегистрироваться'}
              </Button>
              <Button
                type="button"
                variant="outline"
                onClick={onClose}
                disabled={isSubmitting}
              >
                Отмена
              </Button>
            </div>
          </form>

          <div className="flex items-center gap-2 text-xs text-muted-foreground mt-4">
            <Icon name="Lock" size={14} />
            <span>Мы не передаём ваши данные третьим лицам</span>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default RegistrationModal;
