function changeGift() {
  const giftDiv = document.getElementById("gift");
  const gifts = {
    1: { emoji: "🌹", text: "A single rose just for you" },
    2: { emoji: "🍫", text: "sweet chocolates just for you" },
    3: { emoji: "🎶", text: "I want to listen to love songs just with you" },
    4: { emoji: "✨", text: "I want to spend magical moments with you" },
    5: { emoji: "💎", text: "You are my gem" },
    6: { emoji: "☕", text: "Want to have a amajing coffee date with you" },
    7: { emoji: "🌻", text: "I want to go to sunflower garden with you" },
    8: { emoji: "🎨",text: "I want to draw with beautiful colors that remind me of you" },
    9: { emoji: "💌", text: "I want to give heartfelt letters to you" },
    10: { emoji: "🎁", text: "I want to gift thoughtful gifts to you" },
    11: { emoji: "🌙", text: "I get moonlit nights to dream of you" },
    12: { emoji: "❤️", text: "These are the reasons why I adore you" },
  };

  const days = Object.keys(gifts);
  const randomDay = days[Math.floor(Math.random() * days.length)];
  const { emoji, text } = gifts[randomDay];

  giftDiv.innerHTML = `<span>${emoji}<span><p>${text}</p>`;
}

document.getElementById("cube").addEventListener("click", function () {
  this.classList.toggle("active");
  if (!this.classList.contains("active")) {
    changeGift();
  }
});

document.addEventListener("DOMContentLoaded", function () {
  changeGift();

  const cube = document.getElementById("cube");
  cube.classList.add("active");
  setTimeout(() => {
    cube.classList.remove("active");
  }, 3000);
});
