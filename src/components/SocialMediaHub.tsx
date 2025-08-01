'use client';

import { useLanguage } from '@/contexts/LanguageContext';

export default function SocialMediaHub() {
  const { t } = useLanguage();

  const socialAccounts = [
    {
      organization: "UNA Albania",
      description: "United Nations Association Albania - Organizata kryesore",
      accounts: [
        {
          platform: "Instagram",
          handle: "@unaalbania",
          url: "https://www.instagram.com/unaalbania/",
          followers: "2.3K",
          icon: (
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.40z"/>
            </svg>
          )
        },
        {
          platform: "Facebook",
          handle: "/UNAAlbania",
          url: "https://facebook.com/UNAAlbania",
          followers: "4.1K",
          icon: (
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
          )
        }
      ]
    },
    {
      organization: "UNYD Albania",
      description: "United Nations Youth Delegates Albania - Delegatët e rinj",
      accounts: [
        {
          platform: "Instagram",
          handle: "@unyd_albania",
          url: "https://www.instagram.com/unyd_albania/",
          followers: "1.2K",
          icon: (
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.40z"/>
            </svg>
          )
        },
        {
          platform: "Facebook",
          handle: "/unydalbania",
          url: "https://facebook.com/unydalbania",
          followers: "800",
          icon: (
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
          )
        }
      ]
    },
    {
      organization: "Blueprint UNAA",
      description: "Blueprint UNAA - Organizatë partnere për zhvillimin e të rinjve",
      accounts: [
        {
          platform: "Instagram",
          handle: "@blueprint_unaa",
          url: "https://www.instagram.com/blueprint_unaa/",
          followers: "950",
          icon: (
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.40z"/>
            </svg>
          )
        }
      ]
    }
  ];

  return (
    <section id="media-social" className="section-padding bg-blue-600 text-white">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold mb-6">
            {t('socialMedia.title')}
          </h2>
          <p className="text-xl text-white text-opacity-90 max-w-3xl mx-auto">
            {t('socialMedia.description')}
          </p>
        </div>

        {/* Social Media Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {socialAccounts.map((org, index) => (
            <div key={index} className="bg-white bg-opacity-10 rounded-2xl p-8 backdrop-blur-sm">
              <h3 className="text-2xl font-bold mb-4">{org.organization}</h3>
              <p className="text-white text-opacity-80 mb-6 text-sm">{org.description}</p>
              
              <div className="space-y-4">
                {org.accounts.map((account, accountIndex) => (
                  <div key={accountIndex} className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="flex items-center justify-center w-10 h-10 bg-white bg-opacity-20 rounded-lg">
                        {account.icon}
                      </div>
                      <div>
                        <div className="font-semibold">{account.platform}</div>
                        <div className="text-white text-opacity-70 text-sm">{account.handle}</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-bold">{account.followers}</div>
                      <div className="text-white text-opacity-70 text-sm">{t('socialMedia.followers')}</div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 space-y-2">
                {org.accounts.map((account, accountIndex) => (
                  <a
                    key={accountIndex}
                    href={account.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full bg-white bg-opacity-20 hover:bg-opacity-30 transition-colors py-2 px-4 rounded-lg text-center font-semibold"
                  >
                    Ndiq në {account.platform}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Community Stats */}
        <div className="bg-white bg-opacity-10 rounded-2xl p-8 backdrop-blur-sm">
          <h3 className="text-2xl font-bold text-center mb-8">Statistikat e Komunitetit</h3>
          <div className="grid md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold mb-2">8.9K+</div>
              <div className="text-white text-opacity-80">{t('socialMedia.totalFollowers')}</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">45+</div>
              <div className="text-white text-opacity-80">{t('socialMedia.posts')}</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">15+</div>
              <div className="text-white text-opacity-80">{t('socialMedia.activeDelegates')}</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">8+</div>
              <div className="text-white text-opacity-80">{t('socialMedia.experience')}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 