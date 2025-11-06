import { notFound } from 'next/navigation';
import Image from 'next/image';
import { ArrowLeft, CheckCircle, GraduationCap, Briefcase, BookOpen, Award, FileText } from 'lucide-react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { MobileMenuProvider } from '@/contexts/MobileMenuContext';

// Course data
const coursesData: Record<string, any> = {
  'marine-cargo-surveying': {
    title: 'Diploma In Marine Cargo Surveying',
    subtitle: 'Melahirkan graduan yang berkualiti, berilmu dan kompeten dalam survey & inspection management, perkapalan, logistik dan pengangkutan, dan import/eksport.',
    image: '/gambar course/diploma in marine cargo.png',
    backgroundImage: '/Diploma-in-Marine-Cargo-Surveying-bg.jpg',
    description: 'Melahirkan graduan yang berkualiti, berilmu dan kompeten dalam survey and inspection management, perkapalan, logistik & pengangkutan, dan import/eksport. Program ini mengkhususkan kepada pemeriksaan kapal, pengendalian kargo dan kontena serta pengurusan pelabuhan.',
    syaratKemasukan: [
      'Lulus SIJIL PELAJARAN MALAYSIA (SPM)/SIJIL PELAJARAN MALAYSIA VOKASIONAL (SPMV).',
      'Mendapat Sekurang-kurangnya KEPUJIAN dalam apa-apa TIGA (3) matapelajaran ATAU',
      'Lulus Kelayakan-kelayakan lain yang diiktiraf SETARA.'
    ],
    subjekPengajian: [
      'Commercial Law',
      'Marine Cargo Operation',
      'Marine Safety',
      'Marine Cargo Survey Practices I, II',
      'Marine Insurance',
      'Shipping Practices',
      'Maritime Law & Convention',
      'Dry Bulk & Tanker Operations',
      'Damage Cargo Claim',
      'Containerization',
      'Ship Science',
      'Carriage of Cargoes by Seas'
    ],
    peluangKerjaya: [
      'Warehousing Supervisor',
      'Ship Agent',
      'Forwarding / Logistics',
      'Adjuster',
      'Assistant Operations',
      'Ship Crews',
      'Marine Surveyor',
      'Marine Inspector (Insurance)',
      'Marine Department Officer',
      'Fisheries Department Officer',
      'Royal Customs of Malaysia Officer',
      'The Malaysian Maritime Enforcement Agency Officer and any related career.'
    ],
    youtubeId: 'Bnf1Fg4Jn4U',
    formUrl: 'https://docs.google.com/forms/d/e/1FAIpQLScYOor3Xdt-Ab_vZv2Cu9dwRJCkVkJaZX4m7NvYAwvHbAiyFA/viewform?embedded=true',
  },
  'maritime-management': {
    title: 'Diploma In Maritime Management',
    subtitle: 'Melahirkan graduan yang berkualiti, berilmu dan kompeten dalam industri maritim seperti pengurusan pelabuhan, perkapalan, logistik, pengangkutan, agen kapal, pergudangan dan perdagangan antarabangsa (import/eksport).',
    image: '/gambar course/diploma in maritime management.png',
    backgroundImage: '/Diploma-in-Maritime-Management-bg.jpg',
    description: 'Melahirkan graduan yang berkualiti, berilmu dan kompeten dalam industri maritim seperti pengurusan pelabuhan, perkapalan, logistik, pengangkutan, agen kapal, pergudangan dan perdagangan antarabangsa (import/eksport).',
    syaratKemasukan: [
      'Lulus SIJIL PELAJARAN MALAYSIA (SPM) / SIJIL PELAJARAN MALAYSIA VOKASIONAL (SPMV).',
      'Mendapat Sekurang-Kurangnya KEPUJIAN dalam apa-apa TIGA (3) matapelajaran ATAU',
      'Lulus Kelayakan-kelayakan lain yang diiktiraf SETARA.'
    ],
    subjekPengajian: [
      'Marine Terminology',
      'Ship Operations',
      'Marine Survey',
      'Marine Insurance',
      'Marine Cargo Operation',
      'Marine Law & Convention',
      'Terminal Operation and Port Management',
      'Containerization',
      'Law of the Sea',
      'Ship Broker and Charter',
      'Logistic And Forwarding',
      'Marine Safety'
    ],
    peluangKerjaya: [
      'Documentation Clerk/Executive',
      'Designated Person',
      'Marine Underwriter (Insurance)',
      'Ship Crews',
      'Assistant Operations',
      'Ship Agent',
      'Forwarding / Logistics',
      'Warehousing Supervisor',
      'Marine Department Officer',
      'Fisheries Department Officer',
      'Royal Customs of Malaysia Officer',
      'The Malaysian Maritime Enforcement Agency Officer and any related career.'
    ],
    youtubeId: 'nNyxB6n7fU4',
    formUrl: 'https://docs.google.com/forms/d/e/1FAIpQLScYOor3Xdt-Ab_vZv2Cu9dwRJCkVkJaZX4m7NvYAwvHbAiyFA/viewform?embedded=true',
  },
  'nautical-studies': {
    title: 'Diploma In Nautical Studies',
    subtitle: 'Melahirkan graduan yang berkualiti, berilmu dan kompeten dalam industri maritim terutamanya dalam sektor pengemudian.',
    image: '/gambar course/nautical studies.png',
    backgroundImage: '/Diploma-in-Nautical-Studies-bg.jpg',
    description: 'Melahirkan graduan yang berkualiti, berilmu dan kompeten dalam industri maritim terutamanya dalam sektor pengemudian. Program ini mendedahkan kepada pelajar tentang ilmu pelayaran dan pengemudian kapal di mana ia melengkapkan pelajar dengan pengetahuan yang berkaitan untuk peluang pekerjaan lepas pantai dan persisir pantai.',
    syaratKemasukan: [
      'Lulus SIJIL PELAJARAN MALAYSIA (SPM)/SIJIL PELAJARAN MALAYSIA VOKASIONAL (SPMV).',
      'Mendapat sekurang-kurangnya KEPUJIAN dalam apa-apa LIMA (5) matapelajaran TERMASUK Matematik dan salah satu matapelajaran Sains',
      'Tidak rabun warna (Disahkan oleh Klinik Panel Jabatan Laut) ATAU',
      'Lulus Kelayakan-kelayakan lain yang diiktiraf SETARA.'
    ],
    subjekPengajian: [
      'Seamanship',
      'Meteorology',
      'Magnetism and Coastal Navigation',
      'Chartwork I, 2',
      'Rule of Regulation 1, 2',
      'Celestial Navigation'
    ],
    peluangKerjaya: [
      'Seafarer',
      'Warehousing Supervisor',
      'Forwarding / Logistic',
      'Ship Agent',
      'Ship Crew',
      'Marine Department Officer',
      'Fisheries Department Officer',
      'Royal Customs of Malaysia Officer',
      'The Malaysian Maritime Enforcement'
    ],
    youtubeId: 'FHtK1dQP4IY',
    formUrl: 'https://docs.google.com/forms/d/e/1FAIpQLScYOor3Xdt-Ab_vZv2Cu9dwRJCkVkJaZX4m7NvYAwvHbAiyFA/viewform?embedded=true',
  },
  'logistic-supply-chain': {
    title: 'Diploma In Logistic And Supply Chain',
    subtitle: 'Program ini mendedahkan pelajar tentang kaedah dan strategi dalam proses logistik dan rantaian bekalan yang lebih efektif dan strategik.',
    image: '/gambar course/logistic.png',
    backgroundImage: '/Diploma-in-Logistics-and-Supply-Chain-bg.jpg',
    description: 'Melahirkan graduan yang berkualiti, berilmu dan kompeten dalam industri maritim terutamanya dalam bidang logistik dan rantaian bekalan. Program ini mendedahkan pelajar tentang kaedah dan strategi dalam proses logistik dan rantaian bekalan yang lebih efektif dan strategik.',
    syaratKemasukan: [
      'Lulus SIJIL PELAJARAN MALAYSIA (SPM) / SIJIL PELAJARAN MALAYSIA VOKASIONAL (SPMV).',
      'Mendapat Sekurang-Kurangnya KEPUJIAN dalam apa-apa TIGA (3) Matapelajaran ATAU',
      'Lulus Kelayakan-kelayakan lain yang diiktiraf SETARA.'
    ],
    subjekPengajian: [
      'Logistic and The Supply Chain',
      'Procurement and Supply Management',
      'Demand Management and Customer Services',
      'International Trade',
      'Protective Packaging and Material Handling',
      'Logistic Supply Chain and Information System',
      'Transportation Management',
      'Warehousing Management',
      'Logistic and Supply Chain Challenges for the Future',
      'Supply Chain Performance Measurement'
    ],
    peluangKerjaya: [
      'Logistics and Distribution Assistant',
      'Purchasing Assistant',
      'Warehousing Assistant',
      '3rd Party Logistic Controller',
      'Rail Terminal Planner',
      'Export / Import Assistant',
      'Air Traffic Controller',
      'Planner Production (more to manage raw material to produce finished good)',
      'Planner Logistic (Transportation)',
      'Custom Officer',
      'Freight Forwarder',
      'Packaging Teams',
      'Inventory',
      'Shipping Officer'
    ],
    youtubeId: 'eA-RBDuVFXM',
    formUrl: 'https://docs.google.com/forms/d/e/1FAIpQLScYOor3Xdt-Ab_vZv2Cu9dwRJCkVkJaZX4m7NvYAwvHbAiyFA/viewform?embedded=true',
  },
  'occupational-safety-health': {
    title: 'Diploma In Occupational Safety And Health',
    subtitle: 'Melahirkan graduan yang berkualiti, berilmu dan kompeten untuk menceburkan diri dalam bidang pengurusan keselamatan dan kesihatan pekerjaan.',
    image: '/gambar course/occupational safety health.png',
    backgroundImage: '/Diploma-in-Occupational-Safety-and-Health-bg.jpg',
    description: 'Melahirkan graduan yang berkualiti, berilmu dan kompeten untuk menceburkan diri dalam bidang pengurusan keselamatan dan kesihatan pekerjaan. Program ini mendapat perakuan daripada Jabatan Keselamatan dan Kesihatan Pekerjaan (JKKP).',
    syaratKemasukan: [
      'Lulus SIJIL PELAJARAN MALAYSIA (SPM)/SIJIL PELAJARAN MALAYSIA VOKASIONAL (SPVM).',
      'Mendapat Sekurang-kurangnya KEPUJIAN dalam apa-apa TIGA (3) matapelajaran TERMASUK Matematik DAN Salah Satu Matapelajaran Sains (Biologi/Kimia/Fizik/Sains).',
      'Lulus Bahasa Inggeris ATAU',
      'Lulus Kelayakan-kelayakan lain yang diiktiraf SETARA.'
    ],
    subjekPengajian: [
      'Human Anatomy & Physiology',
      'Introduction to Toxicology',
      'Emergency Response & Planning',
      'OSH Risk Management',
      'Fire Safety',
      'Introduction to Ergonomics',
      'Machinery Safety',
      'Accident Investigation',
      'Workplace Inspection',
      'OSH Surveillance & Monitoring',
      'OSH in Construction',
      'Introduction to Process Safety',
      'OSH Communication',
      'Occupational Diseases & Control',
      'Introduction to Occupational Safety',
      'Introduction to Occupational Health',
      'Hazardous Substance'
    ],
    peluangKerjaya: [
      'Occupational Safety & Health Officer',
      'Safety and Health Manager',
      'Safety and Health Supervisor',
      'Safety and Health Assistant',
      'Assistant of Safety and Health Officer',
      'Auditor',
      'Safety and Health Negotiator',
      'Safety Chemical',
      'Health Risk Assessor',
      'Authorized Gas Tester',
      'Instructor and any related career any.'
    ],
    youtubeId: 'Nxoo7eqGtpU',
    formUrl: 'https://docs.google.com/forms/d/e/1FAIpQLScYOor3Xdt-Ab_vZv2Cu9dwRJCkVkJaZX4m7NvYAwvHbAiyFA/viewform?embedded=true',
  },
  'integrated-management-system': {
    title: 'Diploma In Integrated Management System',
    subtitle: 'Melahirkan graduan yang berkualiti, berilmu dan kompeten untuk menceburkan diri dalam pelbagai bidang industri bagi mengaplikasikan Sistem Pengurusan Kualiti (ISO 9001), Sistem Pengurusan Alam Sekitar (ISO 14000), Sistem Pengurusan Keselamatan dan Kesihatan (OHSAS 18000) dan sistem pengurusan sekuriti.',
    image: '/gambar course/integrated management.png',
    backgroundImage: '/Diploma-in-Integrated-Management-System-bg.jpg',
    description: 'Melahirkan graduan yang berkualiti, berilmu dan kompeten untuk menceburkan diri dalam pelbagai bidang industri bagi mengaplikasikan Sistem Pengurusan Kualiti (ISO 9001), Sistem Pengurusan Alam Sekitar (ISO 14000), Sistem Pengurusan Keselamatan dan Kesihatan (OHSAS 18000) dan sistem pengurusan sekuriti. Pelajar akan didedahkan kepada perjalanan keseluruhan organisasi berdasarkan kepada sistem.',
    syaratKemasukan: [
      'Lulus SIJIL PELAJARAN MALAYSIA (SPM)/SIJIL PELAJARAN MALAYSIA VOKASIONAL (SPMV).',
      'Mendapat sekurang-kurangnya KEPUJIAN dalam apa-apa TIGA (3) matapelajaran ATAU',
      'Lulus Kelayakan-kelayakan lain yang diiktiraf SETARA.'
    ],
    subjekPengajian: [
      'Integrated Management System',
      'Integrated Legal Requirement',
      'Documentation Control Management',
      'Occupational Safety & Health Management System',
      'Risk Assessment Technique',
      'Corrective Action & Preventive Action',
      'Quality Management System',
      'Audit Improvement Technique',
      'Integrated Audit Management System',
      'Business Continuity Plan',
      'Life Audit IMS',
      'IMS Seminar'
    ],
    peluangKerjaya: [
      'Quality Assurance Assistant',
      'Quality Control Assistant',
      'Assistant Auditor',
      'Safety and Health Supervisor',
      'Assistant of Safety & Health Officer',
      'Instructor',
      'Negotiator and any related career.'
    ],
    youtubeId: 'naubq_mpRIQ',
    formUrl: 'https://docs.google.com/forms/d/e/1FAIpQLScYOor3Xdt-Ab_vZv2Cu9dwRJCkVkJaZX4m7NvYAwvHbAiyFA/viewform?embedded=true',
  },
  'offshore-engineering': {
    title: 'Diploma In Offshore Engineering',
    subtitle: 'Melahirkan graduan yang berkualiti yang berpengetahuan dan berkelayakan dalam bidang marin khususnya dalam struktur luar pantai. Program ini memberikan kefahaman tentang penstrukturan dan rekabentuk pelantar minyak.',
    image: '/gambar course/offshore engineering.png',
    backgroundImage: '/DIPLOMA-IN-OFFSHORE-ENGINEERING-bg.jpg',
    description: 'Melahirkan graduan yang berkualiti yang berpengetahuan dan berkelayakan dalam bidang marin khususnya dalam struktur luar pantai. Program ini memberikan kefahaman tentang penstrukturan dan rekabentuk pelantar minyak. Pelajar akan didedahkan dengan prinsip asas dalam merancang dan menganalisis struktur luar pantai dan kemahiran menyelesaikan masalah berkaitan dengan rekabentuk asas struktur luar pantai sebagai persediaan sebelum ke alam pekerjaan industri minyak dan gas.',
    syaratKemasukan: [
      'Lulus SIJIL PELAJARAN MALAYSIA (SPM)/SIJIL PELAJARAN MALAYSIA VOKASIONAL (SPMV);',
      'Mendapat sekurang-kurangnya KEPUJIAN dalam apa-apa TIGA (3) matapelajaran TERMASUK Matematik DAN SATU satu matapelajaran Sains (Biologi / Kimia / Fizik / Sains) / Teknikal / Vokasional.',
      'LULUS Bahasa Inggeris ATAU',
      'Lulus kelayakan-kelayakan lain yang diiktiraf SETARA.'
    ],
    subjekPengajian: [
      'Floating Structure Technology',
      'Design of Offshore Structure',
      'Computer Aided Design',
      'Oceanography',
      'Offshore Fabrication & Reparation',
      'Manufacturing Process Material',
      'Welding Technology',
      'Welding Inspection',
      'Hydrodynamics',
      'Subsea Pipelines',
      'Technical Mechanics',
      'Surface Production Operation',
      'Seabed Foundation',
      'Offshore Structure Design Assignment'
    ],
    peluangKerjaya: [
      'Assistant Pipe Engineer',
      'Assistant Design Engineer',
      'Assistant Structural Engineer',
      'Drafter',
      'Assistant Quality Control',
      'Assistant Estimator'
    ],
    youtubeId: 'o7dWPFyN2M0',
    formUrl: 'https://docs.google.com/forms/d/e/1FAIpQLScYOor3Xdt-Ab_vZv2Cu9dwRJCkVkJaZX4m7NvYAwvHbAiyFA/viewform?embedded=true',
  },
  'marine-engineering': {
    title: 'Diploma In Marine Engineering',
    subtitle: 'Program ini memberikan pengetahuan tentang kejuruteraan marin khususnya dalam janatenaga marin dan mengenalpasti permasalahan dalam operasi dan baikpulih.',
    image: '/program card img/marine engineering card.jpg',
    backgroundImage: '/Diploma-in-Marine-Engineering-bg.jpg',
    description: 'Program ini memberikan pengetahuan tentang kejuruteraan marin khususnya dalam janatenaga marin & mengenalpasti permasalahan dalam operasi & baikpulih. Pelajar akan didedahkan dengan amali asas berkaitan kerja tangan, pemesinan larik & kimpalan untuk membiasakan dengan persekitaran kejuruteraan marin.',
    syaratKemasukan: [
      'Lulus SIJIL PELAJARAN MALAYSIA (SPM)/SIJIL PELAJARAN MALAYSIA VOKASIONAL (SPMV).',
      'Mendapat sekurang-kurangnya KEPUJIAN dalam apa-apa LIMA (5) matapelajaran TERMASUK Matematik DAN SATU matapelajaran Sains (Biologi/Kimia/Fizik/Sains)/ Teknikal/ Vokasional dan LULUS Bahasa Inggeris ATAU',
      'Lulus kelayakan-kelayakan lain yang diiktiraf SETARA.'
    ],
    subjekPengajian: [
      'Naval Architecture & Ship Construction',
      'Engineering Drawing',
      'Marine Engineering Knowledge',
      'Engineering Electrical',
      'Electronic',
      'Engineering Knowledge (General, Motor & Steam)',
      'Marine Electrical Practice',
      'Engineering Workshop Skills (Bench, Lathe, Welding, Operation & Maintenance)',
      'Marine Control and Automation'
    ],
    peluangKerjaya: [
      'Marine Superintendent',
      'Assistant Surveyor',
      'Service and Maintenance Technician',
      'Assistant Quality Control & Quality Assurance',
      'Assistant Marine Surveyor',
      'Assistant Marine Engineer & any related career.'
    ],
    youtubeId: 'XhuuyTnVXwc',
    formUrl: 'https://docs.google.com/forms/d/e/1FAIpQLScYOor3Xdt-Ab_vZv2Cu9dwRJCkVkJaZX4m7NvYAwvHbAiyFA/viewform?embedded=true',
  },
  'culinary-arts': {
    title: 'Diploma In Culinary Arts',
    subtitle: 'Melahirkan graduan berkualiti, berilmu, bersahsia dan kompeten dalam bidang seni kulinari.',
    image: '/gambar course/culinary arts.png',
    backgroundImage: '/DIPLOMA IN CULINARY ARTS-bg.jpg',
    description: 'Melahirkan graduan berkualiti, berilmu, bersahsia dan kompeten dalam bidang seni kulinari. Program ini memberikan pendedahan menyeluruh dalam seni memasak, pastri, dan pengurusan makanan untuk melahirkan chef profesional yang berkemahiran tinggi.',
    syaratKemasukan: [
      'Lulus SIJIL PELAJARAN MALAYSIA (SPM) / SIJIL PELAJARAN MALAYSIA VOKASIONAL (SPMV).',
      'Mendapat Sekurang-Kurangnya KEPUJIAN dalam apa-apa TIGA (3) Matapelajaran ATAU',
      'Lulus Kelayakan-kelayakan lain yang diiktiraf SETARA.'
    ],
    subjekPengajian: [
      'Food Studies',
      'Food Safety and Hygiene',
      'Basic Food Cookery',
      'Basic Pastry',
      'Malaysian Cuisine',
      'Advance Culinary Skill',
      'Menu Development',
      'Professional Pastry Skill',
      'International Cuisine',
      'Art of Garde Manger'
    ],
    peluangKerjaya: [
      'Executive Chef',
      'Sous Chef',
      'Pastry Chef',
      'Kitchen Executive',
      'Kitchen Consultant',
      'Food Stylist',
      'Restaurant Owner',
      'Food & Beverage Manager',
      'Food Production Manager',
      'Food Service Manager',
      'Banquet Manager',
      'In-Flight Food Manager',
      'Catering',
      'Peluang untuk bekerja dalam pelbagai industri'
    ],
    youtubeId: 'nNyxB6n7fU4',
    formUrl: 'https://docs.google.com/forms/d/e/1FAIpQLScYOor3Xdt-Ab_vZv2Cu9dwRJCkVkJaZX4m7NvYAwvHbAiyFA/viewform?embedded=true',
  },
};

export default async function CoursePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const course = coursesData[slug];

  if (!course) {
    notFound();
  }

  return (
    <MobileMenuProvider>
      <Navbar />
      <main className='min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-gray-100'>
        {/* Hero Section with Background Image */}
        <div className='relative text-white py-24 overflow-hidden'>
          {/* Background Image */}
          <div className='absolute inset-0 z-0'>
            <Image
              src={course.backgroundImage || '/Diploma-in-Marine-Cargo-Surveying-bg.jpg'}
              alt={`${course.title} Background`}
              fill
              className='object-cover'
              priority
            />
            {/* Black Overlay */}
            <div className='absolute inset-0 bg-black/60'></div>
          </div>
          
          <div className='container mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
            <Link 
              href='/#programs' 
              className='inline-flex items-center gap-2 text-white/80 hover:text-white mb-8 transition-all hover:gap-3 group'
            >
              <ArrowLeft className='w-5 h-5 group-hover:-translate-x-1 transition-transform' />
              <span className='font-medium'>Kembali ke Program</span>
            </Link>
            
            <div className='max-w-4xl'>
              <div className='inline-block mb-4'>
                <span className='bg-white/20 backdrop-blur-sm text-white font-bold text-xs sm:text-sm uppercase tracking-wider px-4 py-2 rounded-full border border-white/30'>
                  Program Diploma
                </span>
              </div>
              <h1 className='text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight text-[#FF6B5B]'>
                {course.title}
              </h1>
              <p className='text-lg sm:text-xl text-white/90 leading-relaxed'>
                {course.subtitle}
              </p>
            </div>
          </div>
        </div>

        <div className='container mx-auto px-4 sm:px-6 lg:px-8 py-16'>
        {/* Program Description - Full Width */}
        <div className='bg-white rounded-3xl p-8 sm:p-10 mb-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-shadow duration-300'>
          <h2 className='text-2xl sm:text-3xl font-bold mb-6' style={{ color: '#1E4A7A' }}>
            PENERANGAN PROGRAM
          </h2>
          <p className='text-gray-700 text-base sm:text-lg leading-relaxed'>
            {course.description}
          </p>
        </div>

        {/* Zigzag Layout: Syarat Kemasukan (Left) & Subjek Pengajian (Right) */}
        <div className='grid lg:grid-cols-2 gap-8 mb-8'>
          {/* Syarat Kemasukan - Left */}
          <div className='bg-white rounded-3xl p-8 sm:p-10 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1'>
            <h2 className='text-2xl sm:text-3xl font-bold mb-6' style={{ color: '#1E4A7A' }}>
              SYARAT KEMASUKAN
            </h2>
            <ul className='space-y-4'>
              {course.syaratKemasukan.map((syarat: string, i: number) => (
                <li key={i} className='flex items-start gap-3 bg-white rounded-xl p-4 border border-gray-200 hover:border-gray-300 hover:shadow-sm transition-all'>
                  <CheckCircle className='w-6 h-6 text-green-500 flex-shrink-0 mt-0.5' />
                  <span className='text-gray-700 text-base sm:text-lg'>{syarat}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Subjek Pengajian - Right */}
          <div className='bg-white rounded-3xl p-8 sm:p-10 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1'>
            <h2 className='text-2xl sm:text-3xl font-bold mb-6' style={{ color: '#1E4A7A' }}>
              SUBJEK PENGAJIAN
            </h2>
            <div className='space-y-3 max-h-[500px] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-orange-400 scrollbar-track-orange-100'>
              {course.subjekPengajian.map((subjek: string, i: number) => (
                <div 
                  key={i} 
                  className='group bg-white rounded-xl p-4 border border-gray-200 hover:border-gray-300 hover:shadow-sm transition-all duration-300'
                >
                  <div className='flex items-center gap-3'>
                    <span className='text-[#1E4A7A] font-bold text-lg flex-shrink-0 min-w-[24px]'>{i + 1}</span>
                    <span className='text-gray-800 font-medium text-sm sm:text-base'>{subjek}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Peluang Kerjaya */}
        <div className='bg-white rounded-3xl p-8 sm:p-10 mb-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-shadow duration-300'>
          <h2 className='text-2xl sm:text-3xl font-bold mb-8' style={{ color: '#1E4A7A' }}>
            PELUANG KERJAYA
          </h2>
          <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-4'>
            {course.peluangKerjaya.map((kerjaya: string, i: number) => (
              <div 
                key={i} 
                className='bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-4 border border-orange-200 hover:shadow-md transition-shadow duration-300'
              >
                <div className='flex items-center gap-3'>
                  <CheckCircle className='w-5 h-5 text-[#FF6B5B] flex-shrink-0' />
                  <span className='text-gray-800 font-medium text-sm sm:text-base'>{kerjaya}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* YouTube Video Section */}
        {course.youtubeId && (
          <div className='bg-white rounded-3xl p-8 sm:p-10 mb-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-shadow duration-300'>
            
            <div className='max-w-4xl mx-auto'>
              <div className='aspect-video w-full rounded-2xl overflow-hidden shadow-2xl border-4 border-gray-200'>
                <iframe 
                  src={`https://www.youtube.com/embed/${course.youtubeId}`} 
                  title={course.title} 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                  className='w-full h-full'
                ></iframe>
              </div>
            </div>
          </div>
        )}

        {/* Google Form Section */}
        {course.formUrl && (
          <div className='bg-white rounded-3xl p-8 sm:p-10 shadow-xl border border-gray-100 hover:shadow-2xl transition-shadow duration-300'>
            <div className='text-center mb-8'>
              <div className='inline-block mb-4'>
                <span className='bg-gradient-to-r from-[#FF6B5B] to-[#FF8B6D] text-white font-bold text-xs sm:text-sm uppercase tracking-wider px-4 py-2 rounded-full'>
                  Pendaftaran
                </span>
              </div>
              <h2 className='text-2xl sm:text-3xl font-bold mb-4' style={{ color: '#1E4A7A' }}>
                DAFTAR SEKARANG
              </h2>
              <p className='text-gray-600 text-base sm:text-lg max-w-2xl mx-auto'>
                Isi borang di bawah untuk memohon program ini. Kami akan menghubungi anda dalam masa terdekat.
              </p>
            </div>
            <div className='w-full h-[800px] rounded-2xl overflow-hidden border-4 border-gray-200 shadow-lg'>
              <iframe 
                src={course.formUrl}
                className='w-full h-full'
                style={{ border: 'none', margin: 0 }}
              >
                Loading…
              </iframe>
            </div>
          </div>
        )}
      </div>
    </main>
    <Footer />
    </MobileMenuProvider>
  );
}
