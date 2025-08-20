'use client';

import { motion } from 'framer-motion';
import { 
  EnvelopeIcon, 
  PhoneIcon, 
  LinkIcon,
  GlobeAltIcon,
  CommandLineIcon 
} from '@heroicons/react/24/outline';

const team = [
  {
    name: 'Carlos Rodríguez',
    role: 'CEO & Fundador',
    image: '/api/placeholder/400/400',
    bio: 'Más de 15 años de experiencia en tecnología empresarial. Apasionado por la innovación y el crecimiento sostenible.',
    email: 'carlos.rodriguez@iscor.com',
    phone: '+1 (555) 123-4567',
    linkedin: 'https://linkedin.com/in/carlos-rodriguez',
    twitter: 'https://twitter.com/carlosrodriguez',
    github: 'https://github.com/carlosrodriguez',
  },
  {
    name: 'Ana Martínez',
    role: 'CTO',
    image: '/api/placeholder/400/400',
    bio: 'Experta en arquitectura de software y tecnologías emergentes. Lidera nuestro equipo de desarrollo con visión estratégica.',
    email: 'ana.martinez@iscor.com',
    phone: '+1 (555) 123-4568',
    linkedin: 'https://linkedin.com/in/ana-martinez',
    twitter: 'https://twitter.com/anamartinez',
    github: 'https://github.com/anamartinez',
  },
  {
    name: 'David García',
    role: 'Director de Proyectos',
    image: '/api/placeholder/400/400',
    bio: 'Especialista en gestión ágil y metodologías de desarrollo. Asegura la entrega exitosa de todos nuestros proyectos.',
    email: 'david.garcia@iscor.com',
    phone: '+1 (555) 123-4569',
    linkedin: 'https://linkedin.com/in/david-garcia',
    twitter: 'https://twitter.com/davidgarcia',
    github: 'https://github.com/davidgarcia',
  },
  {
    name: 'María López',
    role: 'Diseñadora UX/UI Senior',
    image: '/api/placeholder/400/400',
    bio: 'Creadora de experiencias digitales excepcionales. Combina creatividad con metodologías centradas en el usuario.',
    email: 'maria.lopez@iscor.com',
    phone: '+1 (555) 123-4570',
    linkedin: 'https://linkedin.com/in/maria-lopez',
    twitter: 'https://twitter.com/marialopez',
    github: 'https://github.com/marialopez',
  },
  {
    name: 'Roberto Silva',
    role: 'Desarrollador Full Stack Senior',
    image: '/api/placeholder/400/400',
    bio: 'Experto en tecnologías modernas de desarrollo web y móvil. Construye soluciones robustas y escalables.',
    email: 'roberto.silva@iscor.com',
    phone: '+1 (555) 123-4571',
    linkedin: 'https://linkedin.com/in/roberto-silva',
    twitter: 'https://twitter.com/robertosilva',
    github: 'https://github.com/robertosilva',
  },
  {
    name: 'Laura Fernández',
    role: 'Consultora de Negocios',
    image: '/api/placeholder/400/400',
    bio: 'Especialista en transformación digital y optimización de procesos empresariales.',
    email: 'laura.fernandez@iscor.com',
    phone: '+1 (555) 123-4572',
    linkedin: 'https://linkedin.com/in/laura-fernandez',
    twitter: 'https://twitter.com/laurafernandez',
    github: 'https://github.com/laurafernandez',
  },
];

const departments = [
  {
    name: 'Desarrollo',
    description: 'Equipo de desarrolladores expertos en las últimas tecnologías',
    members: 15,
    icon: '💻',
  },
  {
    name: 'Diseño',
    description: 'Creadores de experiencias digitales excepcionales',
    members: 8,
    icon: '🎨',
  },
  {
    name: 'Consultoría',
    description: 'Especialistas en estrategia y transformación digital',
    members: 12,
    icon: '📊',
  },
  {
    name: 'Soporte',
    description: 'Equipo dedicado al mantenimiento y soporte técnico',
    members: 10,
    icon: '🛠️',
  },
];

export default function NuestroEquipo() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl"
            >
              Nuestro <span className="text-blue-600">Equipo</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-6 text-lg leading-8 text-gray-600"
            >
              Conoce a los profesionales apasionados que hacen posible la transformación digital de tu empresa.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center mb-16">
            <h2 className="text-base font-semibold leading-7 text-blue-600">Equipo Directivo</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Liderazgo Experto
            </p>
          </div>

          <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
            {team.slice(0, 3).map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                {/* Profile Image */}
                <div className="mx-auto h-48 w-48 overflow-hidden rounded-full bg-gray-100 mb-6">
                  <div className="flex items-center justify-center h-full">
                    <span className="text-4xl text-gray-400">👤</span>
                  </div>
                </div>

                {/* Member Info */}
                <h3 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-blue-600 font-medium mb-3">{member.role}</p>
                <p className="text-sm text-gray-600 mb-4">{member.bio}</p>

                {/* Contact Info */}
                <div className="space-y-2">
                  <div className="flex items-center justify-center text-sm text-gray-500">
                    <EnvelopeIcon className="h-4 w-4 mr-2" />
                    <a href={`mailto:${member.email}`} className="hover:text-blue-600 transition-colors">
                      {member.email}
                    </a>
                  </div>
                  <div className="flex items-center justify-center text-sm text-gray-500">
                    <PhoneIcon className="h-4 w-4 mr-2" />
                    <a href={`tel:${member.phone}`} className="hover:text-blue-600 transition-colors">
                      {member.phone}
                    </a>
                  </div>
                </div>

                                 {/* Social Links */}
                 <div className="flex justify-center space-x-3 mt-4">
                   <a
                     href={member.linkedin}
                     className="text-gray-400 hover:text-blue-600 transition-colors"
                     target="_blank"
                     rel="noopener noreferrer"
                     title="LinkedIn"
                   >
                     <LinkIcon className="h-5 w-5" />
                   </a>
                   <a
                     href={member.twitter}
                     className="text-gray-400 hover:text-blue-600 transition-colors"
                     target="_blank"
                     rel="noopener noreferrer"
                     title="Twitter"
                   >
                     <GlobeAltIcon className="h-5 w-5" />
                   </a>
                   <a
                     href={member.github}
                     className="text-gray-400 hover:text-blue-600 transition-colors"
                     target="_blank"
                     rel="noopener noreferrer"
                     title="GitHub"
                   >
                                             <CommandLineIcon className="h-5 w-5" />
                   </a>
                 </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Departments Section */}
      <section className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center mb-16">
            <h2 className="text-base font-semibold leading-7 text-blue-600">Nuestros Departamentos</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Especialización por Áreas
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {departments.map((dept, index) => (
              <motion.div
                key={dept.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-sm ring-1 ring-gray-200 p-6 text-center hover:shadow-lg transition-all duration-300"
              >
                <div className="text-4xl mb-4">{dept.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{dept.name}</h3>
                <p className="text-sm text-gray-600 mb-3">{dept.description}</p>
                <p className="text-2xl font-bold text-blue-600">{dept.members}+</p>
                <p className="text-xs text-gray-500">Miembros</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Full Team */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center mb-16">
            <h2 className="text-base font-semibold leading-7 text-blue-600">Equipo Completo</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Profesionales Dedicados
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-sm ring-1 ring-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300"
              >
                {/* Profile Image */}
                <div className="aspect-square overflow-hidden bg-gray-100">
                  <div className="flex items-center justify-center h-full">
                    <span className="text-6xl text-gray-400">👤</span>
                  </div>
                </div>

                {/* Member Info */}
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-blue-600 font-medium mb-3">{member.role}</p>
                  <p className="text-sm text-gray-600 mb-4 line-clamp-3">{member.bio}</p>

                  {/* Contact Info */}
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-sm text-gray-500">
                      <EnvelopeIcon className="h-4 w-4 mr-2 flex-shrink-0" />
                      <a href={`mailto:${member.email}`} className="hover:text-blue-600 transition-colors truncate">
                        {member.email}
                      </a>
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <PhoneIcon className="h-4 w-4 mr-2 flex-shrink-0" />
                      <a href={`tel:${member.phone}`} className="hover:text-blue-600 transition-colors">
                        {member.phone}
                      </a>
                    </div>
                  </div>

                                     {/* Social Links */}
                   <div className="flex space-x-3">
                     <a
                       href={member.linkedin}
                       className="text-gray-400 hover:text-blue-600 transition-colors"
                       target="_blank"
                       rel="noopener noreferrer"
                       title="LinkedIn"
                     >
                       <LinkIcon className="h-5 w-5" />
                     </a>
                     <a
                       href={member.twitter}
                       className="text-gray-400 hover:text-blue-600 transition-colors"
                       target="_blank"
                       rel="noopener noreferrer"
                       title="Twitter"
                     >
                       <GlobeAltIcon className="h-5 w-5" />
                     </a>
                     <a
                       href={member.github}
                       className="text-gray-400 hover:text-blue-600 transition-colors"
                       target="_blank"
                       rel="noopener noreferrer"
                       title="GitHub"
                     >
                       <CommandLineIcon className="h-5 w-5" />
                     </a>
                   </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Us Section */}
      <section className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              ¿Te gustaría unirte a nuestro equipo?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-600">
              Buscamos profesionales apasionados por la tecnología que quieran formar parte de un equipo dinámico y en crecimiento.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
                             <a
                 href="/contacto"
                 className="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-colors duration-200"
               >
                Ver Oportunidades
              </a>
              <a
                href="mailto:careers@iscor.com"
                className="text-sm font-semibold leading-6 text-gray-900 hover:text-blue-600 transition-colors duration-200"
              >
                Enviar CV <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
