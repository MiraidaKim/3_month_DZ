const lessons = [
  {
    number: 1,
    date: "20.07.2025",
    time: "22:00"
  },
  {
    number: 2,
    date: "14.07.2025",
    time: "19:00"
  },
  {
    number: 3,
    date: "11.07.2025",
    time: "19:00"
  },
  {
    number: 4,
    date: "07.07.2025",
    time: "19:00"
  },
  {
    number: 5,
    date: "22.07.2025",
    time: "20:00"
  },
  {
    number: 6,
    date: "25.07.2025",
    time: "21:00"
  },
  {
    number: 7,
    date: "28.07.2025",
    time: "18:00"
  },
  {
    number: 8,
    date: "30.07.2025",
    time: "19:00"
  }
];

const lessonsContainer = document.getElementById("lessonsContainer");

function createLessonCard({ number, date, time }) {
  const card = document.createElement("div");
  card.classList.add("card");

  if (number <= 5) {
    card.classList.add("completed");
  }

  card.innerHTML = `
    <h3>Урок №${number}</h3>

    <div class="datetime">
      <span>Дата: ${date}</span>
      <span>${time}</span>
    </div>
  `;
  return card;
}

const cards = lessons.map(createLessonCard);
lessonsContainer.append(...cards);
