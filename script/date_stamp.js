const today = new Date();
const options = { year: 'numeric', month: 'long', day: 'numeric' };
const dateElement = document.getElementById("today-date");
if (dateElement) {
  dateElement.textContent = today.toLocaleDateString(undefined, options);
}
