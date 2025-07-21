'use client';

import { useLanguage } from '@/contexts/LanguageContext';

export default function CurrentCandidates() {
  const { t } = useLanguage();

  const candidates = [
    {
      id: 1,
      name: "Anja Hasani",
      age: 24,
      university: "Universiteti i Tiranës",
      field: "Marrëdhënie Ndërkombëtare",
      interests: ["Human Rights", "Climate Action", "Gender Equality"],
      bio: "Aktiviste për të drejtat e njeriut me fokus në barazinë gjinore dhe ndryshimet klimatike.",
      image: "/placeholder-candidate-1.jpg"
    },
    {
      id: 2,
      name: "Markel Dervishi",
      age: 23,
      university: "Universiteti Europian i Tiranës",
      field: "Shkenca Politike",
      interests: ["Sustainable Development", "Peace Building", "Youth Empowerment"],
      bio: "I apasionuar pas zhvillimit të qëndrueshëm dhe forcimit të të rinjve në vendimmarrje.",
      image: "/placeholder-candidate-2.jpg"
    },
    {
      id: 3,
      name: "Elsa Brahimi",
      age: 25,
      university: "Universiteti i Shkodrës",
      field: "E Drejta Ndërkombëtare",
      interests: ["International Law", "Refugee Rights", "Social Justice"],
      bio: "Avokatese e të drejtave të refugjatëve dhe drejtësisë sociale në nivel ndërkombëtar.",
      image: "/placeholder-candidate-3.jpg"
    },
    {
      id: 4,
      name: "Klevi Kola",
      age: 22,
      university: "Universiteti Bujqësor i Tiranës",
      field: "Zhvillim Rural",
      interests: ["Food Security", "Rural Development", "Environmental Protection"],
      bio: "Ekspert i ri në siguri ushqimore dhe zhvillim të qëndrueshëm rural.",
      image: "/placeholder-candidate-4.jpg"
    }
  ];

  return (
    <section id="kandidatet-2025" className="section-padding bg-gray-50">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-medium mb-6">
            <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
            {t('candidates.badge', 'Kandidatët 2025')}
          </div>
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
            {t('candidates.title', 'Njihuni me Kandidatët e Këtij Viti')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('candidates.description', 'Të rinjtë shqiptarë që konkurrojnë për të përfaqësuar Shqipërinë në Asamblenë e Përgjithshme të OKB-së për vitin 2025.')}
          </p>
        </div>

        {/* Candidates Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {candidates.map((candidate) => (
            <div key={candidate.id} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              {/* Candidate Photo */}
              <div className="aspect-square bg-gradient-to-br from-blue-400 to-blue-600 relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-24 h-24 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                    <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/50 to-transparent p-4">
                  <div className="text-white text-sm opacity-75">{candidate.age} vjeç</div>
                </div>
              </div>

              {/* Candidate Info */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{candidate.name}</h3>
                <div className="text-sm text-gray-600 mb-3">
                  <div className="mb-1">{candidate.university}</div>
                  <div className="font-medium text-blue-600">{candidate.field}</div>
                </div>
                
                <p className="text-gray-700 text-sm mb-4 leading-relaxed">
                  {candidate.bio}
                </p>

                {/* Key Interests */}
                <div className="mb-4">
                  <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">
                    {t('candidates.interests', 'Interesa Kryesore')}
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {candidate.interests.map((interest, index) => (
                      <span
                        key={index}
                        className="inline-block px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-md"
                      >
                        {interest}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center bg-white rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            {t('candidates.cta.title', 'Dëshiron të Jesh Pjesë e Programit?')}
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            {t('candidates.cta.description', 'Aplikimi për vitin 2026 do të hapet së shpejti. Regjistrohuni për të marrë njoftimet e para.')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#pergatitja" 
              className="btn-primary px-8 py-3 inline-block"
            >
              {t('candidates.cta.prepare', 'Përgatitu për Aplikim')}
            </a>
            <a 
              href="#kontakti" 
              className="border-2 border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-semibold hover:border-blue-600 hover:text-blue-600 transition-colors inline-block"
            >
              {t('candidates.cta.contact', 'Kontaktoni UNA Albania')}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
} 