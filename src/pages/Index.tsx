import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Index = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const products = [
    {
      id: 1,
      name: 'Подвесной светильник AURORA',
      price: '24 990 ₽',
      description: 'Современный дизайн с регулируемой яркостью'
    },
    {
      id: 2,
      name: 'Торшер ELEGANCE',
      price: '18 500 ₽',
      description: 'Элегантное решение для гостиной'
    },
    {
      id: 3,
      name: 'Настольная лампа MINIMAL',
      price: '12 990 ₽',
      description: 'Минималистичный дизайн для рабочего стола'
    },
    {
      id: 4,
      name: 'Люстра CRYSTAL',
      price: '45 000 ₽',
      description: 'Хрустальная люстра премиум-класса'
    },
    {
      id: 5,
      name: 'Бра MODERN',
      price: '9 990 ₽',
      description: 'Настенный светильник в стиле модерн'
    },
    {
      id: 6,
      name: 'Подвесной светильник LOFT',
      price: '16 500 ₽',
      description: 'Индустриальный стиль для интерьера'
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-lg bg-background/90 border-b border-border shadow-lg">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 gradient-bg rounded-full flex items-center justify-center">
                <Icon name="Lightbulb" size={24} />
              </div>
              <h1 className="text-2xl font-bold gradient-text">LightStyle</h1>
            </div>
            <div className="hidden md:flex gap-8">
              {[
                { id: 'home', label: 'Главная' },
                { id: 'catalog', label: 'Каталог' },
                { id: 'about', label: 'О нас' },
                { id: 'contacts', label: 'Контакты' }
              ].map((section) => (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className="text-sm font-medium transition-colors hover:text-primary text-muted-foreground hover:scale-105"
                >
                  {section.label}
                </button>
              ))}
            </div>
            <Button className="gradient-bg">
              <Icon name="Phone" size={18} />
              Позвонить
            </Button>
          </div>
        </div>
      </nav>

      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 gradient-bg opacity-10 animate-gradient-shift bg-[length:200%_200%]" />
        <div className="container mx-auto px-6 text-center relative z-10 animate-fade-in pt-20">
          <div className="mb-8">
            <div className="inline-block p-4 bg-primary/10 rounded-full mb-6">
              <Icon name="Sparkles" size={48} className="text-primary" />
            </div>
          </div>
          <h2 className="text-5xl md:text-7xl font-bold mb-6 gradient-text">
            Магазин Светильников
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto">
            Создайте идеальную атмосферу в вашем доме с нашими дизайнерскими светильниками премиум-класса
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button size="lg" className="gradient-bg text-lg px-10 py-6" onClick={() => scrollToSection('catalog')}>
              Смотреть каталог
              <Icon name="ArrowRight" size={20} />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="text-lg px-10 py-6 border-primary/50 hover:bg-primary/10"
              onClick={() => scrollToSection('contacts')}
            >
              Связаться с нами
              <Icon name="MessageCircle" size={20} />
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 max-w-4xl mx-auto">
            <Card className="p-6 bg-background/50 backdrop-blur border-border hover:border-primary/50 transition-all hover:scale-105">
              <Icon name="Award" size={40} className="mx-auto mb-4 text-primary" />
              <h3 className="font-bold text-lg mb-2">Премиум качество</h3>
              <p className="text-sm text-muted-foreground">Только европейские бренды</p>
            </Card>
            <Card className="p-6 bg-background/50 backdrop-blur border-border hover:border-primary/50 transition-all hover:scale-105">
              <Icon name="Truck" size={40} className="mx-auto mb-4 text-primary" />
              <h3 className="font-bold text-lg mb-2">Быстрая доставка</h3>
              <p className="text-sm text-muted-foreground">По Москве за 1-2 дня</p>
            </Card>
            <Card className="p-6 bg-background/50 backdrop-blur border-border hover:border-primary/50 transition-all hover:scale-105">
              <Icon name="Shield" size={40} className="mx-auto mb-4 text-primary" />
              <h3 className="font-bold text-lg mb-2">Гарантия 2 года</h3>
              <p className="text-sm text-muted-foreground">На все светильники</p>
            </Card>
          </div>
        </div>
      </section>

      <section id="catalog" className="py-24 px-6 bg-card/30">
        <div className="container mx-auto animate-fade-in">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">Наш каталог</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Широкий выбор светильников для любого интерьера
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {products.map((product) => (
              <Card 
                key={product.id}
                className="group overflow-hidden bg-background border-border hover:border-primary/50 transition-all hover:scale-105 hover:shadow-xl"
              >
                <div className="aspect-square bg-gradient-to-br from-primary/5 to-primary/20 flex items-center justify-center p-12">
                  <Icon name="Lightbulb" size={120} className="text-primary/40 group-hover:text-primary/60 transition-colors" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    {product.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-primary">{product.price}</span>
                    <Button size="sm" className="gradient-bg">
                      <Icon name="ShoppingCart" size={16} />
                      Заказать
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" variant="outline" className="border-primary/50 hover:bg-primary/10">
              Показать все товары
              <Icon name="ArrowRight" size={20} />
            </Button>
          </div>
        </div>
      </section>

      <section id="about" className="py-24 px-6">
        <div className="container mx-auto max-w-5xl animate-fade-in">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">О магазине</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                <strong className="text-foreground">LightStyle</strong> — это магазин дизайнерских светильников премиум-класса. 
                Мы помогаем создавать уникальную атмосферу в вашем доме через свет.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Каждый светильник в нашей коллекции — это сочетание современного дизайна, 
                качественных материалов и инновационных технологий освещения.
              </p>
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 gradient-bg rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon name="Check" size={24} />
                  </div>
                  <span className="text-foreground">Более 500 моделей светильников</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 gradient-bg rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon name="Check" size={24} />
                  </div>
                  <span className="text-foreground">Работаем с 2015 года</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 gradient-bg rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon name="Check" size={24} />
                  </div>
                  <span className="text-foreground">Профессиональная консультация дизайнера</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <Card className="p-8 text-center bg-gradient-to-br from-primary/10 to-primary/5 border-primary/30">
                <div className="text-4xl font-bold gradient-text mb-2">500+</div>
                <p className="text-sm text-muted-foreground">Моделей в каталоге</p>
              </Card>
              <Card className="p-8 text-center bg-gradient-to-br from-primary/10 to-primary/5 border-primary/30">
                <div className="text-4xl font-bold gradient-text mb-2">10+</div>
                <p className="text-sm text-muted-foreground">Лет опыта</p>
              </Card>
              <Card className="p-8 text-center bg-gradient-to-br from-primary/10 to-primary/5 border-primary/30">
                <div className="text-4xl font-bold gradient-text mb-2">2000+</div>
                <p className="text-sm text-muted-foreground">Довольных клиентов</p>
              </Card>
              <Card className="p-8 text-center bg-gradient-to-br from-primary/10 to-primary/5 border-primary/30">
                <div className="text-4xl font-bold gradient-text mb-2">100%</div>
                <p className="text-sm text-muted-foreground">Гарантия качества</p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-card/30">
        <div className="container mx-auto max-w-6xl animate-fade-in">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">Доставка и оплата</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="p-8 bg-background border-border hover:border-primary/50 transition-all">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-14 h-14 gradient-bg rounded-full flex items-center justify-center flex-shrink-0">
                  <Icon name="Truck" size={28} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">Доставка</h3>
                </div>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <Icon name="CheckCircle2" size={20} className="text-primary mt-1 flex-shrink-0" />
                  <span className="text-muted-foreground">
                    <strong className="text-foreground">По Москве:</strong> бесплатно от 15 000 ₽, 1-2 дня
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Icon name="CheckCircle2" size={20} className="text-primary mt-1 flex-shrink-0" />
                  <span className="text-muted-foreground">
                    <strong className="text-foreground">По МО:</strong> от 500 ₽, 2-3 дня
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Icon name="CheckCircle2" size={20} className="text-primary mt-1 flex-shrink-0" />
                  <span className="text-muted-foreground">
                    <strong className="text-foreground">По России:</strong> транспортными компаниями, 3-7 дней
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Icon name="CheckCircle2" size={20} className="text-primary mt-1 flex-shrink-0" />
                  <span className="text-muted-foreground">
                    <strong className="text-foreground">Самовывоз:</strong> бесплатно из шоурума
                  </span>
                </li>
              </ul>
            </Card>

            <Card className="p-8 bg-background border-border hover:border-primary/50 transition-all">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-14 h-14 gradient-bg rounded-full flex items-center justify-center flex-shrink-0">
                  <Icon name="CreditCard" size={28} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">Оплата</h3>
                </div>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <Icon name="CheckCircle2" size={20} className="text-primary mt-1 flex-shrink-0" />
                  <span className="text-muted-foreground">Банковские карты (Visa, MasterCard, Мир)</span>
                </li>
                <li className="flex items-start gap-3">
                  <Icon name="CheckCircle2" size={20} className="text-primary mt-1 flex-shrink-0" />
                  <span className="text-muted-foreground">Наличными при получении</span>
                </li>
                <li className="flex items-start gap-3">
                  <Icon name="CheckCircle2" size={20} className="text-primary mt-1 flex-shrink-0" />
                  <span className="text-muted-foreground">Банковский перевод для юр. лиц</span>
                </li>
                <li className="flex items-start gap-3">
                  <Icon name="CheckCircle2" size={20} className="text-primary mt-1 flex-shrink-0" />
                  <span className="text-muted-foreground">Рассрочка 0-0-12 от банков-партнеров</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      <section id="contacts" className="py-24 px-6">
        <div className="container mx-auto max-w-4xl animate-fade-in">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">Контакты</h2>
            <p className="text-lg text-muted-foreground">Свяжитесь с нами удобным способом</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <Card className="p-8 bg-background/50 border-border hover:border-primary/50 transition-all text-center">
              <Icon name="Phone" size={40} className="mx-auto mb-4 text-primary" />
              <h3 className="text-xl font-bold mb-2">Телефон</h3>
              <p className="text-2xl font-bold text-primary mb-2">+7 (495) 123-45-67</p>
              <p className="text-sm text-muted-foreground">Ежедневно с 10:00 до 21:00</p>
            </Card>

            <Card className="p-8 bg-background/50 border-border hover:border-primary/50 transition-all text-center">
              <Icon name="Mail" size={40} className="mx-auto mb-4 text-primary" />
              <h3 className="text-xl font-bold mb-2">Email</h3>
              <p className="text-xl font-bold text-primary mb-2">info@lightstyle.ru</p>
              <p className="text-sm text-muted-foreground">Ответим в течение 24 часов</p>
            </Card>

            <Card className="p-8 bg-background/50 border-border hover:border-primary/50 transition-all text-center">
              <Icon name="MapPin" size={40} className="mx-auto mb-4 text-primary" />
              <h3 className="text-xl font-bold mb-2">Адрес шоурума</h3>
              <p className="text-muted-foreground mb-2">г. Москва, ул. Тверская, д. 15</p>
              <p className="text-sm text-muted-foreground">Пн-Вс: 10:00 - 21:00</p>
            </Card>

            <Card className="p-8 bg-background/50 border-border hover:border-primary/50 transition-all text-center">
              <Icon name="MessageCircle" size={40} className="mx-auto mb-4 text-primary" />
              <h3 className="text-xl font-bold mb-2">Мессенджеры</h3>
              <p className="text-muted-foreground mb-2">WhatsApp / Telegram</p>
              <p className="text-xl font-bold text-primary">+7 (495) 123-45-67</p>
            </Card>
          </div>

          <Card className="p-10 bg-gradient-to-br from-primary/10 to-primary/5 border-primary/30">
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-4">Есть вопросы?</h3>
              <p className="text-muted-foreground mb-6">
                Оставьте заявку, и наш менеджер свяжется с вами в течение 15 минут
              </p>
              <Button size="lg" className="gradient-bg text-lg px-12 py-6">
                <Icon name="Phone" size={20} />
                Заказать звонок
              </Button>
            </div>
          </Card>
        </div>
      </section>

      <footer className="py-12 px-6 bg-card/50 border-t border-border">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 gradient-bg rounded-full flex items-center justify-center">
                  <Icon name="Lightbulb" size={24} />
                </div>
                <h3 className="text-xl font-bold gradient-text">LightStyle</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                Магазин дизайнерских светильников премиум-класса
              </p>
            </div>

            <div>
              <h4 className="font-bold mb-4">Навигация</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <button onClick={() => scrollToSection('catalog')} className="hover:text-primary transition-colors">
                    Каталог
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection('about')} className="hover:text-primary transition-colors">
                    О нас
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection('contacts')} className="hover:text-primary transition-colors">
                    Контакты
                  </button>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Контакты</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <Icon name="Phone" size={16} className="text-primary" />
                  +7 (495) 123-45-67
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Mail" size={16} className="text-primary" />
                  info@lightstyle.ru
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="MapPin" size={16} className="text-primary" />
                  г. Москва, ул. Тверская, 15
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
            <p>© 2024 LightStyle. Все права защищены</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
