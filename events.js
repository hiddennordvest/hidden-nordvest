// Sample event data
const events = [
  {
    id: 1,
    title: "Morning Yoga",
    date: "08-08-2025",
    time: "08:00 - 09:00",
    location: "Nordvest Studio",
    category: "wellness",
    description: "Start your day relaxed with a refreshing yoga session."
  },
  {
    id: 2,
    title: "Jazz Night",
    date: "09-08-2025",
    time: "20:00 - 23:00",
    location: "Nordvest Jazz Bar",
    category: "music",
    description: "Live jazz music from local artists."
  },
  {
    id: 3,
    title: "Pop-up Market",
    date: "2025-08-10",
    time: "10:00 - 16:00",
    location: "Nordvest Square",
    category: "markets",
    description: "Find unique handmade crafts and vintage items."
  },
  {
    id: 4,
    title: "Art Workshop",
    date: "2025-08-11",
    time: "14:00 - 17:00",
    location: "Creative Hub",
    category: "workshop",
    description: "Learn painting techniques with a local artist."
  }
];

// Format date to "Weekday, DD Month YYYY"
function formatDate(dateString) {
  const date = new Date(dateString);
  const options = { weekday: 'long', day: '2-digit', month: 'long', year: 'numeric' };
  return date.toLocaleDateString('en-GB', options); // European style date format
}

// Reference to DOM elements
const eventList = document.getElementById('event-list');
const filterButtons = document.querySelectorAll('#event-filters button');

// Render events filtered by category
function renderEvents(category = 'all') {
  eventList.innerHTML = ''; // Clear current list

  const filteredEvents = category === 'all' ? events : events.filter(e => e.category === category);

  if (filteredEvents.length === 0) {
    eventList.innerHTML = '<p>No events found for this category.</p>';
    return;
  }

  filteredEvents.forEach(event => {
    const eventCard = document.createElement('article');
    eventCard.className = 'event-card';

    eventCard.innerHTML = `
      <h4>${event.title}</h4>
      <p class="event-meta">${formatDate(event.date)} • ${event.time} • ${event.location}</p>
      <p>${event.description}</p>
    `;

    eventList.appendChild(eventCard);
  });
}

// Setup filter button click handlers with accessibility updates
filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Remove active from all buttons and update aria-pressed
    filterButtons.forEach(btn => {
      btn.classList.remove('active');
      btn.setAttribute('aria-pressed', 'false');
    });

    // Add active to clicked button and update aria-pressed
    button.classList.add('active');
    button.setAttribute('aria-pressed', 'true');

    const category = button.getAttribute('data-category');
    renderEvents(category);
  });
});

// Initial render (all events)
renderEvents();
