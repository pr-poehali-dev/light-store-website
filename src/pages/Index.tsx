import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Index = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const products = [
    { 
      name: 'Подвесные светильники', 
      image: 'https://cdn.poehali.dev/projects/fa007d26-b27b-41ea-9902-d501dca2b6b5/files/02103663-070f-4afe-94ff-5bf9e6efeab1.jpg', 
      desc: 'Современные решения для любого интерьера'
    },
    { 
      name: 'Торшеры', 
      image: 'https://cdn.poehali.dev/projects/fa007d26-b27b-41ea-9902-d501dca2b6b5/files/c16f013c-ae62-4527-a455-06bd91353bde.jpg', 
      desc: 'Классика и элегантность в каждой детали'
    },
    { 
      name: 'Настольные лампы', 
      image: 'https://cdn.poehali.dev/projects/fa007d26-b27b-41ea-9902-d501dca2b6b5/files/f14e1186-6fd8-4da0-aae3-c5e6fa5d6c03.jpg', 
      desc: 'Функциональность и стиль для вашего рабочего пространства'
    }
  ];

  const benefits = [
    { icon: 'Lightbulb', title: 'Качество', desc: 'Только проверенные производители' },
    { icon: 'Shield', title: 'Гарантия', desc: 'До 2 лет на всю продукцию' },
    { icon: 'Truck', title: 'Доставка', desc: 'Быстрая доставка по городу' },
    { icon: 'BadgePercent', title: 'Скидки', desc: 'Специальные предложения' }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-lg bg-background/90 border-b border-border shadow-sm">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl md:text-3xl font-bold gradient-text">✨ SvetoLux</h1>
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
                  className="text-sm font-medium transition-colors hover:text-primary"
                >
                  {section.label}
                </button>
              ))}
            </div>
            <Button className="gradient-bg hover:opacity-90 transition-opacity" onClick={() => scrollToSection('contacts')}>
              <Icon name="Phone" size={18} />
              <span className="hidden sm:inline">Связаться</span>
            </Button>
          </div>
        </div>
      </nav>

      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 gradient-bg opacity-10" />
        <div className="container mx-auto px-6 text-center relative z-10">
          <h2 className="text-5xl md:text-7xl font-bold mb-6 gradient-text animate-fade-in">
            Освети свой мир
          </h2>
          <p className="text-lg md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto">
            Магазин дизайнерских светильников в вашем городе. Создаем идеальную атмосферу для вашего дома.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button size="lg" className="gradient-bg text-lg px-8 py-6" onClick={() => scrollToSection('catalog')}>
              Смотреть каталог
              <Icon name="ArrowRight" size={20} />
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-primary/50 hover:bg-primary/10" onClick={() => scrollToSection('contacts')}>
              <Icon name="Phone" size={20} />
              Консультация
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 bg-card/30">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {benefits.map((benefit, idx) => (
              <Card key={idx} className="p-6 text-center hover:shadow-lg transition-shadow">
                <Icon name={benefit.icon as any} size={40} className="mx-auto mb-4 text-primary" />
                <h3 className="font-bold mb-2">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground">{benefit.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="catalog" className="py-24 px-6">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center gradient-text">Наш каталог</h2>
          <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
            Широкий выбор светильников для любого интерьера и бюджета
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {products.map((product, idx) => (
              <Card key={idx} className="overflow-hidden group hover:shadow-2xl transition-all">
                <div className="relative h-80">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                    <div>
                      <h3 className="text-white text-2xl font-bold mb-2">{product.name}</h3>
                      <p className="text-white/90 text-sm">{product.desc}</p>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" className="gradient-bg" onClick={() => scrollToSection('contacts')}>
              Запросить полный каталог
              <Icon name="FileText" size={20} />
            </Button>
          </div>
        </div>
      </section>

      <section id="about" className="py-24 px-6 bg-card/30">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center gradient-text">О нас</h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">SvetoLux — магазин светильников</h3>
              <p className="text-muted-foreground mb-4">
                Мы специализируемся на продаже качественных светильников для дома и офиса. 
                В нашем ассортименте представлены как классические, так и современные модели 
                от ведущих производителей.
              </p>
              <p className="text-muted-foreground mb-6">
                Наши консультанты помогут подобрать идеальное освещение для любого помещения, 
                учитывая ваши пожелания и особенности интерьера.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Icon name="CheckCircle" size={24} className="text-primary" />
                  <span>Более 500 моделей в наличии</span>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="CheckCircle" size={24} className="text-primary" />
                  <span>Профессиональная консультация</span>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="CheckCircle" size={24} className="text-primary" />
                  <span>Гарантия качества на всю продукцию</span>
                </div>
              </div>
            </div>
            
            <Card className="overflow-hidden h-96">
              <img
                src="https://cdn.poehali.dev/projects/fa007d26-b27b-41ea-9902-d501dca2b6b5/files/02103663-070f-4afe-94ff-5bf9e6efeab1.jpg"
                alt="Наш магазин"
                className="w-full h-full object-cover"
              />
            </Card>
          </div>
        </div>
      </section>

      <section id="contacts" className="py-24 px-6">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center gradient-text">Контакты</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8">
              <h3 className="text-2xl font-bold mb-6">Свяжитесь с нами</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Icon name="MapPin" size={24} className="text-primary mt-1" />
                  <div>
                    <p className="font-semibold mb-1">Адрес</p>
                    <p className="text-muted-foreground">г. Москва, ул. Примерная, д. 10</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Icon name="Phone" size={24} className="text-primary mt-1" />
                  <div>
                    <p className="font-semibold mb-1">Телефон</p>
                    <a href="tel:+79991234567" className="text-muted-foreground hover:text-primary transition-colors">
                      +7 (999) 123-45-67
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Icon name="Mail" size={24} className="text-primary mt-1" />
                  <div>
                    <p className="font-semibold mb-1">Email</p>
                    <a href="mailto:info@svetolux.ru" className="text-muted-foreground hover:text-primary transition-colors">
                      info@svetolux.ru
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Icon name="Clock" size={24} className="text-primary mt-1" />
                  <div>
                    <p className="font-semibold mb-1">Режим работы</p>
                    <p className="text-muted-foreground">Пн-Пт: 10:00 - 20:00</p>
                    <p className="text-muted-foreground">Сб-Вс: 11:00 - 18:00</p>
                  </div>
                </div>
              </div>
              
              <Button className="w-full mt-8 gradient-bg" size="lg">
                <Icon name="MessageCircle" size={20} />
                Написать в WhatsApp
              </Button>
            </Card>

            <Card className="p-8 bg-gradient-to-br from-primary/10 to-secondary/10">
              <h3 className="text-2xl font-bold mb-4">Получить консультацию</h3>
              <p className="text-muted-foreground mb-6">
                Оставьте заявку, и мы свяжемся с вами в ближайшее время для подбора 
                идеального освещения под ваши задачи.
              </p>
              
              <div className="space-y-4">
                <div className="p-4 bg-background rounded-lg">
                  <p className="font-semibold mb-2">💡 Бесплатная консультация</p>
                  <p className="text-sm text-muted-foreground">Поможем подобрать светильники под ваш интерьер</p>
                </div>
                
                <div className="p-4 bg-background rounded-lg">
                  <p className="font-semibold mb-2">📐 Расчет освещения</p>
                  <p className="text-sm text-muted-foreground">Рассчитаем необходимое количество света для помещения</p>
                </div>
                
                <div className="p-4 bg-background rounded-lg">
                  <p className="font-semibold mb-2">🚚 Доставка и монтаж</p>
                  <p className="text-sm text-muted-foreground">Доставим и установим светильники под ключ</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-card border-t border-border py-8">
        <div className="container mx-auto px-6 text-center">
          <h3 className="text-xl font-bold gradient-text mb-2">SvetoLux</h3>
          <p className="text-sm text-muted-foreground">
            © 2024 Магазин светильников. Все права защищены.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
