import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const ConsultantWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Новая заявка с сайта:%0A%0AИмя: ${formData.name}%0AТелефон: ${formData.phone}%0AСообщение: ${formData.message}`;
    window.open(`https://t.me/darya_tsybulskaya22?text=${text}`, '_blank');
    setFormData({ name: '', phone: '', message: '' });
    setIsOpen(false);
  };

  return (
    <>
      <div className="fixed bottom-6 right-6 z-50">
        {isOpen && (
          <Card className="mb-4 w-80 md:w-96 shadow-2xl animate-fade-in">
            <CardHeader className="bg-gradient-to-r from-primary to-accent text-white rounded-t-lg">
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg font-heading">Онлайн-консультант</CardTitle>
                <Button
                  size="icon"
                  variant="ghost"
                  className="hover:bg-white/20 text-white"
                  onClick={() => setIsOpen(false)}
                >
                  <Icon name="X" size={20} />
                </Button>
              </div>
              <p className="text-sm text-white/90 mt-2">
                Оставьте заявку, и мы свяжемся с вами в ближайшее время
              </p>
            </CardHeader>
            <CardContent className="pt-6">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Input
                    placeholder="Ваше имя"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="border-gray-300"
                  />
                </div>
                <div>
                  <Input
                    type="tel"
                    placeholder="Телефон"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                    className="border-gray-300"
                  />
                </div>
                <div>
                  <Textarea
                    placeholder="Ваш вопрос или комментарий"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={3}
                    className="border-gray-300 resize-none"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-primary to-accent hover:opacity-90"
                >
                  Отправить заявку
                </Button>
              </form>
            </CardContent>
          </Card>
        )}

        <Button
          size="lg"
          className="bg-gradient-to-r from-primary to-accent hover:opacity-90 shadow-2xl rounded-full h-16 w-16 p-0 animate-pulse-gentle"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <Icon name="X" size={28} />
          ) : (
            <Icon name="MessageCircle" size={28} />
          )}
        </Button>
      </div>
    </>
  );
};

export default ConsultantWidget;
