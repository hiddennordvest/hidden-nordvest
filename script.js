// script.js
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
    const weekDiv = document.createElement("div");
    weekDiv.classList.add("week-group");

    const weekTitle = document.createElement("div");
    weekTitle.classList.add("week-title");
    weekTitle.textContent = `Week of ${week}`;
    weekDiv.appendChild(weekTitle);

    weekEvents.forEach(e => {
      const card = document.createElement("div");
      card.classList.add("event-card");
      card.innerHTML = `
        <h3>${e.title}</h3>
        <div class="event-meta">${e.date} • ${e.time} • ${e.location}</div>
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

  // Filter buttons
  document.querySelectorAll("#event-filters button").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll("#event-filters button").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      renderEvents(btn.dataset.category);
    });
  });
});
