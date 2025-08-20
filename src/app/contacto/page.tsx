'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { 
  MapPinIcon, 
  PhoneIcon, 
  EnvelopeIcon, 
  ClockIcon,
  CheckCircleIcon 
} from '@heroicons/react/24/outline';

export default function Contacto() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    empresa: '',
    telefono: '',
    servicio: '',
    mensaje: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí iría la lógica para enviar el formulario
    console.log('Formulario enviado:', formData);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        nombre: '',
        email: '',
        empresa: '',
        telefono: '',
        servicio: '',
        mensaje: ''
      });
    }, 3000);
  };

  const contactInfo = [
    {
      name: 'Dirección',
      value: 'Calle 15 # 23-45, Barrio Centro, Bogotá, Colombia',
      icon: MapPinIcon,
    },
    {
      name: 'Teléfono Principal',
      value: '+57 (1) 234-5678',
      icon: PhoneIcon,
    },
    {
      name: 'Celular',
      value: '+57 300 123-4567',
      icon: PhoneIcon,
    },
    {
      name: 'Email Principal',
      value: 'info@iscor.com.co',
      icon: EnvelopeIcon,
    },
    {
      name: 'Email Comercial',
      value: 'comercial@iscor.com.co',
      icon: EnvelopeIcon,
    },
    {
      name: 'Email Técnico',
      value: 'tecnico@iscor.com.co',
      icon: EnvelopeIcon,
    },
    {
      name: 'Horario de Atención',
      value: 'Lun - Vie: 8:00 AM - 6:00 PM | Sáb: 8:00 AM - 12:00 PM',
      icon: ClockIcon,
    },
  ];

  const services = [
    'Montacargas',
    'Control del Fuego',
    'Planes de emergencia',
    'Brigada de emergencia',
    'Materiales Peligrosos',
    'Tareas de alto riesgo',
    'Seguridad acuática',
    'Seguridad física',
    'Primeros auxilios',
    'Gestión de calidad',
    'Inspecciones certificadas',
    'Reintegro laboral',
    'Alturas',
    'Lockout tagout',
    'Espacios confinados',
    'Buceo',
    'Otro'
  ];

  return (
    <div className="bg-gradient-to-br from-gray-50 via-white to-blue-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-12 sm:py-16">
        {/* Background decorative elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 via-transparent to-blue-800/5"></div>
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"></div>
        
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-800 text-sm font-medium mb-6"
            >
              <EnvelopeIcon className="h-4 w-4 mr-2" />
              Estamos aquí para ayudarte
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl font-bold tracking-tight sm:text-7xl bg-gradient-to-r from-gray-900 via-blue-800 to-blue-600 bg-clip-text text-transparent"
            >
              Contáctanos
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-8 text-xl leading-8 text-gray-600 max-w-3xl mx-auto"
            >
              ¿Necesitas servicios de seguridad industrial? Estamos aquí para proteger a tu equipo y cumplir con las normativas de seguridad.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-12 gap-y-8 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Form background with gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-white via-blue-50/30 to-white rounded-3xl shadow-2xl"></div>
              <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/20">
                <div className="flex items-center mb-8">
                  <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl shadow-lg mr-4">
                    <EnvelopeIcon className="h-6 w-6 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                    Envíanos un Mensaje
                  </h2>
                </div>

                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-green-50 border border-green-200 rounded-lg p-6 text-center"
                  >
                    <CheckCircleIcon className="h-12 w-12 text-green-600 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-green-900 mb-2">
                      ¡Mensaje Enviado!
                    </h3>
                    <p className="text-green-700">
                      Gracias por contactarnos. Nos pondremos en contacto contigo pronto.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                      <div className="group">
                        <label htmlFor="nombre" className="block text-sm font-semibold text-gray-700 mb-3">
                          Nombre Completo *
                        </label>
                        <input
                          type="text"
                          name="nombre"
                          id="nombre"
                          required
                          value={formData.nombre}
                          onChange={handleChange}
                          className="block w-full rounded-xl border-0 px-4 py-3.5 text-gray-900 shadow-lg ring-1 ring-gray-200 placeholder:text-gray-400 focus:ring-2 focus:ring-blue-600 focus:shadow-xl transition-all duration-300 bg-white/50 backdrop-blur-sm"
                          placeholder="Tu nombre completo"
                        />
                      </div>

                      <div className="group">
                        <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-3">
                          Email *
                        </label>
                        <input
                          type="email"
                          name="email"
                          id="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="block w-full rounded-xl border-0 px-4 py-3.5 text-gray-900 shadow-lg ring-1 ring-gray-200 placeholder:text-gray-400 focus:ring-2 focus:ring-blue-600 focus:shadow-xl transition-all duration-300 bg-white/50 backdrop-blur-sm"
                          placeholder="tu@email.com"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                      <div className="group">
                        <label htmlFor="empresa" className="block text-sm font-semibold text-gray-700 mb-3">
                          Empresa
                        </label>
                        <input
                          type="text"
                          name="empresa"
                          id="empresa"
                          value={formData.empresa}
                          onChange={handleChange}
                          className="block w-full rounded-xl border-0 px-4 py-3.5 text-gray-900 shadow-lg ring-1 ring-gray-200 placeholder:text-gray-400 focus:ring-2 focus:ring-blue-600 focus:shadow-xl transition-all duration-300 bg-white/50 backdrop-blur-sm"
                          placeholder="Nombre de tu empresa"
                        />
                      </div>

                      <div className="group">
                        <label htmlFor="telefono" className="block text-sm font-semibold text-gray-700 mb-3">
                          Teléfono
                        </label>
                        <input
                          type="tel"
                          name="telefono"
                          id="telefono"
                          value={formData.telefono}
                          onChange={handleChange}
                          className="block w-full rounded-xl border-0 px-4 py-3.5 text-gray-900 shadow-lg ring-1 ring-gray-200 placeholder:text-gray-400 focus:ring-2 focus:ring-blue-600 focus:shadow-xl transition-all duration-300 bg-white/50 backdrop-blur-sm"
                          placeholder="+1 (555) 123-4567"
                        />
                      </div>
                    </div>

                    <div className="group">
                      <label htmlFor="servicio" className="block text-sm font-semibold text-gray-700 mb-3">
                        Servicio de Interés
                      </label>
                      <select
                        name="servicio"
                        id="servicio"
                        value={formData.servicio}
                        onChange={handleChange}
                        className="block w-full rounded-xl border-0 px-4 py-3.5 text-gray-900 shadow-lg ring-1 ring-gray-200 focus:ring-2 focus:ring-blue-600 focus:shadow-xl transition-all duration-300 bg-white/50 backdrop-blur-sm"
                      >
                        <option value="">Selecciona un servicio</option>
                        {services.map((service) => (
                          <option key={service} value={service}>
                            {service}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="group">
                      <label htmlFor="mensaje" className="block text-sm font-semibold text-gray-700 mb-3">
                        Mensaje *
                      </label>
                      <textarea
                        name="mensaje"
                        id="mensaje"
                        rows={4}
                        required
                        value={formData.mensaje}
                        onChange={handleChange}
                        className="block w-full rounded-xl border-0 px-4 py-3.5 text-gray-900 shadow-lg ring-1 ring-gray-200 placeholder:text-gray-400 focus:ring-2 focus:ring-blue-600 focus:shadow-xl transition-all duration-300 bg-white/50 backdrop-blur-sm resize-none"
                        placeholder="Cuéntanos sobre tu proyecto..."
                      />
                    </div>

                    <div>
                      <button
                        type="submit"
                        className="w-full rounded-xl bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-4 text-center text-lg font-semibold text-white shadow-xl hover:shadow-2xl hover:from-blue-700 hover:to-blue-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-all duration-300 transform hover:scale-[1.02]"
                      >
                        Enviar Mensaje
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="lg:pl-8"
            >
              <div className="relative">
                {/* Background with gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-blue-100/50 rounded-3xl shadow-xl"></div>
                <div className="relative bg-white/60 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-white/20">
                  <div className="flex items-center mb-8">
                    <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-green-600 to-green-700 rounded-xl shadow-lg mr-4">
                      <PhoneIcon className="h-6 w-6 text-white" />
                    </div>
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                      Información de Contacto
                    </h2>
                  </div>

                  <div className="space-y-6">
                    {contactInfo.map((item) => (
                      <motion.div 
                        key={item.name} 
                        className="group flex items-start p-4 rounded-2xl bg-white/50 backdrop-blur-sm shadow-md hover:shadow-xl transition-all duration-300 hover:bg-white/80"
                        whileHover={{ scale: 1.02 }}
                      >
                        <div className="flex-shrink-0">
                          <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                            <item.icon className="h-5 w-5 text-white" aria-hidden="true" />
                          </div>
                        </div>
                        <div className="ml-4">
                          <h3 className="text-sm font-bold text-gray-900 mb-1">{item.name}</h3>
                          <p className="text-sm text-gray-600 font-medium">{item.value}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Map Placeholder */}
                  <div className="mt-12">
                    <div className="flex items-center mb-6">
                      <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-br from-purple-600 to-purple-700 rounded-xl shadow-lg mr-3">
                        <MapPinIcon className="h-5 w-5 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">Ubicación</h3>
                    </div>
                    <div className="aspect-[4/3] overflow-hidden rounded-2xl bg-gradient-to-br from-gray-100 to-gray-200 shadow-lg border border-white/20">
                      <div className="flex items-center justify-center h-full bg-gradient-to-br from-blue-50 to-blue-100">
                        <div className="text-center">
                          <MapPinIcon className="h-16 w-16 text-blue-600 mx-auto mb-4" />
                          <span className="text-gray-600 font-medium">Mapa de ubicación</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Additional Info */}
                  <div className="mt-12 p-8 bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl shadow-lg border border-white/20">
                    <div className="flex items-center mb-6">
                      <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-br from-green-600 to-green-700 rounded-xl shadow-lg mr-3">
                        <CheckCircleIcon className="h-5 w-5 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">
                        ¿Por qué elegir ISCOR?
                      </h3>
                    </div>
                    <ul className="space-y-4">
                      {[
                        'Respuesta en menos de 24 horas',
                        'Evaluación gratuita de riesgos',
                        'Personal certificado y experto',
                        'Cumplimiento normativo garantizado',
                        'Seguimiento continuo y auditorías'
                      ].map((benefit, index) => (
                        <motion.li 
                          key={benefit}
                          className="flex items-center text-sm text-gray-700 font-medium"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: index * 0.1 }}
                          viewport={{ once: true }}
                        >
                          <CheckCircleIcon className="h-5 w-5 text-green-600 mr-3 flex-shrink-0" />
                          {benefit}
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative py-12 sm:py-16">
        {/* Background decorative elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-gray-50"></div>
        <div className="absolute top-0 right-0 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"></div>
        
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-800 text-sm font-medium mb-6"
            >
              <CheckCircleIcon className="h-4 w-4 mr-2" />
              Preguntas Frecuentes
            </motion.div>
            <h2 className="text-base font-semibold leading-7 text-blue-600">¿Tienes dudas?</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Resolvemos tus inquietudes
            </p>
          </div>
          
          <div className="mx-auto mt-8 max-w-2xl lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-6 lg:max-w-none lg:grid-cols-2">
              {[
                {
                  question: '¿Cuánto tiempo toma implementar un programa de seguridad?',
                  answer: 'El tiempo varía según el alcance del programa. Capacitaciones básicas pueden tomar 1-2 días, mientras que programas completos de seguridad pueden requerir 2-4 semanas de implementación.',
                },
                {
                  question: '¿Ofrecen seguimiento y auditorías continuas?',
                  answer: 'Sí, ofrecemos auditorías periódicas, seguimiento de cumplimiento y soporte continuo para mantener los estándares de seguridad en tu empresa.',
                },
                {
                  question: '¿Trabajan con empresas de cualquier sector?',
                  answer: 'Absolutamente. Trabajamos con empresas industriales, comerciales, de servicios y construcción. Adaptamos nuestros servicios a las necesidades específicas de cada sector.',
                },
                {
                  question: '¿Cuál es el proceso de implementación de seguridad?',
                  answer: 'Nuestro proceso incluye: evaluación inicial de riesgos, diseño del programa, capacitación del personal, implementación de protocolos y seguimiento continuo.',
                },
              ].map((faq, index) => (
                <motion.div
                  key={faq.question}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group relative bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-white/20"
                >
                  <dt className="text-lg font-bold leading-7 text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                    {faq.question}
                  </dt>
                  <dd className="text-base leading-7 text-gray-600">
                    {faq.answer}
                  </dd>
                </motion.div>
              ))}
            </dl>
          </div>
        </div>
      </section>
    </div>
  );
}
