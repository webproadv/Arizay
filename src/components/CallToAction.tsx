import { Phone, Mail, Calendar, MessageCircle } from 'lucide-react';

export function CallToAction() {
  return (
    <section className="py-16 sm:py-24 bg-gradient-to-br from-rose-500 to-pink-500">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 bg-white/20 text-white px-6 py-3 rounded-full text-sm font-medium mb-6 backdrop-blur-sm">
          <Calendar className="w-5 h-5" />
          <span>Consulenza gratuita</span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
          Vuoi scoprire la parrucca perfetta per te?
        </h2>

        <p className="text-xl text-white/90 mb-12 leading-relaxed">
          Prenota ora una consulenza gratuita con Arizay: insieme capirete stile, misura,
          colori e tutte le personalizzazioni più adatte a te.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <a
            href="tel:+393928165244"
            className="group inline-flex items-center gap-3 bg-white text-rose-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-rose-50 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105"
            onClick={() => { window.fbq?.('trackCustom', 'PhoneCallClick'); window.fbq?.('track', 'Contact'); }}
            onMouseDown={() => { window.gtag?.('event', 'contact_click', { channel: 'phone' }); }}
          >
            <Phone className="w-6 h-6 group-hover:rotate-12 transition-transform" />
            <span>+39 392 816 5244</span>
          </a>

          <a
            href="mailto:arizay.guerra@gmail.com"
            className="group inline-flex items-center gap-3 bg-white/10 text-white border-2 border-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-rose-600 transition-all duration-300 backdrop-blur-sm shadow-xl hover:shadow-2xl hover:scale-105"
            onClick={() => { window.fbq?.('trackCustom', 'EmailClick'); window.fbq?.('track', 'Contact'); }}
            onMouseDown={() => { window.gtag?.('event', 'contact_click', { channel: 'email' }); }}
          >
            <Mail className="w-6 h-6 group-hover:rotate-12 transition-transform" />
            <span>arizay.guerra@gmail.com</span>
          </a>

          <a
            href="https://wa.me/393928165244"
            className="group inline-flex items-center gap-3 bg-green-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-green-600 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105"
            target="_blank" rel="noreferrer"
            onClick={() => { window.fbq?.('trackCustom', 'WhatsAppClick'); window.fbq?.('track', 'Contact'); }}
            onMouseDown={() => { window.gtag?.('event', 'contact_click', { channel: 'whatsapp' }); }}
          >
            <MessageCircle className="w-6 h-6 group-hover:rotate-12 transition-transform" />
            <span>WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
}
