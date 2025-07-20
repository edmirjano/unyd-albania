// NOTE: These success stories are fictional examples for demonstration purposes.
// In a real implementation, replace with actual testimonials from real Albanian UN Youth Delegates.

export default function SuccessStories() {
  const stories = [
    {
      name: "Elena Marku",
      year: "2023",
      position: "Delegate e Përkohshme",
      quote: "Programi më hapi dyert për të kuptuar thellë sfidat globale dhe rolin e Shqipërisë në arenën ndërkombëtare. Tani punoj si Konsulente e Politikave në Ministrinë e Jashtme.",
      achievement: "Koordinatore Politikash Ndërkombëtare",
      image: "EK"
    },
    {
      name: "Arben Hoxha",
      year: "2022",
      position: "Delegat për Zhvillimin e Qëndrueshëm",
      quote: "Përvojja në OKB më mësoi se sa e rëndësishme është zëri i të rinjve në vendimmarrjen globale. Sot jam pjesë e UN Women dhe vazhdoj të përfaqësoj Shqipërinë.",
      achievement: "Specialist në UN Women",
      image: "AH"
    },
    {
      name: "Ledia Shala",
      year: "2021",
      position: "Delegate për Çështjet e Grave",
      quote: "Delegacioni më dha vetëbesu për të folur në skenat më të mëdha. Përvojën e fituar e përdor çdo ditë në punën time si gazetare ndërkombëtare.",
      achievement: "Gazetare në BBC Albanian Service",
      image: "LS"
    }
  ];

  const mediaLinks = [
    {
      title: "Youth of Albania Speak Out - UN Assembly 2023",
      type: "Video",
      description: "Të rinjtë shqiptarë flasin në Asamblenë e Përgjithshme",
      url: "https://youtube.com/watch?v=S0PTAm5QgSc",
      thumbnail: "📹"
    },
    {
      title: "UN Day: It's Youth Time - Albania",
      type: "Video",
      description: "Aktivitetet e Ditës së OKB-së me të rinjtë shqiptarë",
      url: "https://youtube.com/watch?v=1Iw8AzOhBGs",
      thumbnail: "🎬"
    },
    {
      title: "Albania PM Addresses UN General Debate",
      type: "Video",
      description: "Kryeministri i Shqipërisë në Asamblenë e 79-të të OKB-së",
      url: "https://youtube.com/watch?v=aYXcDlKZKEI",
      thumbnail: "🏛️"
    }
  ];

  return (
    <section id="sukses" className="section-padding bg-white">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
            Historitë e Suksesit
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Delegatët tanë të mëparshëm vazhdojnë të bëjnë ndryshime pozitive në Shqipëri dhe në botë. 
            Shiko se ku janë sot dhe çfarë kanë arritur falë kësaj përvojeje.
          </p>
        </div>

        {/* Success Stories Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {stories.map((story, index) => (
            <div key={index} className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow">
              {/* Profile */}
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                  {story.image}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">{story.name}</h3>
                  <p className="text-blue-600 font-medium">{story.position}</p>
                  <p className="text-gray-500 text-sm">{story.year}</p>
                </div>
              </div>

              {/* Quote */}
              <blockquote className="text-gray-700 italic mb-6 leading-relaxed">
                &ldquo;{story.quote}&rdquo;
              </blockquote>

              {/* Current Achievement */}
              <div className="border-t border-gray-200 pt-4">
                <p className="text-sm text-gray-500 mb-1">Pozicioni aktual:</p>
                <p className="font-semibold text-gray-900">{story.achievement}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Media Section */}
        <div className="bg-gray-50 rounded-2xl p-8 lg:p-12">
          <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-8 text-center">
            Shiko Delegatët Tanë në Aksion
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {mediaLinks.map((media, index) => (
              <a
                key={index}
                href={media.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white rounded-xl p-6 hover:shadow-md transition-all hover:-translate-y-1"
              >
                <div className="text-4xl mb-4 text-center">
                  {media.thumbnail}
                </div>
                <div className="mb-2">
                  <span className="inline-block px-3 py-1 bg-blue-500 text-white text-xs font-semibold rounded-full mb-3">
                    {media.type}
                  </span>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {media.title}
                </h4>
                <p className="text-gray-600 text-sm">
                  {media.description}
                </p>
                <div className="mt-4 flex items-center text-blue-600 text-sm font-medium">
                  Shiko videon 
                  <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Statistics */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-3xl lg:text-4xl font-bold text-blue-600 mb-2">25+</div>
            <div className="text-gray-600">Delegatë të trajnuar</div>
          </div>
          <div>
            <div className="text-3xl lg:text-4xl font-bold text-blue-600 mb-2">8</div>
            <div className="text-gray-600">Vite eksperiencë</div>
          </div>
          <div>
            <div className="text-3xl lg:text-4xl font-bold text-blue-600 mb-2">100%</div>
            <div className="text-gray-600">Sukses në karrierë</div>
          </div>
          <div>
            <div className="text-3xl lg:text-4xl font-bold text-blue-600 mb-2">15+</div>
            <div className="text-gray-600">Organizata partnere</div>
          </div>
        </div>
      </div>
    </section>
  );
} 