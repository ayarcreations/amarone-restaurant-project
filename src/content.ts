export type Language = 'nl' | 'en';

export const content = {
  nl: {
    nav: {
      about: 'Over Ons',
      menu: 'Menu',
      faq: 'FAQ',
      michelinStar: 'Michelin Ster',
      reservation: 'Reservering',
    },
    hero: {
      title: 'Beleef Amarone',
      subtitle: 'Verfijnd Frans-Japans dineren in het hart van de Rotterdamse Meent.',
      discoverMenu: 'Ontdek Menu',
      makeReservation: 'Reserveer Tafel',
    },
    about: {
      tag: 'Ons Verhaal',
      title: 'Restaurant Amarone',
      p1: 'De levendigheid van de Rotterdamse winkelstraat Meent wordt weerspiegeld in restaurant Amarone. Met de open keuken, luxe fauteuils en de open haard voelt Amarone warm én gezellig aan.',
      p2: 'Het enthousiaste team zorgt voor een ontspannen omgang met de gasten in deze zaak met internationale uitstraling. De stijl van Jan van Dobben is gefundeerd op de Franse en Japanse keuken. Hij laat de kern van de smaak in de ingrediënten altijd spreken en zorgt voor harmonie in gerechten. Eerlijk koken is zijn devies.',
      p3: 'Eyecatchers zijn de witte driedimensionale muur rond de open keuken, het op Japan geïnspireerde fotokunstwerk van fotograaf Casper Faassen en de lampen boven de bar in de vorm van als origami gevouwen vogels. Om de gast comfortabel te laten genieten hebben we gekozen voor met linnen beklede ronde tafels en met grijze stof beklede ‘kimonochairs’.',
    },
    team: {
      tag: 'Jan van Dobben',
      title: 'Een Michelinster-ervaring onder leiding van Jan & Yoshiko.',
      heading: 'JAN & YOSHIKO & AMARONE',
      p1: 'Restaurant Amarone is de trots van chef Jan van Dobben en gastvrouw-sommelier Yoshiko Van Dobben-Takayama. Met als basis de klassieke Franse keuken kookt Jan van Dobben internationaal met subtiele Japanse invloeden en technieken, verkregen door zijn jaarlijkse reizen naar Japan.',
      p2: 'Amarone werd in 2006 geopend door Gert Blom en Harrie Baas en is sinds 2007 in het bezit van een Michelinster. Jan van Dobben werkt sinds 2012 bij Amarone en is sinds 2018 volledig eigenaar, nadat hij in 2017 mede-eigenaar werd. De van oorsprong Japanse Yoshiko van Dobben-Takayama studeerde in Frankrijk af als oenoloog en werkte bij driesterrenrestaurant L’Arnsbourg in de Franse Elzas, waar ze chef de cave was. Het paar leerde elkaar kennen toen ze beiden in L’Arnsbourg werkten. In Nederland werkte Yoshiko bij tweesterrenrestaurant &Moshik in Amsterdam, waar ze in 2015 door Gault&Millau uitgeroepen werd tot Wijn-Spijs Specialist van het jaar. In 2017 voegde ze zich bij Jan van Dobben toen hij mede-eigenaar van Amarone werd. In december 2019 werd ze door Gault&Millau uitgeroepen tot Sommelier van het Jaar 2020.',
    },
    menu: {
      title: 'Menu',
      infoTitle: 'Belangrijke informatie',
      infoText: 'Op vrijdag en zaterdagavond serveren wij enkel het Amarone menu in 6- of 7-gangen. Daarnaast bieden we de mogelijkheid aan te kiezen voor het Prestige menu, of onze A la Carte kaart.\n\nOm de kwaliteit voor onze gasten te waarborgen hanteren wij met de lunch een sluitingstijd van uiterlijk 16:15. S’avonds hanteren wij een sluitingstijd van uiterlijk 23:30.',
      sections: [
        {
          name: 'A La Carte - Voorgerechten',
          items: [
            { name: 'Kalfstartaar', description: 'vadouvan - ossenstaart - mierikswortel', price: '€ 55,00' },
            { name: 'Paling', description: 'Biet - Noilly Prat - Granny Smith', price: '€ 45,00' },
            { name: 'Langoustine', description: 'Mango - Tandoori - citroengras', price: '€ 60,00' },
            { name: 'Avocado (Vegetarisch)', description: 'Furikake Wasabi - Komkommer - Tomasu', price: '€ 37,00' },
          ],
          note: '*** Supplement Kaviaar Petrossian; per 10 gram 35 euro OF Kaviaar Klassiek; per 50 gram €165.'
        },
        {
          name: 'Hoofdgerechten - Vlees/Vegetarisch',
          items: [
            { name: 'Shortrib', description: 'Prei - Polenta - Sabayon', price: '€ 66,00' },
            { name: 'Japanse Wagyu A4 (100g)', description: 'Courgette - Tosazu - Hazelnoot', price: '€ 95,00' },
            { name: 'Zwezerik', description: 'cantharel - Zwarte Knoflook - Macadamia', price: '€ 55,00' },
            { name: 'Knolselderij (vegetarisch)', description: 'Koji - Chioggia Biet - Zwarte Knoflook', price: '€ 44,00' },
          ]
        },
        {
          name: 'Hoofdgerechten - Vis',
          items: [
            { name: 'Coquille', description: 'King Boleet - Pastinaak - Miso', price: '€ 57,00' },
            { name: 'Snoekbaars', description: 'Haringkuit - Dashi - Ossenworst', price: '€ 49,00' },
            { name: 'Tarbot', description: 'Pata Negra - Artisjok - Knoflook', price: '€ 66,00' },
          ]
        },
        {
          name: 'Nagerechten',
          items: [
            { name: 'Pinda', description: 'Banaan - Karamel - Rum', price: '€ 28,00' },
            { name: 'Ananas', description: 'Kokos - Sake - Nasturtium', price: '€ 28,00' },
            { name: 'Alpaco Chocolade', description: 'bloed sinaasappel - hazelnoot - karamel', price: '€ 28,00' },
            { name: 'Kaas van Het Kaasatelier', description: 'Selectie van de kaastrolley, vers en gerijpt.', price: '€ 4,75 p / stuk' },
          ]
        },
      ],
      setMenus: [
        {
          name: 'Menu Amarone',
          description: '5 gangen €103,00 | 6 gangen €127,50* | 7 gangen €145,00**',
          items: [
            { name: 'Paling', description: 'Biet - Noilly Prat - Granny Smith\nSupplement Kaviaar, 10 gram €35,-' },
            { name: 'Coquille', description: 'King Boleet - Pastinaak - Miso\nSupplement gerecht: Langoustine €45' },
            { name: 'Koolrabi', description: 'Truffel - Zuurkool - Taleggio' },
            { name: 'Zwezerik*', description: 'Cantharel - Zwarte Knoflook - Macadamia' },
            { name: 'Eend', description: 'Pompoen - Kastanje - Sinaasappel\nSupplement Japanse Wagyu A4, 100 gram €65,-' },
            { name: 'Yuzu**', description: 'Munt - Roze Peper - Room' },
            { name: 'Pinda', description: 'Banaan - Karamel - Rum' },
          ]
        },
        {
          name: 'Lunch menu',
          description: '3 gangen €60,00 | 4 gangen €80,00',
          items: []
        },
        {
          name: 'Prestige Menu',
          description: '4 courses €260,-',
          items: [
            { name: 'Petrossian Kaviaar', description: 'Langoustine – Mango – Tandoori' },
            { name: 'Tarbot', description: 'Pata Negra – Artisjok – Knoflook' },
            { name: 'Japanse Wagyu A4', description: 'Courgette – Tosazu – Hazelnoot' },
            { name: 'Pinda', description: 'Banaan - Karamel - Rum' },
          ]
        }
      ]
    },
    reservation: {
      title: 'Reservering',
      subtitle: 'Reserveer uw tafel voor een onvergetelijke eetervaring',
      formTitle: 'Maak een Reservering',
      name: 'Naam',
      phone: 'Telefoonnummer',
      date: 'Datum',
      time: 'Gewenste Tijd',
      guests: 'Aantal Gasten',
      message: 'Speciale Verzoeken of Dieetwensen',
      messagePlaceholder: 'Eventuele dieetwensen, gelegenheden of verzoeken...',
      submit: 'Reservering Aanvragen',
      required: '* Verplichte velden',
      confirm: 'Wij bevestigen uw reservering binnen 24 uur. Voor directe assistentie kunt u ons bellen op +31 10 720 0802.',
      selectTime: 'Kies een tijd',
      guest: 'Gast',
      guestPlural: 'Gasten',
    },
    reviews: {
      title: 'Wat Onze Gasten Zeggen',
      subtitle: 'Ervaringen van bezoekers',
    },
    gallery: {
      cta: 'Ontdek Galerij',
    },
    faq: {
      title: 'Veelgestelde vragen',
      items: [
        { q: 'Heeft Restaurant Amarone een Michelinster?', a: 'Ja. Restaurant Amarone heeft een Michelinster sinds 2006 en staat al jarenlang bekend om zijn consistente kwaliteit, verfijnde smaken en persoonlijke gastvrijheid.' },
        { q: 'Wat voor keuken serveert Amarone?', a: 'Amarone kookt vanuit een klassieke Franse basis met verfijnde Japanse invloeden, met focus op pure ingrediënten, creativiteit, balans en harmonie in smaak.' },
        { q: 'Wat is de sfeer bij Amarone?', a: 'De sfeer is casual chic: elegant en ontspannen tegelijk. Amarone is geschikt voor romantische diners, zakelijke afspraken en bijzondere gelegenheden.' },
        { q: 'Kan ik à la carte eten of alleen een menu?', a: 'Op vrijdag- en zaterdagavond serveren wij het Amarone-menu in 6 of 7 gangen. Daarnaast kunt u kiezen voor het Prestige-menu of onze à-la-cartekaart. Overdag en op andere avonden is à la carte keuze mogelijk tot 6 personen, conform de actuele kaart.' },
        { q: 'Is Amarone geschikt voor zakelijke lunches en diners?', a: 'Ja. Amarone is zeer geschikt voor zakelijke lunches en diners dankzij de rustige setting, ronde tafels, het hoge serviceniveau en de centrale ligging in Rotterdam.' },
        { q: 'Waar is Restaurant Amarone gevestigd?', a: 'Restaurant Amarone is gevestigd aan de Meent 72A in het centrum van Rotterdam.' },
        { q: 'Wie staan er aan het roer van Amarone?', a: 'Chef-kok Jan van Dobben en gastvrouw-sommelier Yoshiko Takayama vormen samen het hart van Amarone en bepalen de keuken, wijnselectie en gastbeleving.' },
        { q: 'Houdt Amarone rekening met dieetwensen en allergieën?', a: 'Ja. Wij houden graag rekening met dieetwensen en allergieën, mits deze vooraf worden doorgegeven bij de reservering.' },
      ]
    },
    footer: {
      addressTitle: 'RESTAURANT AMARONE',
      address: 'Meent 72A\n3011 JN Rotterdam',
      contact: 'info@restaurantamarone.nl\n+31 10 720 0802',
      copy: '© 2026 Restaurant Amarone'
    }
  },
  en: {
    nav: {
      about: 'About Us',
      menu: 'Menu',
      faq: 'FAQ',
      michelinStar: 'Michelin Star',
      reservation: 'Reservation',
    },
    hero: {
      title: 'Experience Amarone',
      subtitle: 'Elegant French-Japanese dining in the heart of Rotterdam Meent.',
      discoverMenu: 'Discover Menu',
      makeReservation: 'Make Reservation',
    },
    about: {
      tag: 'Our Story',
      title: 'Restaurant Amarone',
      p1: 'The vibrancy of the Rotterdam shopping street Meent is reflected in restaurant Amarone. With its open kitchen, luxury armchairs, and fireplace, Amarone feels both warm and cozy.',
      p2: 'The enthusiastic team ensures a relaxed interaction with guests in this establishment with an international allure. Jan van Dobben\'s style is founded on French and Japanese cuisine. He always lets the core flavor of the ingredients speak and ensures harmony in dishes. Honest cooking is his motto.',
      p3: 'Eye-catchers are the white three-dimensional wall around the open kitchen, the Japan-inspired photo artwork by photographer Casper Faassen, and the lamps above the bar shaped like origami folded birds. To let the guest enjoy comfortably, we have chosen linen-covered round tables and "kimono chairs" upholstered in gray fabric.',
    },
    team: {
      tag: 'Jan van Dobben',
      title: 'A Michelin star experience led by Jan & Yoshiko.',
      heading: 'JAN & YOSHIKO & AMARONE',
      p1: 'Restaurant Amarone is the pride of chef Jan van Dobben and hostess-sommelier Yoshiko Van Dobben-Takayama. Based on classic French cuisine, Jan van Dobben cooks internationally with subtle Japanese influences and techniques, acquired through his annual trips to Japan.',
      p2: 'Amarone was opened in 2006 by Gert Blom and Harrie Baas and has held a Michelin star since 2007. Jan van Dobben has worked at Amarone since 2012 and became full owner in 2018, having become co-owner in 2017. Japan-born Yoshiko van Dobben-Takayama graduated as an oenologist in France and worked at the three-star restaurant L’Arnsbourg in Alsace, France, where she was chef de cave. The couple met when they both worked in L’Arnsbourg. In the Netherlands, Yoshiko worked at the two-star restaurant &Moshik in Amsterdam, where she was named Wine-Food Specialist of the Year by Gault&Millau in 2015. In 2017, she joined Jan van Dobben when he became co-owner of Amarone. In December 2019, she was named Sommelier of the Year 2020 by Gault&Millau.',
    },
    menu: {
      title: 'Menu',
      infoTitle: 'Important Information',
      infoText: 'On Friday and Saturday evenings we only serve the Amarone menu in 6 or 7 courses. We also offer the option to choose the Prestige menu, or our A la Carte menu.\n\nTo guarantee quality for our guests, we adhere to a closing time of 16:15 at lunch. In the evening we have a closing time of 23:30.',
      sections: [
        {
          name: 'A La Carte - Starters',
          items: [
            { name: 'Veal Tartare', description: 'vadouvan - oxtail - horseradish', price: '€ 55.00' },
            { name: 'Eel', description: 'Beetroot - Noilly Prat - Granny Smith', price: '€ 45.00' },
            { name: 'Langoustine', description: 'Mango - Tandoori - lemongrass', price: '€ 60.00' },
            { name: 'Avocado (Vegetarian)', description: 'Furikake Wasabi - Cucumber - Tomasu', price: '€ 37.00' },
          ],
          note: '*** Supplement Caviar Petrossian; per 10 grams 35 euros OR Caviar Classic; per 50 grams €165.'
        },
        {
          name: 'Main Courses - Meat/Vegetarian',
          items: [
            { name: 'Shortrib', description: 'Leek - Polenta - Sabayon', price: '€ 66.00' },
            { name: 'Japanese Wagyu A4 (100g)', description: 'Zucchini - Tosazu - Hazelnut', price: '€ 95.00' },
            { name: 'Sweetbread', description: 'chanterelle - Black Garlic - Macadamia', price: '€ 55.00' },
            { name: 'Celeriac (vegetarian)', description: 'Koji - Chioggia Beet - Black Garlic', price: '€ 44.00' },
          ]
        },
        {
          name: 'Main Courses - Fish',
          items: [
            { name: 'Scallop', description: 'King Bolete - Parsnip - Miso', price: '€ 57.00' },
            { name: 'Pikeperch', description: 'Herring Roe - Dashi - Ox Sausage', price: '€ 49.00' },
            { name: 'Turbot', description: 'Pata Negra - Artichoke - Garlic', price: '€ 66.00' },
          ]
        },
        {
          name: 'Desserts',
          items: [
            { name: 'Peanut', description: 'Banana - Caramel - Rum', price: '€ 28.00' },
            { name: 'Pineapple', description: 'Coconut - Sake - Nasturtium', price: '€ 28.00' },
            { name: 'Alpaco Chocolate', description: 'blood orange - hazelnut - caramel', price: '€ 28.00' },
            { name: 'Cheese from Het Kaasatelier', description: 'Selection from the cheese trolley, fresh and matured.', price: '€ 4.75 p / piece' },
          ]
        },
      ],
      setMenus: [
        {
          name: 'Menu Amarone',
          description: '5 courses €103.00 | 6 courses €127.50* | 7 courses €145.00**',
          items: [
            { name: 'Eel', description: 'Beetroot - Noilly Prat - Granny Smith\nSupplement Caviar, 10 grams €35' },
            { name: 'Scallop', description: 'King Bolete - Parsnip - Miso\nSupplement dish: Langoustine €45' },
            { name: 'Kohlrabi', description: 'Truffle - Sauerkraut - Taleggio' },
            { name: 'Sweetbread*', description: 'Chanterelle - Black Garlic - Macadamia' },
            { name: 'Duck', description: 'Pumpkin - Chestnut - Orange\nSupplement Japanese Wagyu A4, 100 grams €65' },
            { name: 'Yuzu**', description: 'Mint - Pink Pepper - Cream' },
            { name: 'Peanut', description: 'Banana - Caramel - Rum' },
          ]
        },
        {
          name: 'Lunch menu',
          description: '3 courses €60.00 | 4 courses €80.00',
          items: []
        },
        {
          name: 'Prestige Menu',
          description: '4 courses €260',
          items: [
            { name: 'Petrossian Caviar', description: 'Langoustine – Mango – Tandoori' },
            { name: 'Turbot', description: 'Pata Negra – Artichoke – Garlic' },
            { name: 'Japanese Wagyu A4', description: 'Zucchini – Tosazu – Hazelnut' },
            { name: 'Peanut', description: 'Banana - Caramel - Rum' },
          ]
        }
      ]
    },
    reservation: {
      title: 'Reservation',
      subtitle: 'Book your table for an unforgettable dining experience',
      formTitle: 'Make a Reservation',
      name: 'Name',
      phone: 'Phone Number',
      date: 'Date',
      time: 'Preferred Time',
      guests: 'Number of Guests',
      message: 'Special Requests or Dietary Requirements',
      messagePlaceholder: 'Any special dietary requirements, occasions, or requests...',
      submit: 'Request Reservation',
      required: '* Required fields',
      confirm: 'We will confirm your reservation within 24 hours. For immediate assistance, please call us at +31 10 720 0802.',
      selectTime: 'Select a time',
      guest: 'Guest',
      guestPlural: 'Guests',
    },
    reviews: {
      title: 'What Our Guests Say',
      subtitle: 'Stories from our visitors',
    },
    gallery: {
      cta: 'Explore Gallery',
    },
    faq: {
      title: 'Frequently asked questions',
      items: [
        { q: 'Does Restaurant Amarone have a Michelin star?', a: 'Yes. Restaurant Amarone has had a Michelin star since 2006 and has been known for years for its consistent quality, refined flavors, and personal hospitality.' },
        { q: 'What kind of cuisine does Amarone serve?', a: 'Amarone cooks from a classic French base with refined Japanese influences, focusing on pure ingredients, creativity, balance, and harmony in flavor.' },
        { q: 'What is the atmosphere like at Amarone?', a: 'The atmosphere is casual chic: elegant and relaxed at the same time. Amarone is suitable for romantic dinners, business meetings, and special occasions.' },
        { q: 'Can I eat à la carte or only a menu?', a: 'On Friday and Saturday evenings we serve the Amarone menu in 6 or 7 courses. You can also choose the Prestige menu or our à la carte menu. During the day and on other evenings, à la carte choice is possible up to 6 people, in accordance with the current menu.' },
        { q: 'Is Amarone suitable for business lunches and dinners?', a: 'Yes. Amarone is very suitable for business lunches and dinners thanks to the quiet setting, round tables, high service level, and central location in Rotterdam.' },
        { q: 'Where is Restaurant Amarone located?', a: 'Restaurant Amarone is located at Meent 72A in the center of Rotterdam.' },
        { q: 'Who is at the helm of Amarone?', a: 'Chef Jan van Dobben and hostess-sommelier Yoshiko Takayama together form the heart of Amarone and determine the kitchen, wine selection, and guest experience.' },
        { q: 'Does Amarone take dietary requirements and allergies into account?', a: 'Yes. We are happy to take dietary requirements and allergies into account, provided these are communicated in advance when making the reservation.' },
      ]
    },
    footer: {
      addressTitle: 'RESTAURANT AMARONE',
      address: 'Meent 72A\n3011 JN Rotterdam',
      contact: 'info@restaurantamarone.nl\n+31 10 720 0802',
      copy: '© 2026 Restaurant Amarone'
    }
  }
};
