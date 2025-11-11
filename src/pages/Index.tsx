import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const portfolioItems = [
    { id: 1, image: 'https://cdn.poehali.dev/files/695c02e6-af78-495d-96ab-004921abc306.jpeg', title: 'Дизайнерские свечи с эпоксидной смолой' },
    { id: 2, image: 'https://cdn.poehali.dev/files/695c02e6-af78-495d-96ab-004921abc306.jpeg', title: 'Свечи с витражным декором' },
    { id: 3, image: 'https://cdn.poehali.dev/files/695c02e6-af78-495d-96ab-004921abc306.jpeg', title: 'Картины из эпоксидной смолы' },
    { id: 4, image: 'https://cdn.poehali.dev/files/695c02e6-af78-495d-96ab-004921abc306.jpeg', title: 'Авторская бижутерия' },
    { id: 5, image: 'https://cdn.poehali.dev/files/695c02e6-af78-495d-96ab-004921abc306.jpeg', title: 'Декоративные композиции' },
    { id: 6, image: 'https://cdn.poehali.dev/files/695c02e6-af78-495d-96ab-004921abc306.jpeg', title: 'Интерьерные свечи' },
  ];

  const catalogItems = [
    { id: 1, name: 'Свечи с витражом', price: '2500₽', category: 'Свечи' },
    { id: 2, name: 'Картина из эпоксидки 30×40', price: '5000₽', category: 'Картины' },
    { id: 3, name: 'Серьги из смолы', price: '1200₽', category: 'Бижутерия' },
    { id: 4, name: 'Подсвечник золотой', price: '1800₽', category: 'Декор' },
    { id: 5, name: 'Набор свечей "Элегант"', price: '4500₽', category: 'Свечи' },
    { id: 6, name: 'Кулон с сухоцветами', price: '1500₽', category: 'Бижутерия' },
  ];

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-sm z-50 border-b border-border">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-serif font-bold text-primary">ArtDecor</h1>
            <div className="hidden md:flex gap-8">
              {[
                { id: 'home', label: 'Главная' },
                { id: 'portfolio', label: 'Портфолио' },
                { id: 'catalog', label: 'Каталог' },
                { id: 'order', label: 'Как заказать' },
                { id: 'contacts', label: 'Контакты' },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-medium transition-colors hover:text-accent ${
                    activeSection === item.id ? 'text-accent' : 'text-foreground'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      <section id="home" className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-5xl md:text-7xl font-serif font-bold text-primary mb-6 leading-tight">
                Ручная работа<br />с душой
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Создаю уникальные декоративные предметы: дизайнерские свечи, 
                картины из эпоксидной смолы и авторскую бижутерию. Каждая работа — 
                это отражение вашего стиля и индивидуальности.
              </p>
              <Button 
                onClick={() => scrollToSection('catalog')} 
                className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-6 text-lg"
              >
                Смотреть работы
              </Button>
            </div>
            <div className="animate-scale-in">
              <img
                src="https://cdn.poehali.dev/files/695c02e6-af78-495d-96ab-004921abc306.jpeg"
                alt="Декоративные свечи"
                className="rounded-2xl shadow-2xl w-full h-[500px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-20 px-6 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4 text-center">
            Портфолио работ
          </h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Каждая работа создана вручную с любовью к деталям
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {portfolioItems.map((item, index) => (
              <Card 
                key={item.id} 
                className="overflow-hidden group hover:shadow-xl transition-all duration-300 animate-fade-in border-border"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-0">
                  <div className="relative overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <div className="p-4">
                    <h3 className="font-serif text-lg font-semibold text-primary">{item.title}</h3>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="catalog" className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4 text-center">
            Каталог товаров
          </h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Готовые работы и возможность индивидуального заказа
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {catalogItems.map((item, index) => (
              <Card 
                key={item.id} 
                className="hover:shadow-xl transition-all duration-300 animate-fade-in border-border"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="mb-4">
                    <span className="inline-block px-3 py-1 bg-accent/20 text-accent text-sm rounded-full">
                      {item.category}
                    </span>
                  </div>
                  <h3 className="font-serif text-xl font-semibold text-primary mb-2">{item.name}</h3>
                  <p className="text-2xl font-bold text-accent mb-4">{item.price}</p>
                  <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                    Заказать
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="order" className="py-20 px-6 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-12 text-center">
            Как заказать
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: 'MessageCircle', title: 'Напишите мне', text: 'Опишите, что хотите заказать или выберите из каталога' },
              { icon: 'Palette', title: 'Обсудим детали', text: 'Согласуем дизайн, размеры и сроки изготовления' },
              { icon: 'Package', title: 'Получите работу', text: 'Доставка или самовывоз готового изделия' },
            ].map((step, index) => (
              <Card key={index} className="text-center p-8 hover:shadow-lg transition-all duration-300 border-border animate-fade-in" style={{ animationDelay: `${index * 0.15}s` }}>
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center">
                    <Icon name={step.icon as any} size={32} className="text-accent" />
                  </div>
                </div>
                <h3 className="font-serif text-xl font-semibold text-primary mb-3">{step.title}</h3>
                <p className="text-muted-foreground">{step.text}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4 text-center">
            Контакты
          </h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Свяжитесь со мной удобным способом
          </p>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                  <Icon name="Phone" size={24} className="text-accent" />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-semibold text-primary mb-1">Телефон</h3>
                  <p className="text-muted-foreground">+7 (XXX) XXX-XX-XX</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                  <Icon name="Mail" size={24} className="text-accent" />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-semibold text-primary mb-1">Email</h3>
                  <p className="text-muted-foreground">artdecor@example.com</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                  <Icon name="Instagram" size={24} className="text-accent" />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-semibold text-primary mb-1">Instagram</h3>
                  <p className="text-muted-foreground">@artdecor_handmade</p>
                </div>
              </div>
            </div>
            <Card className="p-6 border-border">
              <CardContent className="p-0">
                <h3 className="font-serif text-xl font-semibold text-primary mb-4">Написать мне</h3>
                <form className="space-y-4">
                  <div>
                    <Input placeholder="Ваше имя" className="border-border" />
                  </div>
                  <div>
                    <Input type="email" placeholder="Email" className="border-border" />
                  </div>
                  <div>
                    <Textarea placeholder="Ваше сообщение" rows={4} className="border-border" />
                  </div>
                  <Button type="submit" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                    Отправить
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-primary text-primary-foreground py-8 px-6">
        <div className="container mx-auto max-w-6xl text-center">
          <p className="font-serif text-lg">ArtDecor — Ручная работа с душой</p>
          <p className="text-sm mt-2 opacity-80">© 2024 Все права защищены</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
