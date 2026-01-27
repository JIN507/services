import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import { ThemeProvider } from './context/ThemeContext';
import ThemeToggle from './components/ThemeToggle';

const services = [
  {
    id: 1,
    title: "منصة خطى",
    description: " منصة مصممة لمتابعة الأعمال والمهام وتوثيقها وعرض إحصائيات تصويرية ورقمية للبيانات و تييسر حركة سير العمل الإداري وأرشفة الأعمال اليومية",
    image: "/images/steps.png",
    logo: "/images/logos/steps logo.png",
    link: "http://192.168.8.210/"
  },
  {
    id: 2,
    title: "منصة عين",
    description: "منصّة إلكترونية تهدف إلى مساعدة المستخدمين على متابعة والاطّلاع على الأحداث العالمية والمحلية عبر مصادر صحفية رسمية وغير رسمية من عدّة دول. ",
    image: "/images/ain.png",
    logo: "/images/logos/ain logo.png",
    link: "https://ain-4m6r.onrender.com/"
  },
  {
    id: 3,
    title: "تحقق",
    description: "موقع إلكتروني يهدف إلى مساعدة المستخدمين في التحقّق من صحّة المحتوى الرقمي  الصور,الفيديوهات,الأخبار والصوت بكل سهولة.",
    image: "/images/t788.png",
    logo: "/images/logos/t788 logo.png",
    link: "https://mns-thqq.onrender.com/"
  },
  {
    id: 4,
    title: "مدقق المحتوى",
    description: "هو موقع يقوم بتدقيق وتحليل المحتوى بناء على عدة عوامل ويصدر تقرير تفصيلي بذلك.",
    image: "/images/checker.png",
    logo: "/images/logos/checker logo.png",
    link: "https://rnd1989.netlify.app/"
  },
  {
    id: 5,
    title: "عين كاست",
    description: "نظام بودكاست يعتمد على الذكاء الاصطناعي لتمكين إنتاج محتوى صوتي  بكفاءة,المعالجة الصوتية، التحرير، تحسين الجودة،وإدارة المحتوى،",
    image: "/images/aincast.png",
    logo: "/images/logos/aincastlogo.ico",
    link: "https://audio-orb-1055660716199.us-west1.run.app/"
  },
  {
    id: 6,
    title: "تعليقات جاكو",
    description: "موقع مصمم لتفريغ الفيديو من منصة جاكو وقرائته وفهم محتواياته لإنشاء تعليقات مناسبة وفريدة لكل فيديو",
    image: "/images/jako.png",
    logo: "/images/logos/jaco logo.png",
    link: "http://46.202.140.7:5003/"
  },
  {
    id: 7,
    title: "تصدر",
    description: "موقع مساعد لتحسين وكشف أخطاء وقياس نقاط الضعف والقوة للردود على منصة  X لتكون الردود أكثر جذبا للتفاعل",
    image: "/images/t9dr.png",
    logo: "/images/logos/t9dr logo.png",
    link: "https://t-1055660716199.us-west1.run.app/"
  },

  {
    id: 8,
    title: "راقب",
    description: "هو موقع يهتم يجلب الوسوم حسب الدوله وكلمات دلاليه ويقوم بحفظ الوسم وعدد تغريداته ودولته او مدينته والوقت والتاريخ في قاعده بيانات",
    image: "/images/watcher.png",
    logo: "/images/logos/watcher logo.png",
    link: "http://46.202.140.7:8501/"
  },
  {
    id: 9,
    title: "قياس متوسط التفاعل",
    description: "هو نظام محلي لتحليل تفاعل الحسابات على منصة  أكس من حيث معدل التفاعل، وقياس قوة المحتوى",
    image: "/images/qyas.png",
    logo: "/images/logos/qyas logo.png",
    link: "http://46.202.140.7:8888/"
  },
  {
    id: 10,
    title: "مولد الهوية بالذكاء الاصطناعي",
    description: "موقع يقوم بتوليد هوية متكاملة بواسطة الذكاء الاصطناعي ، حيث يولد صورة مناسبة مع هيدر وصورة بايو تتناسب مع شخصية وتوجه الحساب.",
    image: "/images/hawiah.png",
    logo: "/images/logos/hawiah logo.png",
    link: "https://copy-of-783715999588.us-west1.run.app/"
  },
  {
    id: 11,
    title: "استديو الصور",
    description: "موقع شامل لتعديل الصور وإنشاءها والعديد من الوظائف:استعراض الزوايا,تعديل الأنماط,التصميم الداخلي والكثير من الخصائص الفنية.",
    image: "/images/studio.png",
    logo: "/images/logos/studio logo.png",
    link: "https://m-783715999588.us-west1.run.app/"
  },

]

function ServiceCard({ service, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      viewport={{ once: true }}
      className="group flex flex-col h-[360px] bg-white dark:bg-navy-800 rounded-2xl overflow-hidden border border-slate-200 dark:border-navy-700 shadow-card hover:shadow-card-hover transition-all duration-300"
    >
      {/* Top Media Area */}
      <div className="relative h-[45%] w-full overflow-hidden bg-slate-100 dark:bg-navy-900">
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
        />

        {/* Overlay gradient for text readability if needed */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

        {/* Logo Badge - Floating */}
        <div className="absolute top-3 right-3 w-10 h-10 bg-white/95 dark:bg-navy-900/95 backdrop-blur-sm rounded-xl shadow-lg border border-slate-100 dark:border-navy-700 flex items-center justify-center p-1.5 z-10">
          <img
            src={service.logo}
            alt="logo"
            className="w-full h-full object-contain"
            onError={(e) => { e.target.style.display = 'none'; }}
          />
        </div>
      </div>

      {/* Content Body */}
      <div className="flex-1 p-5 flex flex-col relative">
        <div className="mb-auto">
          <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 group-hover:text-primary transition-colors">
            {service.title}
          </h3>

          <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed line-clamp-3 font-medium">
            {service.description}
          </p>
        </div>

        {/* Footer / CTA */}
        <div className="mt-4 pt-4 border-t border-slate-100 dark:border-navy-700">
          <a
            href={service.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 dark:bg-primary dark:hover:bg-primary-dark text-white text-sm font-bold transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
          >
            <span>زيارة المنصة</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </motion.div>
  )
}

function HeroSection() {
  return (
    <header className="relative w-full py-24 md:py-32 lg:py-40 overflow-hidden flex items-center justify-center bg-slate-50 dark:bg-navy-950 transition-colors duration-300">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-[url('/bg-tech.png')] bg-cover bg-center opacity-60 dark:opacity-40 mix-blend-overlay"
        ></div>
        {/* Gradient Overlay for Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-50/20 via-slate-50/60 to-slate-50 dark:from-navy-950/20 dark:via-navy-950/60 dark:to-navy-950"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Glass Badge */}
          <span className="inline-block py-1.5 px-4 rounded-full bg-slate-200/50 dark:bg-white/10 backdrop-blur-md border border-slate-300/50 dark:border-white/10 text-slate-700 dark:text-slate-200 text-xs font-bold tracking-wider mb-8 shadow-sm">
            المشاريع ونبذة عنها
          </span>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 tracking-tight leading-tight text-slate-900 dark:text-white drop-shadow-sm">
            تمكين رحلتك <span className="text-slate-500 dark:text-slate-400">الرقمية</span>
          </h1>

          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed font-medium">
            نقدم حلولًا رقمية مبتكرة ترتقي بتجربة المستخدم وتُبسّط سير العمل بكفاءة.
            نعتمد منهجية احترافية تجمع بين الإبداع والدقة.
          </p>

          {/* Glass/Premium Button */}
          <a
            href="#services"
            className="inline-flex items-center gap-3 bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-8 py-4 rounded-full text-sm font-bold shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 hover:bg-slate-800 dark:hover:bg-slate-100"
          >
            <span>اكتشف خدماتنا</span>
            <ArrowLeft className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </header>
  );
}

function MainContent() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-navy-950 text-slate-900 dark:text-white transition-colors duration-300 selection:bg-primary selection:text-white">
      <ThemeToggle />

      <HeroSection />

      {/* Services Grid Section */}
      <section id="services" className="relative z-20 py-20 px-4 md:px-8 container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-3">خدماتنا</h2>
          <div className="h-1 w-20 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 text-center text-slate-500 dark:text-slate-400 text-sm bg-white dark:bg-navy-900 border-t border-slate-200 dark:border-navy-800 transition-colors duration-300">
        <p>&copy; {new Date().getFullYear()} جميع الحقوق محفوظة</p>
      </footer>
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <MainContent />
    </ThemeProvider>
  );
}

