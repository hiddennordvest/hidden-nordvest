function formatDate(dateString) {
  const date = new Date(dateString);
  const options = { weekday: 'long', day: '2-digit', month: 'long', year: 'numeric' };
  return date.toLocaleDateString('en-GB', options);
}

function groupEventsByWeek(events) {
  const grouped = {};
  events.forEach(event => {
    const date = new Date(event.date);
    const firstDayOfWeek = new Date(date.setDate(date.getDate() - date.getDay() + 1));
    const weekKey = firstDayOfWeek.toISOString().split("T")[0];
    if (!grouped[weekKey]) grouped[weekKey] = [];
    grouped[weekKey].push(event);
  });
  return grouped;
}

function renderEvents(filterCategory = "all") {
  const container = document.getElementById("event-list");
  container.innerHTML = "";

  const filteredEvents = filterCategory === "all"
    ? events
    : events.filter(e => e.category === filterCategory);

  const grouped = groupEventsByWeek(filteredEvents);

  Object.keys(grouped).sort().forEach(week => {
    const weekEvents = grouped[week];
    weekEvents.sort((a, b) => new Date(a.date) - new Date(b.date));

    const weekDiv = document.createElement("div");
    weekDiv.classList.add("week-group");

    const weekTitle = document.createElement("div");
    weekTitle.classList.add("week-title");
    weekTitle.textContent = `Week of ${formatDate(week)}`;
    weekDiv.appendChild(weekTitle);

    weekEvents.forEach(e => {
      const card = document.createElement("div");
      card.classList.add("event-card");
      card.innerHTML = `
        <h3>${e.title}</h3>
        <div class="event-meta">${formatDate(e.date)} • ${e.time} • ${e.location}</div>
        <p>${e.description}</p>
      `;
      weekDiv.appendChild(card);
    });

    container.appendChild(weekDiv);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  // Initial render
  renderEvents();

  // Filter buttons with accessibility update
  document.querySelectorAll("#event-filters button").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll("#event-filters button").forEach(b => {
        b.classList.remove("active");
        b.setAttribute("aria-pressed", "false");
      });
      btn.classList.add("active");
      btn.setAttribute("aria-pressed", "true");

      renderEvents(btn.dataset.category);
    });
  });
});
