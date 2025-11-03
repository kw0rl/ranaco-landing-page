'use client';

export default function CTA() {
  return (
    <section id="daftar" className="py-20 bg-[#FF6B5B]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
            <div className="p-8 lg:p-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-[#1E4A7A] mb-4 text-center">
                Daftar Sekarang!
              </h2>
              <p className="text-gray-600 mb-8 text-center">
                Isi maklumat anda dan team kami akan menghubungi anda untuk maklumat lanjut dan proses pendaftaran.
              </p>
            </div>

            {/* Google Form Embed */}
            <div className="w-full">
              <iframe
                src="https://docs.google.com/forms/d/e/1FAIpQLScYOor3Xdt-Ab_vZv2Cu9dwRJCkVkJaZX4m7NvYAwvHbAiyFA/viewform?embedded=true"
                width="100%"
                height="1200"
                frameBorder="0"
                marginHeight={0}
                marginWidth={0}
                className="w-full"
              >
                Loading…
              </iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
