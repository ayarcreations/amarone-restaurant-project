import React from 'react';
import { Language } from '../content';

interface Review {
  name: string;
  source: string;
  rating: number;
  body: { nl: string; en: string };
  initials: string;
}

const reviews: Review[] = [
  {
    name: 'Marieke V.',
    source: 'Google',
    rating: 5,
    initials: 'MV',
    body: {
      nl: 'Een onvergetelijke avond. De Frans-Japanse combinatie is verfijnd en Yoshiko adviseert geweldig over de wijnen. Absoluut die Michelinster waard.',
      en: 'An unforgettable evening. The French-Japanese combination is refined and Yoshiko gives wonderful wine pairing advice. Absolutely worth the Michelin star.',
    },
  },
  {
    name: 'Pieter D.',
    source: 'Google',
    rating: 5,
    initials: 'PD',
    body: {
      nl: 'Chef Jan van Dobben is een meester. Elk gerecht is een kunstwerk en de smaakharmonie is uniek. De service is warm en attent.',
      en: 'Chef Jan van Dobben is a master. Every dish is a work of art and the flavor harmony is unique. The service is warm and attentive.',
    },
  },
  {
    name: 'Sophie L.',
    source: 'TripAdvisor',
    rating: 5,
    initials: 'SL',
    body: {
      nl: 'Top restaurant in Rotterdam. Prachtige inrichting, verrassende menu en uitstekende wijnen. Ideaal voor een speciale gelegenheid.',
      en: 'Top restaurant in Rotterdam. Beautiful interior, surprising menu and excellent wines. Ideal for a special occasion.',
    },
  },
  {
    name: 'Hans B.',
    source: 'Google',
    rating: 5,
    initials: 'HB',
    body: {
      nl: 'Voor onze trouwdag gereserveerd en het was perfect. De wagyu en de langoustine waren hemels. Wij komen zeker terug.',
      en: 'Booked for our anniversary and it was perfect. The wagyu and langoustine were heavenly. We will definitely return.',
    },
  },
  {
    name: 'Emma K.',
    source: 'Google',
    rating: 5,
    initials: 'EK',
    body: {
      nl: 'Eerlijk, verfijnd en creatief koken op het allerhoogste niveau. Ronde tafels en fauteuils maken het extra comfortabel.',
      en: 'Honest, refined and creative cooking at the highest level. Round tables and armchairs make it extra comfortable.',
    },
  },
  {
    name: 'Thomas R.',
    source: 'TripAdvisor',
    rating: 5,
    initials: 'TR',
    body: {
      nl: 'Yoshiko is een van de beste sommeliers van Nederland. Haar wijn-spijscombinaties tillen het diner naar een hoger niveau.',
      en: 'Yoshiko is one of the best sommeliers in the Netherlands. Her wine pairings take the dinner to a higher level.',
    },
  },
  {
    name: 'Linda H.',
    source: 'Google',
    rating: 5,
    initials: 'LH',
    body: {
      nl: 'Een gastronomische reis. De Japanse invloeden in de Franse keuken zijn subtiel en perfect uitgebalanceerd. Aanrader!',
      en: 'A gastronomic journey. The Japanese influences in French cuisine are subtle and perfectly balanced. Highly recommended!',
    },
  },
  {
    name: 'Mark V.',
    source: 'Google',
    rating: 5,
    initials: 'MV',
    body: {
      nl: 'Voor een zakelijk diner. Rustige sfeer, attent personeel en gerechten die indruk maken. Wat een ervaring.',
      en: 'For a business dinner. Quiet atmosphere, attentive staff and dishes that impress. What an experience.',
    },
  },
];

const ReviewCard = ({ review, lang }: { review: Review; lang: Language }) => (
  <figure className="relative h-full w-56 sm:w-64 md:w-72 shrink-0 overflow-hidden rounded-lg border border-stone-200 bg-white p-3 sm:p-4 md:p-5 mx-2 sm:mx-3 shadow-sm hover:shadow-md transition-shadow">
    <div className="flex flex-row items-center gap-2 sm:gap-3">
      <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gold-500 text-white flex items-center justify-center font-sans font-semibold text-xs sm:text-sm">
        {review.initials}
      </div>
      <div className="flex flex-col">
        <figcaption className="text-xs sm:text-sm font-sans font-semibold text-stone-800">
          {review.name}
        </figcaption>
        <p className="text-[9px] sm:text-[10px] font-sans uppercase tracking-widest text-stone-500">
          {review.source}
        </p>
      </div>
    </div>
    <div className="flex gap-0.5 mt-2 sm:mt-3 text-gold-500 text-xs sm:text-sm">
      {Array.from({ length: review.rating }).map((_, i) => (
        <span key={i}>★</span>
      ))}
    </div>
    <blockquote className="mt-2 sm:mt-3 text-xs sm:text-sm font-sans leading-relaxed text-stone-700 italic">
      "{review.body[lang]}"
    </blockquote>
  </figure>
);

interface ReviewsMarqueeProps {
  lang: Language;
}

export function ReviewsMarquee({ lang }: ReviewsMarqueeProps) {
  const firstRow = reviews.slice(0, reviews.length / 2);
  const secondRow = reviews.slice(reviews.length / 2);

  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden gap-4">
      {/* First row - left to right */}
      <div className="group flex overflow-hidden w-full">
        <div className="flex animate-marquee group-hover:[animation-play-state:paused]">
          {[...firstRow, ...firstRow].map((review, i) => (
            <ReviewCard key={`${review.name}-1-${i}`} review={review} lang={lang} />
          ))}
        </div>
      </div>

      {/* Second row - right to left */}
      <div className="group flex overflow-hidden w-full">
        <div className="flex animate-marquee-reverse group-hover:[animation-play-state:paused]">
          {[...secondRow, ...secondRow].map((review, i) => (
            <ReviewCard key={`${review.name}-2-${i}`} review={review} lang={lang} />
          ))}
        </div>
      </div>

      {/* Side gradients */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/6 bg-gradient-to-r from-stone-50/50 to-transparent"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/6 bg-gradient-to-l from-stone-50/50 to-transparent"></div>
    </div>
  );
}
