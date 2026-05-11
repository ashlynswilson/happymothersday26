const photoCount = 59;
const videos = [
  {
    src: "IMG_0716.mov",
    thumb: "video-1.jpg"
  },
  {
    src: "IMG_0749.mov",
    thumb: "video-2.jpg"
  },
  {
    src: "IMG_1195.mov",
    thumb: "video-3.jpg"
  }
];

const reasons = [
  "You shop & grow fresh produce to keep us healthy",
  "You make tasty meals for us every night",
  "You'd wake up at 5am any day to make sure I had a fun volleyball experience",
  "You put down anything you're doing to answer my call",
  "You'll always listen to what's wrong (even if you're mad at me)",
  "You ALWAYS make me feel loved",
  "I'm always able to tell you anything at any hour",
  "You care about things that are important to me even if they're not important to you",
  "You smile and nod through my crazy ideas even though you'd never live in van",
  "You put up with hearing about college for years oops haha",
  "You created our happy family",
  "You make us any meal we could possibly want just to make us happy",
  "You always think about the happiness of those around you first",
  "You're the head of the household and keep our family together through difficult moments",
  "You're always on my side",
  "You taught me the importance of learning and made me fall in love with school",
  "You've always provided a safe place for me and my friends no matter what",
  "You always keep a stocked kitchen for when I want to bake and have friends over",
  "You taught me to read no matter how much I complained about that stupid orange rabbit easy-reader book because you knew it was good for me",
  "You've raised me to be a strong, capable, independent woman and I'm proud of who I've become because of you <3"
];

const momisms = [
  "\"Did you clean your room? You'll feel better!\"",
  "\"Did you take out the trash? Daddy's gonna want you to take those out before the morning!\"",
  "\"blah blah... Just be nice\"",
  "*sometimes it's just silence*",
  "\"Look at the cute strawberries from my garden!!\"",
  "\"I'm going to remove all the rocks from the waterfall.. ASHLYN COME HELP ME GET THESE ROCKSSS\"",
  "\"I could use a mountain hot chocolate break, my toes are cold!!\"",
  "\"burrr it's chilly, CLAY CAN I HAVE YOUR JACKET\"",
  "\"Tuesday-night wine please\"",
  "\"I think we should watch Mission Impossible 14\"",
  "\"Look at this super ripe avocado! Didn't I time it perfectly?! I used this new trick..\"",
  "\"DONT TOUCH THAT WATERMELON! It's not going to be ripe until 36 hours from now!\"",
  "\"Did you seriously eat just a tortilla??\"",
  "\"WILL SOMEONE FINISH SYDNEY'S FOLDS!! It's the envelope fold this time, every 30 minutes. Don't miss it because she'll get mad!!!!!\"",
  "\"The yellow beans are from my garden everyone\"",
  "\"Stop procrastinating and go do your homework\""
];

const songs = [
  ["Just the Way You Are", "Bruno Mars"],
  ["Talking to the Moon", "Bruno Mars"],
  ["Risk it All", "Bruno Mars"],
  ["Dive", "Olivia Dean"],
  ["All My Love", "Noah Kahan"],
  ["Love Song", "Sara Bareilles"],
  ["Ophelia", "The Lumineers"],
  ["This Love", "Maroon 5"],
  ["Fine By Me", "Andy Grammer"],
  ["Time After Time", "Cyndi Lauper"],
  ["Your Love", "The Outfield"],
  ["Look At That Woman", "ROLE MODEL"],
  ["She Sets The City On Fire", "Gavin DeGraw"],
  ["Underneath It All", "No Doubt"],
  ["She Will Be Loved", "Maroon 5"]
];

const albumLooks = [
  ["#ff6f91", "#ffd166", "JW"],
  ["#2ec4b6", "#b8f7ff", "TM"],
  ["#118ab2", "#ff9a7a", "RA"],
  ["#06d6a0", "#f7d6ff", "DV"],
  ["#ef476f", "#ffd6a5", "AM"],
  ["#ffafcc", "#bde0fe", "LS"],
  ["#8338ec", "#3a86ff", "OP"],
  ["#fb5607", "#ffbe0b", "TL"],
  ["#4cc9f0", "#f72585", "FM"],
  ["#7209b7", "#fdfcdc", "TA"],
  ["#00b4d8", "#90be6d", "YL"],
  ["#ffcad4", "#00bbf9", "LW"],
  ["#f15bb5", "#fee440", "SC"],
  ["#00f5d4", "#9b5de5", "UA"],
  ["#ff595e", "#1982c4", "SL"]
];

const songCache = new Map();

const recipes = [
  "Sydney Sourdough Bread",
  "Gyros",
  "Strawberries",
  "Pepper Steak Sandwiches",
  "Breakfast Burritos",
  "Cocovan",
  "Angel Food Cake",
  "Fruits",
  "Oven Roasted Veggies",
  "Anything but Quinoa"
];

const adventures = [
  "Beach days",
  "Alaskan Cruise",
  "Bagel Runs",
  "Back-to-School shopping",
  "Ashlyn's Acai Bowls",
  "Pasta Primavera with home grown veggies",
  "Warf-to-Warf Run",
  "Movie Nights with popcorn and candy bowls",
  "Family Game Nights",
  "Sunday Night Dinners together",
  "Ashlyn's Grocery Delivery Service",
  "Cooking Dinners together (I've got some new skills)",
  "Hosting Summer BBQs"
];

const $ = (selector) => document.querySelector(selector);

function initSurprise() {
  document.body.classList.add("locked");
  $("#revealButton").addEventListener("click", (event) => {
    createButtonBurst(event.currentTarget);
    $("#surprise").classList.add("hidden");
    document.body.classList.remove("locked");
    fireConfetti(190);
  });
}

function initGallery() {
  const gallery = $("#gallery");
  const classes = ["large", "", "wide", "", "tall", "", "", "wide", "", "large"];
  const memories = [];

  for (let i = 1; i <= photoCount; i += 1) {
    memories.push({
      type: "photo",
      src: `memory-${String(i).padStart(2, "0")}.jpg`,,
      label: `Open memory photo ${i}`
    });
  }

  memories.splice(7, 0, videos[0]);
  memories.splice(22, 0, videos[1]);
  memories.splice(41, 0, videos[2]);

  memories.forEach((memory, index) => {
    const button = document.createElement("button");
    button.className = `photo-tile ${classes[index % classes.length]}`.trim();
    button.type = "button";
    button.setAttribute("aria-label", memory.label || "Open memory video");
    button.innerHTML = `<img src="${memory.thumb || memory.src}" alt="Family memory ${index + 1}" loading="lazy">`;
    button.addEventListener("click", () => {
      if (memory.type === "video" || memory.thumb) {
        openVideo(memory.src);
      } else {
        openPhoto(memory.src);
      }
    });
    gallery.appendChild(button);
  });
}

function openPhoto(src) {
  $("#lightboxMedia").innerHTML = `<img src="${src}" alt="Expanded family memory" />`;
  openLightbox();
}

function openVideo(src) {
  $("#lightboxMedia").innerHTML = `<video controls autoplay playsinline src="${src}"></video>`;
  openLightbox();
}

function openLightbox() {
  $("#lightbox").classList.add("open");
  $("#lightbox").setAttribute("aria-hidden", "false");
}

function closeLightbox() {
  $("#lightbox").classList.remove("open");
  $("#lightbox").setAttribute("aria-hidden", "true");
  $("#lightboxMedia").innerHTML = "";
}

function initReasons() {
  let last = 0;
  $("#reasonButton").addEventListener("click", (event) => {
    let next = Math.floor(Math.random() * reasons.length);
    if (next === last) next = (next + 1) % reasons.length;
    last = next;
    $("#reasonOutput").textContent = reasons[next];
    pulseText("#reasonOutput");
    createButtonBurst(event.currentTarget);
    fireConfetti(55);
  });
}

function initMomisms() {
  let last = 0;
  $("#momismButton").addEventListener("click", (event) => {
    let next = Math.floor(Math.random() * momisms.length);
    if (next === last) next = (next + 1) % momisms.length;
    last = next;
    $("#momism").textContent = momisms[next];
    pulseText("#momism");
    createButtonBurst(event.currentTarget);
    fireConfetti(45);
  });
}

function initDashboard() {
  $("#songs").innerHTML = songs
    .map(([title, artist], index) => {
      const query = encodeURIComponent(`${title} ${artist}`);
      const [first, second, initials] = albumLooks[index % albumLooks.length];
      return `
        <button class="song" type="button" data-index="${index}" data-title="${title}" data-artist="${artist}" data-spotify="https://open.spotify.com/search/${query}" style="--album-a: ${first}; --album-b: ${second}">
          <span class="album-cover" aria-hidden="true"><b>${initials}</b></span>
          <span class="song-copy"><strong>${title}</strong><small>${artist}</small></span>
        </button>
      `;
    })
    .join("");

  initSongs();

  $("#recipes").innerHTML = recipes.map((item, index) => checklistItem(item, `meal-${index}`)).join("");
  $("#adventures").innerHTML = adventures.map((item, index) => checklistItem(item, `adventure-${index}`)).join("");
}

function initSongs() {
  const audio = $("#audioPlayer");
  const playerCover = $("#playerCover");
  const playerStatus = $("#playerStatus");
  const playerTitle = $("#playerTitle");
  const playerArtist = $("#playerArtist");

  $("#songs").addEventListener("click", async (event) => {
    const songButton = event.target.closest(".song");
    if (!songButton) return;

    const { title, artist, spotify } = songButton.dataset;
    const key = `${title}|${artist}`;
    document.querySelectorAll(".song.is-playing").forEach((song) => song.classList.remove("is-playing"));
    songButton.classList.add("is-loading");
    playerStatus.textContent = "Finding the cutest playable preview...";
    playerTitle.textContent = title;
    playerArtist.textContent = artist;
    createButtonBurst(songButton);

    try {
      const songData = songCache.get(key) || await fetchSongPreview(title, artist);
      songCache.set(key, songData);
      updateSongArtwork(songButton, songData);

      if (!songData.previewUrl) {
        playerStatus.innerHTML = `No preview popped up for this one, but <a href="${spotify}" target="_blank" rel="noreferrer">Spotify has it here</a>.`;
        audio.removeAttribute("src");
        audio.load();
        return;
      }

      playerCover.innerHTML = songData.artworkUrl100 ? `<img src="${songData.artworkUrl100.replace("100x100bb", "300x300bb")}" alt="">` : "play";
      playerStatus.textContent = "Now playing a little preview";
      playerTitle.textContent = songData.trackName || title;
      playerArtist.textContent = songData.artistName || artist;
      audio.src = songData.previewUrl;
      await audio.play();
      songButton.classList.add("is-playing");
      fireConfetti(35);
    } catch (error) {
      playerStatus.innerHTML = `This preview is being shy. <a href="${spotify}" target="_blank" rel="noreferrer">Open it on Spotify</a>.`;
      audio.removeAttribute("src");
      audio.load();
    } finally {
      songButton.classList.remove("is-loading");
    }
  });

  audio.addEventListener("ended", () => {
    document.querySelectorAll(".song.is-playing").forEach((song) => song.classList.remove("is-playing"));
  });

  hydrateSongCovers();
}

async function fetchSongPreview(title, artist) {
  const term = encodeURIComponent(`${title} ${artist}`);
  const response = await fetch(`https://itunes.apple.com/search?term=${term}&media=music&entity=song&limit=1&country=US`);
  if (!response.ok) throw new Error("Song preview lookup failed");
  const data = await response.json();
  return data.results?.[0] || {};
}

function updateSongArtwork(songButton, songData) {
  if (!songData.artworkUrl100) return;
  const cover = songButton.querySelector(".album-cover");
  const art = songData.artworkUrl100.replace("100x100bb", "300x300bb");
  cover.innerHTML = `<img src="${art}" alt="">`;
  cover.classList.add("has-art");
}

function hydrateSongCovers() {
  document.querySelectorAll(".song").forEach((songButton, index) => {
    window.setTimeout(async () => {
      const { title, artist } = songButton.dataset;
      const key = `${title}|${artist}`;
      try {
        const songData = songCache.get(key) || await fetchSongPreview(title, artist);
        songCache.set(key, songData);
        updateSongArtwork(songButton, songData);
      } catch (error) {
        // The colorful handmade covers stay in place if the preview lookup is unavailable.
      }
    }, 160 * index);
  });
}

function checklistItem(item, id) {
  return `
    <label class="check-item" for="${id}">
      <input id="${id}" type="checkbox">
      <span>${item}</span>
    </label>
  `;
}

function pulseText(selector) {
  const element = $(selector);
  element.classList.remove("is-changing");
  window.requestAnimationFrame(() => {
    element.classList.add("is-changing");
  });
}

function initConfetti() {
  $("#confettiButton").addEventListener("click", (event) => {
    createButtonBurst(event.currentTarget);
    fireConfetti(170);
  });
}

function initFinale() {
  $("#finaleButton").addEventListener("click", (event) => {
    createButtonBurst(event.currentTarget);
    fireConfetti(260);
    window.setTimeout(openLetter, 850);
  });

  $("#closeLetter").addEventListener("click", closeLetter);
  $("#letterModal").addEventListener("click", (event) => {
    if (event.target.id === "letterModal") closeLetter();
  });
}

function initSecretDolphin() {
  $("#secretDolphin").addEventListener("click", (event) => {
    createButtonBurst(event.currentTarget);
    fireConfetti(80);
    showSecretMessage();
  });
}

function openLetter() {
  $("#letterModal").classList.add("open");
  $("#letterModal").setAttribute("aria-hidden", "false");
}

function closeLetter() {
  $("#letterModal").classList.remove("open");
  $("#letterModal").setAttribute("aria-hidden", "true");
}

function showSecretMessage() {
  const oldMessage = document.querySelector(".secret-message");
  if (oldMessage) oldMessage.remove();

  const message = document.createElement("div");
  message.className = "secret-message";
  message.innerHTML = `<img src="smile-meme.png" alt="Hello, hope I made you smile meme">`;
  document.body.appendChild(message);

  window.setTimeout(() => message.classList.add("show"), 20);
  window.setTimeout(() => {
    message.classList.remove("show");
    window.setTimeout(() => message.remove(), 260);
  }, 3600);
}

function initChecklistBursts() {
  document.addEventListener("change", (event) => {
    if (event.target.matches(".check-item input")) {
      createButtonBurst(event.target.closest(".check-item"));
    }
  });
}

function createButtonBurst(target) {
  const rect = target.getBoundingClientRect();
  const burst = document.createElement("div");
  burst.className = "button-burst";
  burst.style.left = `${rect.left + rect.width / 2}px`;
  burst.style.top = `${rect.top + rect.height / 2}px`;

  for (let i = 0; i < 18; i += 1) {
    const piece = document.createElement("span");
    const angle = (Math.PI * 2 * i) / 18;
    const distance = 44 + Math.random() * 58;
    piece.className = i % 3 === 0 ? "burst-piece flower-piece" : "burst-piece";
    piece.style.setProperty("--x", `${Math.cos(angle) * distance}px`);
    piece.style.setProperty("--y", `${Math.sin(angle) * distance}px`);
    piece.style.setProperty("--r", `${Math.random() * 220 - 110}deg`);
    piece.style.setProperty("--c", ["#ff4f9a", "#ffe66d", "#38d5ff", "#48ead6", "#ff9a7a"][i % 5]);
    burst.appendChild(piece);
  }

  document.body.appendChild(burst);
  window.setTimeout(() => burst.remove(), 900);
}

function fireConfetti(count = 120) {
  const canvas = $("#confetti");
  const ctx = canvas.getContext("2d");
  const ratio = window.devicePixelRatio || 1;
  canvas.width = window.innerWidth * ratio;
  canvas.height = window.innerHeight * ratio;
  ctx.scale(ratio, ratio);

  const colors = ["#1eb7d7", "#073b5d", "#ff9a7a", "#ff6f61", "#f7dca1", "#4f8f52"];
  const pieces = Array.from({ length: count }, () => ({
    x: Math.random() * window.innerWidth,
    y: -20 - Math.random() * window.innerHeight * 0.35,
    size: 5 + Math.random() * 9,
    color: colors[Math.floor(Math.random() * colors.length)],
    speed: 2 + Math.random() * 4,
    angle: Math.random() * Math.PI,
    spin: -0.16 + Math.random() * 0.32
  }));

  let frame = 0;
  function animate() {
    frame += 1;
    ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
    pieces.forEach((piece) => {
      piece.y += piece.speed;
      piece.x += Math.sin((frame + piece.y) / 28) * 1.5;
      piece.angle += piece.spin;
      ctx.save();
      ctx.translate(piece.x, piece.y);
      ctx.rotate(piece.angle);
      ctx.fillStyle = piece.color;
      ctx.fillRect(-piece.size / 2, -piece.size / 2, piece.size, piece.size * 0.58);
      ctx.restore();
    });

    if (frame < 180) {
      requestAnimationFrame(animate);
    } else {
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
    }
  }
  animate();
}

function initLightbox() {
  $("#closeLightbox").addEventListener("click", closeLightbox);
  $("#lightbox").addEventListener("click", (event) => {
    if (event.target.id === "lightbox") closeLightbox();
  });
  window.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeLightbox();
    if (event.key === "Escape") closeLetter();
  });
}

initSurprise();
initGallery();
initReasons();
initMomisms();
initDashboard();
initConfetti();
initLightbox();
initChecklistBursts();
initFinale();
initSecretDolphin();
