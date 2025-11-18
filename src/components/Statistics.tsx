import { TrendingUp, Users, Heart, Award } from 'lucide-react';

const stats = [
  {
    icon: TrendingUp,
    value: '+80%',
    label: 'delle donne che scelgono una parrucca naturale riportano un aumento significativo della fiducia in sé',
  },
  {
    icon: Award,
    value: '95%',
    label: 'dei clienti preferisce una parrucca artigianale rispetto a quelle industriali',
  },
  {
    icon: Users,
    value: '1 su 3',
    label: 'donne vive almeno una volta nella vita problemi di diradamento o perdita di capelli',
  },
  {
    icon: Heart,
    value: '100%',
    label: 'delle parrucche di Arizay sono realizzate a mano, personalizzate e su misura',
  },
];

export function Statistics() {
  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Perché scegliere una parrucca artigianale personalizzata?
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-rose-400 to-pink-400 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="bg-gradient-to-br from-rose-50 to-pink-50 rounded-2xl p-8 text-center transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-rose-400 to-pink-400 rounded-full mb-6">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-4xl font-bold text-gray-900 mb-4">
                  {stat.value}
                </div>
                <p className="text-gray-700 leading-relaxed">
                  {stat.label}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
