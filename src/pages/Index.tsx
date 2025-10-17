import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [selectedCategory, setSelectedCategory] = useState('Все');

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const baseProducts = [
    { name: 'Подвесной светильник ГЕОМЕТРИЯ', image: 'https://cdn.poehali.dev/projects/fa007d26-b27b-41ea-9902-d501dca2b6b5/files/02103663-070f-4afe-94ff-5bf9e6efeab1.jpg', category: 'Подвесные' },
    { name: 'Торшер ЭЛЕГАНТ', image: 'https://cdn.poehali.dev/projects/fa007d26-b27b-41ea-9902-d501dca2b6b5/files/c16f013c-ae62-4527-a455-06bd91353bde.jpg', category: 'Торшеры' },
    { name: 'Настольная лампа ПРЕМИУМ', image: 'https://cdn.poehali.dev/projects/fa007d26-b27b-41ea-9902-d501dca2b6b5/files/f14e1186-6fd8-4da0-aae3-c5e6fa5d6c03.jpg', category: 'Настольные' }
  ];

  const products = Array.from({ length: 50 }, (_, i) => {
    const baseProduct = baseProducts[i % 3];
    const prices = ['8 990', '12 990', '15 200', '18 500', '21 000', '24 300', '27 500', '32 000'];
    return {
      id: i + 1,
      name: `${baseProduct.name} ${i + 1}`,
      price: `${prices[i % prices.length]} ₽`,
      image: baseProduct.image,
      category: baseProduct.category
    };
  });

  return (
    <div className="min-h-screen bg-background text-foreground">
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-lg bg-background/80 border-b border-border">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold gradient-text">SvetoLux</h1>
            <div className="hidden md:flex gap-8">
              {['home', 'catalog', 'calculations', 'about', 'delivery', 'contacts'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    activeSection === section ? 'text-primary' : 'text-muted-foreground'
                  }`}
                >
                  {section === 'home' && 'Главная'}
                  {section === 'catalog' && 'Каталог'}
                  {section === 'calculations' && 'Расчеты'}
                  {section === 'about' && 'О нас'}
                  {section === 'delivery' && 'Доставка'}
                  {section === 'contacts' && 'Контакты'}
                </button>
              ))}
            </div>
            <Button className="gradient-bg">
              <Icon name="ShoppingCart" size={20} />
            </Button>
          </div>
        </div>
      </nav>

      <section className="relative py-20 overflow-hidden bg-card/30">
        <div className="flex animate-[scroll_40s_linear_infinite] whitespace-nowrap">
          {[...Array(3)].map((_, setIndex) => (
            <div key={setIndex} className="flex gap-6 px-3">
              {baseProducts.map((product, idx) => (
                <div key={`${setIndex}-${idx}`} className="inline-block">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-64 w-80 object-cover rounded-xl border-2 border-primary/30 hover:border-primary transition-all hover:scale-105"
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>

      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 gradient-bg opacity-20 animate-gradient-shift bg-[length:200%_200%]" />
        <div className="container mx-auto px-6 text-center relative z-10 animate-fade-in">
          <h2 className="text-6xl md:text-8xl font-bold mb-6 gradient-text">
            Освети свой мир
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto">
            Дизайнерские светильники для создания идеальной атмосферы в вашем доме
          </p>
          <div className="flex gap-4 justify-center">
            <Button size="lg" className="gradient-bg text-lg px-8 py-6" onClick={() => scrollToSection('catalog')}>
              Смотреть каталог
              <Icon name="ArrowRight" size={20} />
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-primary/50 hover:bg-primary/10">
              Консультация
            </Button>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <Icon name="ChevronDown" size={32} className="text-primary" />
        </div>
      </section>

      <section id="catalog" className="py-24 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-5xl font-bold mb-4 gradient-text">Каталог</h2>
            <p className="text-xl text-muted-foreground mb-8">Выберите идеальный светильник для вашего интерьера</p>
            
            <div className="flex flex-wrap gap-3 justify-center mb-8">
              {['Все', 'Подвесные', 'Торшеры', 'Настольные'].map((category) => (
                <Button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  variant={selectedCategory === category ? 'default' : 'outline'}
                  className={selectedCategory === category ? 'gradient-bg' : 'border-primary/50 hover:bg-primary/10'}
                >
                  {category}
                </Button>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              <Card className="relative overflow-hidden group">
                <img
                  src="https://cdn.poehali.dev/projects/fa007d26-b27b-41ea-9902-d501dca2b6b5/files/887c9206-8aed-4ca2-a1a0-58d549773d61.jpg"
                  alt="Светильники в интерьере гостиной"
                  className="w-full h-96 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent flex items-end p-8">
                  <div className="text-left">
                    <h3 className="text-2xl font-bold mb-2">В интерьере гостиной</h3>
                    <p className="text-muted-foreground">Подвесные светильники создают атмосферу</p>
                  </div>
                </div>
              </Card>
              <Card className="relative overflow-hidden group">
                <img
                  src="https://cdn.poehali.dev/projects/fa007d26-b27b-41ea-9902-d501dca2b6b5/files/cfb11fda-4ccf-4706-ad5e-4eb07f5a432b.jpg"
                  alt="Светильники в интерьере спальни"
                  className="w-full h-96 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent flex items-end p-8">
                  <div className="text-left">
                    <h3 className="text-2xl font-bold mb-2">В интерьере спальни</h3>
                    <p className="text-muted-foreground">Торшеры для уютного освещения</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products
              .filter(product => selectedCategory === 'Все' || product.category === selectedCategory)
              .map((product, index) => (
              <Card
                key={product.id}
                className="group overflow-hidden bg-card border-border hover:border-primary/50 transition-all duration-300 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-primary to-secondary text-white px-4 py-1 rounded-full text-sm font-semibold">
                    {product.category}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{product.name}</h3>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold gradient-text">{product.price}</span>
                    <Button className="gradient-bg">
                      <Icon name="ShoppingCart" size={18} />
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="calculations" className="py-24 px-6">
        <div className="container mx-auto max-w-6xl animate-fade-in">
          <h2 className="text-5xl font-bold mb-12 text-center gradient-text">Светотехнические расчеты</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <Card className="p-8 bg-card border-border hover:border-primary/50 transition-all">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 gradient-bg rounded-full flex items-center justify-center flex-shrink-0">
                  <Icon name="Calculator" size={32} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-4">Расчет освещенности</h3>
                  <p className="text-muted-foreground mb-4">Рассчитаем необходимое количество светильников для вашего помещения по СНиП и ГОСТ</p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <Icon name="Check" size={18} className="text-primary" />
                      Жилые помещения: 150-200 люкс
                    </li>
                    <li className="flex items-center gap-2">
                      <Icon name="Check" size={18} className="text-primary" />
                      Офисы: 300-500 люкс
                    </li>
                    <li className="flex items-center gap-2">
                      <Icon name="Check" size={18} className="text-primary" />
                      Торговые залы: 500-750 люкс
                    </li>
                  </ul>
                </div>
              </div>
            </Card>

            <Card className="p-8 bg-card border-border hover:border-primary/50 transition-all">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 gradient-bg rounded-full flex items-center justify-center flex-shrink-0">
                  <Icon name="Lightbulb" size={32} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-4">Подбор оборудования</h3>
                  <p className="text-muted-foreground mb-4">Поможем выбрать оптимальные светильники под ваши задачи и бюджет</p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <Icon name="Check" size={18} className="text-primary" />
                      Подбор по мощности и световому потоку
                    </li>
                    <li className="flex items-center gap-2">
                      <Icon name="Check" size={18} className="text-primary" />
                      Цветовая температура (2700K-6500K)
                    </li>
                    <li className="flex items-center gap-2">
                      <Icon name="Check" size={18} className="text-primary" />
                      Индекс цветопередачи (CRI > 80)
                    </li>
                  </ul>
                </div>
              </div>
            </Card>
          </div>

          <Card className="p-10 bg-gradient-to-br from-card to-card/50 border-primary/30">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold mb-4 gradient-text">Калькулятор освещения</h3>
              <p className="text-muted-foreground">Заполните данные для расчета необходимого освещения</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div>
                <label className="block text-sm font-medium mb-2">Площадь помещения (м²)</label>
                <input
                  type="number"
                  placeholder="Например: 25"
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:border-primary focus:outline-none transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Тип помещения</label>
                <select className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:border-primary focus:outline-none transition-colors">
                  <option>Жилая комната</option>
                  <option>Кухня</option>
                  <option>Офис</option>
                  <option>Торговый зал</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Высота потолка (м)</label>
                <input
                  type="number"
                  placeholder="Например: 3"
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:border-primary focus:outline-none transition-colors"
                />
              </div>
            </div>
            <div className="text-center">
              <Button size="lg" className="gradient-bg text-lg px-12 py-6">
                <Icon name="Zap" size={20} />
                Рассчитать освещение
              </Button>
            </div>
          </Card>
        </div>
      </section>

      <section id="about" className="py-24 px-6 bg-card/50">
        <div className="container mx-auto max-w-4xl text-center animate-fade-in">
          <h2 className="text-5xl font-bold mb-8 gradient-text">О нас</h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            LUMINA — это магазин дизайнерских светильников премиум-класса. Мы создаем атмосферу и настроение в вашем доме через свет.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            Каждый светильник в нашей коллекции — это произведение искусства, сочетающее современный дизайн, качественные материалы и инновационные технологии освещения.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="p-6 bg-background/50 rounded-xl border border-border hover:border-primary/50 transition-all">
              <div className="w-16 h-16 mx-auto mb-4 gradient-bg rounded-full flex items-center justify-center">
                <Icon name="Award" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-2">Премиум качество</h3>
              <p className="text-muted-foreground">Только проверенные бренды и производители</p>
            </div>
            <div className="p-6 bg-background/50 rounded-xl border border-border hover:border-primary/50 transition-all">
              <div className="w-16 h-16 mx-auto mb-4 gradient-bg rounded-full flex items-center justify-center">
                <Icon name="Palette" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-2">Дизайнерские решения</h3>
              <p className="text-muted-foreground">Уникальные модели для любого интерьера</p>
            </div>
            <div className="p-6 bg-background/50 rounded-xl border border-border hover:border-primary/50 transition-all">
              <div className="w-16 h-16 mx-auto mb-4 gradient-bg rounded-full flex items-center justify-center">
                <Icon name="Shield" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-2">Гарантия</h3>
              <p className="text-muted-foreground">2 года гарантии на все светильники</p>
            </div>
          </div>
        </div>
      </section>

      <section id="delivery" className="py-24 px-6">
        <div className="container mx-auto max-w-4xl animate-fade-in">
          <h2 className="text-5xl font-bold mb-12 text-center gradient-text">Доставка</h2>
          <div className="space-y-6">
            <Card className="p-8 bg-card border-border hover:border-primary/50 transition-all">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 gradient-bg rounded-full flex items-center justify-center flex-shrink-0">
                  <Icon name="Truck" size={24} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-3">По Москве и МО</h3>
                  <p className="text-muted-foreground mb-2">Бесплатная доставка при заказе от 15 000 ₽</p>
                  <p className="text-muted-foreground">Доставка в течение 1-3 дней</p>
                </div>
              </div>
            </Card>
            <Card className="p-8 bg-card border-border hover:border-primary/50 transition-all">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 gradient-bg rounded-full flex items-center justify-center flex-shrink-0">
                  <Icon name="MapPin" size={24} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-3">По России</h3>
                  <p className="text-muted-foreground mb-2">Доставка транспортными компаниями</p>
                  <p className="text-muted-foreground">Сроки доставки 3-7 дней</p>
                </div>
              </div>
            </Card>
            <Card className="p-8 bg-card border-border hover:border-primary/50 transition-all">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 gradient-bg rounded-full flex items-center justify-center flex-shrink-0">
                  <Icon name="Package" size={24} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-3">Самовывоз</h3>
                  <p className="text-muted-foreground mb-2">Забрать заказ можно в нашем шоуруме</p>
                  <p className="text-muted-foreground">г. Москва, ул. Дизайнерская, д. 10</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section id="contacts" className="py-24 px-6 bg-card/50">
        <div className="container mx-auto max-w-4xl text-center animate-fade-in">
          <h2 className="text-5xl font-bold mb-12 gradient-text">Контакты</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <Card className="p-8 bg-background/50 border-border hover:border-primary/50 transition-all">
              <Icon name="Phone" size={32} className="mx-auto mb-4 text-primary" />
              <h3 className="text-xl font-bold mb-2">Телефон</h3>
              <p className="text-muted-foreground">+7 (495) 123-45-67</p>
              <p className="text-sm text-muted-foreground mt-2">Ежедневно с 10:00 до 21:00</p>
            </Card>
            <Card className="p-8 bg-background/50 border-border hover:border-primary/50 transition-all">
              <Icon name="Mail" size={32} className="mx-auto mb-4 text-primary" />
              <h3 className="text-xl font-bold mb-2">Email</h3>
              <p className="text-muted-foreground">info@lumina-shop.ru</p>
              <p className="text-sm text-muted-foreground mt-2">Ответим в течение 24 часов</p>
            </Card>
          </div>
          <div className="flex gap-4 justify-center">
            <Button className="gradient-bg text-lg px-8 py-6">
              <Icon name="MessageCircle" size={20} />
              Написать в WhatsApp
            </Button>
            <Button variant="outline" className="text-lg px-8 py-6 border-primary/50 hover:bg-primary/10">
              <Icon name="Send" size={20} />
              Telegram
            </Button>
          </div>
        </div>
      </section>

      <footer className="py-12 px-6 border-t border-border">
        <div className="container mx-auto text-center text-muted-foreground">
          <p className="mb-4">© 2024 SvetoLux. Все права защищены.</p>
          <p className="text-sm">Дизайнерские светильники для вашего дома</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;