'use client';

import { motion } from 'framer-motion';
import { 
  ArrowTopRightOnSquareIcon,
  ShieldCheckIcon,
  UserGroupIcon,
  ChartBarIcon,
  CheckCircleIcon,
  DocumentCheckIcon,
  CloudArrowUpIcon
} from '@heroicons/react/24/outline';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="bg-gradient-to-br from-gray-50 via-white to-blue-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-16 sm:py-24">
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
              className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-800 text-sm font-medium mb-8"
            >
              <ShieldCheckIcon className="h-4 w-4 mr-2" />
              Seguridad Industrial Profesional
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl font-bold tracking-tight sm:text-7xl bg-gradient-to-r from-gray-900 via-blue-800 to-blue-600 bg-clip-text text-transparent"
            >
              Somos{' '}
              <span className="text-blue-600">Cultura Preventiva</span>
            </motion.h1>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-2xl font-semibold text-blue-600 mt-6"
            >
              Ingeniería de Seguridad y Control de Riesgos
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-8 text-xl leading-8 text-gray-600 max-w-3xl mx-auto"
            >
              Somos una empresa creada para atender y ayudar a diferentes compañías en Seguridad Industrial y atención de emergencias y para contribuir con la divulgación de una cultura de seguridad, autocuidado y desarrollo del hombre en su entorno de trabajo.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-12 flex items-center justify-center gap-x-6"
            >
              <Link
                href="/portafolio"
                className="rounded-xl bg-gradient-to-r from-blue-600 to-blue-700 px-8 py-4 text-lg font-semibold text-white shadow-xl hover:shadow-2xl hover:from-blue-700 hover:to-blue-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-all duration-300 transform hover:scale-105"
              >
                Ver Nuestro Trabajo
                <ArrowTopRightOnSquareIcon className="ml-2 h-5 w-5 inline" />
              </Link>
              <Link
                href="/la-empresa"
                className="text-lg font-semibold leading-6 text-gray-900 hover:text-blue-600 transition-colors duration-200 px-6 py-4 rounded-xl hover:bg-gray-100"
              >
                Conoce Más <span aria-hidden="true">→</span>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Certificate Verification Section */}
      <section className="relative py-8 sm:py-12">
        {/* Background decorative elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-white to-blue-50"></div>
        <div className="absolute top-0 left-0 w-72 h-72 bg-green-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"></div>
        
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="inline-flex items-center px-4 py-2 rounded-full bg-green-100 text-green-800 text-sm font-medium mb-6"
            >
              <DocumentCheckIcon className="h-4 w-4 mr-2" />
              Verificación de Certificados
            </motion.div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Verifique su certificado aquí
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              Suba su cédula de ciudadanía para verificar la autenticidad de su certificado de seguridad industrial.
            </p>
          </div>
          
          <div className="mx-auto max-w-xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/20 p-8"
            >
              {/* Background gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-green-50/30 via-white to-blue-50/30 rounded-3xl"></div>
              
              <div className="relative z-10">
                {/* File Upload Area */}
                <div className="border-2 border-dashed border-gray-300 rounded-2xl p-8 text-center hover:border-green-400 transition-colors duration-300">
                  <CloudArrowUpIcon className="mx-auto h-12 w-12 text-gray-400 mb-4" />
                  <div className="text-sm text-gray-600 mb-4">
                    <label htmlFor="file-upload" className="relative cursor-pointer rounded-md font-medium text-green-600 hover:text-green-500">
                      <span>Subir archivo</span>
                      <input id="file-upload" name="file-upload" type="file" className="sr-only" accept=".pdf,.jpg,.jpeg,.png" />
                    </label>
                    <p className="pl-1">o arrastre y suelte</p>
                  </div>
                  <p className="text-xs text-gray-500">
                    PDF, JPG, PNG hasta 10MB
                  </p>
                </div>
                
                {/* Verification Button */}
                <div className="mt-6">
                  <button
                    type="button"
                    className="w-full rounded-xl bg-gradient-to-r from-green-600 to-green-700 px-6 py-4 text-lg font-semibold text-white shadow-xl hover:shadow-2xl hover:from-green-700 hover:to-green-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600 transition-all duration-300 transform hover:scale-105"
                  >
                    <DocumentCheckIcon className="inline h-5 w-5 mr-2" />
                    Verificar
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-8 sm:py-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center mb-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="inline-flex items-center px-4 py-2 rounded-full bg-green-100 text-green-800 text-sm font-medium mb-6"
            >
              <CheckCircleIcon className="h-4 w-4 mr-2" />
              Nuestros Valores
            </motion.div>
            <h2 className="text-base font-semibold leading-7 text-blue-600">¿Por qué elegir ISCOR?</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Experiencia y Profesionalismo
            </p>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              Más de 18 años de experiencia en control de tareas de alto riesgo, posicionándonos con las mejores empresas del país.
            </p>
          </div>
          <div className="mx-auto mt-8 max-w-2xl sm:mt-8 lg:mt-8 lg:max-w-none">
            <div className="grid max-w-xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3">
              {[
                {
                  name: 'Sistemas de Gestión',
                  description: 'Diseñamos, implementamos y auditamos Sistemas de Gestión para la Seguridad y Salud de los Trabajadores SGSST y proveemos todos los complementos exigidos por la ley.',
                  icon: ShieldCheckIcon,
                  gradient: 'from-blue-600 to-blue-700',
                },
                {
                  name: 'Miembro del CCS',
                  description: 'ISCOR es miembro del CCS – Consejo Colombiano de Seguridad y NFPA – National Fire Protection Association, organización internacional líder en protección y seguridad.',
                  icon: UserGroupIcon,
                  gradient: 'from-green-600 to-green-700',
                },
                {
                  name: 'Experiencia Comprobada',
                  description: 'Nuestra experiencia de más de 18 años en control de tareas de alto riesgo, nos ha posicionado con las mejores empresas de nuestro país.',
                  icon: ChartBarIcon,
                  gradient: 'from-purple-600 to-purple-700',
                },
              ].map((feature, index) => (
                <motion.div 
                  key={feature.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group relative bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl border border-white/20 p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
                >
                  {/* Background gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Content */}
                  <div className="relative z-10">
                    {/* Icon container */}
                    <div className={`flex items-center justify-center w-16 h-16 bg-gradient-to-br ${feature.gradient} rounded-2xl shadow-lg mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <feature.icon className="h-8 w-8 text-white" aria-hidden="true" />
                    </div>
                    
                    {/* Title */}
                    <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                      {feature.name}
                    </h3>
                    
                    {/* Description */}
                    <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                      {feature.description}
                    </p>
                  </div>
                  
                  {/* Decorative corner accent */}
                  <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-blue-600/10 to-transparent rounded-bl-3xl"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-8 sm:py-12">
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
              className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-800 text-sm font-medium mb-6"
            >
              <ShieldCheckIcon className="h-4 w-4 mr-2" />
              Comienza Hoy
            </motion.div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              ¿Listo para implementar una cultura de seguridad?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg leading-8 text-gray-600">
              Contáctanos hoy mismo y descubre cómo podemos ayudarte a proteger a tu equipo y cumplir con las normativas de seguridad industrial.
            </p>
            <div className="mt-8 flex items-center justify-center gap-x-6">
              <Link
                href="/contacto"
                className="rounded-xl bg-gradient-to-r from-blue-600 to-blue-700 px-8 py-4 text-lg font-semibold text-white shadow-xl hover:shadow-2xl hover:from-blue-700 hover:to-blue-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-all duration-300 transform hover:scale-105"
              >
                Contactar Ahora
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
