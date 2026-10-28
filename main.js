const CONFIG = {
  supportUrl: "#apoie",
  goal: 0,
  raised: 0,
  currency: "R$",
  goalNote: "Cada contribuição vira arte, música e tempo de desenvolvimento.",
  video: "",
  videoPoster: "",
  tiers: [
    { name: "Apoiador", price: 10, perks: ["Seu nome na página de agradecimentos", "Acesso aos bastidores"], url: "" },
    { name: "Herói", price: 30, featured: true, perks: ["Tudo do Apoiador", "Nome de uma criatura ou NPC no jogo", "Acesso antecipado às builds"], url: "" },
    { name: "Lenda", price: 100, perks: ["Tudo do Herói", "Seu retrato em uma estátua da Cidade", "Voto nos próximos mapas"], url: "" },
  ],
  socials: [
  ],
};

const CLASSES = [
  { id: "warrior", group: "base", name: "Guerreiro", role: "Corpo a corpo  •  Tanque", frames: 13, glow: "#e0583a66",
    intro: "Sentinela da muralha dos Céus. Muita vida e golpes em área curta. Nunca perguntou o que a Fronteira guardava.",
    skills: [
      { key: "E", name: "Impacto Sísmico", icon: "knight_warrior_s0", text: "Onda de choque em volta dele que fere e empurra tudo que está perto." },
      { key: "R", name: "Fúria Divina", icon: "knight_warrior_s7", text: "Ultimate que limpa o mapa. Nos chefes, tira só uma fração da vida." },
      { key: "Passiva", name: "Giro de Lâminas", icon: "knight_warrior_s3", text: "De tempos em tempos, quatro cortes em cruz em volta do guerreiro." },
    ] },
  { id: "archer", group: "base", name: "Arqueiro", role: "À distância  •  Dano", frames: 12, glow: "#59c65a66",
    intro: "Mirava longe para não ver de perto. Rápido, dispara flechas na criatura mais próxima e domina o espaço.",
    skills: [
      { key: "E", name: "Vendaval de Flechas", icon: "elven_scout_a2", text: "Flechas e tornadinhos de folhas saem para todos os lados, até um limite que cresce na árvore de talentos." },
      { key: "R", name: "Tempestade Final", icon: "elven_scout_a0", text: "Ultimate que atinge todas as criaturas do mapa." },
      { key: "Passiva", name: "Disparo Duplo", icon: "elven_scout_a3", text: "Por alguns segundos, cada ataque solta duas flechas em fila." },
    ] },
  { id: "mage", group: "base", name: "Maga", role: "À distância  •  Controle", frames: 13, glow: "#5fb6ff66",
    intro: "Estudava o gelo nas torres de Mani. Projéteis que retardam, tempestade que congela e dash em teleporte.",
    skills: [
      { key: "E", name: "Tempestade de Gelo", icon: "frostmage_s0", text: "Congela a área alvo: criaturas ficam paradas por um instante." },
      { key: "R", name: "Era Glacial", icon: "frostmage_s7", text: "Ultimate de gelo que varre o mapa inteiro." },
      { key: "Passiva", name: "Aura Gélida", icon: "frostmage_s3", text: "Uma aura retarda e fere as criaturas em volta por alguns segundos." },
    ] },
  { id: "healer", group: "base", name: "Curandeira", role: "Suporte  •  Cura", frames: 13, glow: "#ffe27a66",
    intro: "Serviu no templo de Ador. Cura a si mesma de tempos em tempos e carrega a dúvida do que a cura serve.",
    skills: [
      { key: "E", name: "Nova Sagrada", icon: "holy_clergy_s0", text: "Explosão de luz em volta dela que fere criaturas e fortalece o grupo." },
      { key: "R", name: "Julgamento Sagrado", icon: "holy_clergy_s7", text: "Ultimate que fere muito as criaturas e cura toda a vida dela." },
      { key: "Passiva", name: "Cura Sagrada", icon: "holy_clergy_s3", text: "Recupera vida sozinha em intervalos curtos." },
    ] },
  { id: "necromancer", group: "base", name: "Necromante", role: "Invocação  •  Dano", frames: 9, glow: "#b565ff66",
    intro: "Banido por chorar um morto. Invoca esqueletos que lutam por ele e dispara raios sombrios fracos.",
    skills: [
      { key: "E", name: "Fúria dos Mortos", icon: "necromancer0_s0", text: "Os esqueletos ficam mais fortes por um tempo, com aura em volta deles." },
      { key: "R", name: "Fumaça da Morte", icon: "necromancer0_s7", text: "Nuvens venenosas saem dele em todas as direções e envenenam o que tocam." },
      { key: "Passiva", name: "Invocação", icon: "necromancer0_s3", text: "Invoca esqueletos sozinho, até o limite do nível." },
    ] },
  { id: "assassin", group: "base", name: "Assassino", role: "Corpo a corpo  •  Crítico", frames: 8, glow: "#9fb4c866",
    intro: "Frágil e veloz. Dois golpes à frente, veneno e crítico nas costas. Serviu aos três deuses e conhece os segredos dos três.",
    skills: [
      { key: "E", name: "Bomba de Fumaça", icon: "flesh_abomination_s0", text: "Some na fumaça: as criaturas perdem o alvo e levam crítico garantido." },
      { key: "R", name: "Chuva de Adagas", icon: "flesh_abomination_s7", text: "Salta de criatura em criatura, cortando cada uma delas." },
      { key: "Passiva", name: "Golpe nas Costas", icon: "flesh_abomination_s3", text: "Crítico garantido em quem está de costas ou preso." },
    ] },

  { id: "warrior_elite", group: "elite", name: "Guerreiro Elite", role: "Cavaleiro do Martelo  •  Área", frames: 9, glow: "#6fd0ff66",
    intro: "Quem quebra um muro não precisa de corte, precisa de peso. Habilidades em área, batendo no chão com poeira e gelo.",
    skills: [
      { key: "E", name: "Martelo Glacial", icon: "glacierbreaker_a0", text: "Martelada no chão: dano em área, empurrão e poeira subindo." },
      { key: "R", name: "Terremoto Glacial", icon: "glacierbreaker_a3", text: "Três marteladas seguidas, cada uma maior que a anterior, que atordoam." },
      { key: "Passiva", name: "Giro de Lâminas", icon: "glacierbreaker_a1", text: "Quatro cortes em cruz em volta dele, de tempos em tempos." },
    ] },
  { id: "axe_elite", group: "elite", name: "Guerreira Elite", role: "Axemaiden  •  Sangramento", frames: 12, glow: "#ff3a4e66",
    intro: "Filha de uma linhagem banida. O machado é herança e o sangue que ela tira é o que os deuses tiraram da família dela.",
    skills: [
      { key: "E", name: "Julgamento Carmesim", icon: "axemaiden_a0", text: "Círculo de sangue que fere em área e faz todos sangrarem." },
      { key: "R", name: "Machado Giratório", icon: "axemaiden_a2", text: "Gira como um pião por 3 s: dano em 360° e atordoa quem toca." },
      { key: "Passiva", name: "Ancestral Calls", icon: "axemaiden_a3", text: "Dois ecos dos antepassados surgem, correm até as criaturas e atacam sozinhos." },
    ] },
  { id: "archer_elite", group: "elite", name: "Arqueiro Elite", role: "Flecha Fantasma  •  À distância", frames: 13, glow: "#a8ff5a66",
    intro: "Trocou o arco por uma besta pesada. Seus virotes atravessam tudo, inclusive as mentiras dos Céus.",
    skills: [
      { key: "E", name: "Vendaval de Virotes", icon: "elven_scout_a2", text: "Mais forte que a do Arqueiro: 24 virotes e 6 tornadinhos em volta, em um raio maior." },
      { key: "R", name: "Chuva de Virotes", icon: "elven_scout_a0", text: "Ultimate que atinge todas as criaturas do mapa." },
      { key: "Passiva", name: "Disparo Triplo", icon: "elven_scout_a3", text: "A besta solta 3 virotes em fila, mais fortes e que perfuram." },
    ] },
  { id: "healer_elite", group: "elite", name: "Curandeira Elite", role: "Asa Sagrada  •  Suporte", frames: 12, glow: "#fff2a066",
    intro: "Curar deixou de ser dever e virou escolha. Ela cura quem quer viver e abre as asas na hora de ferir.",
    skills: [
      { key: "E", name: "Nova Sagrada", icon: "undead_s0", text: "Explosão de luz com as asas abertas: fere as criaturas e fortalece a cura." },
      { key: "R", name: "Julgamento Sagrado", icon: "undead_s7", text: "Ultimate que fere muito as criaturas e cura toda a vida dele." },
      { key: "Passiva", name: "Cura Sagrada", icon: "undead_s3", text: "Recupera vida sozinho, mais rápido que a Curandeira." },
    ] },
  { id: "necromancer_elite", group: "elite", name: "Necromante Elite", role: "Senhor dos Mortos  •  Invocação", frames: 8, glow: "#ff5ad266",
    intro: "Ouviu todos os banidos de uma vez. Não comanda um exército: representa uma multidão que volta para dizer seus nomes.",
    skills: [
      { key: "E", name: "Pacto das Bestas", icon: "necromancer1_s0", text: "Enfurece as bestas infernais e chama duas de reforço na hora." },
      { key: "R", name: "Legião Infernal", icon: "necromancer1_s7", text: "Chama uma legião de bestas infernais para lutar ao lado dele." },
      { key: "Passiva", name: "Invocação", icon: "necromancer1_s3", text: "Invoca bestas infernais em vez de esqueletos, uma a mais em campo." },
    ] },
  { id: "mage_elite", group: "elite", name: "Mago Elite", role: "Mago Sombrio  •  Fogo e trevas", frames: 12, glow: "#a24dff66",
    intro: "Atravessou o gelo e achou a escuridão onde os esquecidos se guardam. Bola de fogo no ataque e magias roxas.",
    skills: [
      { key: "E", name: "Meteoro Sombrio", icon: "spirit_wraith_s0", text: "Um meteoro roxo cai sobre o alvo e explode em área." },
      { key: "R", name: "Apocalipse Sombrio", icon: "spirit_wraith_s7", text: "Ultimate de trevas que atinge todas as criaturas do mapa." },
      { key: "Passiva", name: "Aura Sombria", icon: "spirit_wraith_s3", text: "Aura que retarda as criaturas e as deixa vulneráveis a mais dano." },
    ] },
  { id: "assassin_elite", group: "elite", name: "Assassino Elite", role: "Mestre das Armadilhas  •  Controle", frames: 9, glow: "#cfd8ff66",
    intro: "Paciência é a arma mais cruel. Prepara o terreno e deixa que o inimigo caia sozinho na própria escolha.",
    skills: [
      { key: "E", name: "Marca das Adagas", icon: "heroes_s0", text: "Marca até 10 criaturas na tela. Apertando de novo, salta de marca em marca, golpeando cada uma com crítico." },
      { key: "R", name: "Campo de Armadilhas", icon: "heroes_s7", text: "Espalha armadilhas que prendem as criaturas no lugar." },
      { key: "Passiva", name: "Crítico Duplo", icon: "heroes_s3", text: "Crítico garantido nas costas, com o dobro do bônus." },
    ] },
];

const STORY = [
  { name: "Pul, o Juiz", sub: "Deus da ordem", art: "img/gods/pul.jpg",
    text: "Severo e frio, fala em sentenças. Acredita que a ordem exige o sacrifício dos outros. Foi o primeiro a banir um mortal ao Abismo e levantou a Fronteira com o nome de cada banido gravado por dentro das pedras." },
  { name: "Mani, a Misericordiosa", sub: "Deusa da compaixão", art: "img/gods/mani.jpg",
    text: "Doce na voz, fria nos atos. Chama o extermínio de \"prece atendida\". Chora sobre a muralha e nunca abre o portão. O mar da Costa Afogada é feito das lágrimas que ela não deixou cair em público." },
  { name: "Ador, o Fervoroso", sub: "Deus da fé", art: "img/gods/ador.jpg",
    text: "O mais jovem e o mais fanático. Dá a ordem final: \"Limpe os monstros, até o último\". Promete recompensas e esconde que o herói não volta purificado, volta esquecido." },
  { name: "A Sombra", sub: "Sua aliada oculta", art: "",
    text: "Nasceu no Abismo: é a soma do que foi arrancado dos banidos. Ela não quer vingança cega. Quer que você enxergue antes de derrubar o último. A cada onda, diz um pouco mais." },
];

const $ = (selector) => document.querySelector(selector);

const topbar = $("#topbar");
const onScroll = () => topbar.classList.toggle("solid", window.scrollY > 40);
window.addEventListener("scroll", onScroll);
onScroll();

const sprites = [];
function makeSprite(el, id, frames) {
  el.style.backgroundImage = `url(img/chars/${id}.png)`;
  const entry = { el, frames, frame: 0 };
  sprites.push(entry);
  applySprite(entry);
  return entry;
}
function applySprite(entry) {
  const size = entry.el.clientWidth || 256;
  entry.el.style.backgroundSize = `${size * entry.frames}px ${size}px`;
  entry.el.style.backgroundPosition = `${-entry.frame * size}px 0`;
}
let last = 0;
function tick(time) {
  if (time - last > 110) {
    last = time;
    for (let i = sprites.length - 1; i >= 0; i--) {
      const entry = sprites[i];
      if (!entry.el.isConnected) { sprites.splice(i, 1); continue; }
      entry.frame = (entry.frame + 1) % entry.frames;
      applySprite(entry);
    }
  }
  requestAnimationFrame(tick);
}
requestAnimationFrame(tick);

let currentGroup = "base";
let currentId = "warrior";
let bigSprite = null;

function renderSelector() {
  const box = $("#classSelector");
  box.innerHTML = "";
  for (const c of CLASSES.filter((item) => item.group === currentGroup)) {
    const button = document.createElement("button");
    button.className = "sel" + (c.id === currentId ? " active" : "");
    button.title = c.name;
    button.setAttribute("aria-label", c.name);
    const face = document.createElement("div");
    face.className = "face";
    face.style.backgroundImage = `url(img/chars/${c.id}.png)`;
    face.style.backgroundSize = `${c.frames * 100}% 100%`;
    face.style.backgroundPosition = "0 0";
    button.appendChild(face);
    button.addEventListener("click", () => selectClass(c.id));
    box.appendChild(button);
  }
}

function selectClass(id) {
  currentId = id;
  const c = CLASSES.find((item) => item.id === id);
  $("#charName").textContent = c.name;
  $("#charRole").textContent = c.role;
  $("#charIntro").textContent = c.intro;
  $("#charGlow").style.setProperty("--glow", c.glow);
  const stage = $("#charSprite");
  const old = sprites.findIndex((s) => s.el === stage);
  if (old >= 0) sprites.splice(old, 1);
  bigSprite = makeSprite(stage, c.id, c.frames);
  const list = $("#skillList");
  list.innerHTML = "";
  const ordered = [...c.skills].sort((a, b) => (a.key === "Passiva" ? -1 : 0) - (b.key === "Passiva" ? -1 : 0));
  for (const s of ordered) {
    const row = document.createElement("div");
    row.className = "skill";
    row.innerHTML = `<div class="skill-icon"><img alt="" src="img/skills/${s.icon}.png"></div>
      <div><div class="skill-key">${s.key}</div><h4>${s.name}</h4><p>${s.text}</p>
      <button class="clip-btn" type="button">▶ Ver em ação</button></div>`;
    row.querySelector(".clip-btn").addEventListener("click", () => openClip(c, s));
    list.appendChild(row);
  }
  renderSelector();
}

const clipModal = $("#clipModal");
const clipVideo = $("#clipVideo");
const clipMissing = $("#clipMissing");
let clipMode = "2d";
let clipCurrent = null;

function loadClip() {
  const folder = clipMode === "3d" ? "classes3d" : "classes";
  clipMissing.hidden = true;
  clipVideo.hidden = false;
  clipVideo.src = `video/${folder}/${clipCurrent.c.id}_${clipCurrent.s.key}.webm`;
  clipVideo.play().catch(() => {});
  document.querySelectorAll("#clipModes button").forEach((b) => b.classList.toggle("active", b.dataset.mode === clipMode));
}

function openClip(c, s) {
  clipCurrent = { c, s };
  $("#clipTitle").textContent = `${c.name}  •  ${s.name}`;
  loadClip();
  clipModal.hidden = false;
}

clipVideo.addEventListener("error", () => {
  if (!clipVideo.getAttribute("src")) return;
  clipVideo.hidden = true;
  clipMissing.hidden = false;
});

document.querySelectorAll("#clipModes button").forEach((b) => {
  b.addEventListener("click", () => {
    clipMode = b.dataset.mode;
    loadClip();
  });
});

function closeClip() {
  clipVideo.pause();
  clipVideo.removeAttribute("src");
  clipVideo.load();
  clipModal.hidden = true;
}

$("#clipClose").addEventListener("click", closeClip);
clipModal.addEventListener("click", (e) => { if (e.target === clipModal) closeClip(); });
document.addEventListener("keydown", (e) => { if (e.key === "Escape" && !clipModal.hidden) closeClip(); });

document.querySelectorAll("#classTabs .tab").forEach((tab) => {
  tab.addEventListener("click", () => {
    currentGroup = tab.dataset.group;
    document.querySelectorAll("#classTabs .tab").forEach((t) => t.classList.toggle("active", t === tab));
    const first = CLASSES.find((item) => item.group === currentGroup);
    selectClass(first.id);
  });
});
selectClass(currentId);

let storyIndex = 0;
function showStory(step) {
  storyIndex = (storyIndex + step + STORY.length) % STORY.length;
  const item = STORY[storyIndex];
  $("#storyName").textContent = item.name;
  $("#storySub").textContent = item.sub;
  $("#storyBody").textContent = item.text;
  $("#storyCount").textContent = `${storyIndex + 1} / ${STORY.length}`;
  const art = $("#storyArt");
  art.style.backgroundImage = item.art
    ? `url(${item.art})`
    : "radial-gradient(circle at 50% 40%, #6a3cc8, #0a0614 70%)";
}
$("#storyPrev").addEventListener("click", () => showStory(-1));
$("#storyNext").addEventListener("click", () => showStory(1));
showStory(0);

if (CONFIG.video) {
  const frame = $("#videoFrame");
  frame.innerHTML = "";
  if (CONFIG.video.includes("youtube.com") || CONFIG.video.includes("youtu.be")) {
    frame.innerHTML = `<iframe src="${CONFIG.video}" allowfullscreen title="Vídeo do jogo"></iframe>`;
  } else {
    frame.innerHTML = `<video controls preload="metadata" ${CONFIG.videoPoster ? `poster="${CONFIG.videoPoster}"` : ""} src="${CONFIG.video}"></video>`;
  }
}

const money = (value) => `${CONFIG.currency} ${value.toLocaleString("pt-BR")}`;
if (CONFIG.goal > 0) {
  $("#goalBox").hidden = false;
  $("#goalRaised").textContent = `Arrecadado: ${money(CONFIG.raised)}`;
  $("#goalTarget").textContent = `Meta: ${money(CONFIG.goal)}`;
  $("#goalNote").textContent = CONFIG.goalNote;
  requestAnimationFrame(() => {
    $("#goalFill").style.width = Math.min(100, (CONFIG.raised / CONFIG.goal) * 100) + "%";
  });
}
const tiers = $("#tiers");
for (const tier of CONFIG.tiers) {
  const card = document.createElement("div");
  card.className = "tier" + (tier.featured ? " featured" : "");
  card.innerHTML = `<h3>${tier.name}</h3><div class="price">${money(tier.price)}</div>
    <ul>${tier.perks.map((p) => `<li>${p}</li>`).join("")}</ul>
    <a class="btn" href="${tier.url || CONFIG.supportUrl}" target="_blank" rel="noopener">Apoiar</a>`;
  tiers.appendChild(card);
}
$("#socials").innerHTML = CONFIG.socials
  .map((s) => `<a href="${s.url}" target="_blank" rel="noopener">${s.name}</a>`).join("");
