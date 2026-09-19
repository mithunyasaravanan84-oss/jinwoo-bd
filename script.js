/* =========================================================
   💜 JINWOO BIRTHDAY WEBSITE
   PERSONALIZATION GUIDE
   ---------------------------------------------------------
   You only need to edit the content in this section.
   Everything below (until the "DO NOT EDIT BELOW" line)
   is data — the website builds itself from it.

   Replace:
   1. Names               -> siteData.herName / siteData.yourName
   2. Photos / Videos     -> put files in the media/ folder and
                              update the "file" paths below
   3. Captions            -> edit the "caption" text on any item
   4. Memories            -> edit/add to the `memories` array
   5. 20 Things           -> edit the `twentyThings` array
   6. Secret Password     -> siteData.secretPassword
   7. Birthday Letter     -> edit the `finalLetter` string
   8. Future Messages     -> edit the `futureMessages` object
   9. Music               -> siteData.backgroundMusic
  10. New timeline events -> add another object to `memories`
   ========================================================= */

const siteData = {
    herName: "Jinwoo",
    yourName: "fiel amigo",
    birthDate: "20 September 2006",
    meetingYear: "2024",
    birthdayDate: "20 September 2026",
    age: 20,

    // Full-screen video behind the hero name. MP4, ideally muted-friendly.
    introVideo: "media/intro.mp4",
    // Plays near the very end of the site, after the letter.
    finalVideo: "media/final.mp4",
    // Background song. Never autoplays — Jinwoo has to press play.
    backgroundMusic: "media/music.mp3",

    // Whatever you tell Jinwoo to type into the "Secret Memory" section.
    secretPassword: "just you and i"
};

/* ---------------------------------------------------------
   MEMORIES
   Powers both "Our Timeline" (section 5) and the
   "Memory Cinema" carousel (section 6).
   type: "image" or "video"
   --------------------------------------------------------- */
const memories = [
    {
        date: "2024",
        title: "The Design Thinking Session",
        type: "image",
        file: "media/memory01.jpg",
        caption: "Where it all started — one session, and somehow there was you."
    },
    {
        date: "2024",
        title: "The Industrial Visit",
        type: "image",
        file: "media/memory02.jpg",
        caption: "That late-night talk during the industrial visit — still one of my favourite memories."
    },
    {
        date: "2025",
        title: "Our Little Art",
        type: "image",
        file: "media/memory03.jpg",
        caption: "Random drawings on our hands and notebooks. Nobody else would get why these mattered."
    },
    {
        date: "2025",
        title: "Just Being Crazy",
        type: "video",
        file: "media/memory04.mp4",
        caption: "The moment normal behaviour disappeared and we became completely, unapologetically us."
    }
];

/* ---------------------------------------------------------
   "DO YOU REMEMBER?" MOMENTS (section 7)
   Photo starts blurred, then reveals on click.
   --------------------------------------------------------- */
const rememberMoments = [
    {
        media: "media/rememer01.jpg",
        type: "image",
        question: "Do you remember the Design Thinking session?",
        caption: "Neither of us knew that day would matter this much."
    },
    {
        media: "media/rememer02.jpg",
        type: "image",
        question: "What about the industrial visit?",
        caption: "That late-night talk. \"Thangomeyy.\" Need I say more?"
    },
    {
        media: "media/rememer03.jpg",
        type: "image",
        question: "And this one?",
        caption: "Exhibit A of us being completely unhinged together."
    }
];

/* ---------------------------------------------------------
   THE LITTLE THINGS — scrapbook collage (section 8)
   Add as many as you like: photos, screenshots, whatever.
   type: "image" or "video"
   --------------------------------------------------------- */
const littleThings = [
    { file: "media/little01.jpg", type: "image", caption: "Random pic on our usual days again." },
    { file: "media/little02.jpg", type: "image", caption: "This exact face, right before you say something ridiculous." },
    { file: "media/little03.jpg", type: "image", caption: "Another \"Thangomeyy\" moment, obviously." },
    { file: "media/little04.jpg", type: "image", caption: "Proof we can't act normal for five minutes." },
    { file: "media/little05.jpg", type: "image", caption: "A very serious conversation, probably about nothing." },
    { file: "media/little06.jpg", type: "image", caption: "This one's just happy, smile." }
];

/* ---------------------------------------------------------
   THE RECEIPTS — chat screenshots (section 9)
   --------------------------------------------------------- */
const chatMemories = [
    { image: "media/chat01.jpg", caption: "This conversation still makes me laugh." },
    { image: "media/chat02.jpg", caption: "We really thought this made sense." },
    { image: "media/chat03.jpg", caption: "Peak \"Thangomeyy\" energy right here." }
];

/* ---------------------------------------------------------
   20 THINGS I LOVE ABOUT YOU (section 10)
   Add exactly 20 short lines for a full grid (fewer also works).
   --------------------------------------------------------- */
   
const twentyThings = [
    "<strong>Design Thinking</strong><br>Where it all began. ❤️",
    "<strong>Two Years</strong><br>Two years, countless memories. 🫶🏻",
    "<strong>Same-Same</strong><br>You're basically my other version. 😂",
    "<strong>Our Crazy Side</strong><br>Normal? Never when we're together. 😂",
    "<strong>Industrial Visit</strong><br>That late-night talk. Unforgettable. ❤️",
    "<strong>Thangomeyy</strong><br>One word. So many memories. ❤️",
    "<strong>Being Crazy</strong><br>Always crazy. Always us. 🫂",
    "<strong>Little Reactions</strong><br>Your reactions are priceless. 😌",
    "<strong>Your Smile</strong><br>One of my favourite things. ❤️",
    "<strong>Always Supporting</strong><br>Thank you for always being there. 🫶🏻",
    "<strong>Your Frankness</strong><br>Always honest. Always genuine. ❤️",
    "<strong>Your Crazy</strong><br>Annoying to others, special to me. 😂❤️",
    "<strong>Our Little Art</strong><br>Small drawings, big memories. 🎨",
    "<strong>You're Special</strong><br>No one can take your place. ❤️",
    "<strong>My Well-Wisher</strong><br>Always wishing the best for me. 🫶🏻",
    "<strong>Our Bond</strong><br>Thank you for this beautiful bond. ❤️",
    "<strong>My Promise</strong><br>I'll always be there for you. 🫂",
    "<strong>You Mean A Lot</strong><br>More than you probably know. ❤️",
    "<strong>Best Duo</strong><br>Definitely my favourite duo. 😌🫶🏻",
    "<strong>My Comfort Soul</strong><br>You make everything feel better. ❤️"
];

/* ---------------------------------------------------------
   SECRET MEMORY (section 13) — unlocked with siteData.secretPassword
   --------------------------------------------------------- */
const secretMemory = {
    type: "image", // "image" or "video"
    file: "media/secret.jpg",
    message: "This one's just for you. Out of everything, it's the moment I'd never want to forget."
};

/* ---------------------------------------------------------
   THE LETTER (section 15)
   Write it however you actually want to say it.
   --------------------------------------------------------- */
const finalLetter = `Hey Thangomeyy,

Happy 20th! ❤️

I just hope this year brings you lots of happiness, good experiences, and everything you're working for. Stay the same genuine, crazy and happy person you are. Don't change the little things that make you you.

I'm really happy that I met you and got to experience this beautiful bond with you. Here's to more random talks, crazy moments, drawings, memories and years together. 🫶🏻

Take care of yourself, keep smiling, and always remember that I'm here for you.

With love,
fiel amigo 💓`;

/* ---------------------------------------------------------
   FUTURE TIME CAPSULE (section 16)
   --------------------------------------------------------- */
const futureMessages = {
    25: `Hey Thangomeyy,

So you're 25 now 😂. I wonder how much you've changed from the girl I know at 20.

I hope you're still the same person who can suddenly become crazy for no reason and make me laugh. I hope you're still drawing random things on your hands and notebooks and still asking things directly without overthinking.

I don't know where life will take us by then, but I hope we still have those random conversations and laugh about our old memories.

And please don't become too mature. We need some craziness left. 😂❤️

— From your 20-year-old duo`,

    30: `Heyy, 30 already? 😂

By now, I'm sure a lot of things would have changed. Maybe our lives, our priorities, our places… everything.

But I hope whenever we meet, we can still talk like nothing changed.

I hope you still have that natural smile, that straightforward nature and, of course, that craziness that annoys everyone but somehow makes me happy. 😂

And I hope we still remember our industrial visit late-night talks and all those small things that made our friendship what it is.

Whatever happens, I hope we're still us. ❤️`,

    35: `Hey Thangomeyy,

35 huh? 😂 I really want to know what you're like now.

I hope you're happy with where you are. I hope you've done things you're proud of and you're still doing things that make you happy.

And I hope we're still that same crazy duo whenever we're together.

Maybe we won't remember every small thing that happened between 20 and 35, but I hope we still remember how this friendship started and how much fun we had being ourselves.

If you're reading this with me beside you, just look at me and laugh. That's enough. 😂❤️

And if I'm not beside you while you're reading this, just know that the girl who wrote this at 20 really meant it when she said:

"I never leave you." ❤️`
};

/* =========================================================
   DO NOT EDIT BELOW THIS LINE
   (unless you know what you're doing — this is the engine
   that turns the data above into the actual website)
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------- helpers ---------- */
  const $ = (sel, ctx = document) => ctx.querySelector(sel);
  const $$ = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));
  const el = (tag, cls, html) => {
    const n = document.createElement(tag);
    if (cls) n.className = cls;
    if (html !== undefined) n.innerHTML = html;
    return n;
  };
  const mediaTag = (item, className) => {
    if (item.type === "video") {
      const v = el("video", className);
      v.src = item.file; v.muted = true; v.loop = true; v.playsInline = true;
      v.preload = "metadata"; v.setAttribute("aria-label", item.caption || "memory video");
      return v;
    }
    const img = el("img", className);
    img.src = item.file; img.loading = "lazy"; img.alt = item.caption || "memory photo";
    return img;
  };

  /* ---------- fill in simple text from siteData ---------- */
  $("#heroName").textContent = siteData.herName.toUpperCase();
  $("#heroAge").textContent = siteData.age;
  document.title = `For ${siteData.herName} — ${siteData.age}`;
  const heroVideo = $("#heroVideo");
  if (siteData.introVideo) heroVideo.src = siteData.introVideo;
  const finalVideoEl = $("#finalVideo");
  if (siteData.finalVideo) finalVideoEl.src = siteData.finalVideo;
  const bgMusic = $("#bgMusic");
  if (siteData.backgroundMusic) bgMusic.src = siteData.backgroundMusic;

  /* ---------- starfield ---------- */
  (function stars() {
    const canvas = $("#stars");
    const ctx = canvas.getContext("2d");
    let w, h, pts;
    function size() {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
      const count = Math.min(140, Math.floor((w * h) / 14000));
      pts = Array.from({ length: count }, () => ({
        x: Math.random() * w, y: Math.random() * h,
        r: Math.random() * 1.2 + 0.2,
        s: Math.random() * 0.02 + 0.004,
        p: Math.random() * Math.PI * 2
      }));
    }
    function draw(t) {
      ctx.clearRect(0, 0, w, h);
      ctx.fillStyle = "#f3ecdf";
      pts.forEach(pt => {
        const alpha = reduceMotion ? 0.5 : 0.25 + Math.abs(Math.sin(pt.p + t * pt.s)) * 0.55;
        ctx.globalAlpha = alpha;
        ctx.beginPath();
        ctx.arc(pt.x, pt.y, pt.r, 0, Math.PI * 2);
        ctx.fill();
      });
      ctx.globalAlpha = 1;
      if (!reduceMotion) requestAnimationFrame(draw);
    }
    size();
    window.addEventListener("resize", size);
    requestAnimationFrame(draw);
  })();

  /* ---------- nav menu ---------- */
  const navToggle = $("#navToggle"), navMenu = $("#navMenu");
  navToggle.addEventListener("click", () => {
    const open = navMenu.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", open);
    navMenu.setAttribute("aria-hidden", !open);
  });
  $$("#navMenu a").forEach(a => {
    a.addEventListener("click", () => {
      navMenu.classList.remove("open");
      navToggle.setAttribute("aria-expanded", "false");
      const target = $(a.dataset.target);
      if (target) target.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth" });
    });
  });

  /* ---------- music control ---------- */
  const musicBtn = $("#musicToggle"), musicLabel = $("#musicLabel");
  let musicOn = false;
  musicBtn.addEventListener("click", () => {
    if (!siteData.backgroundMusic) return;
    musicOn = !musicOn;
    if (musicOn) { bgMusic.play().catch(() => {}); musicLabel.textContent = "MUSIC ON"; }
    else { bgMusic.pause(); musicLabel.textContent = "PLAY OUR SONG"; }
  });

  /* ============ SECTION 1 — LOADING ============ */
  const loadingScreen = $("#loading");
  const introScreen = $("#intro");
  const mainSite = $("#mainSite");

  $("#beginBtn").addEventListener("click", () => {
    loadingScreen.style.opacity = "0";
    loadingScreen.style.transition = "opacity .9s ease";
    setTimeout(() => {
      loadingScreen.hidden = true;
      introScreen.hidden = false;
      runIntro();
    }, 900);
  });

  /* ============ SECTION 2 — CINEMATIC INTRO ============ */
  function runIntro() {
    const seq = $("#introSequence");
    seq.innerHTML = "";
    const beats = [
      { text: "20 SEPTEMBER 2006", big: true },
      { text: "Two people were born." },
      { text: "They didn't know each other." },
      { text: "They didn't know their paths would cross." },
      { text: "2024", big: true },
      { text: "18 years later\u2026" },
      { text: "We met." },
      { media: true },
      { text: siteData.herName.toUpperCase(), big: true },
      { text: String(siteData.age), big: true },
      { text: `Happy Birthday to one of the most important people in my story.` }
    ];

    let i = 0;
    let currentNode = null;
    function nextBeat() {
      if (currentNode) currentNode.classList.remove("show");
      if (i >= beats.length) {
        setTimeout(finishIntro, reduceMotion ? 200 : 1200);
        return;
      }
      const beat = beats[i++];
      seq.innerHTML = "";
      if (beat.media) {
        const wrap = el("div", "memory-frame");
        const first = memories[0];
        if (first) wrap.appendChild(mediaTag(first, ""));
        seq.appendChild(wrap);
        currentNode = wrap;
      } else {
        const line = el("p", "line" + (beat.big ? " big" : ""), beat.text);
        seq.appendChild(line);
        currentNode = line;
      }
      requestAnimationFrame(() => requestAnimationFrame(() => currentNode.classList.add("show")));
      setTimeout(nextBeat, reduceMotion ? 400 : (beat.big ? 1900 : 2300));
    }
    nextBeat();

    $("#skipIntro").addEventListener("click", finishIntro, { once: true });
  }

  let introFinished = false;
  function finishIntro() {
    if (introFinished) return;
    introFinished = true;
    introScreen.style.opacity = "0";
    introScreen.style.transition = "opacity .9s ease";
    setTimeout(() => {
      introScreen.hidden = true;
      mainSite.hidden = false;
      heroVideo.play().catch(() => {});
      initScrollReveals();
    }, 900);
  }

  /* ============ SECTION 4 — BEFORE WE MET paths ============ */
  const beforeSection = $("#before-we-met");
  let pathsDrawn = false;
  function drawPaths() {
    if (pathsDrawn) return;
    pathsDrawn = true;
    $("#pathA").classList.add("draw");
    $("#pathB").classList.add("draw");
    setTimeout(() => $("#meetPoint").classList.add("show"), reduceMotion ? 0 : 2000);
    setTimeout(() => $("#crossedLine").classList.add("show"), reduceMotion ? 200 : 2500);
  }

  /* ============ SECTION 5 — TIMELINE ============ */
  const track = $("#timelineTrack");
  memories.forEach((m, idx) => {
    const item = el("div", "timeline-item");
    item.innerHTML = `
      <p class="timeline-date">${m.date}</p>
      <h3 class="timeline-title">${m.title}</h3>
      <div class="timeline-media"></div>
      <p class="timeline-caption">${m.caption}</p>
    `;
    item.querySelector(".timeline-media").appendChild(mediaTag(m, ""));
    track.appendChild(item);
  });

  /* ============ SECTION 6 — MEMORY CINEMA CAROUSEL ============ */
  const carTrack = $("#carouselTrack"), carDots = $("#carouselDots");
  let carIndex = 0;
  memories.forEach((m, idx) => {
    const slide = el("div", "carousel-slide" + (idx === 0 ? " active" : ""));
    const media = mediaTag(m, "slide-media");
    slide.appendChild(media);
    const text = el("div", "slide-text", `
      <p class="slide-eyebrow">MEMORY ${String(idx + 1).padStart(2, "0")}</p>
      <p class="slide-title">${m.title}</p>
      <p class="slide-caption">${m.caption}</p>
    `);
    slide.appendChild(text);
    carTrack.appendChild(slide);

    const dot = el("button", idx === 0 ? "active" : "");
    dot.setAttribute("aria-label", `Go to memory ${idx + 1}`);
    dot.addEventListener("click", () => showSlide(idx));
    carDots.appendChild(dot);
  });
  const slides = $$(".carousel-slide", carTrack);
  const dots = $$("button", carDots);
  function showSlide(idx) {
    slides[carIndex].classList.remove("active");
    dots[carIndex].classList.remove("active");
    slides.forEach(s => $$("video", s).forEach(v => v.pause()));
    carIndex = (idx + slides.length) % slides.length;
    slides[carIndex].classList.add("active");
    dots[carIndex].classList.add("active");
    const activeVideo = $("video", slides[carIndex]);
    if (activeVideo) activeVideo.play().catch(() => {});
  }
  if (slides.length) {
    $("#carPrev").addEventListener("click", () => showSlide(carIndex - 1));
    $("#carNext").addEventListener("click", () => showSlide(carIndex + 1));
    const carousel = $("#cinemaCarousel");
    carousel.addEventListener("keydown", e => {
      if (e.key === "ArrowLeft") showSlide(carIndex - 1);
      if (e.key === "ArrowRight") showSlide(carIndex + 1);
    });
    let touchX = null;
    carousel.addEventListener("touchstart", e => touchX = e.touches[0].clientX, { passive: true });
    carousel.addEventListener("touchend", e => {
      if (touchX === null) return;
      const dx = e.changedTouches[0].clientX - touchX;
      if (Math.abs(dx) > 40) showSlide(carIndex + (dx < 0 ? 1 : -1));
      touchX = null;
    }, { passive: true });
  }

  /* ============ SECTION 7 — DO YOU REMEMBER? ============ */
  const rememberGrid = $("#rememberGrid");
  rememberMoments.forEach(rm => {
    const card = el("div", "remember-card");
    const media = mediaTag(rm, "rc-media");
    card.appendChild(media);
    const body = el("div", "rc-body", `
      <p class="rc-question">${rm.question}</p>
      <div class="rc-actions">
        <button data-action="yes">OF COURSE I DO ♡</button>
        <button data-action="no">HOW COULD I FORGET?</button>
      </div>
      <p class="rc-caption">${rm.caption}</p>
    `);
    card.appendChild(body);
    body.querySelectorAll("button").forEach(btn => {
      btn.addEventListener("click", () => {
        card.classList.add("revealed");
        if (media.tagName === "VIDEO") media.play().catch(() => {});
      });
    });
    rememberGrid.appendChild(card);
  });

  /* ============ SECTION 8 — LITTLE THINGS COLLAGE ============ */
  const collageGrid = $("#collageGrid");
  littleThings.forEach(lt => {
    const item = el("div", "collage-item");
    item.style.setProperty("--r", `${(Math.random() * 8 - 4).toFixed(1)}deg`);
    item.appendChild(mediaTag(lt, ""));
    if (lt.caption) item.appendChild(el("p", "collage-caption", lt.caption));
    collageGrid.appendChild(item);
  });

  /* ============ SECTION 9 — RECEIPTS ============ */
  const receiptsGrid = $("#receiptsGrid");
  chatMemories.forEach(cm => {
    const card = el("div", "receipt-card");
    card.style.setProperty("--r", `${(Math.random() * 6 - 3).toFixed(1)}deg`);
    const img = el("img");
    img.src = cm.image; img.loading = "lazy"; img.alt = "chat screenshot";
    card.appendChild(img);
    card.appendChild(el("p", "receipt-caption", cm.caption));
    receiptsGrid.appendChild(card);
  });

  /* ============ SECTION 10 — 20 THINGS ============ */
  const twentyGrid = $("#twentyGrid");
  twentyThings.forEach((text, idx) => {
    const card = el("div", "flip-card");
    card.innerHTML = `
      <div class="flip-inner">
        <div class="flip-face flip-front">${String(idx + 1).padStart(2, "0")}</div>
        <div class="flip-face flip-back">${text}</div>
      </div>
    `;
    card.tabIndex = 0;
    card.setAttribute("role", "button");
    card.setAttribute("aria-label", `Reveal thing number ${idx + 1}`);
    const toggle = () => card.classList.toggle("flipped");
    card.addEventListener("click", toggle);
    card.addEventListener("keydown", e => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); toggle(); } });
    twentyGrid.appendChild(card);
  });

  /* ============ SECTION 11 — SHARED BIRTHDAY ============ */
  const birthdaySeq = $("#birthdaySequence");
  const birthdayBeats = [
    { text: "TWO BIRTHDAYS", big: true },
    { text: "ONE DATE", big: true },
    { text: "ONE DAY", big: true },
    { text: `${siteData.age} + ${siteData.age}`, big: true, gold: true },
    { text: "Out of all the days in the year, somehow we got the same one." },
    { text: siteData.birthdayDate.toUpperCase(), big: true },
    { text: `We both turn ${siteData.age}.` },
    { candles: true }
  ];
  let birthdayPlayed = false;
  function runBirthday() {
    if (birthdayPlayed) return;
    birthdayPlayed = true;
    let i = 0;
    let node = null;
    function step() {
      if (node) node.classList.remove("show");
      if (i >= birthdayBeats.length) { celebrate(); return; }
      const b = birthdayBeats[i++];
      birthdaySeq.innerHTML = "";
      if (b.candles) {
        const wrap = el("div", "candles");
        wrap.innerHTML = `<div class="candle"></div><div class="candle"></div>`;
        birthdaySeq.appendChild(wrap);
        node = wrap;
      } else {
        node = el("p", "line" + (b.big ? " big" : "") + (b.gold ? " gold" : ""), b.text);
        birthdaySeq.appendChild(node);
      }
      requestAnimationFrame(() => requestAnimationFrame(() => node.classList.add("show")));
      setTimeout(step, reduceMotion ? 300 : (b.candles ? 1800 : 1700));
    }
    step();
  }
  function celebrate() {
    const canvas = $("#celebrateCanvas");
    canvas.classList.add("show");
    canvas.width = canvas.offsetWidth; canvas.height = canvas.offsetHeight;
    const ctx = canvas.getContext("2d");
    const colors = ["#cda86a", "#f3ecdf", "#b9a9d9"];
    const parts = Array.from({ length: reduceMotion ? 0 : 90 }, () => ({
      x: Math.random() * canvas.width, y: -20 - Math.random() * canvas.height * 0.5,
      r: Math.random() * 3 + 1.5, s: Math.random() * 1.4 + 0.6,
      c: colors[Math.floor(Math.random() * colors.length)], drift: Math.random() * 1 - 0.5
    }));
    function frame() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      parts.forEach(p => {
        p.y += p.s; p.x += p.drift;
        ctx.globalAlpha = 0.8;
        ctx.fillStyle = p.c;
        ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2); ctx.fill();
      });
      if (parts.some(p => p.y < canvas.height + 20)) requestAnimationFrame(frame);
    }
    frame();
  }

  /* ============ SECTION 12 — RANDOM MEMORY ============ */
  const randomCard = $("#randomCard");
  $("#randomBtn").addEventListener("click", () => {
    if (!memories.length) return;
    const m = memories[Math.floor(Math.random() * memories.length)];
    randomCard.innerHTML = "";
    randomCard.appendChild(mediaTag(m, ""));
    randomCard.appendChild(el("p", "timeline-date", m.date));
    randomCard.appendChild(el("h3", "timeline-title", m.title));
    randomCard.appendChild(el("p", "placeholder-text", m.caption));
    const v = $("video", randomCard);
    if (v) v.play().catch(() => {});
  });

  /* ============ SECTION 13 — SECRET MEMORY ============ */
  const unlockBtn = $("#unlockBtn"), unlockForm = $("#unlockForm"), unlockMsg = $("#unlockMsg");
  const secretPass = $("#secretPass"), secretContentEl = $("#secretContent");
  unlockBtn.addEventListener("click", () => {
    unlockForm.hidden = false;
    unlockBtn.hidden = true;
    secretPass.focus();
  });
  function trySecret() {
    if (secretPass.value === siteData.secretPassword) {
      unlockForm.hidden = true;
      secretContentEl.hidden = false;
      secretContentEl.innerHTML = "";
      secretContentEl.appendChild(mediaTag(secretMemory, ""));
      secretContentEl.appendChild(el("p", "reveal-line show", secretMemory.message));
      const v = $("video", secretContentEl);
      if (v) v.play().catch(() => {});
    } else {
      unlockMsg.textContent = "Nice try. You should know this one.";
      secretPass.value = "";
      secretPass.focus();
    }
  }
  $("#unlockSubmit").addEventListener("click", trySecret);
  secretPass.addEventListener("keydown", e => { if (e.key === "Enter") trySecret(); });

  /* ============ SECTION 14 — ONE LAST THING ============ */
  const oneLastBeats = [{ text: "Okay." }, { text: "No more jokes." }, { text: "ONE LAST THING\u2026", big: true }];
  let oneLastPlayed = false;
  function runOneLast() {
    if (oneLastPlayed) return;
    oneLastPlayed = true;
    const container = $("#oneLastSeq");
    let i = 0, node = null;
    function step() {
      if (node) node.classList.remove("show");
      if (i >= oneLastBeats.length) return;
      const b = oneLastBeats[i++];
      container.innerHTML = "";
      node = el("p", "line" + (b.big ? " big" : ""), b.text);
      container.appendChild(node);
      requestAnimationFrame(() => requestAnimationFrame(() => node.classList.add("show")));
      setTimeout(step, reduceMotion ? 300 : 1600);
    }
    step();
  }

  /* ============ SECTION 15 — LETTER ============ */
  $("#letterText").textContent = finalLetter;

  /* ============ SECTION 16 — FUTURE TIME CAPSULE ============ */
  const envelopeGrid = $("#envelopeGrid");
  Object.keys(futureMessages).forEach(age => {
    const env = el("div", "envelope");
    env.tabIndex = 0; env.setAttribute("role", "button");
    env.setAttribute("aria-label", `Open the letter for age ${age}`);
    env.innerHTML = `
      <p class="envelope-label">OPEN AT ${age}</p>
      <p class="envelope-sub">Written on ${siteData.birthdayDate}</p>
      <p class="envelope-message">${futureMessages[age]}</p>
    `;
    const toggle = () => env.classList.toggle("open");
    env.addEventListener("click", toggle);
    env.addEventListener("keydown", e => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); toggle(); } });
    envelopeGrid.appendChild(env);
  });

  /* ============ SECTION 18 — FINAL ENDING ============ */
  const endingBeats = [
    { text: "20 YEARS AGO" }, { text: "We were born." },
    { text: "18 YEARS LATER" }, { text: "We met." },
    { text: "2 YEARS LATER" }, { text: "We made memories." },
    { text: "TODAY" }, { text: "We turned 20." },
    { text: "AND THE BEST PART?" },
    { text: "Our story isn't finished." },
    { text: `HAPPY ${siteData.age}TH, ${siteData.herName.toUpperCase()} ♡`, big: true },
    { text: "We were born on the same day.\nWe met 18 years later.\nAnd somehow, the timing was perfect." }
  ];
  let endingPlayed = false;
  function runEnding() {
    if (endingPlayed) return;
    endingPlayed = true;
    const container = $("#endingSequence");
    let i = 0, node = null;
    function step() {
      if (node) node.classList.remove("show");
      if (i >= endingBeats.length) {
        if (siteData.finalVideo) { finalVideoEl.hidden = false; finalVideoEl.play().catch(() => {}); }
        return;
      }
      const b = endingBeats[i++];
      container.innerHTML = "";
      node = el("p", "line" + (b.big ? " big" : ""), b.text.replace(/\n/g, "<br>"));
      container.appendChild(node);
      requestAnimationFrame(() => requestAnimationFrame(() => node.classList.add("show")));
      setTimeout(step, reduceMotion ? 300 : 1900);
    }
    step();
  }

  /* ============ SCROLL-TRIGGERED REVEALS ============ */
  function initScrollReveals() {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        const t = entry.target;
        if (t.id === "before-we-met") drawPaths();
        if (t.id === "timeline") $$(".timeline-item", t).forEach((item, i) => setTimeout(() => item.classList.add("show"), i * 150));
        if (t.classList.contains("reveal-line") || t.classList.contains("crossed-line")) t.classList.add("show");
        if (t.id === "birthday") runBirthday();
        if (t.id === "one-last-thing") runOneLast();
        if (t.id === "ending") runEnding();
        io.unobserve(t);
      });
    }, { threshold: 0.35 });

    io.observe($("#before-we-met"));
    io.observe($("#timeline"));
    io.observe($("#birthday"));
    io.observe($("#one-last-thing"));
    io.observe($("#ending"));
    $$(".reveal-line", beforeSection).forEach(l => io.observe(l));

    // pause offscreen videos, autoplay carousel's active video when visible
    const vidIo = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        const v = entry.target;
        if (entry.isIntersecting) { if (v.closest(".carousel-slide.active") || !v.closest(".carousel-slide")) v.play().catch(() => {}); }
        else v.pause();
      });
    }, { threshold: 0.25 });
    $$("video").forEach(v => { if (v.id !== "heroVideo" && v.id !== "finalVideo") vidIo.observe(v); });
  }
});
