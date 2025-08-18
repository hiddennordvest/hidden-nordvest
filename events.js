// Format date as: Day Month Year (e.g., Friday 1 August 2025)
function formatDate(dateString) {
  const options = { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' };
  return new Date(dateString).toLocaleDateString('en-GB', options);
}

// Convert time from 24h ("HH:mm") to 12h format with am/pm
function formatTime(timeString) {
  if (!timeString) return '';
  const [hourStr, minute] = timeString.split(':');
  let hour = parseInt(hourStr, 10);
  const ampm = hour >= 12 ? 'pm' : 'am';
  hour = hour % 12 || 12;
  return `${hour}:${minute} ${ampm}`;
}

function renderEvents(filterCategory = "all") {
  const container = document.getElementById("event-list");
  container.innerHTML = "";

  const filteredEvents = filterCategory === "all"
    ? events
    : events.filter(event => event.category === filterCategory);

  if (filteredEvents.length === 0) {
    container.innerHTML = '<p>No events found for this category.</p>';
    return;
  }

  // Group by date
  const groupedByDate = filteredEvents.reduce((group, event) => {
    (group[event.date] = group[event.date] || []).push(event);
    return group;
  }, {});

  // Sort dates ascending
  Object.keys(groupedByDate).sort().forEach(date => {
    const dateHeading = document.createElement('h3');
    dateHeading.textContent = formatDate(date);
    container.appendChild(dateHeading);

    groupedByDate[date].forEach(event => {
      const card = document.createElement('article');
      card.className = 'event-card';
      card.innerHTML = `
        <h4 class="event-title">${event.title}</h4>
        <p class="event-meta">${formatTime(event.time)} • ${event.location}</p>
        <p>${event.description}</p>
      `;
      container.appendChild(card);
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  renderEvents();

  const buttons = document.querySelectorAll("#event-filters button");
  buttons.forEach(button => {
    button.addEventListener("click", () => {
      buttons.forEach(btn => {
        btn.classList.remove("active");
        btn.setAttribute("aria-pressed", "false");
      });
      button.classList.add("active");
      button.setAttribute("aria-pressed", "true");

      renderEvents(button.dataset.category);
    });
  });
});
