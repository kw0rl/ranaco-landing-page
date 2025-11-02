'use client';

import { ArrowRight, Phone, Mail, MapPin } from 'lucide-react';

export default function CTA() {
  return (
    <section id="daftar" className="py-20 bg-[#FF6B5B]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden p-8 lg:p-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#1E4A7A] mb-4">
              Daftar Sekarang!
            </h2>
            <p className="text-gray-600 mb-8">
              Isi maklumat anda dan team kami akan menghubungi anda untuk maklumat lanjut dan proses pendaftaran.
            </p>

            <form className="space-y-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Nama Penuh
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF6B5B] focus:border-transparent transition-all"
                      placeholder="Nama anda"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Nombor Telefon
                    </label>
                    <input
                      type="tel"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF6B5B] focus:border-transparent transition-all"
                      placeholder="+60"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Emel
                    </label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF6B5B] focus:border-transparent transition-all"
                      placeholder="email@example.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Program Diminati
                    </label>
                    <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF6B5B] focus:border-transparent transition-all">
                      <option value="">Pilih Program</option>
                      <option>Maritime Management</option>
                      <option>Marine Cargo Surveying</option>
                      <option>Nautical Studies</option>
                      <option>Occupational Safety & Health</option>
                      <option>Integrated Management System</option>
                      <option>Logistic and Supply Chain</option>
                      <option>Offshore Engineering</option>
                      <option>Marine Engineering</option>
                      <option>Culinary Arts</option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#FF6B5B] hover:bg-[#ff5544] text-white font-bold py-4 px-6 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2 hover:scale-105 shadow-lg"
                  >
                    <span>Hantar Permohonan</span>
                    <ArrowRight className="w-5 h-5" />
                  </button>

                  <p className="text-xs text-gray-500 text-center">
                    Dengan menghantar borang ini, anda bersetuju dengan{' '}
                    <a href="#" className="text-[#FF6B5B] hover:underline">Polisi Privasi</a> kami.
                  </p>
                </form>
          </div>
        </div>
      </div>
    </section>
  );
}
