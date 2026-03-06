/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { 
  CheckCircle2, 
  Users, 
  Zap, 
  PlayCircle, 
  Smartphone, 
  TrendingUp, 
  DollarSign, 
  Video, 
  MessageSquare, 
  Clock, 
  Radio, 
  Award,
  ChevronDown,
  ArrowRight
} from 'lucide-react';
import { motion } from 'motion/react';

const SectionTitle = ({ children, subtitle, light = false }: { children: React.ReactNode, subtitle?: string, light?: boolean }) => (
  <div className="text-center mb-12">
    <motion.h2 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`text-3xl md:text-5xl font-black uppercase tracking-tighter mb-4 ${light ? 'text-white' : 'text-white'}`}
    >
      {children}
    </motion.h2>
    {subtitle && (
      <motion.p 
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="text-gray-400 text-lg max-w-2xl mx-auto"
      >
        {subtitle}
      </motion.p>
    )}
  </div>
);

const Button = ({ children, primary = false, full = false }: { children: React.ReactNode, primary?: boolean, full?: boolean }) => (
  <motion.a
    href="https://mestrecunamata.herospark.co/mestre-do-digital"
    target="_blank"
    rel="noopener noreferrer"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className={`
      ${full ? 'w-full' : 'px-8'} 
      py-4 rounded-full font-black uppercase tracking-widest transition-all duration-300 flex items-center justify-center gap-2
      ${primary 
        ? 'bg-brand-neon text-black hover:bg-white neon-glow' 
        : 'bg-transparent border-2 border-brand-neon text-brand-neon hover:bg-brand-neon hover:text-black'}
    `}
  >
    {children}
  </motion.a>
);

const FAQItem = ({ question, answer }: { question: string, answer: string }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <div className="border-b border-white/10 py-4">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center text-left group"
      >
        <span className="text-lg font-bold group-hover:text-brand-neon transition-colors">{question}</span>
        <ChevronDown className={`transition-transform duration-300 ${isOpen ? 'rotate-180 text-brand-neon' : 'text-gray-500'}`} />
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-40 mt-4' : 'max-h-0'}`}>
        <p className="text-gray-400 leading-relaxed">{answer}</p>
      </div>
    </div>
  );
};

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-brand-neon selection:text-black">
      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-brand-neon rounded-sm flex items-center justify-center">
              <Zap className="text-black w-5 h-5 fill-current" />
            </div>
            <span className="font-black text-xl tracking-tighter uppercase">Mestres <span className="text-brand-neon">Digital</span></span>
          </div>
          <a 
            href="https://mestrecunamata.herospark.co/mestre-do-digital"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-brand-neon text-black px-6 py-2 rounded-full text-xs font-black uppercase tracking-widest hover:bg-white transition-colors"
          >
            Entrar
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl">
          <div className="absolute top-20 left-10 w-72 h-72 bg-brand-neon/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-brand-neon/5 rounded-full blur-[150px]" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="text-left pt-8">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-1 rounded-full mb-8"
              >
                <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
                <span className="text-[10px] font-black uppercase tracking-widest text-gray-300">Vagas Limitadas - Aproveite</span>
              </motion.div>

              <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter leading-[0.9] mb-8"
              >
                Transforme seu celular em uma <span className="text-brand-neon">máquina de seguidores</span> e renda
              </motion.h1>

              {/* Mobile Image */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 }}
                className="lg:hidden mb-8"
              >
                <div className="aspect-[4/5] rounded-[32px] bg-brand-neon/5 border border-brand-neon/20 overflow-hidden flex items-center justify-center relative">
                  <div className="absolute inset-0 bg-brand-neon/10 blur-[60px] rounded-full" />
                  <img 
                    src="https://i.imgur.com/ij5EdBL.png" 
                    alt="Hero Mobile" 
                    className="w-full h-full object-cover relative z-10"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </motion.div>

              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-gray-400 text-lg md:text-xl max-w-2xl mb-12 leading-relaxed"
              >
                Aprenda a crescer nas redes sociais, criar conteúdo viral e ganhar dinheiro usando apenas celular e internet — mesmo começando do zero.
              </motion.p>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="flex flex-col sm:flex-row gap-4 justify-start items-center"
              >
                <Button primary>Quero entrar agora</Button>
              </motion.div>
            </div>

            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className="relative hidden lg:block pt-8"
            >
              <div className="aspect-[4/5] rounded-[40px] bg-brand-neon/5 border border-brand-neon/20 overflow-hidden flex items-center justify-center relative">
                <div className="absolute inset-0 bg-brand-neon/10 blur-[100px] rounded-full" />
                <img 
                  src="https://i.imgur.com/lpN6Okd.png" 
                  alt="Hero" 
                  className="w-full h-full object-cover relative z-10"
                  referrerPolicy="no-referrer"
                />
              </div>
            </motion.div>
          </div>

          <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: TrendingUp, text: "Ganhe seguidores de forma viral" },
              { icon: DollarSign, text: "Monetize suas redes sociais" },
              { icon: Video, text: "Crie vídeos profissionais sendo iniciante" }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + i * 0.1 }}
                className="flex items-center gap-4 bg-white/5 p-6 rounded-2xl border border-white/5 hover:border-brand-neon/30 transition-all group"
              >
                <div className="w-12 h-12 bg-brand-neon/10 rounded-xl flex items-center justify-center group-hover:bg-brand-neon transition-colors">
                  <item.icon className="text-brand-neon group-hover:text-black transition-colors" />
                </div>
                <span className="font-bold text-left leading-tight">{item.text}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre" className="py-24 px-6 bg-brand-dark">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-3xl overflow-hidden neon-border">
              <img 
                src="https://i.imgur.com/6XZw9FT.jpeg" 
                alt="Mestre Cunamata" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-brand-neon text-black p-8 rounded-2xl hidden md:block">
              <p className="font-black text-2xl leading-none">Milhares de</p>
              <p className="text-[10px] uppercase font-bold tracking-widest mt-2">Seguidores Conquistados</p>
            </div>
          </motion.div>

          <div>
            <SectionTitle>Quem é o <span className="text-brand-neon">Mestre Cunamata?</span></SectionTitle>
            <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
              <p>
                O Mestre Cunamata saiu de Angola, chegou sem nada e começou do absoluto zero. Sem seguidores, sem equipamento profissional, sem contatos. Só tinha um celular e a vontade de mudar de vida.
              </p>
              <p>
                Com dedicação e um método próprio, ele descobriu como criar conteúdo que viraliza, conquistou <span className="text-white font-bold">milhares de seguidores</span> em tempo recorde e transformou suas redes sociais em uma fonte real de renda.
              </p>
              <p className="bg-brand-neon/10 border-l-4 border-brand-neon p-6 text-white italic">
                "Agora, ele vai te ensinar exatamente o mesmo método que usou para crescer — passo a passo, de forma simples, para que qualquer pessoa consiga replicar os mesmos resultados."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Learning Section */}
      <section id="aprender" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <SectionTitle subtitle="Tudo o que você precisa para crescer e monetizar suas redes">
            O que você vai <span className="text-brand-neon">aprender</span>
          </SectionTitle>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              "Como criar conteúdo que viraliza nas redes sociais",
              "Como ganhar seguidores de forma acelerada",
              "Como transformar seguidores em renda real",
              "Como criar vídeos mesmo sem experiência",
              "Como editar vídeos de forma fácil e rápida usando celular",
              "Como usar as redes sociais para gerar oportunidades financeiras"
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center gap-4 bg-white/5 p-6 rounded-2xl border border-white/5 hover:border-brand-neon/50 transition-all group"
              >
                <CheckCircle2 className="text-brand-neon w-6 h-6 flex-shrink-0" />
                <span className="font-bold text-gray-200">{item}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Bonus Section */}
      <section id="bonus" className="py-24 px-6 bg-brand-dark relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-neon/5 blur-[120px] -z-10" />
        
        <div className="max-w-7xl mx-auto">
          <SectionTitle subtitle="Você também vai receber tudo isso gratuitamente">
            Bônus <span className="text-brand-neon">Exclusivos</span>
          </SectionTitle>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { icon: Clock, title: "Renda nas primeiras 24h", desc: "Método para gerar sua primeira renda logo no início" },
              { icon: Smartphone, title: "Crescer com lives no TikTok", desc: "Estratégias exclusivas para explodir nas lives" },
              { icon: Award, title: "Registro oficial para lives", desc: "Aprenda a se registrar oficialmente para fazer lives" },
              { icon: Users, title: "Comunidade exclusiva", desc: "Acesso ao grupo com outros criadores de conteúdo" },
              { icon: Radio, title: "Lives semanais com o Mestre", desc: "Acompanhamento ao vivo toda semana" }
            ].map((bonus, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative flex flex-col items-center text-center group"
              >
                {/* Icon Container */}
                <div className="relative mb-8">
                  <div className="w-32 h-32 rounded-full border-2 border-brand-neon/20 flex items-center justify-center bg-black relative z-10 group-hover:border-brand-neon transition-all duration-500 neon-glow">
                    <bonus.icon className="w-12 h-12 text-brand-neon group-hover:scale-110 transition-transform duration-500" />
                  </div>
                  
                  {/* Step Number Badge */}
                  <div className="absolute -top-2 -left-2 w-10 h-10 bg-brand-neon rounded-full flex items-center justify-center text-black font-black text-sm z-20 shadow-lg">
                    0{i + 1}
                  </div>

                  {/* Decorative Ring */}
                  <div className="absolute inset-0 rounded-full border border-brand-neon/10 scale-125 group-hover:scale-150 group-hover:opacity-0 transition-all duration-700" />
                </div>

                <h3 className="text-2xl font-black uppercase mb-4 tracking-tighter group-hover:text-brand-neon transition-colors">
                  {bonus.title}
                </h3>
                <p className="text-gray-400 leading-relaxed max-w-[280px]">
                  {bonus.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="w-20 h-20 bg-brand-neon rounded-full flex items-center justify-center mx-auto mb-8 neon-glow"
          >
            <Users className="text-black w-10 h-10" />
          </motion.div>
          <SectionTitle>Faça parte da <span className="text-brand-neon">comunidade</span></SectionTitle>
          <p className="text-gray-400 text-xl leading-relaxed mb-12">
            Ao entrar no Mestres do Digital, você não vai estar sozinho. Vai fazer parte de uma comunidade exclusiva com outros criadores que estão no mesmo caminho — aprendendo, crescendo e gerando renda juntos. Troque experiências, tire dúvidas e evolua com o grupo.
          </p>
          <div className="flex justify-center">
            <Button primary>Garantir minha vaga na comunidade</Button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-24 px-6 bg-brand-dark">
        <div className="max-w-3xl mx-auto">
          <SectionTitle>Perguntas <span className="text-brand-neon">frequentes</span></SectionTitle>
          <div className="space-y-2">
            <FAQItem 
              question="Preciso ter muitos seguidores para começar?" 
              answer="Não! O método foi criado exatamente para quem está começando do zero. Você vai aprender passo a passo como conquistar seus primeiros seguidores." 
            />
            <FAQItem 
              question="Preciso saber editar vídeos?" 
              answer="De jeito nenhum. Dentro do treinamento você vai aprender técnicas simples de edição usando apenas o celular, mesmo sem nunca ter editado antes." 
            />
            <FAQItem 
              question="Preciso investir dinheiro além do treinamento?" 
              answer="Não. Tudo que você precisa é de um celular com internet. O método foi feito para funcionar sem nenhum investimento adicional." 
            />
            <FAQItem 
              question="Funciona para qualquer rede social?" 
              answer="Sim! As estratégias funcionam para TikTok, Instagram, YouTube e outras plataformas. Você vai aprender os princípios que fazem conteúdo viralizar em qualquer rede." 
            />
          </div>
        </div>
      </section>

      {/* Pricing / Final CTA */}
      <section className="py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-brand-neon/5 -z-10" />
        <div className="max-w-5xl mx-auto text-center">
          <SectionTitle>
            Essa é a sua chance de aprender com quem <span className="text-brand-neon">já chegou lá</span>
          </SectionTitle>
          
          <div className="bg-brand-dark p-12 rounded-[40px] border-2 border-brand-neon neon-glow mb-12 relative">
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-brand-neon text-black px-6 py-2 rounded-full font-black text-xs uppercase tracking-widest">
              Oferta Especial de Lançamento
            </div>
            
            <p className="text-gray-400 text-lg mb-8">
              O Mestre Cunamata saiu do zero e transformou o celular em uma fonte de renda real. Agora ele quer te mostrar exatamente como fez isso.
            </p>

            <div className="mb-12">
              <p className="text-gray-500 line-through text-2xl">De R$ 497,00</p>
              <div className="flex items-center justify-center gap-2">
                <span className="text-2xl font-bold">12x</span>
                <span className="text-7xl md:text-9xl font-black text-brand-neon tracking-tighter">29,90</span>
              </div>
              <p className="text-xl font-bold mt-4">Ou R$ 297,00 à vista</p>
            </div>

            <div className="max-w-md mx-auto">
              <Button primary full>Quero começar agora <ArrowRight className="w-5 h-5" /></Button>
              <p className="text-[10px] uppercase font-bold tracking-widest text-gray-500 mt-6 flex items-center justify-center gap-2">
                <Zap className="w-3 h-3 text-brand-neon" /> Vagas limitadas — garanta a sua agora
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-white/5 text-center">
        <div className="flex items-center justify-center gap-2 mb-6">
          <div className="w-6 h-6 bg-brand-neon rounded-sm flex items-center justify-center">
            <Zap className="text-black w-4 h-4 fill-current" />
          </div>
          <span className="font-black text-lg tracking-tighter uppercase">Mestres <span className="text-brand-neon">Digital</span></span>
        </div>
        <p className="text-gray-500 text-xs uppercase tracking-widest font-bold">
          © 2026 Mestres do Digital — Todos os direitos reservados
        </p>
      </footer>
    </div>
  );
}
