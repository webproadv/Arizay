import { Sparkles } from 'lucide-react';

const images = [
  {
    url: '/gallery-1.jpg',
    alt: 'Parrucca artigianale personalizzata 1',
  },
  {
    url: '/gallery-2.jpg',
    alt: 'Parrucca artigianale personalizzata 2',
  },
  {
    url: '/gallery-3.jpg',
    alt: 'Parrucca artigianale personalizzata 3',
  },
];

export function Gallery() {
  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-white to-rose-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-rose-400 to-pink-400 text-white px-6 py-3 rounded-full text-sm font-medium mb-6">
            <Sparkles className="w-5 h-5" />
            <span>Le mie creazioni</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Ogni parrucca è unica. Come te.
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Colori, lunghezze, forma, densità, taglio, stile: tutto può essere personalizzato.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-rose-400 to-pink-400 mx-auto rounded-full mt-6"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {images.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl shadow-lg transform transition-all duration-500 hover:scale-105 hover:shadow-2xl"
            >
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src={image.url}
                  alt={image.alt}
                  onError={(e) => { e.currentTarget.src = '/logo.png'; }}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-rose-100 to-pink-100 rounded-2xl p-8 max-w-3xl mx-auto">
            <p className="text-lg text-gray-800 leading-relaxed">
              Ogni creazione è realizzata interamente a mano, con capelli naturali di alta qualità,
              cucita su misura per adattarsi perfettamente alla tua testa e al tuo stile di vita.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
