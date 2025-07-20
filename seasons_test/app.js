const seasonsData = {
  Winter: {
    months: ["December", "January", "February"],
   bg: "url('https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1470&q=80')"
  },
  Spring: {
    months: ["March", "April", "May"],
    bg: "url('https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=1470&q=80')"
  },
  Summer: {
    months: ["June", "July", "August"],
    bg: "url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1470&q=80')"
  },
  Autumn: {
    months: ["September", "October", "November"],
    bg: "url('https://images.unsplash.com/photo-1477414348463-c0eb7f1359b6?auto=format&fit=crop&w=1470&q=80')"
  }
};

const seasonsContainer = document.getElementById("seasonsContainer");
const monthsContainer = document.getElementById("monthsContainer");

Object.keys(seasonsData).map((season) => {
  const btn = document.createElement("button");
  btn.textContent = season;
  btn.classList.add(season.toLowerCase());
  btn.onclick = () => showSeason(season);
  seasonsContainer.appendChild(btn);
});

function showSeason(season) {
  const { months, bg } = seasonsData[season];
  document.body.style.backgroundImage = bg;

  monthsContainer.innerHTML = "";
  months.map((month) => {
    const btn = document.createElement("button");
    btn.textContent = month;
    btn.classList.add(season.toLowerCase());
    monthsContainer.appendChild(btn);
  });
}
