// NOTE: This component includes real historical data and placeholder for 2024 delegates.
// Update the 2024 section with actual delegate information when available.

export default function MeetLastYearDelegates() {
  // Historical Albanian UN Youth Delegates (Real Data)
  const historicalDelegates = [
    {
      name: "Fiona Dinollari", 
      year: "2020",
      session: "75th General Assembly",
      position: "Delegatja e Rinisë së Shqipërisë",
      focus: "Zhvillimi i Qëndrueshëm dhe Të Drejtat e Njeriut",
      committee: "Third Committee",
      image: "FD",
      realDelegate: true
    },
    {
      name: "Henri Fero",
      year: "2020", 
      session: "75th General Assembly",
      position: "Delegati i Rinisë së Shqipërisë",
      focus: "Çështje Sociale dhe Humanitare",
      committee: "Third Committee",
      image: "HF",
      realDelegate: true
    },
    {
      name: "Ilda Methasani",
      year: "2019",
      session: "74th General Assembly", 
      position: "Delegatja e Rinisë së Shqipërisë",
      focus: "Të Drejtat e Njeriut dhe Zhvillimi",
      committee: "High-Level Week & Third Committee",
      image: "IM",
      realDelegate: true
    },
    {
      name: "Stiven Shala",
      year: "2019",
      session: "74th General Assembly",
      position: "Delegati i Rinisë së Shqipërisë", 
      focus: "Çështje Sociale dhe Ekonomike",
      committee: "High-Level Week & Third Committee",
      image: "SS",
      realDelegate: true
    }
  ];

  // TODO: Replace with actual 2024 delegates when information becomes available
  const delegates2024 = [
    {
      name: "Delegatët Shqiptarë 2024",
      year: "2024",
      session: "79th General Assembly",
      position: "Delegatë të Rinisë së Shqipërisë",
      focus: "Shiko fjalimin zyrtar në Facebook",
      committee: "Third Committee",
      image: "D24",
      realDelegate: true,
      videoUrl: "https://www.facebook.com/UNAssociationAlbania/videos/fjalimi-i-delegat%C3%ABve-rinor%C3%AB-t%C3%AB-shqip%C3%ABris%C3%AB-n%C3%AB-okb-tetor-2024/507639745369235/",
      placeholder: false
    }
  ];

  return (
    <section id="delegatet-2024" className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-blue-500 text-white text-sm font-semibold rounded-full mb-4">
            Delegatët Tanë
          </span>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Takoni Delegatët e Rinisë së Shqipërisë
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Përfaqësuesit tanë në Organizatën e Kombeve të Bashkuara që kanë përfaqësuar Shqipërinë në arenën ndërkombëtare
          </p>
        </div>

        {/* 2024 Section - Real Info Available */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Delegatët 2024 - Asambleja e 79-të e OKB-së
          </h3>
          
          <div className="grid md:grid-cols-1 gap-8 mb-12 max-w-2xl mx-auto">
            {delegates2024.map((delegate, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="p-8">
                  <div className="flex items-center space-x-6 mb-6">
                    <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                      {delegate.image}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">{delegate.name}</h3>
                      <p className="text-blue-600 font-medium">{delegate.position}</p>
                      <p className="text-gray-500 text-sm">{delegate.session}</p>
                    </div>
                  </div>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center space-x-3">
                      <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                      <span className="text-gray-600"><strong>Fokusi:</strong> {delegate.focus}</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                      <span className="text-gray-600"><strong>Komiteti:</strong> {delegate.committee}</span>
                    </div>
                  </div>

                  {delegate.videoUrl && (
                    <div className="bg-blue-50 rounded-lg p-4 mb-4">
                      <h4 className="font-semibold text-gray-900 mb-2">📹 Fjalimi Zyrtar</h4>
                      <p className="text-sm text-gray-600 mb-3">Shiko fjalimin e delegatëve shqiptarë në Asamblenë e 79-të të OKB-së</p>
                      <a 
                        href={delegate.videoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-4 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
                      >
                        Shiko në Facebook
                        <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    </div>
                  )}

                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Historical Delegates Section - Real Data */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Delegatët e Viteve të Mëparshme
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {historicalDelegates.map((delegate, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="p-6">
                  <div className="text-center mb-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm mx-auto mb-3">
                      {delegate.image}
                    </div>
                    <h4 className="text-lg font-bold text-gray-900">{delegate.name}</h4>
                    <p className="text-blue-600 font-medium text-sm">{delegate.year}</p>
                    <p className="text-gray-500 text-xs">{delegate.session}</p>
                  </div>
                  
                  <div className="space-y-2 text-sm">
                    <div className="text-gray-600">
                      <strong>Fokusi:</strong> {delegate.focus}
                    </div>
                    <div className="text-gray-600">
                      <strong>Komiteti:</strong> {delegate.committee}
                    </div>
                  </div>

                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Statistics */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
          <h3 className="text-2xl font-bold text-center mb-8 text-gray-900">
            Shifrat e Delegacionit Shqiptar
          </h3>
          <div className="grid md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">8+</div>
              <div className="text-gray-600">Delegatë Gjithsej</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">6</div>
              <div className="text-gray-600">Vite Pjesëmarrje</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">100%</div>
              <div className="text-gray-600">Pjesëmarrje Aktive</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">2026</div>
              <div className="text-gray-600">Aplikimi i Ardhshëm</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4 text-gray-300">
              Dëshironi të Bëheni Delegat i Ardhshëm?
            </h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Aplikimi për delegatët e rinisë për vitin 2026 do të hapet së shpejti. Përgatituni për një përvojë të paharrueshme në OKB!
            </p>
            <a 
              href="#preparation2026" 
              className="inline-flex items-center px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors duration-200"
            >
              Mësoni Më Shumë
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
} 