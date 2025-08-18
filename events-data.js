const events = [
  {
    id: 1,
    title: "Udendørs Madklub",
    date: "2025-08-18",
    time: "",
    location: "Ebba Lunds Vej 41D",
    category: "Workshops",
    description: "Outdoor cooking club for community members."
  },
  {
    id: 2,
    title: "Disconnect to Connect - Breathwork and Saunagus",
    date: "2025-08-18",
    time: "",
    location: "@heatharmony",
    category: "Wellness",
    description: "Relax and reconnect with guided breathwork and sauna sessions."
  },
  {
    id: 3,
    title: "Everyday Wonders - Pop Up with @icare_dlg",
    date: "2025-08-18",
    time: "",
    location: "@fiskerizakajaen",
    category: "Workshops",
    description: "Discover creative everyday wonders in a pop-up event."
  },
  {
    id: 4,
    title: "Aftryk for Livet - Linoleum Print (for kids)",
    date: "2025-08-19",
    time: "",
    location: "@kapernaumskirken",
    category: "Workshops",
    description: "Kids’ linoleum printing workshop for creative fun."
  },
  {
    id: 5,
    title: "Free Lunch Series with Anna Walther",
    date: "2025-08-19",
    time: "",
    location: "@art_hub_copenhagen",
    category: "Workshops",
    description: "Enjoy an art-focused lunch event with Anna Walther."
  },
  {
    id: 6,
    title: "Literature in Green",
    date: "2025-08-19",
    time: "",
    location: "Ebba Lunds Vej 41D",
    category: "Workshops",
    description: "Reading and literature activities surrounded by greenery."
  },
  {
    id: 7,
    title: "Rose Tuesday",
    date: "2025-08-19",
    time: "",
    location: "@autopoul",
    category: "Music",
    description: "Musical event celebrating Rose Tuesday vibes."
  },
  {
    id: 8,
    title: "Jewelry Workshop with @amaliegrauengaard",
    date: "2025-08-19",
    time: "",
    location: "@blaane",
    category: "Workshops",
    description: "Hands-on jewelry making session (DM for spot)."
  },
  {
    id: 9,
    title: "Pils & Pizza",
    date: "2025-08-19",
    time: "",
    location: "@flerefugle",
    category: "Wellness",
    description: "Social evening with pizza and drinks."
  },
  {
    id: 10,
    title: "Fællesspisning",
    date: "2025-08-19",
    time: "",
    location: "@flok_kantine",
    category: "Wellness",
    description: "Community dinner gathering."
  },
  {
    id: 11,
    title: "Pop Op Teater & Fællesspisning with @flok_kantine",
    date: "2025-08-19",
    time: "",
    location: "Nørrebroparken",
    category: "Workshops",
    description: "Outdoor theater and community dinner event."
  },
  {
    id: 12,
    title: "Trivia Quiz",
    date: "2025-08-19",
    time: "",
    location: "@gammanv",
    category: "Wellness",
    description: "Test your knowledge in a fun trivia quiz."
  },
  {
    id: 13,
    title: "Pub Quiz",
    date: "2025-08-19",
    time: "",
    location: "@nordvest_olbar",
    category: "Wellness",
    description: "Evening pub quiz with friends."
  },
  {
    id: 14,
    title: "Bunding - Baking buns with Valentin / Workshop: Surdejsbrød",
    date: "2025-08-20",
    time: "",
    location: "@flok_kantine",
    category: "Workshops",
    description: "Baking buns and sourdough bread workshop."
  },
  {
    id: 15,
    title: "Fiks & Færdig / Litteratur, samtale, bøger og seniorer / Poetry & Prose",
    date: "2025-08-20",
    time: "",
    location: "@biblioteketrentemestervej",
    category: "Workshops",
    description: "Various literature and discussion sessions."
  },
  {
    id: 16,
    title: "LO! & The Gorge Concert",
    date: "2025-08-20",
    time: "",
    location: "@lygtenskro",
    category: "Music",
    description: "Live concert performance."
  },
  {
    id: 17,
    title: "Musiz Quiz Sex & Samfund / TemaMiddag with Clara",
    date: "2025-08-20",
    time: "",
    location: "@lundenkbh",
    category: "Wellness",
    description: "Quiz and themed dinner evening."
  },
  {
    id: 18,
    title: "Kulturmødet Mors",
    date: "2025-08-21",
    time: "",
    location: "@thoravej29",
    category: "Workshops",
    description: "Cultural meeting and event series."
  },
  {
    id: 19,
    title: "Happy Hour - 2 for 1 cocktail",
    date: "2025-08-21",
    time: "",
    location: "@poolpub_cph",
    category: "Wellness",
    description: "Enjoy discounted cocktails."
  },
  {
    id: 20,
    title: "Fernisering Træværket",
    date: "2025-08-21",
    time: "",
    location: "Parken i Bispeengen",
    category: "Workshops",
    description: "Art exhibition opening event."
  },
  {
    id: 21,
    title: "NørkleCafe",
    date: "2025-08-21",
    time: "",
    location: "@grundtvigskirke",
    category: "Workshops",
    description: "Craft and knitting café."
  },
  {
    id: 22,
    title: "En Sommerdag på Bellahøj",
    date: "2025-08-21",
    time: "",
    location: "Bellahøj Amfiteater",
    category: "Music",
    description: "Summer day music and performances."
  },
  {
    id: 23,
    title: "Fællesspisning",
    date: "2025-08-21",
    time: "",
    location: "@flok_kantine",
    category: "Wellness",
    description: "Community dinner gathering."
  },
  {
    id: 24,
    title: "Pop Op Teater & Fællesspisning with @flok_kantine",
    date: "2025-08-21",
    time: "",
    location: "Hulgårds Plads",
    category: "Workshops",
    description: "Outdoor theater and community dinner event."
  },
  {
    id: 25,
    title: "Kulturmødet Mors",
    date: "2025-08-21",
    time: "",
    location: "@thoravej29",
    category: "Workshops",
    description: "Cultural meeting and community discussion."
  },
  {
    id: 26,
    title: "Happy Hour - 2 for 1 cocktail",
    date: "2025-08-21",
    time: "",
    location: "@poolpub_cph",
    category: "Wellness",
    description: "Evening cocktails at discounted price."
  },
  {
    id: 27,
    title: "Fernisering Træværket",
    date: "2025-08-21",
    time: "",
    location: "Parken i Bispeengen",
    category: "Workshops",
    description: "Art exhibition opening."
  },
  {
    id: 28,
    title: "NørkleCafe",
    date: "2025-08-21",
    time: "",
    location: "@grundtvigskirke",
    category: "Workshops",
    description: "Knitting cafe and social gathering."
  },
  {
    id: 29,
    title: "ensommerdagpåbellahøj",
    date: "2025-08-21",
    time: "",
    location: "Bellahøj Amfiteater",
    category: "Wellness",
    description: "Summer day community event at the amphitheater."
  },
  {
    id: 30,
    title: "Fællesspisning",
    date: "2025-08-21",
    time: "",
    location: "@flok_kantine",
    category: "Wellness",
    description: "Community dinner event."
  },
  {
    id: 31,
    title: "Pop Op Teater & Fællesspisning with @flok_kantine",
    date: "2025-08-21",
    time: "",
    location: "Hulgårds Plads",
    category: "Workshops",
    description: "Interactive theater and communal dining."
  },
  {
    id: 32,
    title: "Langbordsmiddag with @roddercph and @copenhagencooking Festival",
    date: "2025-08-21",
    time: "",
    location: "Bispebjerg Bakke 8",
    category: "Wellness",
    description: "Community long-table dinner event with local chefs."
  },
  {
    id: 33,
    title: "RENTEN's plantservice",
    date: "2025-08-21",
    time: "",
    location: "@demokratigarage",
    category: "Workshops",
    description: "Plant care and service event."
  },
  {
    id: 34,
    title: "EP release 'Imposter' by @threesiixfiivee",
    date: "2025-08-21",
    time: "",
    location: "@bodega.konkylie",
    category: "Music",
    description: "Music EP release party."
  },
  {
    id: 35,
    title: "Sommerkoncerter",
    date: "2025-08-21",
    time: "",
    location: "@grundtvigskirke",
    category: "Music",
    description: "Summer concert series at the church."
  },
  {
    id: 36,
    title: "FARMAND + Gaslight | URBAN Sessions",
    date: "2025-08-21",
    time: "",
    location: "@urban13_cph",
    category: "Music",
    description: "Urban music session featuring FARMAND and Gaslight."
  },
  {
    id: 37,
    title: "Kvindeøkonomien - Byg Bro / DJ Daarlig",
    date: "2025-08-21",
    time: "",
    location: "@lundenkbh",
    category: "Workshops",
    description: "Event focusing on women's economy with DJ Daarlig."
  },
{
    id: 38,
    title: "6km heat run with @7daysactive x @rondocph x @heatharmony",
    date: "2025-08-22",
    time: "07:00",
    location: "Heat Harmony",
    category: "wellness",
    description: "Start your morning with an energizing 6km heat run."
  },
  {
    id: 39,
    title: "An Hour with: Haut - @thoravej29",
    date: "2025-08-22",
    time: "10:00",
    location: "Thoravej 29",
    category: "workshops",
    description: "Participate in an engaging session with Haut."
  },
  {
    id: 40,
    title: "Piña Colada Night - @urbancamperhostel",
    date: "2025-08-22",
    time: "12:00",
    location: "Urban Camper Hostel",
    category: "wellness",
    description: "Enjoy tropical Piña Coladas and chill vibes."
  },
  {
    id: 41,
    title: "Farmers Market and Friday Bar - @demokratigarage",
    date: "2025-08-22",
    time: "16:00",
    location: "Demokrati Garage",
    category: "markets",
    description: "Shop local produce and enjoy a Friday bar."
  },
  {
    id: 42,
    title: "Fry-Day - @flerefugle",
    date: "2025-08-22",
    time: "16:30",
    location: "Flere Fugle",
    category: "wellness",
    description: "Indulge in delicious fried treats until sold out."
  },
  {
    id: 43,
    title: "Pop-Up with @andelsgaarde - @fovl_nv",
    date: "2025-08-22",
    time: "18:00",
    location: "Fovl",
    category: "markets",
    description: "Experience a pop-up market with Andelsgaarde."
  },
  {
    id: 44,
    title: "Opening of ‘Interoceptions’ - Galleri @nicolaiwallner",
    date: "2025-08-22",
    time: "17:00",
    location: "Galleri Nicolai Wallner",
    category: "workshops",
    description: "Attend the art exhibition opening."
  },
  {
    id: 45,
    title: "@ensommerdagpåbellahøj - Bellahøj Amfiteater",
    date: "2025-08-22",
    time: "17:00",
    location: "Bellahøj Amfiteater",
    category: "wellness",
    description: "Enjoy a summer day event at Bellahøj Amfiteater."
  },
  {
    id: 46,
    title: "Boyband Bingo - @cafegazou",
    date: "2025-08-22",
    time: "18:00",
    location: "Cafe Gazou",
    category: "music",
    description: "Have fun with Boyband Bingo night."
  },
  {
    id: 47,
    title: "@peech MusikBingo / Agnes EA - Kunst Som Modstand - @lundenkbh",
    date: "2025-08-22",
    time: "19:00",
    location: "Cafe Lunden",
    category: "music",
    description: "Participate in MusikBingo and live performance by Agnes EA."
  },
{
    id: 48,
    title: "@fooferments SOY SAUCE drop - @goosecph",
    date: "2025-08-23",
    time: "10:00",
    location: "Goose CPH",
    category: "markets",
    description: "Get the exclusive Soy Sauce drop at Foo Ferments."
  },
  {
    id: 49,
    title: "Yoga / Zumba med Pamela / K-pop med Kateryna - @dansekapellet",
    date: "2025-08-23",
    time: "11:00",
    location: "Dansekapellet",
    category: "wellness",
    description: "Join Yoga, Zumba, or K-pop sessions with instructors."
  },
  {
    id: 50,
    title: "Relaunch Sauna Party - @justsauna",
    date: "2025-08-23",
    time: "15:00",
    location: "Just Sauna",
    category: "wellness",
    description: "Celebrate the sauna relaunch party with fun activities."
  },
  {
    id: 51,
    title: "Happy Hours and DJ set - @gammanv",
    date: "2025-08-23",
    time: "16:00",
    location: "Gamma NV",
    category: "music",
    description: "Enjoy happy hours and a DJ set for great vibes."
  },
  {
    id: 52,
    title: "Gamma Wave Function 2025 - @gammabrewing",
    date: "2025-08-23",
    time: "18:00",
    location: "Gamma Brewing",
    category: "music",
    description: "Attend the Gamma Wave Function 2025 event with live music."
  },
  {
    id: 53,
    title: "Union vs. Viking/Rik - @genforenet_boldklubbenunion - Genforeningspladsen",
    date: "2025-08-23",
    time: "19:00",
    location: "Genforeningspladsen",
    category: "wellness",
    description: "Watch the Union vs. Viking/Rik match at Genforeningspladsen."
  },
  {
    id: 54,
    title: "Pop-Up with @andelsgaarde - @fovl",
    date: "2025-08-23",
    time: "17:00",
    location: "Fovl",
    category: "markets",
    description: "Visit the pop-up market with Andelsgaarde."
  },
  {
    id: 55,
    title: "@ensommerdagpåbellahøj - Bellahøj Amfiteater",
    date: "2025-08-23",
    time: "14:00",
    location: "Bellahøj Amfiteater",
    category: "wellness",
    description: "Enjoy the summer day event at Bellahøj Amfiteater."
  },
  {
    id: 56,
    title: "DJ & Oyster Night - @davescph",
    date: "2025-08-23",
    time: "20:00",
    location: "Dave's CPH",
    category: "music",
    description: "Party with DJ and enjoy fresh oysters."
  },
  {
    id: 57,
    title: "Harry Eucrow Releaseparty - @biblioteketrentemestervej",
    date: "2025-08-23",
    time: "18:00",
    location: "Biblioteket Rentemestervej",
    category: "music",
    description: "Celebrate the Harry Eucrow release party."
  },
  {
    id: 58,
    title: "Zonta - Feministisk Dagsorden / Eriknauer & Dein's velgørenhedsbanko - @lundenkbh",
    date: "2025-08-23",
    time: "19:00",
    location: "Lunden KBH",
    category: "workshops",
    description: "Participate in a feminist and charity bingo event."
  }
{
    id: 59,
    title: "@fooferments SOY SAUCE drop - @goosecph",
    date: "2025-08-24",
    time: "10:00",
    location: "Goose CPH",
    category: "markets",
    description: "Get the exclusive Soy Sauce drop at Foo Ferments."
  },
  {
    id: 60,
    title: "Morning Yoga with @sarah_zoe - @autopoul",
    date: "2025-08-24",
    time: "08:00",
    location: "Autopoul",
    category: "wellness",
    description: "Start your day with morning yoga guided by Sarah Zoe."
  },
  {
    id: 61,
    title: "Københavnstrup Flea Market - @københavnstrup",
    date: "2025-08-24",
    time: "09:00",
    location: "Københavnstrup",
    category: "markets",
    description: "Explore the flea market at Københavnstrup."
  },
  {
    id: 62,
    title: "Minaskaffebar Lopper - @lundenkbh",
    date: "2025-08-24",
    time: "11:00",
    location: "Lunden KBH",
    category: "markets",
    description: "Check out the second-hand items and crafts at Minaskaffebar Lopper."
  },
  {
    id: 63,
    title: "Neighbor Sunday - @makerspavenv",
    date: "2025-08-24",
    time: "12:00",
    location: "Makers Pavenv",
    category: "wellness",
    description: "Connect with neighbors and enjoy activities together."
  },
  {
    id: 64,
    title: "Public Tour - @grundtvigskirke",
    date: "2025-08-24",
    time: "14:00",
    location: "Grundtvigskirken",
    category: "workshops",
    description: "Join a guided public tour at Grundtvigskirken."
  }
];
