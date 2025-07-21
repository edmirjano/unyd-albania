'use client';

import { useLanguage } from '@/contexts/LanguageContext';

export default function Preparation2026() {
  const { t } = useLanguage();

  return (
    <section id="pergatitja" className="section-padding bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold mb-6 text-gray-900">
            {t('preparation.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            {t('preparation.subtitle')}
          </p>
        </div>

        {/* Preparation Plan */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center mb-12 text-gray-900">
            {t('preparation.plan')}
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold mb-4 text-gray-900 text-center">
                {t('preparation.steps.language.title')}
              </h4>
              <p className="text-gray-600 text-center">
                {t('preparation.steps.language.description')}
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold mb-4 text-gray-900 text-center">
                {t('preparation.steps.politics.title')}
              </h4>
              <p className="text-gray-600 text-center">
                {t('preparation.steps.politics.description')}
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H6a2 2 0 01-2-2V8a2 2 0 012-2V6z" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold mb-4 text-gray-900 text-center">
                {t('preparation.steps.experience.title')}
              </h4>
              <p className="text-gray-600 text-center">
                {t('preparation.steps.experience.description')}
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold mb-4 text-gray-900 text-center">
                {t('preparation.steps.network.title')}
              </h4>
              <p className="text-gray-600 text-center">
                {t('preparation.steps.network.description')}
              </p>
            </div>
          </div>
        </div>

        {/* Resources Grid */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center mb-12 text-gray-900">
            {t('preparation.resources.title')}
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h4 className="text-xl font-semibold mb-6 text-gray-900">
                {t('preparation.resources.documents')}
              </h4>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Kartë UN për delegatët e rinj</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Protokolli diplomatik</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Statute të komisioneve</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Rregullorja e procesit</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h4 className="text-xl font-semibold mb-6 text-gray-900">
                {t('preparation.resources.study')}
              </h4>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Model UN simulime</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Kurse online për diplomatë</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Leksione mbi çështjet globale</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Webinars me ekspertë</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h4 className="text-xl font-semibold mb-6 text-gray-900">
                {t('preparation.resources.practical')}
              </h4>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Praktikë në ONA Albania</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Vullnetarizëm në NGO-të</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Projekte ndërkombëtare</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Debat klube dhe forum</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Timeline Calendar */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center mb-12 text-gray-900">
            {t('preparation.calendar.title')}
          </h3>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mb-4 mx-auto">
                <span className="text-xl font-bold">1</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Janar 2026</h4>
              <p className="text-gray-600 text-sm">{t('preparation.calendar.january')}</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center mb-4 mx-auto">
                <span className="text-xl font-bold">2</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Mars 2026</h4>
              <p className="text-gray-600 text-sm">{t('preparation.calendar.march')}</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="w-16 h-16 bg-purple-600 text-white rounded-full flex items-center justify-center mb-4 mx-auto">
                <span className="text-xl font-bold">3</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Maj 2026</h4>
              <p className="text-gray-600 text-sm">{t('preparation.calendar.may')}</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="w-16 h-16 bg-orange-600 text-white rounded-full flex items-center justify-center mb-4 mx-auto">
                <span className="text-xl font-bold">4</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Shtator 2026</h4>
              <p className="text-gray-600 text-sm">{t('preparation.calendar.september')}</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-blue-600 text-white rounded-3xl p-12">
          <h3 className="text-3xl font-bold mb-4">
            {t('preparation.ready.title')}
          </h3>
          <p className="text-gray-600 mb-8">
            {t('preparation.ready.description')}
          </p>
          <a 
            href="#kontakti" 
            className="btn-primary px-8 py-4 text-lg inline-block transition-all duration-300 hover:scale-105"
          >
            {t('preparation.ready.startButton')}
          </a>
        </div>
      </div>
    </section>
  );
} 