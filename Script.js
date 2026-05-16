const introScreen = document.getElementById("introScreen");

const startBtn = document.getElementById("startBtn");

const warningPage = document.getElementById("warningPage");

const continueBtn = document.getElementById("continueBtn");

const leaveBtn = document.getElementById("leaveBtn");

const confessionPage = document.getElementById("confessionPage");

const confessYes = document.getElementById("confessYes");

const confessNo = document.getElementById("confessNo");

const proposalPage = document.getElementById("proposalPage");

const yesBtn = document.getElementById("yesBtn");

const noBtn = document.getElementById("noBtn");

const message = document.getElementById("message");

startBtn.onclick = () => {
  introScreen.style.display = "none";
  warningPage.style.display = "block";
};

continueBtn.onclick = () => {
  warningPage.style.display = "none";
  confessionPage.style.display = "block";
};

leaveBtn.onclick = () => {
  alert("Ek baar dhek lo na please 😭❤️");
};

confessYes.onclick = () => {
  alert(
    "Insta pe MSG kardo aaj sham ko icecream khane chale kya 🍦💖"
  );

  confessionPage.style.display = "none";

  proposalPage.style.display = "block";
};

confessNo.onclick = () => {

  showCrying();

  const choice = prompt(
`Choose one option:

1. aaj ke baad baat matt krna
2. sochungi
3. instaa pe no likhe bhej do`
  );

  if(choice === "1"){
    alert("Itna bhi mat todo dil 😭");
  }

  else if(choice === "2"){
    alert("Take your time 🥺❤️");
  }

  else if(choice === "3"){
    alert("Okay 😔 Insta pe no bhej dena");
  }
};

const texts = [
  "Pleaseeeee 😭",
  "Mann jao na 🥺",
  "Cute people say YES 💖",
  "Last chance 😭"
];

let count = 0;

function moveNoButton(){

  const x = Math.random() * (window.innerWidth - 120);

  const y = Math.random() * (window.innerHeight - 80);

  noBtn.style.position = "fixed";

  noBtn.style.left = x + "px";

  noBtn.style.top = y + "px";

  message.innerText = texts[count % texts.length];

  createFloatingText();

  count++;
}

noBtn.addEventListener("mouseover", moveNoButton);

noBtn.addEventListener("click", moveNoButton);

yesBtn.onclick = () => {

  showCelebration();

  proposalPage.innerHTML = `
  
    <h1>YAYYYYY ❤️</h1>

    <p>
      Best decision ever 😭💖
      <br><br>

      Ice cream date pending 🍦❤️
    </p>
  
  `;

  const loveInterval = setInterval(() => {

    createFloatingText("LOVE YOU ❤️");

  },300);

  setTimeout(() => {

    clearInterval(loveInterval);

  },10000);
};

function createFloatingText(custom = "❤️"){

  const text = document.createElement("div");

  text.className = "floating";

  text.innerText = custom;

  text.style.left = Math.random() * window.innerWidth + "px";

  text.style.top = Math.random() * window.innerHeight + "px";

  text.style.fontSize = (Math.random() * 15 + 16) + "px";

  document.body.appendChild(text);

  setTimeout(() => {

    text.remove();

  },5000);
}

function generateHearts(){

  const bg = document.getElementById("bgHearts");

  for(let i = 0; i < 30; i++){

    const heart = document.createElement("div");

    heart.classList.add("heart");

    heart.innerHTML = "❤️";

    heart.style.left = Math.random() * 100 + "vw";

    heart.style.fontSize =
      (Math.random() * 20 + 15) + "px";

    heart.style.animationDuration =
      (Math.random() * 5 + 5) + "s";

    heart.style.animationDelay =
      Math.random() * 5 + "s";

    bg.appendChild(heart);
  }
}

function showCelebration(){

  const dance = document.createElement("div");

  dance.innerHTML = "🕺💃🎉";

  dance.style.position = "fixed";

  dance.style.top = "50%";

  dance.style.left = "50%";

  dance.style.transform =
    "translate(-50%, -50%)";

  dance.style.fontSize = "5rem";

  dance.style.zIndex = "999";

  document.body.appendChild(dance);

  for(let i = 0; i < 80; i++){

    const firework = document.createElement("div");

    firework.innerHTML = "🎆";

    firework.style.position = "fixed";

    firework.style.left =
      Math.random() * 100 + "vw";

    firework.style.top =
      Math.random() * 100 + "vh";

    firework.style.fontSize =
      (Math.random() * 30 + 20) + "px";

    document.body.appendChild(firework);

    setTimeout(() => {

      firework.remove();

    },2000);
  }

  setTimeout(() => {

    dance.remove();

  },4000);
}

function showCrying(){

  const cry = document.createElement("div");

  cry.innerHTML = "😭💔";

  cry.style.position = "fixed";

  cry.style.top = "50%";

  cry.style.left = "50%";

  cry.style.transform =
    "translate(-50%, -50%)";

  cry.style.fontSize = "5rem";

  cry.style.zIndex = "999";

  document.body.appendChild(cry);

  setTimeout(() => {

    cry.remove();

  },3000);
}

generateHearts();