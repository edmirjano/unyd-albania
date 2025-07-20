export default function YouthDelegateSpeeches() {
  const speechCategories = [
    {
      title: "Fjalime të Delegatëve Shqiptarë",
      description: "Fjalime dhe ndërhyrje të delegatëve të rinj shqiptarë në OKB",
      speeches: [
        {
          title: "Asambleja e 75-të - Delegatët 2020",
          speaker: "Fiona Dinollari dhe Henri Fero",
          date: "2020",
          committee: "Third Committee",
          description: "Përfaqësimi i Shqipërisë në çështjet e të drejtave të njeriut dhe zhvillimit të qëndrueshëm",
          type: "Fjalim Zyrtar",
          status: "Kontaktoni UNA Albania për regjistrim",
          url: "https://unaalbania.org",
          topics: ["Të Drejtat e Njeriut", "Zhvillimi i Qëndrueshëm", "Rinia"]
        },
        {
          title: "Asambleja e 74-të - Delegatët 2019", 
          speaker: "Ilda Methasani dhe Stiven Shala",
          date: "2019",
          committee: "High-Level Week & Third Committee",
          description: "Pjesëmarrje në Javën e Nivelit të Lartë dhe Komitetin e Tretë",
          type: "Fjalim Zyrtar",
          status: "Kontaktoni UNA Albania për regjistrim",
          url: "https://unaalbania.org",
          topics: ["Çështje Sociale", "Ekonomike", "Të Drejtat e Njeriut"]
        },
        {
          title: "Fjalimi i Delegatëve 2024 - Asambleja e 79-të",
          speaker: "Delegatët Shqiptarë 2024",
          date: "Tetor 2024",
          committee: "Third Committee",
          description: "Fjalimi zyrtar i delegatëve të rinj shqiptarë në Asamblenë e 79-të të OKB-së",
          type: "Video Zyrtar",
          status: "Aktiv",
          url: "https://www.facebook.com/UNAssociationAlbania/videos/fjalimi-i-delegat%C3%ABve-rinor%C3%AB-t%C3%AB-shqip%C3%ABris%C3%AB-n%C3%AB-okb-tetor-2024/507639745369235/",
          topics: ["Të Drejtat e Njeriut", "Zhvillimi i Qëndrueshëm", "Rinia"]
        }
      ]
    },
    {
      title: "Resurse dhe Video Arkiv",
      description: "Linqe dhe burime për fjalime dhe prezantime të delegatëve",
      speeches: [
        {
          title: "UN Youth Delegate Programme Overview",
          speaker: "UN Department of Economic and Social Affairs",
          date: "2024",
          committee: "UN DESA",
          description: "Prezantim i përgjithshëm i programit të delegatëve të rinj të OKB-së",
          type: "Video",
          status: "Aktiv",
          url: "https://www.un.org/development/desa/youth/what-we-do/youth-delegate-programme.html",
          topics: ["Programi", "Udhëzime", "Aplikim"]
        },
        {
          title: "General Assembly Youth Statements Archive",
          speaker: "Various Countries",
          date: "2019-2024",
          committee: "General Assembly",
          description: "Arkivi i fjalimeve të delegatëve të rinj nga vende të ndryshme",
          type: "Arkiv",
          status: "Aktiv",
          url: "https://www.un.org/development/desa/youth/",
          topics: ["Fjalime Ndërkombëtare", "Krahasim", "Praktikat e Mira"]
        },
        {
          title: "Model UN Albania - Training Sessions",
          speaker: "UNA Albania",
          date: "2020-2024",
          committee: "UNA Albania",
          description: "Sesione trajnimi për Model UN dhe përgatitje për delegatët e rinj",
          type: "Trajnim",
          status: "Kontaktoni UNA Albania",
          url: "https://unaalbania.org",
          topics: ["Trajnim", "Model UN", "Përgatitje"]
        }
      ]
    },
    {
      title: "Fjalime Inspiruese Ndërkombëtare",
      description: "Shembuj të fjalimeve më të rëndësishme të delegatëve të rinj",
      speeches: [
        {
          title: "Climate Action by Youth Delegates",
          speaker: "Nordic Youth Delegates",
          date: "2023",
          committee: "Second Committee",
          description: "Fjalime inspiruese për veprimin klimatik nga delegatët nordikë",
          type: "Video",
          status: "Aktiv",
          url: "https://www.un.org/development/desa/youth/",
          topics: ["Klima", "Mjedis", "Aktivizëm i Rinisë"]
        },
        {
          title: "Youth for Peace and Security",
          speaker: "European Youth Delegates",
          date: "2022",
          committee: "First Committee",
          description: "Ndërhyrje për paqen dhe sigurinë nga delegatët europianë",
          type: "Fjalim",
          status: "Aktiv", 
          url: "https://www.un.org/development/desa/youth/",
          topics: ["Paqja", "Siguria", "Bashkëpunimi"]
        },
        {
          title: "Digital Rights and Youth",
          speaker: "Tech-Savvy Delegates",
          date: "2023",
          committee: "Third Committee",
          description: "Diskutime për të drejtat dixhitale dhe teknologjinë",
          type: "Panel",
          status: "Aktiv",
          url: "https://www.un.org/development/desa/youth/",
          topics: ["Teknologji", "Të Drejta Dixhitale", "Inovacion"]
        }
      ]
    }
  ];

  const getStatusColor = (status: string) => {
    if (status.includes("Aktiv")) return "bg-green-100 text-green-800";
    if (status.includes("pritje")) return "bg-yellow-100 text-yellow-800";
    return "bg-blue-100 text-blue-800";
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "Video":
        return (
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"/>
          </svg>
        );
      case "Fjalim":
      case "Fjalim Zyrtar":
        return (
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"/>
          </svg>
        );
      case "Arkiv":
        return (
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path d="M4 3a2 2 0 100 4h12a2 2 0 100-4H4z"/>
            <path fillRule="evenodd" d="M3 8h14v7a2 2 0 01-2 2H5a2 2 0 01-2-2V8zm5 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z" clipRule="evenodd"/>
          </svg>
        );
      default:
        return (
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"/>
          </svg>
        );
    }
  };

  return (
    <section id="fjalime" className="py-20 bg-white">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-indigo-500 text-white text-sm font-semibold rounded-full mb-4">
            Fjalime dhe Video
          </span>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Fjalime të Delegatëve të Rinj të OKB-së
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Shikoni fjalime dhe prezantime inspiruese të delegatëve shqiptarë dhe ndërkombëtarë në OKB përgjatë viteve
          </p>
        </div>

       
        {/* Speech Categories */}
        <div className="space-y-16">
          {speechCategories.map((category, categoryIndex) => (
            <div key={categoryIndex}>
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {category.title}
                </h3>
                <p className="text-gray-600 max-w-2xl">
                  {category.description}
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.speeches.map((speech, speechIndex) => (
                  <div key={speechIndex} className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden">
                    <div className="p-6">
                      {/* Header */}
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center space-x-3">
                          <div className="text-indigo-600">
                            {getTypeIcon(speech.type)}
                          </div>
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(speech.status)}`}>
                            {speech.type}
                          </span>
                        </div>
                        <span className="text-xs text-gray-500 font-medium">
                          {speech.date}
                        </span>
                      </div>

                      {/* Content */}
                      <h4 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
                        {speech.title}
                      </h4>
                      
                      <div className="mb-3">
                        <p className="text-sm text-indigo-600 font-medium mb-1">
                          {speech.speaker}
                        </p>
                        <p className="text-xs text-gray-500">
                          {speech.committee}
                        </p>
                      </div>

                      <p className="text-sm text-gray-600 mb-4 line-clamp-3">
                        {speech.description}
                      </p>

                      {/* Topics */}
                      <div className="flex flex-wrap gap-1 mb-4">
                        {speech.topics.slice(0, 3).map((topic, topicIndex) => (
                          <span key={topicIndex} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-md">
                            {topic}
                          </span>
                        ))}
                        {speech.topics.length > 3 && (
                          <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-md">
                            +{speech.topics.length - 3} më shumë
                          </span>
                        )}
                      </div>

                      {/* Status and Action */}
                      <div className="flex items-center justify-between">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(speech.status)}`}>
                          {speech.status}
                        </span>
                        <a 
                          href={speech.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-sm font-medium text-indigo-600 hover:text-indigo-800 transition-colors"
                        >
                          {speech.url.includes('facebook.com') ? 'Shiko në Facebook' : speech.url.includes('unaalbania.org') ? 'Kontaktoni' : 'Shikoni'}
                          <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-indigo-600 to-purple-700 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4 text-gray-300">
              Dëshironi të Kontribuoni?
            </h3>
            <p className="text-indigo-100 mb-6 max-w-2xl mx-auto">
              Nëse keni regjistrimet e fjalimeve të delegatëve shqiptarë ose materiale tjera që mund të ndahen, na kontaktoni për t&apos;i shtuar në arkivin tonë.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://unaalbania.org" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-white text-indigo-600 font-semibold rounded-lg hover:bg-indigo-50 transition-colors duration-200"
              >
                Kontaktoni UNA Albania
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                </svg>
              </a>
              <a 
                href="#preparation2026" 
                className="inline-flex items-center px-6 py-3 bg-indigo-500 text-white font-semibold rounded-lg hover:bg-indigo-400 transition-colors duration-200"
              >
                Mësoni Më Shumë për Aplikimin
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 