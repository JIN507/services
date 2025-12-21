import { motion } from 'framer-motion'
import { ArrowRight, ExternalLink } from 'lucide-react'

const services = [
  {
    id: 1,
    title: "منصة عين",
    description: "منصّة إلكترونية تهدف إلى مساعدة المستخدمين على متابعة والاطّلاع على الأحداث العالمية عبر مصادر صحفية رسمية وغير رسمية من عدّة دول. ",
    image: "/images/ain.png",
    link: "https://ain-4m6r.onrender.com/"
  },
  {
    id: 2,
    title: "منصة خطى",
    description: "هي منصة احترافية داخلية لإدارة الاعمال ومتابعتها داخل الادارة",
    image: "/images/steps.png",
    link: "http://192.168.8.210/"
  },
  {
    id: 3,
    title: "راقب",
    description: "هو موقع يهتم يجلب الوسوم حسب الدوله وكلمات دلاليه ويقوم بحفظ الوسم وعدد تغريداته ودولته او مدينته والوقت والتاريخ في قاعده بيانات ويقوم بارسال تنبيه لجهاز المستخدم وايضا بواسطة التيليقرام",
    image: "/images/watcher.png",
    link: "http://46.202.140.7:8501/"
  },
  {
    id: 4,
    title: "تعليقات جاكو",
    description: "هو موقع يقوم بتفريغ النص من الفيديو المنشور على منصة جاكو ثم يقترح ردود مناسبة",
    image: "/images/jako.png",
    link: "http://46.202.140.7:5003/"
  },
  {
    id: 5,
    title: "قياس متوسط التفاعل",
    description: "هو نظام محلي لتحليل تفاعل الحسابات على منصة  أكس من حيث معدل التفاعل، وقياس قوة المحتوى",
    image: "/images/qyas.png",
    link: "http://46.202.140.7:8888/"
  },
  {
    id: 6,
    title: "تحقق",
    description: "موقع إلكتروني يهدف إلى مساعدة المستخدمين في التحقّق من صحّة المحتوى الرقمي، خاصة الصور والفيديوهات والأخبار.",
    image: "/images/t788.png",
    link: "https://mns-thqq.onrender.com/"
  },
  {
    id: 7,
    title: "تصدر",
    description: "دليلك الاحترافي لفهم خوارزمية X وتحليل ردودك للوصول إلى القمة",
    image: "/images/t9dr.png",
    link: "https://tasaddar-783715999588.us-west1.run.app/"
  },
  {
    id: 8,
    title: "مولد الهوية بالذكاء الاصطناعي",
    description: "موقع يقوم بتوليد هوية متكاملة بواسطة الذكاء الاصطناعي ، حيث يولد صورة مناسبة مع هيدر وصورة بايو تتناسب مع شخصية وتوجه الحساب.",
    image: "/images/hawiah.png",
    link: "https://copy-of-783715999588.us-west1.run.app/"
  },
  {
    id: 9,
    title: "استديو الصور",
    description: "موقع يحتوي على عدة انماط للتعديل علة الصور والتصميم الداخلي، حيث يستعرض لك جميع الانماط الفنية والابعاد المناسبة وبعض المزايا الاضافية.",
    image: "/images/studio.png",
    link: "https://m-783715999588.us-west1.run.app/"
  },
  {
    id: 10,
    title: "مدقق المحتوى",
    description: "هو موقع يقوم بتدقيق وتحليل المحتوى بناء على عدة عوامل ويصدر تقرير تفصيلي بذلك.",
    image: "/images/checker.png",
    link: "https://rnd1989.netlify.app/"
  }
]

function ServiceCard({ service, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      viewport={{ once: true }}
      className="service-card bg-white/95 backdrop-blur-sm rounded-2xl overflow-hidden border border-amber-100 flex flex-row-reverse"
    >
      <div className="relative overflow-hidden w-2/5 min-h-[180px]">
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>
      <div className="p-5 flex-1 flex flex-col justify-center">
        <h3 className="text-lg font-bold text-gray-800 mb-2">{service.title}</h3>
        <p className="text-gray-600 text-sm leading-relaxed mb-3 line-clamp-3">{service.description}</p>
        <a
          href={service.link}
          className="inline-flex items-center gap-2 text-amber-600 hover:text-amber-700 font-medium text-sm transition-colors group"
        >
          إنتقل
          <ExternalLink className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-1" />
        </a>
      </div>
    </motion.div>
  )
}

function App() {
  return (
    <div className="relative min-h-screen">
      {/* Content */}
      <div className="relative z-10">
        {/* Hero Section */}
        <header className="min-h-[60vh] flex flex-col items-center justify-center px-6 py-20">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl"
          >
            <span className="text-amber-700 font-medium tracking-widest text-sm uppercase mb-4 block">
              المشاريع ونبذة عنها
            </span>
            <h1 className="text-5xl md:text-7xl font-bold text-gray-800 mb-6 leading-tight">
              تمكين رحلتك
              <span className="block text-amber-700">الرقمية</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed mb-10">
              نقدم حلولًا رقمية مبتكرة ترتقي بتجربة المستخدم وتُبسّط سير  العمل بكفاءة.
              نعتمد منهجية احترافية تجمع بين الإبداع والدقة، ونطوّر منصات وأدوات ذكية
              تدعم التحول الرقمي وتعزّز الأتمتة لرفع الأداء وتحقيق نتائج قابلة للقياس.
            </p>
            <motion.a
              href="#services"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="inline-flex items-center gap-2 text-gray-600 hover:text-amber-700 transition-colors"
            >
              <span className="text-sm font-medium">اكتشف</span>
              <ArrowRight className="w-4 h-4 animate-bounce" />
            </motion.a>
          </motion.div>
        </header>

        {/* Services Section */}
        <section id="services" className="px-6 py-20 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-amber-700 font-medium tracking-widest text-sm uppercase mb-4 block">
              الخدمات
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800">خدماتنا</h2>
          </motion.div>

          {/* All cards in 2-column grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} />
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 text-center text-gray-500 text-sm">
          <p>&copy; 2025</p>
        </footer>
      </div>
    </div>
  )
}

export default App
