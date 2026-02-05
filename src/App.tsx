import React, { useState } from 'react';
import { ShoppingBag, Zap, Smartphone, CreditCard, ArrowRight, Check, Menu, X, Eye, Palette, MessageCircle } from 'lucide-react';

// Sample stores
const stores = [
  {
    name: 'Amordidas',
    category: 'Confeitaria',
    color: 'bg-pink-100',
    textColor: 'text-pink-600',
    url: 'https://amordidas.vercel.app'
  },
  {
    name: 'Burger Spot',
    category: 'Hamburgueria',
    color: 'bg-red-100',
    textColor: 'text-red-600',
    url: 'https://burger-delta-three.vercel.app'
  }
];

const features = [
  {
    icon: Zap,
    title: 'Em 2 minutos',
    desc: 'Sem complicação. Nome, foto, preço. Pronto.'
  },
  {
    icon: Smartphone,
    title: '100% Mobile',
    desc: 'Seu cliente pede pelo celular, sem apps.'
  },
  {
    icon: CreditCard,
    title: 'Pix na hora',
    desc: 'Receba direto no seu WhatsApp.'
  },
  {
    icon: Palette,
    title: 'Seu estilo',
    desc: 'Cores e fotos do seu jeito.'
  }
];

const pricing = [
  {
    name: 'Mensal',
    price: 'R$29',
    period: '/mês',
    features: ['Loja online', 'Domínio próprio', 'Suporte por WhatsApp', 'Atualizações'],
    popular: false
  },
  {
    name: 'Anual',
    price: 'R$19',
    period: '/mês',
    features: ['Tudo do mensal', '2 meses grátis', 'Prioridade no suporte', 'Template premium'],
    popular: true
  }
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Obrigado! Vamos criar sua loja em breve.`);
    setEmail('');
  };

  return (
    <div className="min-h-screen bg-stone-50">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-stone-100">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-8 h-8 text-red-600" />
            <span className="text-xl font-bold text-stone-800">MiniLoja</span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#exemplos" className="text-stone-600 hover:text-stone-900 transition">Exemplos</a>
            <a href="#como-funciona" className="text-stone-600 hover:text-stone-900 transition">Como funciona</a>
            <a href="#precos" className="text-stone-600 hover:text-stone-900 transition">Preços</a>
            <button className="bg-stone-900 text-white px-6 py-2 rounded-full font-medium hover:bg-stone-800 transition">
              Criar minha loja
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden bg-white border-t border-stone-100 px-6 py-4 flex flex-col gap-4">
            <a href="#exemplos" className="text-stone-600" onClick={() => setMenuOpen(false)}>Exemplos</a>
            <a href="#como-funciona" className="text-stone-600" onClick={() => setMenuOpen(false)}>Como funciona</a>
            <a href="#precos" className="text-stone-600" onClick={() => setMenuOpen(false)}>Preços</a>
            <button className="bg-stone-900 text-white px-6 py-3 rounded-full font-medium">
              Criar minha loja
            </button>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-red-100 text-red-600 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Zap className="w-4 h-4" />
            Em minutos, não em semanas
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-stone-800 leading-tight mb-6">
            Sua loja online<br />
            <span className="gradient-text">sem complicação</span>
          </h1>
          <p className="text-xl text-stone-600 mb-8 max-w-2xl mx-auto">
            Para quem vende pelo Instagram, WhatsApp ou TikTok. 
            Crie sua mini lojinha profissional em 2 minutos e comece a vender mais.
          </p>
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto mb-8">
            <input
              type="email"
              placeholder="Seu melhor email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 px-6 py-4 rounded-full border border-stone-200 focus:outline-none focus:ring-2 focus:ring-red-500"
              required
            />
            <button type="submit" className="bg-red-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-red-700 transition flex items-center justify-center gap-2">
              Criar loja <ArrowRight className="w-5 h-5" />
            </button>
          </form>
          <p className="text-sm text-stone-500">Já criaram +128 lojas este mês</p>
        </div>
      </section>

      {/* Examples Section */}
      <section id="exemplos" className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-stone-800 mb-4">Criado com MiniLoja</h2>
            <p className="text-stone-600">Lojas reais, vendendo agora</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {stores.map((store, i) => (
              <a
                key={i}
                href={store.url}
                target="_blank"
                rel="noopener noreferrer"
                className="card-hover transition-all duration-300 bg-stone-50 rounded-3xl overflow-hidden border border-stone-100"
              >
                <div className={`aspect-video ${store.color} flex items-center justify-center`}>
                  <div className="text-center">
                    <ShoppingBag className={`w-16 h-16 mx-auto mb-4 ${store.textColor}`} />
                    <h3 className="text-2xl font-bold text-stone-800">{store.name}</h3>
                    <p className="text-stone-600">{store.category}</p>
                  </div>
                </div>
                <div className="p-6 flex items-center justify-between">
                  <span className="text-sm text-stone-500">Ver loja ao vivo</span>
                  <ArrowRight className="w-5 h-5 text-stone-400" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section id="como-funciona" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-stone-800 mb-4">Simples assim</h2>
            <p className="text-stone-600">Você só precisa de 3 coisas</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <MessageCircle className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-stone-800 mb-3">1. Crie sua conta</h3>
              <p className="text-stone-600">Email e nome da sua loja. Sem burocracia.</p>
            </div>
            <div className="text-center p-8">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Palette className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-stone-800 mb-3">2. Adicione produtos</h3>
              <p className="text-stone-600">Foto, nome, preço. Pronto pra vender.</p>
            </div>
            <div className="text-center p-8">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CreditCard className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-stone-800 mb-3">3. Compartilhe</h3>
              <p className="text-stone-600">Seu link na bio. O cliente pede no WhatsApp.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((f, i) => (
              <div key={i} className="p-6 bg-stone-50 rounded-2xl">
                <f.icon className="w-10 h-10 text-red-500 mb-4" />
                <h3 className="font-bold text-stone-800 mb-2">{f.title}</h3>
                <p className="text-stone-600 text-sm">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="precos" className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-stone-800 mb-4">Preço justo</h2>
            <p className="text-stone-600">Cada real investido no seu negócio</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            {pricing.map((p, i) => (
              <div
                key={i}
                className={`p-8 rounded-3xl border-2 transition ${
                  p.popular
                    ? 'border-red-500 bg-white shadow-xl'
                    : 'border-stone-200 bg-stone-50'
                }`}
              >
                {p.popular && (
                  <div className="bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full inline-block mb-4">
                    MAIS POPULAR
                  </div>
                )}
                <h3 className="text-lg font-semibold text-stone-600 mb-2">{p.name}</h3>
                <div className="flex items-baseline gap-1 mb-6">
                  <span className="text-4xl font-bold text-stone-800">{p.price}</span>
                  <span className="text-stone-500">{p.period}</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {p.features.map((f, j) => (
                    <li key={j} className="flex items-center gap-2 text-stone-600">
                      <Check className="w-5 h-5 text-green-500" />
                      {f}
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-4 rounded-xl font-semibold transition ${
                  p.popular
                    ? 'bg-red-600 text-white hover:bg-red-700'
                    : 'bg-stone-200 text-stone-800 hover:bg-stone-300'
                }`}>
                  Começar agora
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-stone-900 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Pronto pra começar?
          </h2>
          <p className="text-stone-400 mb-8">
            Crie sua mini lojinha em 2 minutos. Sem compromisso.
          </p>
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Seu email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 px-6 py-4 rounded-full border border-stone-700 bg-stone-800 text-white focus:outline-none focus:ring-2 focus:ring-red-500"
              required
            />
            <button type="submit" className="bg-red-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-red-700 transition">
              Criar conta
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-stone-200">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-6 h-6 text-red-600" />
            <span className="font-bold text-stone-800">MiniLoja</span>
          </div>
          <p className="text-sm text-stone-500">
            © 2025 MiniLoja. Feito com ❤️ para pequenos empreendedores.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
