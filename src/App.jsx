import { motion } from 'framer-motion'
import { ArrowLeft, ExternalLink } from 'lucide-react'

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
      className="bg-white/80 backdrop-blur-sm rounded-2xl overflow-hidden border border-slate-300 shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col h-[320px] md:h-[340px] group"
    >
      {/* Top Media Area */}
      <div className="relative h-[40%] bg-[#0F172B] overflow-hidden">
        {/* Main Image */}
        <div className="absolute inset-2 bottom-0 bg-slate-100 rounded-t-xl overflow-hidden border-t-4 border-x-4 border-[#0F172B]">
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
          />
        </div>

        {/* Logo Icon - Top Right */}
        <div className="absolute top-3 right-3 w-8 h-8 md:w-10 md:h-10 bg-white rounded-lg shadow-md flex items-center justify-center p-1 z-10">
          <img
            src={service.logo}
            alt="logo"
            className="w-full h-full object-contain"
            onError={(e) => {
              e.target.style.display = 'none';
            }}
          />
        </div>

        {/* Utility Icon/Badge - Top Left */}
        <div className="absolute top-3 left-3 w-8 h-8 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center border border-white/20">
          <ExternalLink className="w-4 h-4 text-white/80" />
        </div>
      </div>

      {/* Content Body */}
      <div className="p-4 flex-1 flex flex-col">
        <div className="mb-auto">
          <h3 className="text-lg font-bold text-[#0F172B] mb-1">{service.title}</h3>

          <p className="text-[#6B7280] text-xs leading-relaxed line-clamp-3 mt-1 font-medium">
            {service.description}
          </p>
        </div>

        {/* CTA Button */}
        <a
          href={service.link}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 w-full bg-[#0F172B] hover:bg-[#1e293b] text-white py-2 px-3 rounded-lg flex items-center justify-center gap-2 text-xs font-bold transition-colors"
        >
          <span>زيارة الموقع</span>
          <ArrowLeft className="w-3 h-3" />
        </a>
      </div>
    </motion.div>
  )
}

function App() {
  return (
    <div className="min-h-screen bg-[#F7F9FC] font-tajawal selection:bg-[#0F172B] selection:text-white">
      {/* Hero Section */}
      <header className="relative w-full py-20 md:py-32 overflow-hidden flex items-center justify-center">
        {/* Silky Background Effect */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-gray-100 to-slate-200 opacity-80"></div>
          {/* Abstract Waves/Blur */}
          <div className="absolute top-0 left-0 right-0 h-full opacity-30 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white via-slate-200 to-transparent blur-3xl transform -translate-y-1/4"></div>
          <div className="absolute bottom-0 left-1/3 w-2/3 h-2/3 bg-gradient-to-t from-white via-transparent to-transparent z-10"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center">
          <span className="text-slate-500 font-medium tracking-widest text-sm uppercase mb-4 block">
            المشاريع ونبذة عنها
          </span>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight leading-tight text-gray-800">
            <span className="block">تمكين رحلتك</span>
            <span className="block text-[#485466]">الرقمية</span>
          </h1>

          <p className="text-lg md:text-xl text-[#6B7280] max-w-2xl mx-auto mb-8 leading-relaxed">
            نقدم حلولًا رقمية مبتكرة ترتقي بتجربة المستخدم وتُبسّط سير العمل بكفاءة.
            نعتمد منهجية احترافية تجمع بين الإبداع والدقة، ونطوّر منصات وأدوات ذكية
            تدعم التحول الرقمي وتعزّز الأتمتة لرفع الأداء وتحقيق نتائج قابلة للقياس.
          </p>

          <a href="#services" className="inline-block bg-[#0F172B] text-white px-8 py-3 rounded-full text-sm font-bold shadow-lg shadow-slate-900/10 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300">
            اكتشف
          </a>
        </div>
      </header>

      {/* Services Grid Section */}
      <section id="services" className="relative z-20 py-12 px-4 md:px-8 max-w-[1400px] mx-auto">
        <div className="text-center mb-12">
          <span className="text-slate-500 font-medium tracking-widest text-sm uppercase mb-2 block">
            الخدمات
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0F172B]">خدماتنا</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 md:gap-8">
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-slate-400 text-sm bg-white/50 border-t border-slate-100">
        <p>&copy; {new Date().getFullYear()} جميع الحقوق محفوظة</p>
      </footer>
    </div>
  )
}

export default App

