'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { motion, AnimatePresence } from 'framer-motion';

const navigation = [
  { name: 'Inicio', href: '/' },
  { name: '¿Quiénes Somos?', href: '/la-empresa' },
  { name: 'Portafolio', href: '/portafolio' },
  { name: 'Contacto', href: '/contacto' },
  { name: 'Nuestro Equipo', href: '/nuestro-equipo' },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
             <nav className="mx-auto flex max-w-7xl items-center justify-between py-3 px-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <img 
              src="/iscor_logo_colores.svg" 
              alt="ISCOR Logo" 
              className="h-16 w-auto"
            />
          </Link>
        </div>
        
        {/* Desktop Navigation */}
                       <div className="hidden lg:flex lg:gap-x-12">
                 {navigation.map((item) => (
                   <Link
                     key={item.name}
                     href={item.href}
                                           className={`text-sm font-semibold leading-6 transition-colors duration-200 ${
                        pathname === item.href
                          ? 'text-blue-600 border-b-2 border-blue-600'
                          : 'text-gray-900 hover:text-blue-600'
                      }`}
                   >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Desktop Login Button */}
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Link
            href="/login"
            className="rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 transition-colors duration-200"
          >
            Iniciar Sesión
          </Link>
        </div>

        {/* Mobile menu button */}
        <div className="flex lg:hidden">
                     <button
             type="button"
                           className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
             onClick={() => setMobileMenuOpen(true)}
           >
            <span className="sr-only">Abrir menú principal</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="lg:hidden"
          >
            <div className="fixed inset-0 z-50" />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
                             className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-3 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10"
            >
              <div className="flex items-center justify-between">
                <Link href="/" className="-m-1.5 p-1.5">
                  <img 
                    src="/iscor_logo_colores.svg" 
                    alt="ISCOR Logo" 
                    className="h-16 w-auto"
                  />
                </Link>
                                 <button
                   type="button"
                                       className="-m-2.5 rounded-md p-2.5 text-gray-700"
                   onClick={() => setMobileMenuOpen(false)}
                 >
                  <span className="sr-only">Cerrar menú</span>
                  <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
              <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-gray-500/10">
                  <div className="space-y-2 py-6">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                                                 className={`-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 transition-colors duration-200 ${
                           pathname === item.href
                             ? 'text-blue-600 bg-blue-50'
                             : 'text-gray-900 hover:bg-gray-50'
                         }`}
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                  <div className="py-6">
                    <Link
                      href="/login"
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white bg-blue-600 hover:bg-blue-500 transition-colors duration-200"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Iniciar Sesión
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
