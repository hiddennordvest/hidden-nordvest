// events.js
const events = [
  {
    title: "6km heat run with 7daysactive and Rondo - Heat Harmony",
    date: "2025-08-01",
    time: "07:00",
    location: "Heat Harmony",
    category: "fitness",
    description: "Morning 6km run with 7daysactive and Rondo."
  },
  {
    title: "Nova Sense opening",
    date: "2025-08-01",
    time: "12:00 to 16:00",
    location: "Nova Sense",
    category: "opening",
    description: "Grand opening event at Nova Sense."
  },
  {
    title: "Sensommerbreve",
    date: "2025-08-01",
    time: "13:00",
    location: "Cafe Lunden",
    category: "culture",
    description: "Sensommerbreve event at Cafe Lunden."
  },
  {
    title: "Fry-Day",
    date: "2025-08-01",
    time: "16:30 until sold out",
    location: "Flere Fugle",
    category: "food",
    description: "Fry-Day event at Flere Fugle."
  },
  {
    title: "Albert Preisler - Jazz Trio",
    date: "2025-08-01",
    time: "18:00",
    location: "Cafe Lunden",
    category: "music",
    description: "Jazz Trio performance by Albert Preisler."
  },
  {
    title: "Primal Play",
    date: "2025-08-01",
    time: "19:30 to 21:30",
    location: "Rört",
    category: "wellness",
    description: "Primal Play session."
  },
  {
    title: "Knitting & Listening",
    date: "2025-08-02",
    time: "09:30 to 12:00",
    location: "Tagensbo Kirke",
    category: "craft",
    description: "Knitting and listening event."
  },
  {
    title: "Yoga with Petra & Strik",
    date: "2025-08-02",
    time: "10:00",
    location: "Cafe Lunden",
    category: "wellness",
    description: "Yoga session with Petra & Strik."
  },
  {
    title: "Happy Hours",
    date: "2025-08-02",
    time: "12:00 to 16:00",
    location: "Gamma NV",
    category: "social",
    description: "Happy Hours event."
  },
  {
    title: "Livskompasset Panel-Talk",
    date: "2025-08-02",
    time: "16:00",
    location: "Cafe Lunden",
    category: "talk",
    description: "Panel talk at Cafe Lunden."
  },
  {
    title: "Autopoul Sunday Market",
    date: "2025-08-03",
    time: "10:00 to 15:00",
    location: "Autopoul",
    category: "market",
    description: "Sunday market at Autopoul."
  },
  {
    title: "Københavnstrup Flea Market",
    date: "2025-08-03",
    time: "10:00 to 16:00",
    location: "Københavnstrup",
    category: "market",
    description: "Flea market in Københavnstrup."
  },
  {
    title: "Neighbor Sunday",
    date: "2025-08-03",
    time: "12:00 to 15:00",
    location: "Maker Space NV",
    category: "community",
    description: "Community gathering at Maker Space NV."
  },
  {
    title: "Pico Pizza Sunday Market",
    date: "2025-08-03",
    time: "12:00 to 16:00",
    location: "Pico Pizza",
    category: "food",
    description: "Sunday market with Spritz and Beer 2 for 1."
  },
  {
    title: "Worksharing: Surfacing HypoKrisia",
    date: "2025-08-03",
    time: "14:00 to 16:00",
    location: "Thoravej 29",
    category: "workshop",
    description: "Worksharing session on Surfacing HypoKrisia."
  },
  {
    title: "Tigeroak Duo Set",
    date: "2025-08-03",
    time: "14:30",
    location: "Cafe Lunden",
    category: "music",
    description: "Duo performance at Cafe Lunden."
  },
  {
    title: "Mini Urban Retreat",
    date: "2025-08-04",
    time: "09:00 to 14:00",
    location: "Bispebjergvej 73",
    category: "wellness",
    description: "Mini urban retreat event."
  },
  {
    title: "Udendørs Madklub",
    date: "2025-08-04",
    time: "16:30 to 20:00",
    location: "Ebba Lunds Vej 41D",
    category: "food",
    description: "Outdoor dining club."
  },
  {
    title: "Mini Urban Retreat",
    date: "2025-08-05",
    time: "09:00 to 14:00",
    location: "Bispebjergvej 73",
    category: "wellness",
    description: "Mini urban retreat event."
  },
  {
    title: "Literature in Green",
    date: "2025-08-05",
    time: "13:00 to 14:00",
    location: "Ebba Lunds Vej 41D",
    category: "literature",
    description: "Literature event in a green setting."
  },
  {
    title: "Rose Tuesday",
    date: "2025-08-05",
    time: "All day",
    location: "Autopoul",
    category: "celebration",
    description: "Rose Tuesday celebration."
  },
  {
    title: "Pils & Pizza",
    date: "2025-08-05",
    time: "From 16:30",
    location: "Flere Fugle",
    category: "food",
    description: "Pilsner and pizza evening."
  },
  {
    title: "Repair Cafe",
    date: "2025-08-05",
    time: "17:00 to 20:00",
    location: "Maker Space NV",
    category: "community",
    description: "Community repair cafe."
  },
  {
    title: "The Heart of Zen with Genpo Roshi",
    date: "2025-08-05",
    time: "18:00 to 21:00",
    location: "Rört",
    category: "wellness",
    description: "Zen meditation session."
  },
  {
    title: "Pub Quiz",
    date: "2025-08-05",
    time: "19:00",
    location: "Nordvest Ølbar",
    category: "social",
    description: "Pub quiz night."
  },
  {
    title: "Bingo Night",
    date: "2025-08-05",
    time: "19:00",
    location: "Gamma NV",
    category: "social",
    description: "Bingo night event."
  },
  {
    title: "Litteratur, samtale, bøger og seniorer",
    date: "2025-08-06",
    time: "16:00 to 17:30",
    location: "Rentemestervej Bibliotek",
    category: "literature",
    description: "Literature, conversation, books and seniors."
  },
  {
    title: "Clairvoyance Aften",
    date: "2025-08-06",
    time: "18:30 to 20:00",
    location: "Kimia Healing Space",
    category: "spiritual",
    description: "Evening clairvoyance session."
  },
  {
    title: "Liitcafe Litterær Aften",
    date: "2025-08-06",
    time: "TBD",
    location: "Cafe Lunden",
    category: "literature",
    description: "Literary evening at Cafe Lunden."
  },
  {
    title: "Morning Yoga with @sarah_zoe",
    date: "2025-08-07",
    time: "11:00 to 12:15",
    location: "Autopoul",
    category: "wellness",
    description: "Morning yoga session."
  },
  {
    title: "Worksharing: Stepping In | Stepping Out",
    date: "2025-08-07",
    time: "15:00 to 17:00",
    location: "Thoravej 29",
    category: "workshop",
    description: "Worksharing session."
  },
  {
    title: "Happy Hour - 2 for 1 cocktail",
    date: "2025-08-07",
    time: "15:00 to 01:00",
    location: "Pool Pub",
    category: "social",
    description: "Cocktail happy hour."
  },
  {
    title: "Ulvekoret",
    date: "2025-08-07",
    time: "16:15",
    location: "Tagensbo Kirke",
    category: "music",
    description: "Ulvekoret performance."
  },
  {
    title: "Samba de Malandro Workshop",
    date: "2025-08-07",
    time: "19:00 to 20:30",
    location: "Tagensbo Skole",
    category: "workshop",
    description: "Samba dance workshop."
  },
  {
    title: "Speeddating queer/pre-pride edition for alle",
    date: "2025-08-07",
    time: "20:00",
    location: "Dorthea’s Bar",
    category: "social",
    description: "Speed dating queer/pre-pride edition."
  },
  {
    title: "Recycle Fashion Showcase",
    date: "2025-08-07",
    time: "TBD",
    location: "Cafe Lunden",
    category: "fashion",
    description: "Fashion showcase event."
  },
  {
    title: "Slow Fashion Talk - Mode101",
    date: "2025-08-07",
    time: "TBD",
    location: "Cafe Lunden",
    category: "talk",
    description: "Talk on slow fashion."
  },
  {
    title: "6km heat run with 7daysactive and Rondo - Heat Harmony",
    date: "2025-08-08",
    time: "07:00",
    location: "Heat Harmony",
    category: "fitness",
    description: "Morning 6km run with 7daysactive and Rondo."
  },
  {
    title: "Vernissage with Camilla Troelsø",
    date: "2025-08-08",
    time: "16:00 to 18:00",
    location: "Bevar’s",
    category: "art",
    description: "Art vernissage with Camilla Troelsø."
  },
  {
    title: "Fry-Day",
    date: "2025-08-08",
    time: "16:30 until sold out",
    location: "Flere Fugle",
    category: "food",
    description: "Fry-Day event at Flere Fugle."
  },
  {
    title: "Orange Wine Tasting - deandrevin x Lunden",
    date: "2025-08-08",
    time: "19:00 to 21:00",
    location: "Cafe Lunden",
    category: "food",
    description: "Orange wine tasting event."
  },
  {
    title: "Moonlight Walk",
    date: "2025-08-08",
    time: "20:00",
    location: "Meet at Nordvest St.",
    category: "outdoors",
    description: "Guided moonlight walk."
  }
];
