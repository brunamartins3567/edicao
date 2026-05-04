/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";
import { 
  Play, 
  Smartphone, 
  DollarSign, 
  Monitor, 
  Rocket, 
  User, 
  Zap, 
  CheckCircle, 
  ChevronDown,
  ShieldCheck,
  Lock,
  Instagram
} from "lucide-react";

const CHECKOUT_URL = "https://checkout.perfectpay.com.br/pay/PPU38CPTHRD";
const INSTAGRAM_URL = "https://www.instagram.com/bruna_martinseld/";

export default function App() {
  const [showProof, setShowProof] = useState(false);
  const [proofName, setProofName] = useState("");

  const names = ["Marcos V.", "Jéssica S.", "Ana Paula", "Ricardo M.", "Amanda L.", "Bruno K.", "Gabriela O."];

  const feedbacks = [
    { type: 'video', url: 'https://xn--brunaedieslucrativas-b1b22a.site/wp-content/uploads/2025/05/ad84a55553074c448a1bd279fe11944a.mov' },
    { type: 'image', url: 'https://xn--brunaedieslucrativas-b1b22a.site/wp-content/uploads/2025/05/IMG_7612.jpg' },
    { type: 'image', url: 'https://xn--brunaedieslucrativas-b1b22a.site/wp-content/uploads/2025/05/1.png' },
    { type: 'image', url: 'https://xn--brunaedieslucrativas-b1b22a.site/wp-content/uploads/2025/05/IMG_7535.jpg' },
    { type: 'image', url: 'https://xn--brunaedieslucrativas-b1b22a.site/wp-content/uploads/2025/05/IMG_7613.jpg' },
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      triggerProof();
      const interval = setInterval(triggerProof, 15000);
      return () => clearInterval(interval);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  const triggerProof = () => {
    const randomName = names[Math.floor(Math.random() * names.length)];
    setProofName(randomName);
    setShowProof(true);
    setTimeout(() => setShowProof(false), 5000);
  };

  return (
    <div className="min-h-screen font-sans selection:bg-gold selection:text-black">
      
      {/* 1. HERO SECTION */}
      <section className="py-12 px-6 flex flex-col items-center text-center max-w-4xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-4 inline-block px-4 py-1 border gold-border rounded-full text-[10px] font-bold gold-text tracking-widest uppercase bg-zinc-900/50"
        >
          MÉTODO EXCLUSIVO: GANHE EM DÓLAR
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl md:text-6xl font-black mb-6 leading-tight uppercase tracking-tighter"
        >
          Ganhe em <span className="gold-text">dólar</span> editando vídeos simples no <span className="underline decoration-gold">CapCut</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-gray-400 text-lg md:text-xl mb-8 max-w-2xl font-light"
        >
          O método prático para faturar em moeda estrangeira usando apenas o seu celular, mesmo começando do absoluto zero.
        </motion.p>

        {/* VSL VIDEO */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="w-full gold-glow gold-border rounded-2xl overflow-hidden mb-10 bg-zinc-900 group relative"
        >
          <video 
            className="w-full aspect-video shadow-2xl" 
            controls 
            poster="https://xn--brunaedieslucrativas-b1b22a.site/wp-content/uploads/2025/05/M34A3284-p-scaled.jpg"
          >
            <source src="https://xn--brunaedieslucrativas-b1b22a.site/wp-content/uploads/2025/06/bruna-01.mp4" type="video/mp4" />
            Seu navegador não suporta vídeos.
          </video>
        </motion.div>
        
        <div className="flex gap-6 mt-8 opacity-40">
          <Smartphone className="h-6 w-6" />
          <Play className="h-6 w-6" />
          <DollarSign className="h-6 w-6" />
        </div>
      </section>

      {/* 2. BENEFÍCIOS RÁPIDOS */}
      <section className="py-20 px-6 bg-zinc-950">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { icon: <Rocket className="w-8 h-8 gold-text" />, title: "Resultados Rápidos", desc: "Desenvolvido para que você consiga monetizar seus primeiros vídeos em tempo recorde." },
            { icon: <User className="w-8 h-8 gold-text" />, title: "100% Anônimo", desc: "Você não precisa aparecer, não precisa gravar o rosto e nem ter seguidores." },
            { icon: <Zap className="w-8 h-8 gold-text" />, title: "Sem Enrolação", desc: "Direto ao ponto. Aulas práticas mostrando exatamente onde clicar no CapCut." },
            { icon: <DollarSign className="w-8 h-8 gold-text" />, title: "Ganhe em Dólar", desc: "Aprenda a estratégia para receber pagamentos 5x mais valiosos que o Real." },
          ].map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="card-dark p-8 rounded-2xl border-zinc-800 hover:border-gold transition-all"
            >
              <div className="mb-4">{item.icon}</div>
              <h3 className="font-bold text-white mb-2">{item.title}</h3>
              <p className="text-xs text-gray-500 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 5. TRANSFORMAÇÃO */}
      <section className="py-24 px-6 max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-xl font-bold gold-text italic mb-4">Com o Método Edição Lucrativa em Dólar</p>
          <p className="text-gray-300 text-lg font-light max-w-2xl mx-auto italic">
            "Ganhe em dólar editando vídeos simples no CapCut, usando apenas o celular."
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            "Monetização rápida e sem complicação",
            "Liberdade de tempo e local",
            "Suporte + comunidade",
            "Estratégia validada e ganhos em dólar"
          ].map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex items-center gap-4 bg-zinc-900/40 p-5 rounded-2xl border border-zinc-800"
            >
              <div className="text-gold">
                <CheckCircle className="w-5 h-5" />
              </div>
              <p className="font-medium text-sm md:text-base">{item}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* COMO FUNCIONA NA PRÁTICA */}
      <section className="py-24 px-6 max-w-4xl mx-auto border-t border-zinc-900">
        <h2 className="text-3xl font-black mb-12 text-center uppercase tracking-tighter">
          💡 Como você vai ganhar <span className="gold-text">dinheiro na prática</span>
        </h2>
        <div className="grid gap-4">
          {[
            "Vai aprender a criar templates simples que geram renda",
            "Transformar vídeos simples em dólar no bolso",
            "Usar estratégias para receber em dólar",
            "Replicar um modelo simples que já funciona com estrategias"
          ].map((text, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex items-center gap-5 bg-zinc-900/50 p-6 rounded-2xl border border-zinc-800 hover:gold-border transition-all group"
            >
              <div className="h-12 w-12 rounded-full gold-bg flex items-center justify-center text-black font-black flex-shrink-0 group-hover:scale-110 transition-transform">
                0{i+1}
              </div>
              <p className="text-sm md:text-base font-medium">{text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FEEDBACK CAROUSEL */}
      <section className="py-20 overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 mb-12 text-center">
          <h2 className="text-3xl font-black uppercase tracking-tighter">Resultados <span className="gold-text">reais</span> de quem já começou</h2>
          <p className="text-gray-500 mt-2 font-light text-sm">Veja o que os nossos alunos estão conquistando diariamente.</p>
        </div>
        
        <div className="relative flex overflow-x-hidden">
          <motion.div 
            className="flex gap-6 py-4"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
          >
            {[...feedbacks, ...feedbacks].map((item, i) => (
              <div key={i} className="flex-shrink-0 w-64 md:w-80 rounded-2xl overflow-hidden border border-zinc-800 gold-glow bg-zinc-900 shadow-xl">
                {item.type === 'video' ? (
                  <video className="w-full h-auto aspect-[9/16] object-cover" autoPlay muted loop playsInline>
                    <source src={item.url} type="video/mp4" />
                  </video>
                ) : (
                  <img src={item.url} className="w-full h-auto aspect-[9/16] object-cover" alt="Feedback" />
                )}
              </div>
            ))}
          </motion.div>
        </div>

        {/* DEPOIMENTO ANA VIDEO */}
        <div className="max-w-xl mx-auto px-6 mt-16">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="gold-border rounded-3xl overflow-hidden shadow-2xl bg-zinc-900"
          >
            <video className="w-full aspect-video" controls>
              <source src="https://xn--brunaedieslucrativas-b1b22a.site/wp-content/uploads/2026/05/feedback-ana-video.mov" type="video/mp4" />
            </video>
            <div className="p-4 text-center bg-zinc-900/80 backdrop-blur-sm">
              <p className="text-xs gold-text font-bold uppercase tracking-widest">Depoimento: Ana</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 4. DORES */}
      <section className="py-16 px-6 bg-red-950/10 border-y border-red-900/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-xl font-bold mb-8 text-red-500 uppercase tracking-widest">Você aguenta mais quanto tempo...</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "Salário que acaba antes do mês",
              "Pegar transporte lotado todo dia",
              "Não ter liberdade de horários",
              "Medo de ser demitido a qualquer hora"
            ].map((text, i) => (
              <div key={i} className="p-4 border border-red-900/30 rounded-xl text-[10px] md:text-xs opacity-60 hover:opacity-100 transition-opacity">
                {text}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. AUTORIDADE */}
      <section className="py-32 px-6 max-w-5xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center gap-12 bg-zinc-900/30 p-8 rounded-3xl gold-border gold-glow relative"
        >
          <div className="w-64 h-80 rounded-2xl overflow-hidden flex-shrink-0 shadow-2xl skew-y-1 relative group">
            <img 
              src="https://xn--brunaedieslucrativas-b1b22a.site/wp-content/uploads/2025/05/M34A3284-p-scaled.jpg" 
              alt="Bruna Martins" 
              className="w-full h-full object-cover"
            />
            {/* INSTAGRAM OVERLAY ICON */}
            <a 
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute bottom-4 right-4 bg-white/20 backdrop-blur-md p-3 rounded-full hover:bg-gold hover:text-black transition-all shadow-lg text-white"
              title="Siga no Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
          </div>
          <div className="text-center md:text-left">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
              <h2 className="text-4xl font-black gold-text italic tracking-tighter">Bruna Martins</h2>
              <a 
                href={INSTAGRAM_URL} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center gap-2 text-xs font-bold text-gray-400 hover:text-gold transition-colors uppercase tracking-widest md:mt-2"
              >
                <Instagram className="w-4 h-4" /> @bruna_martinseld
              </a>
            </div>
            <p className="text-gray-300 leading-relaxed text-sm md:text-base mb-6 font-light">
              Empresária, formada em marketing estratégico e fotografia, atuou como social media e desenvolveu um método escalável de gerar renda através de edição de vídeos.
            </p>
            <p className="text-white font-bold text-lg leading-snug">
              Aos 23 anos, minha missão é ensinar pessoas comuns a conquistarem liberdade financeira usando apenas a ferramenta que já possuem no bolso: o celular.
            </p>
          </div>
        </motion.div>
      </section>

      {/* 8.5 O QUE VOCÊ RECEBE */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto bg-zinc-900/50 p-8 md:p-12 rounded-[40px] gold-border gold-glow">
          <h2 className="text-2xl md:text-3xl font-black mb-12 uppercase tracking-tighter text-center">
            📦 6. O QUE VOCÊ <span className="gold-text">RECEBE</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <div className="space-y-8">
              {/* Existing Benefits List */}
              <div className="space-y-3">
                {[
                  "Acesso imediato ao curso",
                  "Passo a passo completo",
                  "Aulas práticas no celular",
                  "Método com CapCut + monetização",
                  "Grupo + suporte"
                ].map((item, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-3 bg-black/40 p-3 rounded-xl border border-zinc-800"
                  >
                    <CheckCircle className="w-5 h-5 text-gold flex-shrink-0" />
                    <p className="text-sm font-medium">{item}</p>
                  </motion.div>
                ))}
              </div>

              {/* Inside the Course List */}
              <div className="pt-8 border-t border-zinc-800">
                <h3 className="text-xl font-black uppercase mb-6 tracking-tight">
                  🚀 O que contém <span className="gold-text">dentro do curso</span>:
                </h3>
                <ul className="grid grid-cols-1 gap-2">
                  {[
                    "Como ganhar dinheiro na plataforma",
                    "Como postar modelos corretamente",
                    "Conhecer o app",
                    "Aulas de edição de vídeo",
                    "Sistema de gamificação",
                    "Nichos que dão mais certo",
                    "Como atingir gringos",
                    "Nichos mais rentaveis e exportados",
                    "Atualizações",
                    "MODELOS PRO",
                    "BÔNUS"
                  ].map((item, i) => (
                    <li key={i} className="text-xs md:text-sm text-gray-400 flex items-start gap-2">
                      <span className="text-gold mt-1">●</span> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Image Preview */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="rounded-3xl overflow-hidden shadow-2xl border-2 border-zinc-800"
            >
              <img 
                src="https://xn--brunaedieslucrativas-b1b22a.site/wp-content/uploads/2026/05/Design-sem-nome.jpg" 
                alt="Dentro do Treinamento" 
                className="w-full h-auto object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* 9. OFERTA */}
      <section id="oferta" className="py-20 px-6">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto bg-zinc-950 border-2 gold-border rounded-[40px] p-12 text-center relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 gold-bg text-black px-6 py-2 font-black text-xs rounded-bl-2xl">OFERTA ÚNICA</div>
          
          <h3 className="text-xl uppercase font-bold text-gray-500 mb-4">Acesso Imediato</h3>
          <p className="text-red-500 line-through text-2xl font-bold opacity-50 mb-2">R$ 597,00</p>
          <h4 className="text-7xl md:text-8xl font-black mb-4 tracking-tighter">R$ 97</h4>
          <p className="text-xl mb-10 text-gray-400">ou 12x de <span className="gold-text font-black text-3xl">R$ 9,74</span></p>
          
          <motion.a 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href={CHECKOUT_URL} 
            className="block w-full green-bg text-white font-black py-6 rounded-2xl text-2xl btn-pulse-green hover:shadow-[0_0_40px_rgba(37,211,102,0.6)] transition-all uppercase tracking-tighter"
          >
            🚀 QUERO COMEÇAR AGORA
          </motion.a>
          
          <div className="flex items-center justify-center gap-4 mt-6 text-[10px] text-gray-500 uppercase tracking-widest">
            <Lock className="w-3 h-3" /> Compra 100% Segura
            <CheckCircle className="w-3 h-3" /> Acesso Vitalício
          </div>
        </motion.div>
      </section>

      {/* 10. GARANTIA */}
      <section className="py-12 px-6 text-center">
        <div className="max-w-xl mx-auto border border-zinc-800 p-8 rounded-2xl bg-zinc-900/20 backdrop-blur-sm">
          <ShieldCheck className="w-12 h-12 mx-auto mb-4 gold-text opacity-50" />
          <h3 className="text-lg font-bold mb-2 gold-text uppercase">7 DIAS DE GARANTIA INCONDICIONAL</h3>
          <p className="text-xs text-gray-400 leading-relaxed font-light">Se por qualquer motivo você achar que o método não é para você, devolvemos 100% do seu investimento. Sem perguntas, sem burocracia.</p>
        </div>
      </section>

      {/* 11. FAQ */}
      <section className="py-24 px-6 max-w-2xl mx-auto text-center">
        <h2 className="text-2xl font-black mb-12 uppercase tracking-tight">Dúvidas Frequentes</h2>
        <div className="space-y-4 text-left">
          {[
            { q: "Preciso de um computador potente?", a: "Não! O método foi criado especificamente para quem quer usar apenas o celular (Android ou iPhone) através do CapCut." },
            { q: "Como recebo o acesso?", a: "Imediatamente após a confirmação do pagamento, você receberá os dados de acesso no seu e-mail cadastrado." },
            { q: "Realmente vou ganhar em dólar?", a: "Sim. Ensinamos como atuar em mercados e plataformas que pagam em moeda estrangeira, permitindo que você multiplique seus ganhos." }
          ].map((item, i) => (
            <details key={i} className="group bg-zinc-900/50 rounded-2xl p-5 cursor-pointer border border-zinc-800 transition-all hover:bg-zinc-900">
              <summary className="font-bold flex justify-between items-center text-sm uppercase tracking-tight list-none">
                {item.q}
                <ChevronDown className="gold-text group-open:rotate-180 transition-transform w-5 h-5" />
              </summary>
              <motion.p 
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                className="text-gray-400 mt-4 text-xs leading-relaxed font-light"
              >
                {item.a}
              </motion.p>
            </details>
          ))}
        </div>
      </section>

      {/* 12. RODAPÉ */}
      <footer className="py-20 px-6 border-t border-zinc-900 text-center text-[10px] text-zinc-700 uppercase tracking-widest">
        <p className="mb-4">© 2024 BRUNA MARTINS - MÉTODO EDIÇÃO LUCRATIVA</p>
        <div className="flex justify-center gap-6 mb-8">
          <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
          <a href="#" className="hover:text-white transition-colors">Privacidade</a>
        </div>
        <p className="max-w-2xl mx-auto leading-loose opacity-30">
          Este site não é afiliado ao Facebook, Google ou CapCut. Os resultados apresentados são experiências pessoais e não garantem ganhos fáceis. O sucesso depende da aplicação correta do método.
        </p>
      </footer>

      {/* PROVA SOCIAL DINÂMICA */}
      <AnimatePresence>
        {showProof && (
          <motion.div 
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 50, opacity: 0 }}
            className="fixed bottom-6 left-6 bg-white text-black p-4 rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.5)] flex items-center gap-4 text-[11px] font-bold z-50 max-w-[280px]"
          >
            <div className="w-10 h-10 gold-bg rounded-full flex items-center justify-center text-white text-lg shadow-inner">💰</div>
            <div>
              <p className="text-zinc-900"><span className="gold-text text-black">{proofName}</span> acabou de garantir o acesso!</p>
              <p className="text-[9px] text-gray-400 font-normal uppercase tracking-tighter">Inscrição confirmada há poucos instantes</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* FLOATING INSTAGRAM BUTTON */}
      <motion.a 
        href={INSTAGRAM_URL}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.1, rotate: 5 }}
        className="fixed bottom-6 right-6 z-[100] bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] p-4 rounded-full shadow-[0_10px_30px_rgba(0,0,0,0.5)] text-white hover:shadow-[0_15px_40px_rgba(0,0,0,0.7)] transition-all"
        title="Siga no Instagram"
      >
        <Instagram className="w-6 h-6" />
      </motion.a>

    </div>
  );
}
