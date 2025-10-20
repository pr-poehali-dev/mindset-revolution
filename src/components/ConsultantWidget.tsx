import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const ConsultantWidget = () => {
  const [showTooltip, setShowTooltip] = useState(false);

  const openTelegram = () => {
    window.open('https://t.me/darya_tsybulskaya22', '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {showTooltip && (
        <Card className="shadow-xl animate-fade-in mr-20">
          <CardContent className="p-4 max-w-xs">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-primary to-accent flex items-center justify-center flex-shrink-0">
                <Icon name="User" size={20} className="text-white" />
              </div>
              <div className="flex-1">
                <p className="font-semibold text-sm mb-1">Онлайн-консультант</p>
                <p className="text-sm text-muted-foreground">
                  Здравствуйте! Есть вопросы о мастер-классе? Напишите мне в Telegram 👋
                </p>
              </div>
              <Button
                size="icon"
                variant="ghost"
                className="h-6 w-6 flex-shrink-0"
                onClick={() => setShowTooltip(false)}
              >
                <Icon name="X" size={16} />
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      <div className="relative">
        <Button
          size="lg"
          className="bg-gradient-to-r from-primary to-accent hover:opacity-90 shadow-2xl rounded-full h-16 w-16 p-0 animate-pulse-gentle"
          onClick={openTelegram}
          onMouseEnter={() => setShowTooltip(true)}
          onMouseLeave={() => setTimeout(() => setShowTooltip(false), 3000)}
        >
          <Icon name="Send" size={28} />
        </Button>
        
        <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white animate-pulse"></div>
      </div>
    </div>
  );
};

export default ConsultantWidget;
