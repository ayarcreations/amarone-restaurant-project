/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, Plus, Minus, Menu, X } from 'lucide-react';
import { content, Language } from './content';
import { ScrollLinkedHero } from './components/ScrollLinkedHero';
import { Logo } from './components/Logo';
import { ReservationForm } from './components/ReservationForm';
import { ReviewsMarquee } from './components/ReviewsMarquee';
import { StoryCarousel } from './components/StoryCarousel';
import { ScrollingFrames } from './components/ScrollingFrames';

export default function App() {
  const [lang, setLang] = useState<Language>('nl');
  const t = content[lang];
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white text-stone-900 font-sans selection:bg-gold-500 selection:text-white">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out bg-white ${isScrolled ? 'shadow-sm py-4 border-b border-stone-200' : 'py-6 border-b border-stone-200'}`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex justify-between items-center">
          <a href="#" className="flex-1 flex justify-start text-stone-900 transition-colors lg:h-[70px] h-[50px] relative z-20 hover:opacity-80">
            <Logo className="h-full w-auto" />
          </a>

          <div className="flex-1 hidden md:flex justify-center">
            <div className="flex space-x-6 items-center text-[11px] uppercase tracking-[0.2em] font-sans font-semibold">
              <a href="#about" className="hover:text-gold-500 transition-colors whitespace-nowrap">{t.nav.about}</a>
              <a href="#team" className="hover:text-gold-500 transition-colors whitespace-nowrap">{t.nav.michelinStar}</a>
              <a href="#menu" className="hover:text-gold-500 transition-colors whitespace-nowrap">{t.nav.menu}</a>
              <a href="#reservations" className="hover:text-gold-500 transition-colors whitespace-nowrap">{t.nav.reservation}</a>
              <a href="#faq" className="hover:text-gold-500 transition-colors whitespace-nowrap">{t.nav.faq}</a>
            </div>
          </div>

          <div className="flex-1 flex justify-end items-center">
            <div className="hidden md:flex items-center space-x-4 text-[11px] uppercase tracking-[0.2em] font-sans font-semibold">
              <button 
                onClick={() => setLang('nl')} 
                className={`transition-colors ${lang === 'nl' ? 'text-gold-500' : 'text-stone-400 hover:text-stone-900'}`}
              >NL</button>
              <span className="text-stone-300">|</span>
              <button 
                onClick={() => setLang('en')} 
                className={`transition-colors ${lang === 'en' ? 'text-gold-500' : 'text-stone-400 hover:text-stone-900'}`}
              >EN</button>
            </div>

            {/* Mobile hamburger button */}
            <button
              className="md:hidden p-2 text-gold-500 transition-colors"
              onClick={() => setMobileMenuOpen(prev => !prev)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile dropdown menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden bg-white border-t border-stone-100"
            >
              <div className="flex flex-col px-6 py-4 space-y-4 text-[11px] uppercase tracking-[0.2em] font-sans font-semibold">
                <a href="#about" onClick={() => setMobileMenuOpen(false)} className="hover:text-gold-500 transition-colors py-2 border-b border-stone-100">{t.nav.about}</a>
                <a href="#team" onClick={() => setMobileMenuOpen(false)} className="hover:text-gold-500 transition-colors py-2 border-b border-stone-100">{t.nav.michelinStar}</a>
                <a href="#menu" onClick={() => setMobileMenuOpen(false)} className="hover:text-gold-500 transition-colors py-2 border-b border-stone-100">{t.nav.menu}</a>
                <a href="#reservations" onClick={() => setMobileMenuOpen(false)} className="hover:text-gold-500 transition-colors py-2 border-b border-stone-100">{t.nav.reservation}</a>
                <a href="#faq" onClick={() => setMobileMenuOpen(false)} className="hover:text-gold-500 transition-colors py-2 border-b border-stone-100">{t.nav.faq}</a>
                <div className="flex items-center space-x-4 pt-2">
                  <button onClick={() => { setLang('nl'); setMobileMenuOpen(false); }} className={`transition-colors ${lang === 'nl' ? 'text-gold-500' : 'text-stone-400'}`}>NL</button>
                  <span className="text-stone-300">|</span>
                  <button onClick={() => { setLang('en'); setMobileMenuOpen(false); }} className={`transition-colors ${lang === 'en' ? 'text-gold-500' : 'text-stone-400'}`}>EN</button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <ScrollLinkedHero lang={lang} />

      {/* Section 2: About Us */}
      <section id="about" className="py-24 md:py-32 px-6 bg-stone-50/50 border-y border-stone-100">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 xl:gap-24 items-center min-h-[400px] md:min-h-[500px]">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="order-2 md:order-1 relative"
          >
            {/* Frame-by-frame scrolling animation */}
            <div className="aspect-[3/4] sm:aspect-[4/3] lg:aspect-[3/2] bg-stone-200 overflow-hidden relative min-h-[250px] sm:min-h-[300px] md:min-h-[350px] lg:min-h-[400px] max-h-[600px]">
              <ScrollingFrames className="w-full h-full" />
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-1 md:order-2 flex flex-col justify-center px-2 md:px-0"
          >
            <span className="text-[11px] uppercase tracking-[0.4em] text-gold-500 mb-6 font-sans font-bold block">
              {t.about.tag}
            </span>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-8 italic text-stone-800">
              {t.about.title}
            </h2>
            <div className="space-y-6 text-sm font-sans font-light leading-relaxed text-stone-600 mb-8">
              <p>{t.about.p1}</p>
              <p>{t.about.p2}</p>
              <p>{t.about.p3}</p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="w-12 h-[1px] bg-gold-500"></div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 3: The Chef & Sommelier */}
      <section id="team" className="py-24 md:py-32 bg-white px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16 lg:gap-24">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex-1 flex flex-col justify-center order-2 md:order-1"
          >
            <span className="text-[11px] uppercase tracking-[0.4em] text-gold-500 mb-6 font-sans font-bold block">
              {t.team.tag}
            </span>
            <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 mb-6">
              <img src="/Michelin-star.png" alt="Michelin Star" className="w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 object-contain flex-shrink-0" />
              <h2 className="font-serif text-xl sm:text-2xl md:text-3xl lg:text-4xl italic text-stone-800 leading-tight">
                {t.team.title}
              </h2>
            </div>
            <div className="space-y-6 text-sm font-sans font-light leading-relaxed text-stone-600 mb-8">
              <p>{t.team.p1}</p>
              <p>{t.team.p2}</p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="w-12 h-[1px] bg-gold-500"></div>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1 relative order-1 md:order-2 w-full"
          >
             <div className="aspect-[4/5] sm:aspect-[3/4] md:aspect-[1/1] lg:aspect-[4/3] bg-stone-100 overflow-hidden relative">
               <img src="/han.jpg" alt="Jan & Yoshiko" loading="lazy" decoding="async" className="w-full h-full object-cover object-[center_25%] sm:object-[center_30%] md:object-[center_20%] grayscale-[30%]" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 4: Menu */}
      <section id="menu" className="py-12 md:py-16 px-6 bg-stone-50 border-y border-stone-100 text-stone-900">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-8">
            <h2 className="text-[11px] uppercase tracking-[0.4em] text-gold-500 font-sans font-bold">{t.menu.title}</h2>
            <span className="text-[10px] uppercase tracking-widest italic font-serif text-stone-500">Signature Dishes</span>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            
            {/* A La Carte Column */}
            <div>
              {t.menu.sections.map((section, idx) => (
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  key={idx} 
                  className="mb-6 bg-white p-6 md:p-8 border border-stone-100 shadow-sm"
                >
                  <h3 className="text-xl font-serif text-stone-800 italic mb-1">{section.name}</h3>
                  <div className="mb-4 pb-3 border-b border-stone-100"></div>
                  
                  <div className="space-y-3">
                    {section.items.map((item, itemIdx) => (
                      <div key={itemIdx} className="flex justify-between items-baseline pb-2 group">
                        <div className="flex flex-col flex-1 pr-4">
                          <span className="text-base font-serif text-stone-800 mb-0.5">{item.name}</span>
                          <span className="text-[10px] font-sans text-stone-500">{item.description}</span>
                        </div>
                        <span className="text-sm font-sans font-medium text-stone-600">{item.price}</span>
                      </div>
                    ))}
                  </div>
                  {section.note && (
                    <p className="mt-3 text-[9px] text-stone-400 uppercase tracking-widest">{section.note}</p>
                  )}
                </motion.div>
              ))}
            </div>

            {/* Set Menus Column */}
            <div>
              {t.menu.setMenus.map((menu, idx) => (
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + (idx * 0.1) }}
                  key={idx} 
                  className="mb-6 bg-white p-6 md:p-8 border border-stone-100 shadow-sm"
                >
                  <h3 className="text-xl font-serif text-stone-800 italic mb-1">{menu.name}</h3>
                  <p className="text-[9px] uppercase tracking-[0.2em] mb-4 text-stone-400 pb-3 border-b border-stone-100">{menu.description}</p>
                  
                  <div className="space-y-3">
                    {menu.items.map((item, itemIdx) => (
                      <div key={itemIdx}>
                        <h4 className="font-serif text-base text-stone-800 mb-0.5">{item.name}</h4>
                        <p className="text-[10px] text-stone-500 font-sans whitespace-pre-line">{item.description}</p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}

              <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="bg-stone-100 p-6 border border-stone-200"
              >
                <h4 className="uppercase tracking-[0.2em] text-[10px] font-bold text-stone-700 mb-3">{t.menu.infoTitle}</h4>
                <p className="text-[11px] text-stone-600 leading-relaxed whitespace-pre-line">{t.menu.infoText}</p>
              </motion.div>
            </div>
            
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="w-full relative bg-stone-900 flex justify-center">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="w-full h-auto object-cover max-h-[80vh]"
        >
          <source src="/videopre.webm" type="video/webm" />
          Your browser does not support the video tag.
        </video>
      </section>

      {/* Section 4: Reservation */}
      <section id="reservations" className="py-24 md:py-32 px-6 bg-stone-50/50 border-y border-stone-100">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-[11px] uppercase tracking-[0.4em] text-gold-500 mb-6 font-sans font-bold">{t.reservation.title}</h2>
            <p className="text-base text-stone-600 mb-8 font-sans">{t.reservation.subtitle}</p>
          </motion.div>
          
          <ReservationForm lang={lang} />
        </div>
      </section>

      {/* Story Video Carousel */}
      <section className="py-16 md:py-24 px-4 sm:px-6 bg-stone-50/50 border-b border-stone-100">
        <div className="max-w-7xl mx-auto">
          <StoryCarousel />
          <div className="flex justify-center mt-8 md:mt-10">
            <a
              href="https://www.instagram.com/restaurant_amarone"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3.5 border border-stone-900 text-stone-900 text-[11px] uppercase tracking-[0.2em] font-sans font-semibold hover:bg-stone-900 hover:text-white transition-all"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.974.974 1.246 2.241 1.308 3.608.058 1.266.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.062 1.366-.334 2.633-1.308 3.608-.974.974-2.241 1.246-3.608 1.308-1.266.058-1.645.069-4.85.069-3.204 0-3.584-.012-4.849-.069-1.366-.062-2.633-.334-3.608-1.308-.974-.974-1.246-2.241-1.308-3.608C2.175 15.747 2.163 15.368 2.163 12s.012-3.584.07-4.849c.062-1.366.334-2.633 1.308-3.608.974-.974 2.241-1.246 3.608-1.308C8.416 2.175 8.796 2.163 12 2.163zm0 1.838c-3.141 0-3.502.011-4.737.067-1.07.049-1.651.227-2.038.378-.51.198-.875.435-1.258.818s-.62.748-.818 1.258c-.151.387-.329.968-.378 2.038C3.013 8.498 3.002 8.859 3.002 12s.011 3.502.067 4.737c.049 1.07.227 1.651.378 2.038.198.51.435.875.818 1.258s.748.62 1.258.818c.387.151.968.329 2.038.378 1.235.056 1.596.067 4.737.067s3.502-.011 4.737-.067c1.07-.049 1.651-.227 2.038-.378.51-.198.875-.435 1.258-.818s.62-.748.818-1.258c.151-.387.329-.968.378-2.038.056-1.235.067-1.596.067-4.737s-.011-3.502-.067-4.737c-.049-1.07-.227-1.651-.378-2.038-.198-.51-.435-.875-.818-1.258s-.748-.62-1.258-.818c-.387-.151-.968-.329-2.038-.378-1.235-.056-1.596-.067-4.737-.067zm0 3.131a4.868 4.868 0 1 1 0 9.736 4.868 4.868 0 0 1 0-9.736zm0 8.03a3.162 3.162 0 1 0 0-6.324 3.162 3.162 0 0 0 0 6.324zm6.207-8.27a1.137 1.137 0 1 1-2.275 0 1.137 1.137 0 0 1 2.275 0z"/>
              </svg>
              {t.gallery.cta}
            </a>
          </div>
        </div>
      </section>

      {/* Section 5: Reviews */}
      <section className="py-24 md:py-32 bg-white border-b border-stone-100 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16 px-6"
          >
            <h2 className="text-[11px] uppercase tracking-[0.4em] text-gold-500 mb-6 font-sans font-bold">{t.reviews.title}</h2>
            <p className="text-base text-stone-600 font-sans">{t.reviews.subtitle}</p>
            <div className="w-12 h-[1px] bg-gold-500 mx-auto mt-6"></div>
          </motion.div>
          <ReviewsMarquee lang={lang} />
        </div>
      </section>

      {/* Section 6: FAQ */}
      <section id="faq" className="py-24 md:py-32 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-[11px] uppercase tracking-[0.4em] text-gold-500 mb-6 font-sans font-bold">{t.faq.title}</h2>
            <div className="w-12 h-[1px] bg-gold-500 mx-auto"></div>
          </div>
          
          <div className="space-y-4">
            {t.faq.items.map((item, idx) => (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                key={idx} 
                className="border-b border-stone-200"
              >
                <button 
                  onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                  className="w-full flex items-center justify-between py-6 text-left focus:outline-none"
                >
                  <span className="font-serif text-lg md:text-xl pr-8 text-stone-800">{item.q}</span>
                  <span className="text-gold-500 flex-shrink-0">
                    {activeFaq === idx ? <Minus size={18} /> : <Plus size={18} />}
                  </span>
                </button>
                <AnimatePresence>
                  {activeFaq === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="pb-6 text-sm text-stone-600 font-light leading-relaxed">{item.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-stone-900 text-white pt-24 pb-12 px-6 border-t border-stone-800 font-sans">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12 lg:gap-16 mb-16">
            <div className="col-span-1 md:col-span-2">
              <div className="mb-6">
                <Logo className="h-12 md:h-16 lg:h-20 w-auto invert brightness-0" />
              </div>
              <p className="text-stone-400 font-sans text-xs max-w-sm leading-relaxed mb-6">
                Fine dining at the Meent in Rotterdam. French cuisine with refined Japanese influences.
              </p>
              <div className="flex items-center gap-3 mb-8">
                <a
                  href="https://www.instagram.com/restaurant_amarone"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="w-9 h-9 rounded-full border border-stone-700 flex items-center justify-center text-stone-300 hover:text-gold-500 hover:border-gold-500 transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.974.974 1.246 2.241 1.308 3.608.058 1.266.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.062 1.366-.334 2.633-1.308 3.608-.974.974-2.241 1.246-3.608 1.308-1.266.058-1.645.069-4.85.069-3.204 0-3.584-.012-4.849-.069-1.366-.062-2.633-.334-3.608-1.308-.974-.974-1.246-2.241-1.308-3.608C2.175 15.747 2.163 15.368 2.163 12s.012-3.584.07-4.849c.062-1.366.334-2.633 1.308-3.608.974-.974 2.241-1.246 3.608-1.308C8.416 2.175 8.796 2.163 12 2.163zm0 1.838c-3.141 0-3.502.011-4.737.067-1.07.049-1.651.227-2.038.378-.51.198-.875.435-1.258.818s-.62.748-.818 1.258c-.151.387-.329.968-.378 2.038C3.013 8.498 3.002 8.859 3.002 12s.011 3.502.067 4.737c.049 1.07.227 1.651.378 2.038.198.51.435.875.818 1.258s.748.62 1.258.818c.387.151.968.329 2.038.378 1.235.056 1.596.067 4.737.067s3.502-.011 4.737-.067c1.07-.049 1.651-.227 2.038-.378.51-.198.875-.435 1.258-.818s.62-.748.818-1.258c.151-.387.329-.968.378-2.038.056-1.235.067-1.596.067-4.737s-.011-3.502-.067-4.737c-.049-1.07-.227-1.651-.378-2.038-.198-.51-.435-.875-.818-1.258s-.748-.62-1.258-.818c-.387-.151-.968-.329-2.038-.378-1.235-.056-1.596-.067-4.737-.067zm0 3.131a4.868 4.868 0 1 1 0 9.736 4.868 4.868 0 0 1 0-9.736zm0 8.03a3.162 3.162 0 1 0 0-6.324 3.162 3.162 0 0 0 0 6.324zm6.207-8.27a1.137 1.137 0 1 1-2.275 0 1.137 1.137 0 0 1 2.275 0z"/>
                  </svg>
                </a>
                <a
                  href="https://wa.me/31107200802"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp"
                  className="w-9 h-9 rounded-full border border-stone-700 flex items-center justify-center text-stone-300 hover:text-gold-500 hover:border-gold-500 transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                </a>
              </div>
            </div>
            
            <div className="flex flex-col">
              <h4 className="text-[10px] uppercase tracking-widest text-stone-500 mb-4">{t.footer.addressTitle}</h4>
              <p className="text-xs text-stone-300 leading-loose flex flex-col space-y-2">
                <span>{t.footer.address.split('\n')[0]}</span>
                <span>{t.footer.address.split('\n')[1]}</span>
                <span className="pt-2 text-gold-500">+31 10 720 0802</span>
              </p>
            </div>
            
            <div className="flex flex-col">
              <h4 className="text-[10px] uppercase tracking-widest text-stone-500 mb-4">Openingstijden</h4>
              <p className="text-xs text-stone-300 leading-loose flex flex-col space-y-2">
                <span>Lunch: 12:00 - 16:15</span>
                <span>Diner: 18:00 - 23:30</span>
              </p>
            </div>
          </div>
          
          <div className="border-t border-stone-800 pt-8 flex flex-col md:flex-row justify-between items-center text-[10px] text-stone-500 uppercase tracking-widest">
            <p className="mb-4 md:mb-0">{t.footer.copy}</p>
            <div className="space-x-8 text-stone-400">
              <a href="#" className="hover:text-gold-500 transition-colors">Privacy</a>
              <a href="#" className="hover:text-gold-500 transition-colors">Terms</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
