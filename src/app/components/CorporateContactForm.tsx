'use client';
import React, { useState } from 'react';
import { FaBuilding, FaUser, FaEnvelope, FaPhone, FaCalendar, FaUsers, FaMapMarkerAlt, FaFileAlt } from 'react-icons/fa';

interface FormData {
  companyName: string;
  contactName: string;
  email: string;
  phone: string;
  eventDate: string;
  attendees: string;
  eventType: string;
  location: string;
  description: string;
  budget: string;
}

interface FormErrors {
  [key: string]: string;
}

const CorporateContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    companyName: '',
    contactName: '',
    email: '',
    phone: '',
    eventDate: '',
    attendees: '',
    eventType: '',
    location: '',
    description: '',
    budget: ''
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const eventTypes = [
    'Conferencia',
    'Seminario',
    'Workshop',
    'Presentación',
    'Networking',
    'Celebración',
    'Team Building',
    'Otro'
  ];

  const budgetRanges = [
    'Menos de $1.000.000',
    '$1.000.000 - $3.000.000',
    '$3.000.000 - $5.000.000',
    '$5.000.000 - $10.000.000',
    'Más de $10.000.000'
  ];

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.companyName.trim()) {
      newErrors.companyName = 'El nombre de la empresa es requerido';
    }

    if (!formData.contactName.trim()) {
      newErrors.contactName = 'El nombre de contacto es requerido';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'El email es requerido';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'El email no es válido';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'El teléfono es requerido';
    }

    if (!formData.eventDate) {
      newErrors.eventDate = 'La fecha del evento es requerida';
    }

    if (!formData.attendees.trim()) {
      newErrors.attendees = 'El número de asistentes es requerido';
    }

    if (!formData.eventType) {
      newErrors.eventType = 'El tipo de evento es requerido';
    }

    if (!formData.description.trim()) {
      newErrors.description = 'La descripción del evento es requerida';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // Enviar formulario a la API
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Error al enviar el formulario');
      }

      console.log('Formulario enviado exitosamente:', result);
      
      setIsSubmitted(true);
      setFormData({
        companyName: '',
        contactName: '',
        email: '',
        phone: '',
        eventDate: '',
        attendees: '',
        eventType: '',
        location: '',
        description: '',
        budget: ''
      });
    } catch (error) {
      console.error('Error al enviar formulario:', error);
      // Mostrar error al usuario
      setErrors({
        submit: error instanceof Error ? error.message : 'Error al enviar el formulario'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="bg-green-900/50 backdrop-blur-sm rounded-2xl p-8 text-center">
        <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-white mb-2">¡Formulario Enviado!</h3>
        <p className="text-zinc-300 mb-6">
          Gracias por contactarnos. Nos pondremos en contacto contigo en las próximas 24 horas.
        </p>
        <button
          onClick={() => setIsSubmitted(false)}
          className="bg-white text-zinc-900 px-6 py-3 rounded-lg font-semibold hover:bg-zinc-200 transition-colors"
        >
          Enviar Otro Formulario
        </button>
      </div>
    );
  }

  return (
    <div className="bg-zinc-900/50 backdrop-blur-sm rounded-2xl p-8">

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Información de la Empresa */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-white font-semibold mb-2">
              <FaBuilding className="inline mr-2" />
              Nombre de la Empresa *
            </label>
            <input
              type="text"
              name="companyName"
              value={formData.companyName}
              onChange={handleInputChange}
              className={`w-full px-4 py-3 rounded-lg bg-zinc-800/50 border ${
                errors.companyName ? 'border-red-500' : 'border-zinc-600'
              } text-white placeholder-zinc-400 focus:outline-none focus:border-blue-500 transition-colors`}
              placeholder="Tu empresa"
            />
            {errors.companyName && (
              <p className="text-red-400 text-sm mt-1">{errors.companyName}</p>
            )}
          </div>

          <div>
            <label className="block text-white font-semibold mb-2">
              <FaUser className="inline mr-2" />
              Nombre de Contacto *
            </label>
            <input
              type="text"
              name="contactName"
              value={formData.contactName}
              onChange={handleInputChange}
              className={`w-full px-4 py-3 rounded-lg bg-zinc-800/50 border ${
                errors.contactName ? 'border-red-500' : 'border-zinc-600'
              } text-white placeholder-zinc-400 focus:outline-none focus:border-blue-500 transition-colors`}
              placeholder="Tu nombre completo"
            />
            {errors.contactName && (
              <p className="text-red-400 text-sm mt-1">{errors.contactName}</p>
            )}
          </div>
        </div>

        {/* Información de Contacto */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-white font-semibold mb-2">
              <FaEnvelope className="inline mr-2" />
              Email *
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className={`w-full px-4 py-3 rounded-lg bg-zinc-800/50 border ${
                errors.email ? 'border-red-500' : 'border-zinc-600'
              } text-white placeholder-zinc-400 focus:outline-none focus:border-blue-500 transition-colors`}
              placeholder="tu@email.com"
            />
            {errors.email && (
              <p className="text-red-400 text-sm mt-1">{errors.email}</p>
            )}
          </div>

          <div>
            <label className="block text-white font-semibold mb-2">
              <FaPhone className="inline mr-2" />
              Teléfono *
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              className={`w-full px-4 py-3 rounded-lg bg-zinc-800/50 border ${
                errors.phone ? 'border-red-500' : 'border-zinc-600'
              } text-white placeholder-zinc-400 focus:outline-none focus:border-blue-500 transition-colors`}
              placeholder="+57 300 823 0000"
            />
            {errors.phone && (
              <p className="text-red-400 text-sm mt-1">{errors.phone}</p>
            )}
          </div>
        </div>

        {/* Información del Evento */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <label className="block text-white font-semibold mb-2">
              <FaCalendar className="inline mr-2" />
              Fecha del Evento *
            </label>
            <input
              type="date"
              name="eventDate"
              value={formData.eventDate}
              onChange={handleInputChange}
              className={`w-full px-4 py-3 rounded-lg bg-zinc-800/50 border ${
                errors.eventDate ? 'border-red-500' : 'border-zinc-600'
              } text-white focus:outline-none focus:border-blue-500 transition-colors`}
            />
            {errors.eventDate && (
              <p className="text-red-400 text-sm mt-1">{errors.eventDate}</p>
            )}
          </div>

          <div>
            <label className="block text-white font-semibold mb-2">
              <FaUsers className="inline mr-2" />
              Número de Asistentes *
            </label>
            <input
              type="text"
              name="attendees"
              value={formData.attendees}
              onChange={handleInputChange}
              className={`w-full px-4 py-3 rounded-lg bg-zinc-800/50 border ${
                errors.attendees ? 'border-red-500' : 'border-zinc-600'
              } text-white placeholder-zinc-400 focus:outline-none focus:border-blue-500 transition-colors`}
              placeholder="50-100 personas"
            />
            {errors.attendees && (
              <p className="text-red-400 text-sm mt-1">{errors.attendees}</p>
            )}
          </div>

          <div>
            <label className="block text-white font-semibold mb-2">
              <FaMapMarkerAlt className="inline mr-2" />
              Ubicación Preferida
            </label>
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleInputChange}
              className="w-full px-4 py-3 rounded-lg bg-zinc-800/50 border border-zinc-600 text-white placeholder-zinc-400 focus:outline-none focus:border-blue-500 transition-colors"
              placeholder="Sala principal, terraza, etc."
            />
          </div>
        </div>

        {/* Tipo de Evento y Presupuesto */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-white font-semibold mb-2">
              Tipo de Evento *
            </label>
            <select
              name="eventType"
              value={formData.eventType}
              onChange={handleInputChange}
              className={`w-full px-4 py-3 rounded-lg bg-zinc-800/50 border ${
                errors.eventType ? 'border-red-500' : 'border-zinc-600'
              } text-white focus:outline-none focus:border-blue-500 transition-colors`}
            >
              <option value="">Selecciona un tipo</option>
              {eventTypes.map(type => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>
            {errors.eventType && (
              <p className="text-red-400 text-sm mt-1">{errors.eventType}</p>
            )}
          </div>

          <div>
            <label className="block text-white font-semibold mb-2">
              Rango de Presupuesto
            </label>
            <select
              name="budget"
              value={formData.budget}
              onChange={handleInputChange}
              className="w-full px-4 py-3 rounded-lg bg-zinc-800/50 border border-zinc-600 text-white focus:outline-none focus:border-blue-500 transition-colors"
            >
              <option value="">Selecciona un rango</option>
              {budgetRanges.map(range => (
                <option key={range} value={range}>{range}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Descripción del Evento */}
        <div>
          <label className="block text-white font-semibold mb-2">
            <FaFileAlt className="inline mr-2" />
            Descripción del Evento *
          </label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            rows={4}
            className={`w-full px-4 py-3 rounded-lg bg-zinc-800/50 border ${
              errors.description ? 'border-red-500' : 'border-zinc-600'
            } text-white placeholder-zinc-400 focus:outline-none focus:border-blue-500 transition-colors resize-none`}
            placeholder="Describe tu evento, objetivos, requisitos especiales, catering, audiovisuales, etc."
          />
          {errors.description && (
            <p className="text-red-400 text-sm mt-1">{errors.description}</p>
          )}
        </div>

        {/* Mensaje de error general */}
        {errors.submit && (
          <div className="bg-red-900/50 backdrop-blur-sm rounded-lg p-4 border border-red-500">
            <p className="text-red-300 text-center">{errors.submit}</p>
          </div>
        )}

        {/* Botón de Envío */}
        <div className="text-center pt-6">
          <button
            type="submit"
            disabled={isSubmitting}
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
          >
            {isSubmitting ? (
              <div className="flex items-center justify-center">
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                Enviando...
              </div>
            ) : (
              'Solicitar Propuesta'
            )}
          </button>
        </div>

        {/* Información adicional */}
        <div className="text-center text-zinc-400 text-sm">
          <p>* Campos obligatorios</p>
          <p className="mt-2">
            Te responderemos en las próximas 24 horas con una propuesta personalizada
          </p>
        </div>
      </form>
    </div>
  );
};

export default CorporateContactForm; 