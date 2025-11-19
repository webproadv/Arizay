import { useState, FormEvent } from 'react';
import { Send, CheckCircle } from 'lucide-react';

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    privacy: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Il nome è obbligatorio';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'L\'email è obbligatoria';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Inserisci un\'email valida';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Il messaggio è obbligatorio';
    }

    if (!formData.privacy) {
      newErrors.privacy = 'Devi accettare l\'informativa sulla privacy';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        throw new Error('Invio fallito');
      }

      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
        privacy: false,
      });

      setTimeout(() => {
        setIsSuccess(false);
      }, 5000);
    } catch {
      setIsSubmitting(false);
      const subject = `Nuovo contatto da ${formData.name}`;
      const body = `Nome: ${formData.name}%0AEmail: ${formData.email}%0ATelefono: ${formData.phone}%0AMessaggio:%0A${encodeURIComponent(formData.message)}`;
      window.location.href = `mailto:arizay.guerra@gmail.com?subject=${encodeURIComponent(subject)}&body=${body}`;
    }
  };

  const handleChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[field];
        return newErrors;
      });
    }
  };

  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Contattami
          </h2>
          <p className="text-xl text-gray-700">
            Compila il form per richiedere informazioni o prenotare una consulenza
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-rose-400 to-pink-400 mx-auto rounded-full mt-6"></div>
        </div>

        {isSuccess && (
          <div className="mb-8 bg-green-50 border-2 border-green-200 rounded-xl p-6 flex items-center gap-4">
            <CheckCircle className="w-8 h-8 text-green-600 flex-shrink-0" />
            <div>
              <h3 className="text-green-900 font-semibold text-lg">Messaggio inviato con successo!</h3>
              <p className="text-green-700">Ti risponderò il prima possibile.</p>
            </div>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-semibold text-gray-900 mb-2">
              Nome e Cognome <span className="text-rose-600">*</span>
            </label>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={(e) => handleChange('name', e.target.value)}
              className={`w-full px-4 py-3 rounded-lg border-2 ${
                errors.name ? 'border-red-300 focus:border-red-500' : 'border-gray-200 focus:border-rose-400'
              } focus:outline-none focus:ring-0 transition-colors`}
              placeholder="Mario Rossi"
            />
            {errors.name && <p className="mt-2 text-sm text-red-600">{errors.name}</p>}
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-2">
              Email <span className="text-rose-600">*</span>
            </label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={(e) => handleChange('email', e.target.value)}
              className={`w-full px-4 py-3 rounded-lg border-2 ${
                errors.email ? 'border-red-300 focus:border-red-500' : 'border-gray-200 focus:border-rose-400'
              } focus:outline-none focus:ring-0 transition-colors`}
              placeholder="mario.rossi@example.com"
            />
            {errors.email && <p className="mt-2 text-sm text-red-600">{errors.email}</p>}
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-semibold text-gray-900 mb-2">
              Telefono
            </label>
            <input
              type="tel"
              id="phone"
              value={formData.phone}
              onChange={(e) => handleChange('phone', e.target.value)}
              className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-rose-400 focus:outline-none focus:ring-0 transition-colors"
              placeholder="+39 123 456 7890"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-semibold text-gray-900 mb-2">
              Messaggio <span className="text-rose-600">*</span>
            </label>
            <textarea
              id="message"
              rows={6}
              value={formData.message}
              onChange={(e) => handleChange('message', e.target.value)}
              className={`w-full px-4 py-3 rounded-lg border-2 ${
                errors.message ? 'border-red-300 focus:border-red-500' : 'border-gray-200 focus:border-rose-400'
              } focus:outline-none focus:ring-0 transition-colors resize-none`}
              placeholder="Scrivi qui il tuo messaggio..."
            />
            {errors.message && <p className="mt-2 text-sm text-red-600">{errors.message}</p>}
          </div>

          <div>
            <label className="flex items-start gap-3 cursor-pointer group">
              <input
                type="checkbox"
                checked={formData.privacy}
                onChange={(e) => handleChange('privacy', e.target.checked)}
                className="mt-1 w-5 h-5 rounded border-2 border-gray-300 text-rose-500 focus:ring-rose-400 focus:ring-offset-0 cursor-pointer"
              />
              <span className="text-sm text-gray-700 leading-relaxed group-hover:text-gray-900 transition-colors">
                Accetto l'informativa sulla privacy e autorizzo il trattamento dei miei dati personali per essere
                ricontattato <span className="text-rose-600">*</span>
              </span>
            </label>
            {errors.privacy && <p className="mt-2 text-sm text-red-600">{errors.privacy}</p>}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-gradient-to-r from-rose-500 to-pink-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-rose-600 hover:to-pink-600 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center gap-3"
          >
            {isSubmitting ? (
              <>
                <div className="w-6 h-6 border-3 border-white border-t-transparent rounded-full animate-spin"></div>
                <span>Invio in corso...</span>
              </>
            ) : (
              <>
                <Send className="w-6 h-6" />
                <span>Invia messaggio</span>
              </>
            )}
          </button>
        </form>

        <div className="mt-12 text-center text-sm text-gray-600">
          <p>I campi contrassegnati con <span className="text-rose-600">*</span> sono obbligatori</p>
        </div>
      </div>
    </section>
  );
}
