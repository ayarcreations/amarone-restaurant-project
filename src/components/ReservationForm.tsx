import React, { useState } from 'react';
import { Language, content } from '../content';

interface ReservationFormProps {
  lang: Language;
}

export function ReservationForm({ lang }: ReservationFormProps) {
  const t = content[lang].reservation;
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: '',
    time: '',
    guests: '2',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Reservation submitted:', formData);
    // Here you would typically send this to your backend/API
    alert(lang === 'nl' ? 'Bedankt voor uw reserveringsverzoek! Wij nemen spoedig contact met u op.' : 'Thank you for your reservation request! We will contact you soon.');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="bg-white p-6 md:p-8 border border-stone-100 shadow-sm">
      <h3 className="text-xl font-serif text-stone-800 italic mb-6">{t.formTitle}</h3>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="mb-4">
          <div>
            <label htmlFor="name" className="block text-sm font-sans text-stone-700 mb-2">
              {t.name} *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-stone-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent text-sm"
              placeholder="Your full name"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="phone" className="block text-sm font-sans text-stone-700 mb-2">
              {t.phone}
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-stone-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent text-sm"
              placeholder="+31 10 123 4567"
            />
          </div>
          
          <div>
            <label htmlFor="date" className="block text-sm font-sans text-stone-700 mb-2">
              {t.date} *
            </label>
            <input
              type="date"
              id="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-stone-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent text-sm"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="time" className="block text-sm font-sans text-stone-700 mb-2">
              {t.time} *
            </label>
            <select
              id="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-stone-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent text-sm"
            >
              <option value="">{t.selectTime}</option>
              <option value="12:00">12:00</option>
              <option value="12:30">12:30</option>
              <option value="13:00">13:00</option>
              <option value="13:30">13:30</option>
              <option value="14:00">14:00</option>
              <option value="14:30">14:30</option>
              <option value="15:00">15:00</option>
              <option value="15:30">15:30</option>
              <option value="16:00">16:00</option>
              <option value="16:30">16:30</option>
              <option value="17:00">17:00</option>
              <option value="17:30">17:30</option>
              <option value="18:00">18:00</option>
              <option value="18:30">18:30</option>
              <option value="19:00">19:00</option>
              <option value="19:30">19:30</option>
              <option value="20:00">20:00</option>
              <option value="20:30">20:30</option>
              <option value="21:00">21:00</option>
              <option value="21:30">21:30</option>
              <option value="22:00">22:00</option>
              <option value="22:30">22:30</option>
              <option value="23:00">23:00</option>
              <option value="23:30">23:30</option>
            </select>
          </div>
          
          <div>
            <label htmlFor="guests" className="block text-sm font-sans text-stone-700 mb-2">
              {t.guests} *
            </label>
            <select
              id="guests"
              name="guests"
              value={formData.guests}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-stone-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent text-sm"
            >
              <option value="1">1 {t.guest}</option>
              <option value="2">2 {t.guestPlural}</option>
              <option value="3">3 {t.guestPlural}</option>
              <option value="4">4 {t.guestPlural}</option>
              <option value="5">5 {t.guestPlural}</option>
              <option value="6">6+ {t.guestPlural}</option>
            </select>
          </div>
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-sans text-stone-700 mb-2">
            {t.message}
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={4}
            className="w-full px-3 py-2 border border-stone-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent text-sm resize-none"
            placeholder={t.messagePlaceholder}
          />
        </div>

        <button
          type="submit"
          className="w-full bg-stone-900 text-white py-3 px-6 rounded-md hover:bg-stone-800 transition-colors duration-200 font-sans font-medium"
        >
          {t.submit}
        </button>
      </form>
      
      <div className="mt-6 text-xs text-stone-500 font-sans">
        <p>{t.required}</p>
        <p className="mt-2">{t.confirm}</p>
      </div>
    </div>
  );
}
