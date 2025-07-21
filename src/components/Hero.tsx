'use client';

import { useLanguage } from '@/contexts/LanguageContext';

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section className="bg-gradient-to-br from-blue-500 to-blue-600 text-white pt-4">
      <div className="container mx-auto section-padding pt-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="fade-in">
            <div className="mb-6">
              <div className="inline-flex items-center px-4 py-2 bg-white bg-opacity-20 rounded-full text-sm mb-4">
                <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>
                {t('hero.closedNotice')}
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-6">
                {t('hero.title')}{' '}
                <span className="text-white text-opacity-90 block lg:inline">
                  {t('hero.subtitle')}
                </span>
              </h1>
              <p className="text-xl lg:text-2xl text-white text-opacity-90 mb-8">
                {t('hero.description')}
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="text-2xl lg:text-3xl font-bold">2016</div>
                <div className="text-sm text-white text-opacity-80">Since</div>
              </div>
              <div className="text-center">
                <div className="text-2xl lg:text-3xl font-bold">15+</div>
                <div className="text-sm text-white text-opacity-80">{t('hero.stats.delegates')}</div>
              </div>
              <div className="text-center">
                <div className="text-2xl lg:text-3xl font-bold">Global</div>
                <div className="text-sm text-white text-opacity-80">Representation</div>
              </div>
            </div>

            {/* Call to Actions */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#pergatitja" 
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-center inline-block"
              >
                {t('hero.prepareButton')}
              </a>
              <a 
                href="#programi" 
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors text-center inline-block"
              >
                {t('hero.learnMoreButton')}
              </a>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="relative fade-in">
            <div className="relative z-10">
              {/* UN General Assembly Hall Image */}
              <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-2xl p-4 border border-white border-opacity-30">
                <div className="aspect-[4/3] rounded-xl overflow-hidden mb-6">
                  <img 
                    src="/un-general-assembly.jpg"
                    alt="UN General Assembly Hall"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  {t('callToAction.title', 'Future Delegates')}
                </h3>
                <p className="text-white text-opacity-80 text-sm">
                  {t('callToAction.description', 'Join the community of young Albanian delegates representing our country at the United Nations.')}
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