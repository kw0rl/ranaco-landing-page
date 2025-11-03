'use client';

import { Briefcase, Award, Building2, GraduationCap, Users, DollarSign } from 'lucide-react';

const features = [
  {
    icon: Briefcase,
    title: 'Kebolehpasaran Kerja Graduan yang Tinggi',
    description: '75% graduan kami mendapat pekerjaan dalam tempoh 6 bulan selepas tamat pengajian',
    color: 'bg-blue-500'
  },
  {
    icon: Award,
    title: 'Sijil Industri Percuma',
    description: 'Dapatkan sijil industri yang diiktiraf semasa belajar tanpa kos tambahan',
    color: 'bg-green-500'
  },
  {
    icon: Building2,
    title: 'Kampus Bertempat Di Pusat Industri',
    description: 'Lokasi strategik berdekatan dengan kawasan perindustrian utama',
    color: 'bg-purple-500'
  },
  {
    icon: GraduationCap,
    title: 'Penyedia Latihan Berpengalaman Selama 22 Tahun',
    description: 'Lebih 2 dekad pengalaman dalam pendidikan vokasional dan latihan industri',
    color: 'bg-red-500'
  },
  {
    icon: Users,
    title: 'Pengiktirafan Oleh Pelbagai Agensi',
    description: 'Diiktiraf oleh MQA, JPA, dan agensi-agensi kerajaan dan industri utama',
    color: 'bg-orange-500'
  },
  {
    icon: DollarSign,
    title: 'Bantuan Pinjaman Pendidikan',
    description: 'Pelbagai pilihan pembiayaan dan bantuan kewangan tersedia',
    color: 'bg-teal-500'
  }
];

export default function Features() {
  return (
    <section id="kenapa" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block mb-4">
            <span className="bg-gradient-to-r from-[#FF6B5B] to-[#FF8B6D] text-white font-bold text-sm uppercase tracking-wider px-6 py-2 rounded-full">
              Kenapa Pilih RETI?
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-[#1E4A7A] mt-4 mb-6">
            Kelebihan Belajar Di RETI
          </h2>
          <p className="text-lg text-gray-600">
            Kami komited untuk melahirkan graduan berkualiti yang bersedia untuk menghadapi cabaran industri global
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <div
                key={idx}
                className="group relative bg-gray-50 hover:bg-white rounded-2xl p-8 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 border border-gray-100 hover:border-[#FF6B5B]/30"
              >
                {/* Icon */}
                <div className={`${feature.color} w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-[#1E4A7A] mb-3 group-hover:text-[#FF6B5B] transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>

                {/* Decorative Element */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-[#FF6B5B]/5 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
