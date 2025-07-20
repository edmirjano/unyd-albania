export default function ProgramOverview() {
  const benefits = [
    {
      icon: (
        <svg className="w-8 h-8 text-[#009EDB]" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Zhvillim Profesional",
      description: "Aftësi diplomatike, komunikim publik, dhe rrjetëzim ndërkombëtar"
    },
    {
      icon: (
        <svg className="w-8 h-8 text-[#009EDB]" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M12 1.586l-4 4v12.828l4-4V1.586zM3.707 3.293A1 1 0 002 4v10a1 1 0 00.293.707L6 18.414V5.586L3.707 3.293zM17.707 5.293L14 1.586v12.828l2.293 2.293A1 1 0 0018 16V6a1 1 0 00-.293-.707z" clipRule="evenodd" />
        </svg>
      ),
      title: "Përvojë Globale",
      description: "Pjesëmarrje në Asamblenë e Përgjithshme të OKB-së dhe komitete të specializuara"
    },
    {
      icon: (
        <svg className="w-8 h-8 text-[#009EDB]" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd" />
        </svg>
      ),
      title: "Rrjet Alumni",
      description: "Lidhje me delegatë të mëparshëm dhe profesionistë të çështjeve ndërkombëtare"
    },
    {
      icon: (
        <svg className="w-8 h-8 text-[#009EDB]" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" clipRule="evenodd" />
        </svg>
      ),
      title: "Trajnim i Plotë",
      description: "Përgatitje intensive në protokoll diplomatik dhe çështje globale"
    }
  ];

  return (
    <section id="programi" className="section-padding bg-gray-50">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
            Çfarë është Programi i Delegatëve të Rinj?
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Programi i Delegatëve të Rinj të Kombeve të Bashkuara është një iniciativë e{' '}
            <a href="https://unaalbania.org" className="text-[#009EDB] hover:underline" target="_blank" rel="noopener noreferrer">
              UNA Albania
            </a>
            {' '}që mundëson për të rinjtë shqiptarë të përfaqësojnë vendin tonë në diskutimet globale dhe të zhvillojnë aftësitë e tyre diplomatike.
          </p>
        </div>

        {/* Program Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="mb-4">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {benefit.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        {/* Mission Alignment */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6">
              Në përputhje me misionin e UNA Albania
            </h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-[#009EDB] rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-600">
                  <strong>Informimi:</strong> Rritja e vetëdijes së të rinjve për çështjet globale dhe rolin e OKB-së
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-[#009EDB] rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-600">
                  <strong>Frymëzimi:</strong> Motivimi i të rinjve për të kontribuar në zgjidhjen e problemeve ndërkombëtare
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-[#009EDB] rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-600">
                  <strong>Mobilizimi:</strong> Përfshirja aktive e të rinjve në proceset diplomatike dhe politikëbërjen
                </p>
              </div>
            </div>
          </div>

          {/* Timeline */}
          <div className="bg-white rounded-xl p-8 shadow-sm">
            <h4 className="text-xl font-semibold text-gray-900 mb-6">Kronologjia e Programit</h4>
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-8 h-8 bg-[#009EDB] text-white rounded-full flex items-center justify-center text-sm font-semibold">1</div>
                <div>
                  <h5 className="font-semibold">Aplikimi dhe Seleksioni</h5>
                  <p className="text-sm text-gray-600">Janar - Mars 2026</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-8 h-8 bg-[#009EDB] text-white rounded-full flex items-center justify-center text-sm font-semibold">2</div>
                <div>
                  <h5 className="font-semibold">Trajnimi dhe Përgatitja</h5>
                  <p className="text-sm text-gray-600">Prill - Gusht 2026</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-8 h-8 bg-[#009EDB] text-white rounded-full flex items-center justify-center text-sm font-semibold">3</div>
                <div>
                  <h5 className="font-semibold">Pjesëmarrja në OKB</h5>
                  <p className="text-sm text-gray-600">Shtator - Dhjetor 2026</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 