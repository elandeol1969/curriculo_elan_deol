import { useEffect, useRef, useState, type ReactNode } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  MapPin, Globe, Heart, Sparkles, Brain, 
  Terminal, LineChart, Calculator, BookOpen, 
  Rocket, Briefcase, Mail, Linkedin, Link as LinkIcon, Zap, CheckCircle2,
  Code2, Database, LayoutTemplate, GraduationCap, Menu, X, Phone, Github
} from 'lucide-react';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const heroVideoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = heroVideoRef.current;

    if (!video) {
      return;
    }

    const handleTimeUpdate = () => {
      if (video.currentTime >= 5) {
        video.currentTime = 0;
        void video.play();
      }
    };

    video.addEventListener('timeupdate', handleTimeUpdate);

    return () => {
      video.removeEventListener('timeupdate', handleTimeUpdate);
    };
  }, []);

  return (
    <div className="font-sans text-slate-200 min-h-screen pb-32">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 glass px-6 py-4">
        <div className="max-w-screen-md mx-auto flex justify-between items-center">
          <div className="text-xl font-extrabold tracking-tighter italic">
            <span className="text-primary">Elias</span><span className="text-accent"> Oliveira</span><span className="text-white"></span>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex gap-6 text-sm font-medium">
            <a href="#sobre" className="hover:text-primary transition-colors">Sobre</a>
            <a href="#formacao" className="hover:text-primary transition-colors">Formação</a>
            <a href="#competencias" className="hover:text-primary transition-colors">Competências</a>
            <a href="#experiencia" className="hover:text-primary transition-colors">Experiência</a>
            <a href="#contato" className="hover:text-primary transition-colors">Contato</a>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden p-2 text-slate-300 hover:text-white transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden overflow-hidden"
            >
              <div className="flex flex-col gap-4 pt-4 pb-2 text-sm font-medium border-t border-white/10 mt-4">
                <a href="#sobre" onClick={() => setIsMenuOpen(false)} className="hover:text-primary transition-colors">Sobre</a>
                <a href="#formacao" onClick={() => setIsMenuOpen(false)} className="hover:text-primary transition-colors">Formação</a>
                <a href="#competencias" onClick={() => setIsMenuOpen(false)} className="hover:text-primary transition-colors">Competências</a>
                <a href="#experiencia" onClick={() => setIsMenuOpen(false)} className="hover:text-primary transition-colors">Experiência</a>
                <a href="#contato" onClick={() => setIsMenuOpen(false)} className="hover:text-primary transition-colors">Contato</a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <main className="max-w-screen-md mx-auto px-6 pt-12">
        {/* Hero Section */}
        <section className="relative mb-20">
          <div className="absolute inset-0 -z-10 overflow-hidden rounded-[2rem]">
            <video
              ref={heroVideoRef}
              src="/video_small.mp4"
              autoPlay
              muted
              playsInline
              preload="metadata"
              className="w-full h-full object-cover opacity-30"
            />
            <div className="absolute inset-0 bg-obsidian/60"></div>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col items-center text-center"
          >
            <div className="section-tag mb-6">
              <Sparkles className="w-3.5 h-3.5" />
              Perfil em 2026
            </div>
            
            <div className="relative mb-10 group">
              <div className="absolute inset-0 bg-primary/20 rounded-[2rem] blur-2xl group-hover:bg-accent/20 transition-colors duration-500"></div>
              <div className="relative w-48 h-48 rounded-[2rem] overflow-hidden neon-border">
                <img 
                  src="/Matrix3.png" 
                  alt="Elias Antônio de Oliveira Profile" 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>

            <h2 className="text-primary font-bold tracking-widest uppercase text-xs mb-3">Analista Consultor de TI</h2>
            <h1 className="text-2xl md:text-3xl font-bold mb-4 leading-tight tracking-tight">
              <span className="block text-white">Curriculum</span>
            </h1>
            <p className="text-slate-400 font-extrabold text-lg mb-8 max-w-lg">
              (Elias Antônio de Oliveira)
              <span className="block text-sm text-slate-500 font-normal mt-1 italic">Especialista em Engenharia de Software</span>
            </p>

            <div className="flex flex-wrap justify-center gap-4 text-xs font-semibold">
              <div className="glass px-4 py-2 rounded-full flex items-center gap-2">
                <MapPin className="w-4 h-4 text-primary" />
                João Pessoa, PB
              </div>
            </div>
          </motion.div>
        </section>

        {/* Personal Summary */}
        <section id="sobre" className="mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass p-8 rounded-[2.5rem] relative overflow-hidden group"
          >
            <div className="absolute -right-10 -top-10 w-40 h-40 bg-primary/10 blur-3xl rounded-full"></div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center">
                <Brain className="w-5 h-5 text-primary" />
              </div>
              <h2 className="text-xl font-bold text-white tracking-tight">Sobre mim</h2>
            </div>
            <p className="text-slate-300 leading-relaxed text-lg font-light italic">
              "Casado, pai de duas filhas, apreciador incondicional de viagens, boa gastronomia, artes, literatura, cinema, filosofia e apaixonado por <span className="text-primary font-semibold">ciência</span>, <span className="text-accent font-semibold">tecnologia</span>, <span className="text-emerald-400 font-semibold">engenharia</span>, física e matemática como forma de manter o equilíbrio do espírito nas ações pela busca de um mundo sustentável e melhor para a geração atual e para as gerações futuras."
            </p>
          </motion.div>
        </section>

        {/* Education */}
        <section id="formacao" className="mb-20">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-accent/20 flex items-center justify-center">
                <GraduationCap className="w-5 h-5 text-accent" />
              </div>
              <h2 className="text-2xl font-bold text-white tracking-tight">Formação Acadêmica</h2>
            </div>
            <div className="h-px flex-1 bg-gradient-to-r from-accent/50 to-transparent ml-6"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <EducationCard 
              icon={<Terminal />} color="primary" type="Pós-Graduação"
              title="Full Stack & Cloud Computing" subtitle="Especialista (Lato Sensu) • GRAN Faculdade"
            />
            <EducationCard 
              icon={<Terminal />} color="primary" type="Pós-Graduação"
              title="Engenharia de Software" subtitle="Especialista (Lato Sensu) • UNINTER"
            />
            <EducationCard 
              icon={<Globe />} color="emerald" type="Pós-Graduação"
              title="Desenvolvimento Regional Sustentável" subtitle="Especialista (Lato Sensu) • UFBA"
            />
            <EducationCard 
              icon={<LineChart />} color="accent" type="Atualização"
              title="Gerenciamento de Projetos" subtitle="Especialista • FGV"
            />
            <EducationCard 
              icon={<Code2 />} color="indigo" type="Graduação"
              title="Análise e Desenvolvimento de Sistemas" subtitle="Graduado • GRAN Faculdade"
            />
            <EducationCard 
              icon={<Calculator />} color="amber" type="Graduação"
              title="Matemática" subtitle="Graduado • UNINTER"
            />
            <EducationCard 
              icon={<BookOpen />} color="rose" type="Graduação"
              title="Filosofia" subtitle="Graduado • CESB-ICSH"
            />
            <EducationCard 
              icon={<LayoutTemplate />} color="cyan" type="Tecnólogo"
              title="Programação de Computadores" subtitle="Tecnólogo • UNEB"
            />
            <EducationCard 
              icon={<Database />} color="violet" type="Formação"
              title="Desenvolvedor Full Stack" subtitle="SENAI PB"
            />
            <EducationCard 
              icon={<Briefcase />} color="slate" type="Técnico"
              title="Contabilidade/Profissionalizante" subtitle="Técnico • Colégio Sete de Setembro"
            />
          </div>
        </section>

        {/* Competências Técnicas */}
        <section id="competencias" className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-xl bg-emerald-900/40 border border-emerald-500/20 flex items-center justify-center">
              <Code2 className="w-5 h-5 text-emerald-400" />
            </div>
            <h2 className="text-2xl font-bold text-white tracking-tight">Competências Técnicas</h2>
          </div>

          <div className="flex flex-wrap gap-3">
            {[
              "HTML", "CSS", "Java", "Javascript", "Python", "React", "Node.js", "SQL",
              "MySQL", "REST", "SOAP", "POO", "UML", "SCRUM", "XP", "Kanban", "IA",
              "Engenharia de Software", "Elicitação de Requisitos",
              "Projetos de Software", "Governança de TI", "Cibersegurança", "DevOps",
              "DevSecOps", "FinOps", "CI/CD", "UX/UI", "ITIL5", "Cobit2019", "PMBOK7",
              "BPM CBOK 4.0"
            ].map((skill) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, backgroundColor: "rgba(30, 41, 59, 0.8)" }}
                className="px-4 py-2 rounded-xl bg-slate-800/40 border border-slate-700/50 text-slate-300 text-sm font-medium transition-colors cursor-default"
              >
                {skill}
              </motion.div>
            ))}
          </div>
        </section>

        {/* Experience */}
        <section id="experiencia" className="mb-20">
          <div className="flex items-center gap-3 mb-10">
            <div className="w-10 h-10 rounded-xl bg-emerald-400/20 flex items-center justify-center">
              <Rocket className="w-5 h-5 text-emerald-400" />
            </div>
            <h2 className="text-2xl font-bold text-white tracking-tight">Histórico Profissional</h2>
          </div>

          <div className="space-y-6">
            <ExperienceItem 
              period="Jul 2024 - Presente"
              title="RED-e Soluções e Serviços Ltda."
              role="Analista Consultor de TI e Sócio-Fundador"
              description="Atuação como sócio-fundador e consultor de TI, liderando projetos de transformação digital e arquitetura de sistemas de alta performance."
              isCurrent
            />
            <ExperienceItem 
              period="Jan 2024 - Dez 2024"
              title="DATAPREV"
              role="Analista de TI (Developer)"
              description="Desenvolvimento e manutenção de sistemas críticos, garantindo alta disponibilidade para serviços de abrangência nacional."
            />
            <ExperienceItem 
              period="2013 - 2018"
              title="Casa Civil da Presidência da República"
              role="Assessor da Subchefia de Articulação e Monitoramento (SAM/CC/PR)"
              description="Atuação no serviço público federal, requisitado para assessoramento estratégico."
            />
            <ExperienceItem 
              period="2012"
              title="Banco do Brasil & Booz & Company"
              role="Implementação do Projeto 'Internacionalização'"
              description="Parceria estratégica para a internacionalização do Banco do Brasil."
            />
            <ExperienceItem 
              period="2011"
              title="Banco do Brasil (EUA)"
              role="Gerente de Projeto & Consultor"
              description="Gerente do Projeto BB USA Service Center em Orlando, FL e Consultor do Projeto BB Américas em Miami, FL."
            />
            <ExperienceItem 
              period="2000 - 2011"
              title="Banco do Brasil (Head Office - Brasília)"
              role="Consultor e Analista Sênior"
              description="Modelagem de Processos, Consultoria de OSM, Gerenciamento de Projetos e Modelagem de Produtos Financeiros. Liderança em projetos estratégicos internacionais."
            />
            <ExperienceItem 
              period="1987 - 1999"
              title="Banco do Brasil S.A."
              role="Cargos Técnicos e Gerenciais"
              description="Analista Júnior, Pleno e Sênior. Gerente de Equipe, Supervisor e Gerente de Expediente."
            />
            <ExperienceItem 
              period="1984 - 1986"
              title="Banco do Nordeste"
              role="Estagiário Técnico em Contabilidade"
              description="Bolsista de Nível Médio."
            />
          </div>
        </section>

        <section id="contato" className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center">
              <Mail className="w-5 h-5 text-primary" />
            </div>
            <h2 className="text-2xl font-bold text-white tracking-tight">Contato</h2>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-5"
          >
            <a
              href="https://www.linkedin.com/in/elias-oliveira-a8a655112/"
              target="_blank"
              rel="noreferrer"
              className="glass rounded-3xl p-6 h-36 flex items-center gap-4 hover:border-primary/40 transition-colors"
            >
              <div className="w-14 h-14 rounded-2xl bg-obsidian border border-white/5 flex items-center justify-center shrink-0">
                <Linkedin className="w-7 h-7 text-slate-400" />
              </div>
              <div>
                <h3 className="text-white font-bold text-2xl tracking-tight">LinkedIn</h3>
                <p className="text-slate-400 mt-1">/in/elias-oliveira-a8a655112</p>
              </div>
            </a>

            <a
              href="http://lattes.cnpq.br/0865708033793942"
              target="_blank"
              rel="noreferrer"
              className="glass rounded-3xl p-6 h-36 flex items-center gap-4 hover:border-accent/40 transition-colors"
            >
              <div className="w-14 h-14 rounded-2xl bg-obsidian border border-white/5 flex items-center justify-center shrink-0">
                <LinkIcon className="w-7 h-7 text-slate-400" />
              </div>
              <div>
                <h3 className="text-white font-bold text-2xl tracking-tight">Currículo Lattes</h3>
                <p className="text-slate-400 mt-1">Acessar Perfil CNPq</p>
              </div>
            </a>

            <a
              href="https://wa.me/5575991970787"
              target="_blank"
              rel="noreferrer"
              className="glass rounded-3xl p-6 h-36 flex items-center gap-4 hover:border-cyan-400/30 transition-colors"
            >
              <div className="w-14 h-14 rounded-2xl bg-cyan-900/20 border border-cyan-500/20 flex items-center justify-center shrink-0">
                <Phone className="w-7 h-7 text-cyan-300/80" />
              </div>
              <div>
                <h3 className="text-white font-bold text-2xl tracking-tight">Telefone / WhatsApp</h3>
                <p className="text-slate-400 mt-1">(75) 9 9197-0787</p>
              </div>
            </a>

            <a
              href="tel:+5583999018375"
              className="glass rounded-3xl p-6 h-36 flex items-center gap-4 hover:border-primary/40 transition-colors"
            >
              <div className="w-14 h-14 rounded-2xl bg-obsidian border border-white/5 flex items-center justify-center shrink-0">
                <Phone className="w-7 h-7 text-slate-400" />
              </div>
              <div>
                <h3 className="text-white font-bold text-2xl tracking-tight">Telefone/Comercial</h3>
                <p className="text-slate-400 mt-1">(83) 9 9901-8375</p>
              </div>
            </a>

            <a
              href="mailto:elias.antoniol@gmail.com"
              className="glass rounded-3xl p-6 h-36 flex items-center gap-4 hover:border-primary/40 transition-colors"
            >
              <div className="w-14 h-14 rounded-2xl bg-obsidian border border-white/5 flex items-center justify-center shrink-0">
                <Mail className="w-7 h-7 text-slate-400" />
              </div>
              <div>
                <h3 className="text-white font-bold text-2xl tracking-tight">E-mail</h3>
                <p className="text-slate-400 mt-1">elias.antoniol@gmail.com</p>
              </div>
            </a>

            <a
              href="https://github.com/elandeol1969"
              target="_blank"
              rel="noreferrer"
              className="glass rounded-3xl p-6 h-36 flex items-center gap-4 hover:border-primary/40 transition-colors"
            >
              <div className="w-14 h-14 rounded-2xl bg-obsidian border border-white/5 flex items-center justify-center shrink-0">
                <Github className="w-7 h-7 text-slate-400" />
              </div>
              <div>
                <h3 className="text-white font-bold text-2xl tracking-tight">GitHub</h3>
                <p className="text-slate-400 mt-1">/elandeol1969</p>
              </div>
            </a>
          </motion.div>
        </section>
      </main>

      {/* Footer / Floating Contact */}
      <footer className="fixed bottom-6 left-1/2 -translate-x-1/2 w-[90%] max-w-md z-50">
        <div className="glass shadow-2xl rounded-2xl px-6 py-4 flex items-center justify-between border-white/10">
          <a href="https://www.linkedin.com/in/elias-oliveira-a8a655112/" target="_blank" rel="noreferrer" className="flex flex-col items-center gap-1 group">
            <div className="p-2 rounded-xl group-hover:bg-primary/20 transition-all group-hover:-translate-y-1">
              <Linkedin className="w-5 h-5 text-slate-400 group-hover:text-primary transition-colors" />
            </div>
          </a>
          <div className="w-px h-6 bg-white/10"></div>
          <a href="http://lattes.cnpq.br/0865708033793942" target="_blank" rel="noreferrer" className="flex flex-col items-center gap-1 group">
            <div className="p-2 rounded-xl group-hover:bg-accent/20 transition-all group-hover:-translate-y-1">
              <LinkIcon className="w-5 h-5 text-slate-400 group-hover:text-accent transition-colors" />
            </div>
          </a>
          <div className="w-px h-6 bg-white/10"></div>
          <a href="mailto:elias.antoniol@gmail.com" className="fgit push -u origin mainlex flex-col items-center gap-1 group">
            <div className="p-2 rounded-xl group-hover:bg-primary/20 transition-all group-hover:-translate-y-1">
              <Mail className="w-5 h-5 text-slate-400 group-hover:text-primary transition-colors" />
            </div>
          </a>
          <div className="w-px h-6 bg-white/10"></div>
          <a href="https://wa.me/5575991970787" target="_blank" rel="noreferrer" className="flex flex-col items-center gap-1 group">
            <div className="p-2 rounded-xl bg-cyan-900/20 border border-cyan-500/20 group-hover:bg-cyan-900/30 transition-all group-hover:-translate-y-1">
              <Phone className="w-5 h-5 text-cyan-300/80 group-hover:text-cyan-200 transition-colors" />
            </div>
          </a>
          <div className="w-px h-6 bg-white/10"></div>
          <a href="https://github.com/elandeol1969" target="_blank" rel="noreferrer" className="flex flex-col items-center gap-1 group">
            <div className="p-2 rounded-xl group-hover:bg-primary/20 transition-all group-hover:-translate-y-1">
              <Github className="w-5 h-5 text-slate-400 group-hover:text-primary transition-colors" />
            </div>
          </a>
          <div className="w-px h-6 bg-white/10"></div>
          <div className="flex flex-col items-center gap-1">
            <div className="p-2 rounded-xl bg-primary text-white shadow-lg shadow-primary/40 animate-pulse">
              <Zap className="w-5 h-5" />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function EducationCard({ icon, color, type, title, subtitle }: { icon: ReactNode, color: string, type: string, title: string, subtitle: string }) {
  const colorMap: Record<string, string> = {
    primary: 'text-primary border-primary/50 hover:border-primary/50',
    accent: 'text-accent border-accent/50 hover:border-accent/50',
    indigo: 'text-indigo-400 border-indigo-400/50 hover:border-indigo-400/50',
    amber: 'text-amber-400 border-amber-400/50 hover:border-amber-400/50',
    emerald: 'text-emerald-400 border-emerald-400/50 hover:border-emerald-400/50',
    rose: 'text-rose-400 border-rose-400/50 hover:border-rose-400/50',
    cyan: 'text-cyan-400 border-cyan-400/50 hover:border-cyan-400/50',
    violet: 'text-violet-400 border-violet-400/50 hover:border-violet-400/50',
    slate: 'text-slate-400 border-slate-400/50 hover:border-slate-400/50',
  };

  const activeColor = colorMap[color] || colorMap.primary;

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className={`glass p-6 rounded-3xl transition-colors group ${activeColor.split(' ')[2]}`}
    >
      <div className="flex justify-between items-start mb-4">
        <div className={`w-12 h-12 bg-obsidian rounded-2xl border border-white/5 flex items-center justify-center group-hover:scale-110 transition-transform ${activeColor.split(' ')[0]}`}>
          {icon}
        </div>
        <span className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">{type}</span>
      </div>
      <h3 className="font-bold text-white mb-1">{title}</h3>
      <p className="text-xs text-slate-400 mb-4 tracking-wide uppercase">{subtitle}</p>
    </motion.div>
  );
}

function ExperienceItem({ period, title, role, description, isCurrent = false }: { period: string, title: string, role: string, description: string, isCurrent?: boolean }) {
  return (
    <motion.div 
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className={`relative pl-8 border-l-2 py-2 ${isCurrent ? 'border-primary/30' : 'border-slate-700'}`}
    >
      <div className={`absolute -left-[9px] top-4 w-4 h-4 rounded-full ${isCurrent ? 'bg-primary ring-4 ring-primary/20' : 'bg-slate-700'}`}></div>
      <div className={`glass p-6 rounded-3xl ${isCurrent ? '' : 'opacity-80'}`}>
        <div className="flex justify-between items-start mb-2">
          <div>
            {isCurrent ? (
              <span className="section-tag !text-[9px] !bg-primary/20 mb-2">Atual</span>
            ) : (
              <span className="text-[10px] text-slate-500 font-bold uppercase tracking-widest mb-2 block">{period}</span>
            )}
            <h3 className={`text-lg font-bold text-white ${isCurrent ? 'text-xl' : ''}`}>{title}</h3>
            <p className={`${isCurrent ? 'text-primary' : 'text-slate-400'} font-medium text-sm`}>{role}</p>
          </div>
          {isCurrent && <span className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">{period}</span>}
        </div>
        <p className="mt-3 text-slate-400 text-sm leading-relaxed">
          {description}
        </p>
      </div>
    </motion.div>
  );
}
