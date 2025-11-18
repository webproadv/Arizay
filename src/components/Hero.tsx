export function Hero() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div className="order-2 lg:order-1">
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-rose-400 to-pink-400 rounded-2xl opacity-20 blur-xl"></div>
            <img
              src="/hero.jpg"
              alt="Arizay Guerra"
              onError={(e) => { e.currentTarget.src = '/logo.png'; }}
              className="relative rounded-2xl shadow-2xl w-full object-cover aspect-[3/4]"
            />
          </div>
        </div>

        <div className="order-1 lg:order-2 space-y-6">

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
            ARIZAY GUERRA
          </h1>

          <p className="text-xl sm:text-2xl text-rose-600 font-semibold">
            Parrucche artigianali su misura con capelli veri e naturali
          </p>

          <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
            <p>
              Da Cuba all'Italia, da una vita piena di sfide a una nuova rinascita.
              Sono Arizay Guerra, e ciò che oggi realizzo non sono semplici parrucche:
              sono <strong className="text-gray-900">creazioni artigianali cucite con cura, bellezza e un pezzo del mio cuore</strong>.
            </p>

            <p>
              La mia storia nasce da un dolore personale: la perdita dei capelli.
              Una ferita che mi ha tolto il sorriso… ma anche aperto la porta a un nuovo mondo.
            </p>

            <p>
              Invece di arrendermi, ho scelto di imparare:
              ho studiato, mi sono formata, ho imparato a cucire, tagliare, colorare e modellare parrucche naturali,
              per ridare fiducia a me… e a chi, come me, ne aveva bisogno.
            </p>

            <p className="text-gray-900 font-semibold">
              Oggi realizzo parrucche artigianali su misura, personalizzate per farti sentire bella, sicura e unica.
              Questa non è solo la mia professione. È la mia rinascita. E può diventare anche la tua.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
