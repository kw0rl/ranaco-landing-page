'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Ship, Shield, Truck, Droplet, ChefHat, ChevronDown, ChevronUp } from 'lucide-react';

const programCategories = [
  {
    id: 'maritime',
    name: 'Perkapalan',
    icon: Ship,
    color: 'from-blue-500 to-blue-600',
    description: 'Program-program berkaitan pengurusan maritim, perkapalan dan nautika',
    programs: [
      {
        title: 'Diploma In Marine Cargo Surveying',
        slug: 'marine-cargo-surveying',
        image: '/program card img/marine cargo card.jpeg',
        description: 'Melahirkan graduan yang berkualiti, berilmu dan kompeten dalam survey and inspection management, perkapalan, logistik dan pengangkutan, dan import support.',
      },
      {
        title: 'Diploma In Maritime Management',
        slug: 'maritime-management',
        image: '/program card img/maritime management card.jpeg',
        description: 'Program ini memberi pendedahan kepada pelajar tentang prosedur sebenar pengurusan dalam sektor maritim seperti pengurusan pelabuhan, perkapalan, pengendalian kargo serta perdagangan antarabangsa.',
      },
      {
        title: 'Diploma In Nautical Studies',
        slug: 'nautical-studies',
        image: '/gambar course/nautical studies.png',
        description: 'Melahirkan graduan yang berkualiti, berilmu dan kompeten dalam industri maritim terutamanya dalam sektor pengemudian. Program ini mendedahkan kepada pelajar tentang ilmu pelayaran dan pengemudian kapal.',
      },
      {
        title: 'Diploma In Marine Engineering',
        slug: 'marine-engineering',
        image: '/program card img/marine engineering card.jpg',
        description: 'Program ini memberikan pengetahuan tentang kejuruteraan marin khususnya dalam janatenaga marin dan menguruskan operasional dan baikpulih.',
      },
    ]
  },
  {
    id: 'safety',
    name: 'Keselamatan & Kesihatan',
    icon: Shield,
    color: 'from-red-500 to-red-600',
    description: 'Program keselamatan pekerjaan dan sistem pengurusan bersepadu',
    programs: [
      {
        title: 'Diploma In Occupational Safety & Health',
        slug: 'occupational-safety-health',
        image: '/program card img/safety and health card.jpeg',
        description: 'Melahirkan graduan yang berkualiti, berilmu dan kompeten untuk menceburkan diri dalam bidang pengurusan keselamatan dan kesihatan pekerjaan. Program ini mendapat perakuan daripada JKKP.',
      },
      {
        title: 'Diploma In Integrated Management System',
        slug: 'integrated-management-system',
        image: '/program card img/integrated management system card.jpeg',
        description: 'Melahirkan graduan yang berkualiti, berilmu dan kompeten untuk menceburkan diri dalam pelbagai bidang industri bagi mengaplikasikan Sistem Pengurusan Kualiti (ISO 9001), Sistem Pengurusan Alam Sekitar (ISO 14000), dan Sistem Pengurusan Keselamatan dan Kesihatan (OHSAS 18000).',
      },
    ]
  },
  {
    id: 'logistics',
    name: 'Logistik',
    icon: Truck,
    color: 'from-green-500 to-green-600',
    description: 'Program logistik dan pengurusan rantaian bekalan',
    programs: [
      {
        title: 'Diploma In Logistic & Supply Chain',
        slug: 'logistic-supply-chain',
        image: '/program card img/logistic card.jpeg',
        description: 'Melahirkan graduan yang berkualiti, berilmu dan kompeten dalam industri maritim terutamanya dalam bidang logistik dan rantaian bekalan. Program ini mendedahkan pelajar tentang kaedah dan strategi dalam proses logistik.',
      },
    ]
  },
  {
    id: 'oil-gas',
    name: 'Minyak & Gas',
    icon: Droplet,
    color: 'from-purple-500 to-purple-600',
    description: 'Program kejuruteraan offshore dan marine',
    programs: [
      {
        title: 'Diploma In Offshore Engineering',
        slug: 'offshore-engineering',
        image: '/program card img/offshore engineering card.jpeg',
        description: 'Melahirkan graduan yang berkualiti yang berpengetahuan dan berkelayakan dalam bidang marin khususnya dalam luar pantai. Program ini memberikan pengetahuan tentang perstruktran dan rekabentuk plantar minyak.',
      },
    ]
  },
  {
    id: 'hospitality',
    name: 'Hospitaliti',
    icon: ChefHat,
    color: 'from-orange-500 to-orange-600',
    description: 'Program seni kulinari dan hospitaliti',
    programs: [
      {
        title: 'Diploma In Culinary Arts',
        slug: 'culinary-arts',
        image: '/program card img/culinary card.jpeg',
        description: 'Melahirkan graduan berkualiti, berilmu, bersahsiah dan kompeten dalam bidang seni kulinari. Program ini merupakan platform terbaik kepada pelajar dari segi kemahiran asas dan lanjutan kulinari, berpengetahuan berkaitan sistem operasi, kos, penyediaan menu, kebersihan dan keselamatan dalam operasi dapur komersial.',
      },
    ]
  },
];

export default function Programs() {
  const [openAccordion, setOpenAccordion] = useState<string | null>('maritime');

  const toggleAccordion = (id: string) => {
    setOpenAccordion(openAccordion === id ? null : id);
  };

  return (
    <section id="programs" className="py-24 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="inline-block mb-4">
            <span className="bg-gradient-to-r from-[#FF6B5B] to-[#FF8B6D] text-white font-bold text-sm uppercase tracking-wider px-6 py-2 rounded-full">
              Program Kami
            </span>
          </div>
          <h2 className="text-5xl sm:text-6xl font-extrabold mb-6 leading-tight" style={{ color: '#1E4A7A' }}>
            Program Diploma Yang Ditawarkan
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Pilih program yang sesuai dengan minat dan matlamat kerjaya anda. Semua program diakreditasi penuh oleh MQA.
          </p>
        </div>

        {/* Accordion */}
        <div className="max-w-7xl mx-auto space-y-4">
          {programCategories.map((category) => {
            const Icon = category.icon;
            const isOpen = openAccordion === category.id;

            return (
              <div
                key={category.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200"
              >
                {/* Accordion Header */}
                <button
                  onClick={() => toggleAccordion(category.id)}
                  className="w-full px-4 sm:px-8 py-6 flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center gap-3 sm:gap-4">
                    <div className={`w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center shadow-lg flex-shrink-0`}>
                      <Icon className="w-7 h-7 sm:w-8 sm:h-8 text-white" strokeWidth={2} />
                    </div>
                    <div className="text-left">
                      <h3 className="text-lg sm:text-2xl font-bold text-gray-900 mb-1">
                        {category.name}
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-600 hidden sm:block">{category.description}</p>
                      <span className="inline-block mt-1 sm:mt-2 text-xs font-semibold text-[#FF6B5B]">
                        {category.programs.length} Program Tersedia
                      </span>
                    </div>
                  </div>
                  <div className="flex-shrink-0 ml-2">
                    {isOpen ? (
                      <ChevronUp className="w-6 h-6 sm:w-8 sm:h-8 text-[#FF6B5B]" strokeWidth={2.5} />
                    ) : (
                      <ChevronDown className="w-6 h-6 sm:w-8 sm:h-8 text-gray-400" strokeWidth={2.5} />
                    )}
                  </div>
                </button>

                {/* Accordion Content */}
                <div
                  className={`transition-all duration-500 ease-in-out ${
                    isOpen ? 'max-h-[5000px] opacity-100' : 'max-h-0 opacity-0'
                  } overflow-hidden`}
                >
                  <div className="px-4 sm:px-8 pb-8 pt-4">
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                      {category.programs.map((program, idx) => (
                        <div
                          key={idx}
                          className="group bg-gradient-to-b from-gray-50 to-white rounded-2xl overflow-hidden border border-gray-200 hover:shadow-xl transition-all duration-300"
                        >
                          {/* Program Image */}
                          <div className="relative w-full aspect-[16/10] overflow-hidden bg-gray-200">
                            <Image
                              src={program.image}
                              alt={program.title}
                              fill
                              className="object-cover"
                              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            />
                          </div>

                          {/* Program Content */}
                          <div className="p-6">
                            <h4 className="text-lg font-bold text-gray-900 mb-3 leading-tight">
                              {program.title}
                            </h4>
                            <p className="text-gray-600 text-sm leading-relaxed mb-4">
                              {program.description}
                            </p>

                            {/* Button */}
                            <Link href={`/programs/${program.slug}`}>
                              <button className="w-full bg-gradient-to-r from-[#FF6B5B] to-[#FF8B6D] text-white font-bold py-3 px-6 rounded-full flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-shadow">
                                <span>INFO LANJUT</span>
                                <ArrowRight className="w-4 h-4" strokeWidth={2.5} />
                              </button>
                            </Link>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
      </div>
    </section>
  );
}
