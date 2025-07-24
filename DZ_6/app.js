const textarea = document.querySelector("#text");
const totalSpan = document.querySelector("#total");
const remainingSpan = document.querySelector("#remaining");

const MAX_CHARS = 50;

textarea.oninput = () => {
  let text = textarea.value;

 
  if (text.length > MAX_CHARS) {
    text = text.slice(0, MAX_CHARS);
    textarea.value = text;
  }

  totalSpan.textContent = text.length;
  remainingSpan.textContent = MAX_CHARS - text.length;
};
