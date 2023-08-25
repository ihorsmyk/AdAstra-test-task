const dateTime = (dateSelector, timeSelector) => {
  const update = () => {
    const now = new Date();
    
    const day = now.getDate().toString().padStart(2, "0");
    const month = (now.getMonth() + 1).toString().padStart(2, "0");
    const year = now.getFullYear();

    const hours = now.getHours().toString().padStart(2, "0");
    const minutes = now.getMinutes().toString().padStart(2, "0");
    const seconds = now.getSeconds().toString().padStart(2, "0");

    document.querySelector(dateSelector).innerHTML = `${day}.${month}.${year}`;
    document.querySelector(timeSelector).innerHTML = `${hours}:${minutes}:${seconds}`;
  };

  update();
  setInterval(update, 1000);
};

window.addEventListener("DOMContentLoaded", () => {
  "use strict";
  dateTime(".date", ".time");
});
