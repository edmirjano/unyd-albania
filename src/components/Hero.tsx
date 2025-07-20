export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-blue-500 to-blue-600 text-white py-4">
      <div className="container mx-auto section-padding pt-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="fade-in">
            <div className="mb-6">
              <div className="inline-flex items-center px-4 py-2 bg-white bg-opacity-20 rounded-full text-sm mb-4">
                <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>
                Aplikimet për 2025 janë mbyllur
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-6">
                Programi i Delegatëve të Rinj të{' '}
                <span className="text-white text-opacity-90">Kombeve të Bashkuara</span>
              </h1>
              <p className="text-xl lg:text-2xl text-white text-opacity-90 mb-8">
                Përgatitu për mundësinë më të madhe diplomatike për të rinjtë shqiptarë
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="text-2xl lg:text-3xl font-bold">2016</div>
                <div className="text-sm text-white text-opacity-80">Që nga viti</div>
              </div>
              <div className="text-center">
                <div className="text-2xl lg:text-3xl font-bold">15+</div>
                <div className="text-sm text-white text-opacity-80">Delegatë aktivë</div>
              </div>
              <div className="text-center">
                <div className="text-2xl lg:text-3xl font-bold">Global</div>
                <div className="text-sm text-white text-opacity-80">Përfaqësim</div>
              </div>
            </div>

            {/* Call to Actions */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Regjistrohu për Njoftimet 2026
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                Shiko Arkivin e Aplikimeve
              </button>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="relative fade-in">
            <div className="relative z-10">
              {/* Placeholder for hero image */}
              <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-2xl p-8 border border-white border-opacity-30">
                <div className="aspect-square bg-white bg-opacity-30 rounded-xl mb-6 flex items-center justify-center">
                  <svg className="w-24 h-24 text-white text-opacity-60" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Delegatët e Ardhshëm</h3>
                <p className="text-white text-opacity-80 text-sm">
                  Bëhu pjesë e komunitetit të delegatëve të rinj shqiptarë që përfaqësojnë vendin tonë në Kombet e Bashkuara.
                </p>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-white bg-opacity-10 rounded-full"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-white bg-opacity-10 rounded-full"></div>
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="relative">
        <svg className="w-full h-12" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,120V73.71c47.79-22.2,103.59-32.17,158-28,70.36,5.37,136.33,33.31,206.8,37.5C438.64,87.57,512.34,66.33,583,47.95c69.27-18,138.3-24.88,209.4-13.08,36.15,6,69.85,17.84,104.45,29.34C989.49,95,1113,134.29,1200,67.53V120Z" opacity=".25" fill="#FFFFFF"></path>
          <path d="M0,120V104.19C13,83.08,27.64,63.14,47.69,47.95,99.41,8.73,165,9,224.58,28.42c31.15,10.15,60.09,26.07,89.67,39.8,40.92,19,84.73,46,130.83,49.67,36.26,2.85,70.9-9.42,98.6-31.56,31.77-25.39,62.32-62,103.63-73,40.44-10.79,81.35,6.69,119.13,24.28s75.16,39,116.92,43.05c59.73,5.85,113.28-22.88,168.9-38.84,30.2-8.66,59-6.17,87.09,7.5,22.43,10.89,48,26.93,60.65,49.24V120Z" opacity=".5" fill="#FFFFFF"></path>
          <path d="M0,120V114.37C149.93,61,314.09,48.68,475.83,77.43c43,7.64,84.23,20.12,127.61,26.46,59,8.63,112.48-12.24,165.56-35.4C827.93,42.78,886,24.76,951.2,30c86.53,7,172.46,45.71,248.8,84.81V120Z" fill="#FFFFFF"></path>
        </svg>
      </div>
    </section>
  );
} 