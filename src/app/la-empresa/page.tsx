'use client';

import { motion } from 'framer-motion';
import { 
  BuildingOfficeIcon, 
  FlagIcon, 
  EyeIcon, 
  ShieldCheckIcon,
  UserGroupIcon,
  CheckBadgeIcon,
  PhoneIcon,
  CalendarIcon,
  StarIcon,
  HeartIcon,
  LightBulbIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline';
import Link from 'next/link';

export default function LaEmpresa() {
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
              <BuildingOfficeIcon className="h-4 w-4 mr-2" />
              Nuestra Empresa
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl font-bold tracking-tight sm:text-7xl bg-gradient-to-r from-gray-900 via-blue-800 to-blue-600 bg-clip-text text-transparent"
            >
              ¿Quiénes Somos?
            </motion.h1>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-8 flex justify-center"
            >
              <img
                src="/iscor_texto_colores.svg"
                alt="ISCOR S.A.S"
                className="h-16 sm:h-20 lg:h-24 w-auto"
              />
            </motion.div>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-8 text-2xl text-blue-600 font-semibold italic"
            >
              "Ingeniería de Seguridad y Control de Riesgos S.A.S"
            </motion.p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/20 p-8 lg:p-12"
            >
              {/* Background gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-white to-blue-100/30 rounded-3xl"></div>
              
              <div className="relative z-10 space-y-8">
                {/* Descripción General */}
                <div className="border-l-4 border-blue-600 pl-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Descripción General</h3>
                  <p className="text-xl text-gray-700 leading-relaxed">
                    ISCOR S.A.S "Ingeniería de Seguridad y Control de Riesgos S.A.S" es una empresa creada para atender y ayudar a diferentes compañías en Seguridad Industrial y atención de emergencias y para contribuir con la divulgación de una cultura de seguridad, autocuidado y desarrollo del hombre en su entorno de trabajo.
                  </p>
                </div>
                
                {/* Servicios Principales */}
                <div className="border-l-4 border-blue-600 pl-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Servicios Principales</h3>
                  <p className="text-xl text-gray-700 leading-relaxed">
                    Diseñamos, Implementamos y auditamos sus Sistemas de Gestión para la Seguridad y Salud de los Trabajadores SGSST y proveemos todos los complementos exigidos por la ley.
                  </p>
                </div>
                
                {/* Certificaciones */}
                <div className="border-l-4 border-blue-600 pl-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Certificaciones y Membresías</h3>
                  <p className="text-xl text-gray-700 leading-relaxed">
                    ISCOR es miembro del CCS – Consejo Colombiano de Seguridad y NFPA – National Fire Protection Association, organización internacional líder en todo lo referente con la protección y la seguridad.
                  </p>
                </div>
                
                {/* Experiencia */}
                <div className="border-l-4 border-blue-600 pl-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Experiencia y Posicionamiento</h3>
                  <p className="text-xl text-gray-700 leading-relaxed">
                    Nuestra experiencia de más de 16 años en control de tareas de alto riesgo, nos ha posicionado con las mejores empresas de nuestro país.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Misión y Visión */}
      <section className="relative py-16 sm:py-24">
        {/* Background decorative elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-gray-50"></div>
        <div className="absolute top-0 right-0 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"></div>
        
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center mb-16">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-800 text-sm font-medium mb-6"
            >
              <FlagIcon className="h-4 w-4 mr-2" />
              Nuestro Propósito
            </motion.div>
            <h2 className="text-base font-semibold leading-7 text-blue-600">Misión y Visión</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Lo que nos impulsa
            </p>
          </div>
          
          <div className="grid max-w-2xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-2">
            {/* Misión */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="group relative bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-white/20 p-8 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="relative z-10">
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl shadow-lg mb-6 group-hover:scale-110 transition-transform duration-300">
                  <FlagIcon className="h-8 w-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                  MISIÓN
                </h3>
                
                <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                  ISCOR S.A.S se dedica a la aplicación de servicios eficientes de consultoría, asesoría y capacitación bajo los más altos estándares nacionales e internacionales actualizados, trabajando por el desarrollo integral de la sociedad, brindando asesoría y capacitación a la comunidad en todo lo relacionado con la prevención y atención de desastres, la seguridad, la salud ocupacional y los Sistemas de Gestión para Seguridad y Salud de los Trabajadores SGSST.
                </p>
              </div>
              
              <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-blue-600/10 to-transparent rounded-bl-2xl"></div>
            </motion.div>

            {/* Visión */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="group relative bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-white/20 p-8 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="relative z-10">
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl shadow-lg mb-6 group-hover:scale-110 transition-transform duration-300">
                  <EyeIcon className="h-8 w-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                  VISIÓN
                </h3>
                
                <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                  Para el año 2025, Ingeniería de Seguridad y Control de Riesgos S.A.S se proyecta como una empresa sólida, de vanguardia, con reconocimiento nacional e internacional, servidora de soluciones económicas y eficaces en materia de seguridad integral, siendo una empresa líder en la región en todo lo relacionado con la seguridad, la salud ocupacional y los Sistemas de Gestion para la Seguridad y Salud de los Trabajadores SGSST, generando en la comunidad una cultura de prevención.
                </p>
              </div>
              
              <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-blue-600/10 to-transparent rounded-bl-2xl"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Nuestras Fortalezas */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center mb-16">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="inline-flex items-center px-4 py-2 rounded-full bg-green-100 text-green-800 text-sm font-medium mb-6"
            >
              <ShieldCheckIcon className="h-4 w-4 mr-2" />
              Nuestras Fortalezas
            </motion.div>
            <h2 className="text-base font-semibold leading-7 text-blue-600">Lo que nos hace diferentes</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Experiencia y Profesionalismo
            </p>
          </div>
          
          <div className="grid max-w-2xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3">
            {[
              {
                name: 'Sistemas de Gestión',
                description: 'Diseñamos, Implementamos y auditamos sus Sistemas de Gestión para la Seguridad y Salud de los Trabajadores SGSST.',
                icon: ShieldCheckIcon,
              },
              {
                name: 'Miembro del CCS',
                description: 'Miembro del CCS – Consejo Colombiano de Seguridad y NFPA – National Fire Protection Association.',
                icon: UserGroupIcon,
              },
              {
                name: '16+ Años de Experiencia',
                description: 'Más de 16 años en control de tareas de alto riesgo, posicionándonos con las mejores empresas del país.',
                icon: CheckBadgeIcon,
              },
            ].map((feature, index) => (
              <motion.div 
                key={feature.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-white/20 p-8 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="relative z-10">
                  <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl shadow-lg mb-6 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="h-8 w-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                    {feature.name}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                    {feature.description}
                  </p>
                </div>
                
                <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-blue-600/10 to-transparent rounded-bl-2xl"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Nuestros Valores */}
      <section className="relative py-16 sm:py-24">
        {/* Background decorative elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-gray-50"></div>
        <div className="absolute top-0 right-0 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"></div>
        
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center mb-16">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="inline-flex items-center px-4 py-2 rounded-full bg-purple-100 text-purple-800 text-sm font-medium mb-6"
            >
              <StarIcon className="h-4 w-4 mr-2" />
              Nuestros Valores
            </motion.div>
            <h2 className="text-base font-semibold leading-7 text-blue-600">Los principios que nos guían</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Excelencia y Compromiso
            </p>
          </div>
          
          <div className="grid max-w-2xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3">
            {[
              {
                name: 'Excelencia',
                description: 'Nos esforzamos por la perfección en cada proyecto y en cada interacción con nuestros clientes.',
                icon: StarIcon,
              },
              {
                name: 'Compromiso',
                description: 'Nos dedicamos completamente a cada proyecto hasta alcanzar los objetivos establecidos.',
                icon: HeartIcon,
              },
              {
                name: 'Innovación',
                description: 'Buscamos constantemente nuevas formas de resolver desafíos y mejorar nuestros servicios.',
                icon: LightBulbIcon,
              },
            ].map((value, index) => (
              <motion.div
                key={value.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-white/20 p-8 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="relative z-10">
                  <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl shadow-lg mb-6 group-hover:scale-110 transition-transform duration-300">
                    <value.icon className="h-8 w-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                    {value.name}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                    {value.description}
                  </p>
                </div>
                
                <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-blue-600/10 to-transparent rounded-bl-2xl"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-800 text-sm font-medium mb-6"
            >
              <PhoneIcon className="h-4 w-4 mr-2" />
              Contáctanos
            </motion.div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-8">
              ¿Listo para trabajar con nosotros?
            </h2>
            
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 border border-white/20"
              >
                <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mb-4 mx-auto">
                  <PhoneIcon className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">¿Alguna pregunta?</h3>
                <p className="text-gray-600">Llámame</p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 border border-white/20"
              >
                <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mb-4 mx-auto">
                  <CalendarIcon className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Programe una cita</h3>
                <p className="text-gray-600">Con nosotros</p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 border border-white/20 sm:col-span-2 lg:col-span-1"
              >
                <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mb-4 mx-auto">
                  <BuildingOfficeIcon className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">La Empresa</h3>
                <p className="text-gray-600">Conozca más sobre ISCOR</p>
              </motion.div>
            </div>
            
            <div className="mt-12">
              <Link
                href="/contacto"
                className="inline-flex items-center rounded-xl bg-gradient-to-r from-blue-600 to-blue-700 px-8 py-4 text-lg font-semibold text-white shadow-xl hover:shadow-2xl hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:scale-105"
              >
                Contactar Ahora
                <ArrowRightIcon className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
