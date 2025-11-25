import React, { useState } from 'react';
import { Check, Star, ChevronDown, ChevronUp, Shield, Clock, Zap, Gift } from 'lucide-react';

/**
 * BLACK FRIDAY LENDÁRIA - LANDING PAGE TEMPLATE
 * 
 * Design System:
 * - Fundo: Preto Profundo (#050505) e Cinza Carvão (#121212)
 * - Acento: Ouro Metálico (Gradients de Amber/Yellow)
 * - Tipografia: Inter (Simulando Montserrat para Headlines)
 * - Efeitos: Glow Dourado, Sombras Internas, Gradientes Radiais
 */

const ButtonPrimary = ({ children, className = "", fullWidth = false }: { children: React.ReactNode, className?: string, fullWidth?: boolean }) => (
  <button 
    className={`
      relative overflow-hidden group font-bold uppercase tracking-wider py-4 px-8 rounded-lg
      bg-gradient-to-b from-yellow-400 to-yellow-600 text-black
      shadow-[0_0_20px_rgba(234,179,8,0.4)] hover:shadow-[0_0_40px_rgba(234,179,8,0.6)]
      transition-all duration-300 transform hover:-translate-y-1
      ${fullWidth ? 'w-full' : ''} ${className}
    `}
  >
    <div className="absolute inset-0 bg-white/20 group-hover:bg-white/40 transition-colors" />
    <span className="relative z-10 flex items-center justify-center gap-2">{children}</span>
  </button>
);

const Section = ({ children, className = "", id = "" }: { children: React.ReactNode, className?: string, id?: string }) => (
  <section id={id} className={`py-20 px-4 md:px-8 relative overflow-hidden ${className}`}>
    {children}
  </section>
);

const Card = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => (
  <div className={`
    bg-[#0F0F0F] border border-gray-800 rounded-xl p-8
    shadow-[inset_0_0_40px_rgba(0,0,0,0.8)] 
    hover:border-yellow-600/50 transition-colors duration-300
    ${className}
  `}>
    {children}
  </div>
);

const GoldText = ({ children }: { children: React.ReactNode }) => (
  <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 via-yellow-500 to-yellow-200 font-extrabold">
    {children}
  </span>
);

export default function BlackFridayPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-[#050505] text-gray-200 font-sans selection:bg-yellow-500 selection:text-black">
      
      {/* === HEADER === */}
      <header className="fixed top-0 w-full z-50 bg-[#050505]/90 backdrop-blur-md border-b border-gray-900">
        <div className="max-w-6xl mx-auto px-4 h-20 flex items-center justify-between">
          <div className="text-2xl font-black tracking-tighter text-white">
            BRAND<span className="text-yellow-500">.</span>BF
          </div>
          <a href="#oferta" className="hidden md:block text-sm font-bold text-yellow-500 hover:text-white transition-colors">
            GARANTIR OFERTA
          </a>
        </div>
      </header>

      {/* === HERO SECTION (Atenção) === */}
      <div className="relative pt-32 pb-20 md:pt-48 md:pb-32 flex flex-col items-center text-center overflow-hidden">
        {/* Glow de fundo */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-yellow-600/10 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="relative z-10 max-w-4xl px-4">
          <span className="inline-block py-1 px-3 rounded border border-yellow-500/30 bg-yellow-500/10 text-yellow-400 text-xs font-bold tracking-[0.2em] mb-6 uppercase">
            A Maior Oferta do Ano
          </span>
          
          <h1 className="text-5xl md:text-7xl font-black text-white leading-tight mb-6">
            TRANSFORME SEU FUTURO NA <br/>
            <GoldText>BLACK FRIDAY LENDÁRIA</GoldText>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
            Acesso vitalício, bônus exclusivos e a estratégia completa que você precisa. 
            A oportunidade de ouro fecha em breve.
          </p>

          <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
            <ButtonPrimary className="w-full md:w-auto text-lg min-w-[280px]">
              QUERO APROVEITAR AGORA
            </ButtonPrimary>
            <p className="text-xs text-gray-500 flex items-center gap-1">
              <Shield size={12} className="text-yellow-500" /> Garantia de 30 dias
            </p>
          </div>
        </div>
      </div>

      {/* === PROVA SOCIAL === */}
      <div className="border-y border-gray-900 bg-[#0a0a0a] py-8">
        <div className="max-w-6xl mx-auto px-4 flex flex-wrap justify-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
          {/* Logos simulados */}
          {['FORBES', 'TECHCRUNCH', 'BLOOMBERG', 'REUTERS'].map((logo) => (
            <span key={logo} className="text-xl font-serif font-bold tracking-widest text-white">{logo}</span>
          ))}
        </div>
      </div>

      {/* === PROBLEMA/SOLUÇÃO (Interesse) === */}
      <Section className="bg-gradient-to-b from-[#050505] to-[#0F0F0F]">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Chega de tentar adivinhar <br/>o <span className="text-gray-500">caminho do sucesso.</span>
            </h2>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Você já tentou de tudo, mas sente que está andando em círculos? A maioria das pessoas perde tempo com estratégias ultrapassadas.
            </p>
            <p className="text-gray-400 mb-8 leading-relaxed">
              O <strong className="text-white">Método Lendário</strong> é o atalho validado por milhares de alunos. Não é mágica, é um processo refinado de execução.
            </p>
            <ul className="space-y-4">
              {[
                "Metodologia validada no mercado",
                "Suporte premium individual",
                "Comunidade de alto nível"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-gray-200">
                  <div className="bg-yellow-500/20 p-1 rounded-full">
                    <Check size={16} className="text-yellow-500" />
                  </div>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-yellow-500/20 blur-[60px] rounded-full" />
            <div className="relative bg-[#121212] border border-gray-800 rounded-2xl p-2 shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500">
              <div className="aspect-video bg-gray-900 rounded-xl overflow-hidden flex items-center justify-center">
                <span className="text-gray-700 font-mono text-xs">[IMAGEM DA PLATAFORMA]</span>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* === BÔNUS (Desejo) === */}
      <Section className="bg-[#050505]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              BÔNUS <GoldText>EXCLUSIVOS</GoldText>
            </h2>
            <p className="text-gray-400">Apenas para quem entrar nessa Black Friday.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Mentoria Ao Vivo", val: "R$ 997", icon: <Zap /> },
              { title: "Pack de Templates", val: "R$ 497", icon: <Gift /> },
              { title: "Acesso Vitalício", val: "Inestimável", icon: <Clock /> }
            ].map((bonus, idx) => (
              <Card key={idx} className="text-center group hover:-translate-y-2 transition-transform">
                <div className="mx-auto w-16 h-16 rounded-full bg-gradient-to-b from-gray-800 to-black flex items-center justify-center mb-6 text-yellow-500 group-hover:text-yellow-400 border border-gray-800 group-hover:border-yellow-500/50 transition-colors">
                  {bonus.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{bonus.title}</h3>
                <p className="text-sm text-gray-500 uppercase tracking-wide">Valor vendido separadamente</p>
                <p className="text-yellow-500 font-bold mt-2 line-through opacity-70">{bonus.val}</p>
                <p className="text-white font-bold text-lg mt-1">GRÁTIS HOJE</p>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      {/* === OFERTA (Ação) === */}
      <Section id="oferta" className="bg-[#080808] border-y border-gray-900">
        <div className="max-w-4xl mx-auto relative">
          {/* Efeito Glow atrás do card */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-gradient-to-r from-yellow-600/20 via-yellow-500/10 to-yellow-600/20 blur-3xl -z-10" />

          <div className="bg-[#0F0F0F] border border-yellow-600/30 rounded-3xl p-8 md:p-12 text-center shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-yellow-600 text-black text-xs font-bold px-4 py-1 rounded-bl-xl">
              50% OFF
            </div>

            <p className="text-gray-400 uppercase tracking-widest text-sm mb-4">Plano Completo Vitalício</p>
            <h3 className="text-3xl md:text-5xl font-black text-white mb-6">
              TUDO O QUE VOCÊ PRECISA
            </h3>
            
            <div className="flex flex-col items-center justify-center mb-8">
              <span className="text-gray-500 text-lg line-through mb-2">De R$ 1.997,00</span>
              <div className="flex items-end gap-2 text-white">
                <span className="text-2xl mb-2">12x de</span>
                <span className="text-6xl md:text-7xl font-black text-yellow-500">97</span>
                <span className="text-2xl mb-2">,90</span>
              </div>
              <p className="text-gray-400 mt-2">ou R$ 997 à vista</p>
            </div>

            <ButtonPrimary fullWidth className="text-xl mb-6">
              QUERO GARANTIR MINHA VAGA
            </ButtonPrimary>

            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-500">
              <span className="flex items-center gap-1"><Check size={14} /> Acesso Imediato</span>
              <span className="flex items-center gap-1"><Check size={14} /> Certificado Incluso</span>
              <span className="flex items-center gap-1"><Check size={14} /> 7 Dias de Garantia</span>
            </div>
          </div>
        </div>
      </Section>

      {/* === DEPOIMENTOS === */}
      <Section className="bg-[#050505]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-white mb-16">
            O que dizem nossos <span className="text-yellow-500">Lendários</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-gradient-to-br from-gray-900 to-black p-6 rounded-xl border border-gray-800">
                <div className="flex gap-1 mb-4 text-yellow-500">
                  {[...Array(5)].map((_, s) => <Star key={s} size={16} fill="currentColor" />)}
                </div>
                <p className="text-gray-300 mb-6 italic">"Simplesmente a melhor decisão que tomei no ano. O conteúdo é denso, direto e o suporte é incrível. Vale cada centavo."</p>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-gray-700" />
                  <div>
                    <p className="text-white font-bold text-sm">Nome do Aluno</p>
                    <p className="text-gray-600 text-xs">Empresário</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* === FAQ === */}
      <Section className="bg-[#0a0a0a]">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-white mb-12">Perguntas Frequentes</h2>
          <div className="space-y-4">
            {[
              "Por quanto tempo terei acesso?",
              "O curso serve para iniciantes?",
              "Como funciona a garantia?",
              "Quais são as formas de pagamento?"
            ].map((question, idx) => (
              <div key={idx} className="border border-gray-800 rounded-lg bg-[#0F0F0F] overflow-hidden">
                <button 
                  onClick={() => toggleFaq(idx)}
                  className="w-full flex justify-between items-center p-5 text-left text-white font-medium hover:bg-gray-800/50 transition-colors"
                >
                  {question}
                  {openFaq === idx ? <ChevronUp className="text-yellow-500" /> : <ChevronDown className="text-gray-500" />}
                </button>
                {openFaq === idx && (
                  <div className="p-5 pt-0 text-gray-400 text-sm border-t border-gray-800/50">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* === FOOTER === */}
      <footer className="bg-black border-t border-gray-900 py-12 text-center text-gray-600 text-sm">
        <div className="max-w-6xl mx-auto px-4 flex flex-col items-center">
          <div className="text-xl font-black tracking-tighter text-gray-400 mb-6">
            BRAND<span className="text-yellow-900">.</span>BF
          </div>
          <p className="mb-8">
            © 2023 Todos os direitos reservados. Não acreditamos em ganho fácil.<br/>
            Resultados variam de pessoa para pessoa.
          </p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
            <a href="#" className="hover:text-white transition-colors">Política de Privacidade</a>
            <a href="#" className="hover:text-white transition-colors">Contato</a>
          </div>
        </div>
      </footer>
      
      {/* Sticky Mobile CTA (opcional) */}
      <div className="fixed bottom-4 left-4 right-4 z-40 md:hidden">
        <ButtonPrimary fullWidth className="shadow-2xl">
          QUERO A OFERTA AGORA
        </ButtonPrimary>
      </div>

    </div>
  );
}
