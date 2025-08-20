'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { ShieldCheckIcon, ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

export default function Portafolio() {
  return (
    <div className="bg-gradient-to-br from-gray-50 via-white to-blue-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-8 sm:py-12">
        {/* Background decorative elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 via-transparent to-blue-800/5"></div>
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"></div>
        
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-800 text-sm font-medium mb-6"
            >
              <ShieldCheckIcon className="h-4 w-4 mr-2" />
              Servicios Profesionales
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl font-bold tracking-tight sm:text-7xl bg-gradient-to-r from-gray-900 via-blue-800 to-blue-600 bg-clip-text text-transparent"
            >
              Nuestros Servicios
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-4 text-xl leading-8 text-gray-600 max-w-3xl mx-auto"
            >
              Módulos especializados en seguridad industrial y control de riesgos. 
              Más de 16 servicios profesionales para proteger a tu equipo y cumplir con las normativas de seguridad.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-4 sm:py-6">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto mt-0 max-w-2xl sm:mt-0 lg:mt-0 lg:max-w-none">
            <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
              {[
                { 
                  name: 'Montacargas', 
                  image: '/montacargas .png',
                  description: 'Capacitación y certificación en operación segura de montacargas, cumpliendo normativas de seguridad industrial.'
                },
                { 
                  name: 'Control del Fuego', 
                  image: '/fuego.png',
                  description: 'Sistemas de prevención, detección y extinción de incendios con equipos certificados y personal capacitado.'
                },
                { 
                  name: 'Planes de emergencia', 
                  image: '/plandeemergencia.png',
                  description: 'Desarrollo e implementación de planes de emergencia y evacuación adaptados a cada empresa.'
                },
                { 
                  name: 'Brigada de emergencia', 
                  image: '/brigada_de_emergencia.png',
                  description: 'Formación y entrenamiento de brigadas de emergencia para respuesta rápida ante incidentes.'
                },
                { 
                  name: 'Materiales Peligrosos', 
                  image: '/materiales_peligrosos.png',
                  description: 'Manejo seguro de materiales peligrosos, almacenamiento y transporte según normativas vigentes.'
                },
                { 
                  name: 'Tareas de alto riesgo', 
                  image: '/tareas_de_alto_riesgo.png',
                  description: 'Supervisión y control de trabajos en altura, espacios confinados y otras tareas de alto riesgo.'
                },
                { 
                  name: 'Seguridad acuática', 
                  image: '/seguridad_acuatica.png',
                  description: 'Protocolos de seguridad para trabajos en entornos acuáticos y actividades subacuáticas.'
                },
                { 
                  name: 'Seguridad fisica', 
                  image: '/seguridad_fisica.png',
                  description: 'Implementación de medidas de seguridad física y control de acceso en instalaciones industriales.'
                },
                { 
                  name: 'Primeros auxilios', 
                  image: '/primeros_auxilios.png',
                  description: 'Capacitación en primeros auxilios y atención prehospitalaria para emergencias médicas.'
                },
                { 
                  name: 'Gestión de calidad', 
                  image: '/control_de_calidad.png',
                  description: 'Sistemas de gestión de calidad ISO 9001 y auditorías para optimizar procesos empresariales.'
                },
                { 
                  name: 'Inspecciones certificadas', 
                  image: '/inspecciones_certificadas.png',
                  description: 'Inspecciones técnicas certificadas de equipos, instalaciones y cumplimiento normativo.'
                },
                { 
                  name: 'Reintegro laboral', 
                  image: '/reintegro_laboral.png',
                  description: 'Programas de reintegro laboral y adaptación de puestos de trabajo para trabajadores lesionados.'
                },
                { 
                  name: 'Alturas', 
                  image: '/alturas.png',
                  description: 'Capacitación y certificación en trabajos en altura con equipos de protección personal.'
                },
                { 
                  name: 'Lockout tagout', 
                  image: '/Lockout_tagout.png',
                  description: 'Procedimientos de bloqueo y etiquetado para mantenimiento seguro de equipos energizados.'
                },
                { 
                  name: 'Espacios confinados', 
                  image: '/Espacios_confinados.png',
                  description: 'Entrenamiento y supervisión para trabajos en espacios confinados con protocolos de seguridad.'
                },
                { 
                  name: 'Buceo', 
                  image: '/buceo.png',
                  description: 'Servicios de buceo industrial y comercial con equipos certificados y personal especializado.'
                }
              ].map((service, index) => (
                <motion.div 
                  key={service.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="group relative bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 p-6 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
                >
                  {/* Background gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Content */}
                  <div className="relative z-10 text-center">
                    <h3 className="text-sm font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">{service.name}</h3>
                    <div className="w-28 h-28 mx-auto mb-4 relative group-hover:scale-110 transition-transform duration-300">
                      <Image
                        src={service.image}
                        alt={service.name}
                        fill
                        className="object-contain"
                        sizes="(max-width: 768px) 112px, 112px"
                      />
                    </div>
                    <p className="text-xs text-gray-600 leading-tight group-hover:text-gray-700 transition-colors duration-300">{service.description}</p>
                  </div>
                  
                  {/* Decorative corner accent */}
                  <div className="absolute top-0 right-0 w-8 h-8 bg-gradient-to-br from-blue-600/10 to-transparent rounded-bl-2xl"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-8 sm:py-10">
        {/* Background decorative elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-gray-50"></div>
        <div className="absolute top-0 right-0 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"></div>
        
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-800 text-sm font-medium mb-4"
            >
              <ShieldCheckIcon className="h-4 w-4 mr-2" />
              Comienza Hoy
            </motion.div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              ¿Listo para implementar una cultura de seguridad?
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-lg leading-8 text-gray-600">
              Contáctanos hoy mismo y descubre cómo podemos ayudarte a proteger a tu equipo y cumplir con las normativas de seguridad industrial.
            </p>
            <div className="mt-6 flex items-center justify-center gap-x-6">
              <Link
                href="/contacto"
                className="rounded-xl bg-gradient-to-r from-blue-600 to-blue-700 px-8 py-4 text-lg font-semibold text-white shadow-xl hover:shadow-2xl hover:from-blue-700 hover:to-blue-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-all duration-300 transform hover:scale-105"
              >
                Contactar Ahora
              </Link>
              <Link
                href="/la-empresa"
                className="text-lg font-semibold leading-6 text-gray-900 hover:text-blue-600 transition-colors duration-200 px-6 py-4 rounded-xl hover:bg-gray-100"
              >
                Conoce Nuestra Empresa <ArrowRightIcon className="ml-2 h-5 w-5 inline" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
