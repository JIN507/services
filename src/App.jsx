import { motion } from 'framer-motion'
import { ArrowRight, ExternalLink } from 'lucide-react'

const services = [
  {
    id: 1,
    title: "منصة عين",
    description: "منصّة إلكترونية تهدف إلى مساعدة المستخدمين على متابعة والاطّلاع على الأحداث العالمية عبر مصادر صحفية رسمية وغير رسمية من عدّة دول. ",
    image: "/images/ain.png",
    logo: "/images/logos/ain logo.png",
    link: "https://ain-4m6r.onrender.com/"
  },
  {
    id: 2,
    title: "منصة خطى",
    description: "هي منصة احترافية داخلية لإدارة الاعمال ومتابعتها داخل الادارة",
    image: "/images/steps.png",
    logo: "/images/logos/steps logo.png",
    link: "http://192.168.8.210/"
  },
  {
    id: 3,
    title: "راقب",
    description: "هو موقع يهتم يجلب الوسوم حسب الدوله وكلمات دلاليه ويقوم بحفظ الوسم وعدد تغريداته ودولته او مدينته والوقت والتاريخ في قاعده بيانات ويقوم بارسال تنبيه لجهاز المستخدم وايضا بواسطة التيليقرام",
    image: "/images/watcher.png",
    logo: "/images/logos/watcher logo.png",
    link: "http://46.202.140.7:8501/"
  },
  {
    id: 4,
    title: "تعليقات جاكو",
    description: "هو موقع يقوم بتفريغ النص من الفيديو المنشور على منصة جاكو ثم يقترح ردود مناسبة",
    image: "/images/jako.png",
    logo: "/images/logos/jaco logo.png",
    link: "http://46.202.140.7:5003/"
  },
  {
    id: 5,
    title: "قياس متوسط التفاعل",
    description: "هو نظام محلي لتحليل تفاعل الحسابات على منصة  أكس من حيث معدل التفاعل، وقياس قوة المحتوى",
    image: "/images/qyas.png",
    logo: "/images/logos/qyas logo.png",
    link: "http://46.202.140.7:8888/"
  },
  {
    id: 6,
    title: "تحقق",
    description: "موقع إلكتروني يهدف إلى مساعدة المستخدمين في التحقّق من صحّة المحتوى الرقمي، خاصة الصور والفيديوهات والأخبار.",
    image: "/images/t788.png",
    logo: "/images/logos/t788 logo.png",
    link: "https://mns-thqq.onrender.com/"
  },
  {
    id: 7,
    title: "تصدر",
    description: "دليلك الاحترافي لفهم خوارزمية X وتحليل ردودك للوصول إلى القمة",
    image: "/images/t9dr.png",
    logo: "/images/logos/t9dr logo.png",
    link: "https://t-1055660716199.us-west1.run.app/"
  },
  {
    id: 8,
    title: "مولد الهوية بالذكاء الاصطناعي",
    description: "موقع يقوم بتوليد هوية متكاملة بواسطة الذكاء الاصطناعي ، حيث يولد صورة مناسبة مع هيدر وصورة بايو تتناسب مع شخصية وتوجه الحساب.",
    image: "/images/hawiah.png",
    logo: "/images/logos/hawiah logo.png",
    link: "https://copy-of-783715999588.us-west1.run.app/"
  },
  {
    id: 9,
    title: "استديو الصور",
    description: "موقع يحتوي على عدة انماط للتعديل علة الصور والتصميم الداخلي، حيث يستعرض لك جميع الانماط الفنية والابعاد المناسبة وبعض المزايا الاضافية.",
    image: "/images/studio.png",
    logo: "/images/logos/studio logo.png",
    link: "https://m-783715999588.us-west1.run.app/"
  },
  {
    id: 10,
    title: "مدقق المحتوى",
    description: "هو موقع يقوم بتدقيق وتحليل المحتوى بناء على عدة عوامل ويصدر تقرير تفصيلي بذلك.",
    image: "/images/checker.png",
    logo: "/images/logos/checker logo.png",
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
      className="service-card group cursor-pointer"
    >
      <div className="relative bg-gradient-to-br from-white to-amber-50/50 backdrop-blur-sm rounded-3xl overflow-hidden border border-amber-100/50 shadow-lg shadow-amber-900/5 hover:shadow-xl hover:shadow-amber-900/10 transition-all duration-500 flex flex-row-reverse">
        {/* Image container with hover effect */}
        <div className="relative overflow-hidden w-2/5 min-h-[200px] bg-gradient-to-br from-amber-50 to-amber-100/50">
          {/* Logo - visible by default, hidden on hover */}
          <div className="absolute inset-0 flex items-center justify-center p-6 transition-opacity duration-500 group-hover:opacity-0">
            <div className="w-24 h-24 rounded-2xl bg-white shadow-md flex items-center justify-center overflow-hidden">
              <img
                src={service.logo}
                alt={`${service.title} logo`}
                className="w-[85%] h-[85%] object-contain scale-110"
                onError={(e) => {
                  e.target.src = service.image;
                  e.target.className = "w-full h-full object-cover";
                }}
              />
            </div>
          </div>
          {/* Full image - hidden by default, visible on hover */}
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:scale-105"
          />
        </div>
        {/* Content */}
        <div className="p-6 flex-1 flex flex-col justify-center">
          <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-amber-700 transition-colors duration-300">{service.title}</h3>
          <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">{service.description}</p>
          <a
            href={service.link}
            className="inline-flex items-center gap-2 text-amber-600 hover:text-amber-700 font-semibold text-sm transition-all duration-300 group/link"
          >
            إنتقل
            <ExternalLink className="w-4 h-4 transition-transform group-hover/link:-translate-x-1" />
          </a>
        </div>
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
        <section id="services" className="px-6 py-5 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-4"
          >
            <span className="text-amber-700 font-medium tracking-widest text-sm uppercase mb-4 block">
              الخدمات
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800">خدماتنا</h2>
          </motion.div>

          {/* All cards in 2-column grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
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
