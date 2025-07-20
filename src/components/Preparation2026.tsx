export default function Preparation2026() {
  const preparationSteps = [
    {
      number: "01",
      title: "Përmirëso Aftësitë Gjuhësore",
      description: "Përgatitu në anglisht dhe frëngjisht - gjuhët zyrtare të OKB-së",
      actions: [
        "Merr certifikim IELTS ose TOEFL (minimum 7.0/100)",
        "Praktiko diskutime në anglisht mbi çështje ndërkombëtare",
        "Lexo dokumente zyrtare të OKB-së në anglisht"
      ],
      icon: "🗣️"
    },
    {
      number: "02", 
      title: "Studioje Politikën Ndërkombëtare",
      description: "Zhvillo njohuri të thella për çështjet globale dhe rolin e OKB-së",
      actions: [
        "Ndiq çështjet aktuale në Këshillin e Sigurimit",
        "Lexo raportet e Sekretarit të Përgjithshëm",
        "Merr pjesë në simulime Model UN (MUN)"
      ],
      icon: "🌍"
    },
    {
      number: "03",
      title: "Zhvillo Përvojë Praktike",
      description: "Fito përvojë në organizata që punojnë me çështje ndërkombëtare",
      actions: [
        "Vullnetarizo në OJF-të që punojnë me OKB-në",
        "Apliko për praktika në ambasada",
        "Organizon evente mbi çështjet globale"
      ],
      icon: "💼"
    },
    {
      number: "04",
      title: "Ndërto Rrjetin Professional",
      description: "Lidhu me specialistë të çështjeve ndërkombëtare dhe ish-delegatë",
      actions: [
        "Merr pjesë në konferenca ndërkombëtare",
        "Lidhu me ish-delegatët në LinkedIn",
        "Bashkohu me UNA Albania si vullnetar"
      ],
      icon: "🤝"
    }
  ];

  const resources = [
    {
      category: "Dokumente Esenciale",
      items: [
        { name: "Karta e OKB-së", url: "#" },
        { name: "Objektivi i Zhvillimit të Qëndrueshëm", url: "#" },
        { name: "Deklarata Universale e të Drejtave të Njeriut", url: "#" },
        { name: "Agjenda 2030", url: "#" }
      ]
    },
    {
      category: "Burime për Studim",
      items: [
        { name: "UN Chronicle Magazine", url: "#" },
        { name: "International Affairs Journal", url: "#" },
        { name: "Council on Foreign Relations", url: "#" },
        { name: "Chatham House Reports", url: "#" }
      ]
    },
    {
      category: "Mundësi Praktike",
      items: [
        { name: "Model UN Albania", url: "#" },
        { name: "Harvard World MUN", url: "#" },
        { name: "UN Youth Climate Summit", url: "#" },
        { name: "International Youth Day Events", url: "#" }
      ]
    }
  ];

  return (
    <section id="pergatitja" className="section-padding bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
            Përgatitu për 2026
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Fillo përgatitjen që sot për të qenë kandidat ideal për Programin e Delegatëve të Rinj 2026. 
            Ja çfarë duhet të bësh gjatë vitit që vjen.
          </p>
        </div>

        {/* Preparation Timeline */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Plani i Përgatitjes</h3>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {preparationSteps.map((step, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-[#009EDB] rounded-xl flex items-center justify-center text-white font-bold text-lg mb-4">
                      {step.number}
                    </div>
                    <div className="text-3xl">{step.icon}</div>
                  </div>
                  
                  <div className="flex-1">
                    <h4 className="text-xl font-semibold text-gray-900 mb-3">{step.title}</h4>
                    <p className="text-gray-600 mb-4">{step.description}</p>
                    
                    <ul className="space-y-2">
                      {step.actions.map((action, actionIndex) => (
                        <li key={actionIndex} className="flex items-start space-x-2">
                          <div className="w-2 h-2 bg-[#009EDB] rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-700 text-sm">{action}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Resources Section */}
        <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-sm">
          <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-8 text-center">
            Burime për Përgatitje
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {resources.map((resourceGroup, index) => (
              <div key={index}>
                <h4 className="text-xl font-semibold text-[#009EDB] mb-6">{resourceGroup.category}</h4>
                <ul className="space-y-3">
                  {resourceGroup.items.map((item, itemIndex) => (
                    <li key={itemIndex}>
                      <a 
                        href={item.url}
                        className="text-gray-700 hover:text-[#009EDB] transition-colors text-sm flex items-center space-x-2 group"
                      >
                        <span>📄</span>
                        <span className="group-hover:underline">{item.name}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Application Timeline */}
        <div className="mt-16 bg-[#009EDB] rounded-2xl p-8 lg:p-12 text-white">
          <h3 className="text-2xl lg:text-3xl font-bold mb-8 text-center">
            Kalendari i Aplikimit për 2026
          </h3>
          
          <div className="grid md:grid-cols-4 gap-6 text-center">
            <div className="bg-white/10 rounded-lg p-6">
              <div className="text-2xl font-bold mb-2">Janar 2025</div>
              <div className="text-white/90 text-sm">Hapja e aplikimeve</div>
            </div>
            <div className="bg-white/10 rounded-lg p-6">
              <div className="text-2xl font-bold mb-2">Mars 2025</div>
              <div className="text-white/90 text-sm">Afati i fundit për aplikim</div>
            </div>
            <div className="bg-white/10 rounded-lg p-6">
              <div className="text-2xl font-bold mb-2">Maj 2025</div>
              <div className="text-white/90 text-sm">Shpallja e rezultateve</div>
            </div>
            <div className="bg-white/10 rounded-lg p-6">
              <div className="text-2xl font-bold mb-2">Shtator 2026</div>
              <div className="text-white/90 text-sm">Fillimi i mandatit</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Gati për të filluar përgatitjen?
          </h3>
          <p className="text-gray-600 mb-8">
            Regjistrohu për të marrë njoftimet dhe materialet e para për përgatitje.
          </p>
          <button className="btn-primary px-8 py-4 text-lg">
            Fillo Përgatitjen Tani
          </button>
        </div>
      </div>
    </section>
  );
} 