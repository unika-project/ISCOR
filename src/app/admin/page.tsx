'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { 
  ChartBarIcon,
  UsersIcon,
  DocumentTextIcon,
  CogIcon,
  PlusIcon,
  PencilIcon,
  TrashIcon,
  EyeIcon,
  CalendarIcon,
  ClockIcon,
  CheckCircleIcon,
  ExclamationTriangleIcon,
  ArrowRightIcon,
  ArrowLeftIcon,
  ShieldCheckIcon,
  AcademicCapIcon,
  BuildingOfficeIcon,
  PhoneIcon,
  EnvelopeIcon,
  GlobeAltIcon,
  UserGroupIcon,
  InformationCircleIcon,
  PhotoIcon,
  DocumentIcon,
  AdjustmentsHorizontalIcon,
  XMarkIcon,
  HomeIcon,
  NewspaperIcon,
  UserIcon,
  ChatBubbleLeftRightIcon
} from '@heroicons/react/24/outline';

// Interfaces para el contenido editable del sitio
interface SiteContent {
  home: HomeContent;
  company: CompanyContent;
  team: TeamContent;
  contact: ContactContent;
  global: GlobalContent;
}

interface HomeContent {
  hero: {
    badge: string;
    title: string;
    subtitle: string;
    stats: {
      experience: string;
      companies: string;
      certifications: string;
    };
    ctaButtons: {
      primary: { text: string; link: string };
      secondary: { text: string; link: string };
    };
  };
  certificateVerification: {
    title: string;
    description: string;
    placeholder: string;
  };
  services: {
    title: string;
    description: string;
    items: ServiceItem[];
  };
  features: {
    title: string;
    description: string;
    items: FeatureItem[];
  };
  testimonials: {
    title: string;
    description: string;
    items: TestimonialItem[];
  };
  stats: {
    title: string;
    items: StatItem[];
  };
  cta: {
    title: string;
    description: string;
    button: { text: string; link: string };
  };
}

interface CompanyContent {
  hero: {
    title: string;
    subtitle: string;
    description: string;
  };
  about: {
    title: string;
    description: string;
    services: string[];
    certifications: string[];
    experience: string;
  };
  mission: {
    title: string;
    description: string;
  };
  vision: {
    title: string;
    description: string;
  };
  strengths: {
    title: string;
    description: string;
    items: StrengthItem[];
  };
  values: {
    title: string;
    description: string;
    items: ValueItem[];
  };
}

interface TeamContent {
  hero: {
    title: string;
    subtitle: string;
    description: string;
    stats: {
      members: string;
      departments: string;
      experience: string;
    };
  };
  leadership: {
    title: string;
    description: string;
    members: TeamMember[];
  };
  departments: {
    title: string;
    description: string;
    items: DepartmentItem[];
  };
  fullTeam: {
    title: string;
    description: string;
    members: TeamMember[];
  };
}

interface ContactContent {
  hero: {
    title: string;
    subtitle: string;
    description: string;
    stats: {
      phone: string;
      email: string;
      location: string;
    };
  };
  form: {
    title: string;
    description: string;
    fields: FormField[];
  };
  info: {
    title: string;
    description: string;
    items: ContactItem[];
  };
  faq: {
    title: string;
    description: string;
    items: FAQItem[];
  };
}

interface GlobalContent {
  company: {
    name: string;
    slogan: string;
    logo: string;
    favicon: string;
  };
  contact: {
    phone: string;
    email: string;
    address: string;
    whatsapp: string;
    social: {
      facebook: string;
      instagram: string;
      linkedin: string;
      twitter: string;
    };
  };
  seo: {
    title: string;
    description: string;
    keywords: string;
  };
}

// Interfaces auxiliares
interface ServiceItem {
  id: string;
  name: string;
  description: string;
  icon: string;
  gradient: string;
}

interface FeatureItem {
  id: string;
  title: string;
  description: string;
  icon: string;
  color: string;
}

interface TestimonialItem {
  id: string;
  name: string;
  position: string;
  company: string;
  content: string;
  rating: number;
}

interface StatItem {
  id: string;
  value: string;
  label: string;
  icon: string;
}

interface StrengthItem {
  id: string;
  title: string;
  description: string;
  icon: string;
  gradient: string;
}

interface ValueItem {
  id: string;
  title: string;
  description: string;
  icon: string;
  gradient: string;
}

interface TeamMember {
  id: string;
  name: string;
  position: string;
  bio: string;
  phone: string;
  email: string;
  linkedin: string;
  image: string;
  gradient: string;
}

interface DepartmentItem {
  id: string;
  name: string;
  description: string;
  members: number;
  icon: string;
  gradient: string;
}

interface FormField {
  id: string;
  name: string;
  type: string;
  placeholder: string;
  required: boolean;
}

interface ContactItem {
  id: string;
  title: string;
  description: string;
  icon: string;
  gradient: string;
}

interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

interface Course {
  id: string;
  name: string;
  slug: string;
  image: string;
  description: string;
  duration: string;
  certification: string;
  gradient: string;
  detailedDescription: string;
  objectives: string[];
  benefits: string[];
  requirements: string[];
  modules: string[];
  instructor: string;
  price: string;
  location: string;
  schedule: string;
}

export default function AdminPanel() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [activeSection, setActiveSection] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [showPreview, setShowPreview] = useState(false);
  const [selectedItem, setSelectedItem] = useState<any>(null);
  const [isSaving, setIsSaving] = useState(false);
  const [saveMessage, setSaveMessage] = useState('');
  const router = useRouter();

  // Datos de ejemplo para el dashboard
  const stats = {
    totalUsers: 1247,
    totalCourses: 16,
    activeCertifications: 892,
    pendingRequests: 23
  };

  // Datos de ejemplo para cursos
  const courses: Course[] = [
    {
      id: '1',
      name: 'Montacargas',
      slug: 'montacargas',
      image: '/montacargas .png',
      description: 'Capacitación y certificación en operación segura de montacargas.',
      duration: '40 horas',
      certification: 'Certificado válido por 2 años',
      gradient: 'from-orange-600 to-red-600',
      detailedDescription: 'Curso completo de operación segura de montacargas.',
      objectives: ['Aprender operación segura', 'Conocer normativas vigentes'],
      benefits: ['Certificación oficial', 'Mejores oportunidades laborales'],
      requirements: ['Mayor de 18 años', 'Documentos de identidad'],
      modules: ['Teoría de montacargas', 'Práctica operacional'],
      instructor: 'Ing. Carlos Mendoza',
      price: '$450.000 COP',
      location: 'Bogotá, Colombia',
      schedule: 'Lunes a Viernes 8:00 AM - 5:00 PM'
    }
  ];

  const handleLogout = () => {
    router.push('/login');
  };

  const handleSave = async () => {
    setIsSaving(true);
    setSaveMessage('');
    
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setSaveMessage('Cambios guardados exitosamente');
    setIsSaving(false);
    setIsEditing(false);
    
    setTimeout(() => setSaveMessage(''), 3000);
  };

  const handleEditSection = (section: string, item?: any) => {
    setActiveSection(section);
    setSelectedItem(item);
    setIsEditing(true);
  };

  const getSectionIcon = (section: string) => {
    switch (section) {
      case 'home': return HomeIcon;
      case 'company': return BuildingOfficeIcon;
      case 'team': return UserGroupIcon;
      case 'contact': return ChatBubbleLeftRightIcon;
      case 'courses': return AcademicCapIcon;
      case 'global': return CogIcon;
      default: return DocumentIcon;
    }
  };

  const getSectionColor = (section: string) => {
    switch (section) {
      case 'home': return 'from-green-500 to-emerald-500';
      case 'company': return 'from-purple-500 to-pink-500';
      case 'team': return 'from-orange-500 to-red-500';
      case 'contact': return 'from-blue-500 to-cyan-500';
      case 'courses': return 'from-indigo-500 to-purple-500';
      case 'global': return 'from-gray-500 to-slate-500';
      default: return 'from-blue-500 to-cyan-500';
    }
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <Image
                src="/iscor_logo_colores.svg"
                alt="ISCOR Logo"
                width={120}
                height={60}
                className="h-12 w-auto"
              />
              <div className="ml-4">
                <h1 className="text-xl font-semibold text-slate-900">Panel de Administración</h1>
                <p className="text-sm text-slate-600">Gestión integral de ISCOR</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              {isEditing && (
                <div className="flex items-center space-x-3">
                  <button
                    onClick={() => setIsEditing(false)}
                    className="px-4 py-2 text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors duration-200"
                  >
                    Cancelar
                  </button>
                  <button
                    onClick={handleSave}
                    disabled={isSaving}
                    className="px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors duration-200 disabled:opacity-50"
                  >
                    {isSaving ? 'Guardando...' : 'Guardar Cambios'}
                  </button>
                </div>
              )}
              <button
                onClick={handleLogout}
                className="px-4 py-2 text-sm font-medium text-slate-700 hover:text-slate-900 transition-colors duration-200"
              >
                Cerrar Sesión
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Navigation Tabs */}
        <div className="mb-8">
          <nav className="flex space-x-8">
            {[
              { id: 'dashboard', name: 'Dashboard', icon: ChartBarIcon },
              { id: 'content', name: 'Contenido del Sitio', icon: DocumentIcon },
              { id: 'courses', name: 'Gestión de Cursos', icon: AcademicCapIcon },
              { id: 'global', name: 'Configuración Global', icon: CogIcon }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center px-3 py-2 text-sm font-medium rounded-lg transition-colors duration-200 ${
                  activeTab === tab.id
                    ? 'bg-blue-100 text-blue-700'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                <tab.icon className="h-5 w-5 mr-2" />
                {tab.name}
              </button>
            ))}
          </nav>
        </div>

        {/* Save Message */}
        {saveMessage && (
          <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-xl">
            <div className="flex items-center">
              <CheckCircleIcon className="h-5 w-5 text-green-500 mr-3" />
              <span className="text-sm text-green-700">{saveMessage}</span>
            </div>
          </div>
        )}

        {/* Dashboard Content */}
        {activeTab === 'dashboard' && (
          <div className="space-y-8">
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
                <div className="flex items-center">
                  <div className="p-3 bg-blue-100 rounded-lg">
                    <UsersIcon className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-slate-600">Total Usuarios</p>
                    <p className="text-2xl font-bold text-slate-900">{stats.totalUsers.toLocaleString()}</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
                <div className="flex items-center">
                  <div className="p-3 bg-green-100 rounded-lg">
                    <AcademicCapIcon className="h-6 w-6 text-green-600" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-slate-600">Cursos Activos</p>
                    <p className="text-2xl font-bold text-slate-900">{stats.totalCourses}</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
                <div className="flex items-center">
                  <div className="p-3 bg-purple-100 rounded-lg">
                    <DocumentTextIcon className="h-6 w-6 text-purple-600" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-slate-600">Certificaciones Activas</p>
                    <p className="text-2xl font-bold text-slate-900">{stats.activeCertifications.toLocaleString()}</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
                <div className="flex items-center">
                  <div className="p-3 bg-yellow-100 rounded-lg">
                    <ClockIcon className="h-6 w-6 text-yellow-600" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-slate-600">Solicitudes Pendientes</p>
                    <p className="text-2xl font-bold text-slate-900">{stats.pendingRequests}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
                <h3 className="text-lg font-semibold text-slate-900 mb-4">Acciones Rápidas</h3>
                <div className="space-y-3">
                  <button 
                    onClick={() => handleEditSection('courses')}
                    className="w-full flex items-center justify-between p-3 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors duration-200"
                  >
                    <span className="text-sm font-medium text-blue-700">Gestionar Cursos</span>
                    <PlusIcon className="h-4 w-4 text-blue-600" />
                  </button>
                  <button 
                    onClick={() => handleEditSection('home')}
                    className="w-full flex items-center justify-between p-3 bg-green-50 rounded-lg hover:bg-green-100 transition-colors duration-200"
                  >
                    <span className="text-sm font-medium text-green-700">Editar Página de Inicio</span>
                    <PencilIcon className="h-4 w-4 text-green-600" />
                  </button>
                  <button 
                    onClick={() => handleEditSection('global')}
                    className="w-full flex items-center justify-between p-3 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors duration-200"
                  >
                    <span className="text-sm font-medium text-purple-700">Configuración Global</span>
                    <CogIcon className="h-4 w-4 text-purple-600" />
                  </button>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
                <h3 className="text-lg font-semibold text-slate-900 mb-4">Enlaces Útiles</h3>
                <div className="space-y-3">
                  <Link href="/" className="flex items-center justify-between p-3 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors duration-200">
                    <span className="text-sm font-medium text-slate-700">Ver Sitio Web</span>
                    <ArrowRightIcon className="h-4 w-4 text-slate-600" />
                  </Link>
                  <Link href="/contacto" className="flex items-center justify-between p-3 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors duration-200">
                    <span className="text-sm font-medium text-slate-700">Contacto</span>
                    <ArrowRightIcon className="h-4 w-4 text-slate-600" />
                  </Link>
                  <Link href="/portafolio" className="flex items-center justify-between p-3 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors duration-200">
                    <span className="text-sm font-medium text-slate-700">Portafolio</span>
                    <ArrowRightIcon className="h-4 w-4 text-slate-600" />
                  </Link>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
                <h3 className="text-lg font-semibold text-slate-900 mb-4">Información de Contacto</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <BuildingOfficeIcon className="h-5 w-5 text-slate-400" />
                    <span className="text-sm text-slate-600">Bogotá, Colombia</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <PhoneIcon className="h-5 w-5 text-slate-400" />
                    <span className="text-sm text-slate-600">+57 300 123 4567</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <EnvelopeIcon className="h-5 w-5 text-slate-400" />
                    <span className="text-sm text-slate-600">admin@iscor.com</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Contenido del Sitio */}
        {activeTab === 'content' && (
          <div className="space-y-8">
            <h2 className="text-2xl font-bold text-slate-900">Contenido del Sitio Web</h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Página de Inicio */}
              <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className={`w-10 h-10 bg-gradient-to-r ${getSectionColor('home')} rounded-lg flex items-center justify-center`}>
                    <HomeIcon className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900">Página de Inicio</h3>
                </div>
                <p className="text-slate-600 mb-4">Edita el contenido principal de la página de inicio, incluyendo hero, servicios, características y testimonios.</p>
                <div className="space-y-2">
                  <button
                    onClick={() => handleEditSection('home', 'hero')}
                    className="w-full text-left px-3 py-2 text-sm bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors duration-200"
                  >
                    • Sección Hero (Título, subtítulo, estadísticas)
                  </button>
                  <button
                    onClick={() => handleEditSection('home', 'services')}
                    className="w-full text-left px-3 py-2 text-sm bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors duration-200"
                  >
                    • Servicios Destacados
                  </button>
                  <button
                    onClick={() => handleEditSection('home', 'features')}
                    className="w-full text-left px-3 py-2 text-sm bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors duration-200"
                  >
                    • Características Principales
                  </button>
                  <button
                    onClick={() => handleEditSection('home', 'testimonials')}
                    className="w-full text-left px-3 py-2 text-sm bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors duration-200"
                  >
                    • Testimonios de Clientes
                  </button>
                </div>
              </div>

              {/* Página de Empresa */}
              <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className={`w-10 h-10 bg-gradient-to-r ${getSectionColor('company')} rounded-lg flex items-center justify-center`}>
                    <BuildingOfficeIcon className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900">Página de Empresa</h3>
                </div>
                <p className="text-slate-600 mb-4">Modifica la información sobre la empresa, misión, visión, fortalezas y valores corporativos.</p>
                <div className="space-y-2">
                  <button
                    onClick={() => handleEditSection('company', 'hero')}
                    className="w-full text-left px-3 py-2 text-sm bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors duration-200"
                  >
                    • Sección Hero (Título, descripción)
                  </button>
                  <button
                    onClick={() => handleEditSection('company', 'about')}
                    className="w-full text-left px-3 py-2 text-sm bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors duration-200"
                  >
                    • Información de la Empresa
                  </button>
                  <button
                    onClick={() => handleEditSection('company', 'mission')}
                    className="w-full text-left px-3 py-2 text-sm bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors duration-200"
                  >
                    • Misión y Visión
                  </button>
                  <button
                    onClick={() => handleEditSection('company', 'strengths')}
                    className="w-full text-left px-3 py-2 text-sm bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors duration-200"
                  >
                    • Fortalezas y Valores
                  </button>
                </div>
              </div>

              {/* Página de Equipo */}
              <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className={`w-10 h-10 bg-gradient-to-r ${getSectionColor('team')} rounded-lg flex items-center justify-center`}>
                    <UserGroupIcon className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900">Página de Equipo</h3>
                </div>
                <p className="text-slate-600 mb-4">Gestiona la información del equipo, perfiles profesionales y estructura organizacional.</p>
                <div className="space-y-2">
                  <button
                    onClick={() => handleEditSection('team', 'hero')}
                    className="w-full text-left px-3 py-2 text-sm bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors duration-200"
                  >
                    • Sección Hero (Título, estadísticas)
                  </button>
                  <button
                    onClick={() => handleEditSection('team', 'leadership')}
                    className="w-full text-left px-3 py-2 text-sm bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors duration-200"
                  >
                    • Equipo de Liderazgo
                  </button>
                  <button
                    onClick={() => handleEditSection('team', 'departments')}
                    className="w-full text-left px-3 py-2 text-sm bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors duration-200"
                  >
                    • Departamentos
                  </button>
                  <button
                    onClick={() => handleEditSection('team', 'fullTeam')}
                    className="w-full text-left px-3 py-2 text-sm bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors duration-200"
                  >
                    • Equipo Completo
                  </button>
                </div>
              </div>

              {/* Página de Contacto */}
              <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className={`w-10 h-10 bg-gradient-to-r ${getSectionColor('contact')} rounded-lg flex items-center justify-center`}>
                    <ChatBubbleLeftRightIcon className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900">Página de Contacto</h3>
                </div>
                <p className="text-slate-600 mb-4">Actualiza la información de contacto, ubicación, formularios y preguntas frecuentes.</p>
                <div className="space-y-2">
                  <button
                    onClick={() => handleEditSection('contact', 'hero')}
                    className="w-full text-left px-3 py-2 text-sm bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors duration-200"
                  >
                    • Sección Hero (Título, información)
                  </button>
                  <button
                    onClick={() => handleEditSection('contact', 'form')}
                    className="w-full text-left px-3 py-2 text-sm bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors duration-200"
                  >
                    • Formulario de Contacto
                  </button>
                  <button
                    onClick={() => handleEditSection('contact', 'info')}
                    className="w-full text-left px-3 py-2 text-sm bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors duration-200"
                  >
                    • Información de Contacto
                  </button>
                  <button
                    onClick={() => handleEditSection('contact', 'faq')}
                    className="w-full text-left px-3 py-2 text-sm bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors duration-200"
                  >
                    • Preguntas Frecuentes
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Gestión de Cursos */}
        {activeTab === 'courses' && (
          <div className="space-y-8">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold text-slate-900">Gestión de Cursos</h2>
              <button
                onClick={() => handleEditSection('courses', 'new')}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
              >
                <PlusIcon className="h-5 w-5 mr-2 inline" />
                Agregar Nuevo Curso
              </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {courses.map((course) => (
                <div key={course.id} className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                        <AcademicCapIcon className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-slate-900">{course.name}</h3>
                        <p className="text-sm text-slate-600">{course.duration} • {course.certification}</p>
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <button
                        onClick={() => handleEditSection('courses', course)}
                        className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors duration-200"
                      >
                        <PencilIcon className="h-4 w-4" />
                      </button>
                      <button className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors duration-200">
                        <TrashIcon className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                  
                  <p className="text-slate-600 mb-4">{course.description}</p>
                  
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="font-medium text-slate-700">Instructor:</span>
                      <p className="text-slate-600">{course.instructor}</p>
                    </div>
                    <div>
                      <span className="font-medium text-slate-700">Precio:</span>
                      <p className="text-slate-600">{course.price}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Configuración Global */}
        {activeTab === 'global' && (
          <div className="space-y-8">
            <h2 className="text-2xl font-bold text-slate-900">Configuración Global</h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Información de la Empresa */}
              <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className={`w-10 h-10 bg-gradient-to-r ${getSectionColor('global')} rounded-lg flex items-center justify-center`}>
                    <BuildingOfficeIcon className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900">Información de la Empresa</h3>
                </div>
                <p className="text-slate-600 mb-4">Configura el nombre, slogan, logo y favicon de la empresa.</p>
                <button
                  onClick={() => handleEditSection('global', 'company')}
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
                >
                  <PencilIcon className="h-4 w-4 mr-2 inline" />
                  Editar Información
                </button>
              </div>

              {/* Información de Contacto */}
              <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className={`w-10 h-10 bg-gradient-to-r ${getSectionColor('global')} rounded-lg flex items-center justify-center`}>
                    <PhoneIcon className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900">Información de Contacto</h3>
                </div>
                <p className="text-slate-600 mb-4">Actualiza teléfonos, emails, dirección y redes sociales.</p>
                <button
                  onClick={() => handleEditSection('global', 'contact')}
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
                >
                  <PencilIcon className="h-4 w-4 mr-2 inline" />
                  Editar Contacto
                </button>
              </div>

              {/* Configuración SEO */}
              <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className={`w-10 h-10 bg-gradient-to-r ${getSectionColor('global')} rounded-lg flex items-center justify-center`}>
                    <GlobeAltIcon className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900">Configuración SEO</h3>
                </div>
                <p className="text-slate-600 mb-4">Configura títulos, descripciones y palabras clave para SEO.</p>
                <button
                  onClick={() => handleEditSection('global', 'seo')}
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
                >
                  <PencilIcon className="h-4 w-4 mr-2 inline" />
                  Editar SEO
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Modal de Edición en Tiempo Real */}
        {isEditing && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="relative bg-white rounded-2xl shadow-2xl max-w-6xl w-full max-h-[90vh] overflow-hidden">
              {/* Header del Modal */}
              <div className="flex items-center justify-between p-6 border-b border-slate-200">
                <div className="flex items-center space-x-3">
                  <div className={`w-10 h-10 bg-gradient-to-r ${getSectionColor(activeSection)} rounded-lg flex items-center justify-center`}>
                    {/* Assuming getSectionIcon returns a component, not a string for className */}
                    {React.createElement(getSectionIcon(activeSection), { className: "h-5 w-5 text-white" })}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-slate-900">
                      Editando: {activeSection === 'home' ? 'Página de Inicio' : 
                                 activeSection === 'company' ? 'Página de Empresa' :
                                 activeSection === 'team' ? 'Página de Equipo' :
                                 activeSection === 'contact' ? 'Página de Contacto' :
                                 activeSection === 'courses' ? 'Gestión de Cursos' :
                                 activeSection === 'global' ? 'Configuración Global' : 'Contenido'}
                    </h3>
                    <p className="text-sm text-slate-600">Edita el contenido y ve los cambios en vivo</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <button
                    onClick={() => setShowPreview(!showPreview)}
                    className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors duration-200 ${
                      showPreview 
                        ? 'bg-blue-100 text-blue-700' 
                        : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                    }`}
                  >
                    <EyeIcon className="h-4 w-4 mr-2 inline" />
                    {showPreview ? 'Ocultar Vista Previa' : 'Mostrar Vista Previa'}
                  </button>
                  <button
                    onClick={() => setIsEditing(false)}
                    className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-lg transition-colors duration-200"
                  >
                    <XMarkIcon className="h-6 w-6" />
                  </button>
                </div>
              </div>

              {/* Contenido del Modal */}
              <div className="flex h-[calc(90vh-120px)]">
                {/* Panel de Edición */}
                <div className={`${showPreview ? 'w-1/2' : 'w-full'} p-6 overflow-y-auto border-r border-slate-200`}>
                  <div className="space-y-6">
                    <div className="text-center py-8">
                      <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <PencilIcon className="h-8 w-8 text-slate-400" />
                      </div>
                      <h4 className="text-lg font-semibold text-slate-900 mb-2">Editor de Contenido</h4>
                      <p className="text-slate-600">
                        Aquí aparecerán los campos específicos para editar el contenido de la sección seleccionada.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Vista Previa */}
                {showPreview && (
                  <div className="w-1/2 p-6 overflow-y-auto bg-slate-50">
                    <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
                      <h4 className="text-lg font-semibold text-slate-900 mb-4">Vista Previa</h4>
                      <div className="text-center py-8">
                        <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
                          <EyeIcon className="h-8 w-8 text-slate-400" />
                        </div>
                        <p className="text-slate-600">
                          Aquí se mostrará la vista previa del contenido editado.
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
