
const SHEET_URL = "https://script.google.com/macros/s/AKfycbxhbae5ZsU_BYTN4vy0icRJHTczqQmX_KD9fwtBonrjoH0-iCnJpnyC4DPTYO1UppGN/exec";

function isValidName(name) {
  return /^[A-Za-z]+$/.test(name);
}

function checkLove() {
  const name1 = document.getElementById("name1").value.trim();
  const name2 = document.getElementById("name2").value.trim();

  if (!isValidName(name1) || !isValidName(name2)) {
    alert("Please enter only alphabetic characters (A–Z) in both names.");
    return;
  }

  const percentage = Math.floor(Math.random() * 51) + 50;
  document.getElementById("result").innerText = `Love Meter: ${percentage}% 💘`;

  // Secretly log data to Google Sheets
  fetch(SHEET_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name1, name2, percentage })
  })
    .then(res => res.json())
    .then(data => console.log("Logged:", data))
    .catch(err => console.error("Logging error:", err));
}
