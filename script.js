// รหัส 4 สาขาหลัก: DGA, GAME, GAD, VFX
const MAJORS = ["DGA", "GAME", "GAD", "VFX"];

// ชุดคำถาม 11 ฉาก แบบสั้น กระชับ ฟีลแก้ปัญหา
const sceneList = [
  {
    id: "1.1",
    act: "องก์ที่ 1 • ตื่นรู้ในเมืองไร้สี",
    title: "ฉาก 1.1 สีแรกที่หายไป",
    story: "ตื่นมาในเมืองสีเทา เรายังไม่รู้พลังตัวเอง ถ้าต้องเริ่มแก้ปัญหาแรก เราจะทำอะไร",
    choices: [
      { text: "วาดเส้นสีลงบนกำแพงที่ว่างเปล่า", major: "DGA" },
      { text: "ลองกดปุ่มหรือกลไกดูว่าเปิดทางไหนได้บ้าง", major: "GAME" },
      { text: "จัดป้ายกับสัญลักษณ์ที่เบี้ยวให้ดูง่ายขึ้น", major: "GAD" },
      { text: "ขยับละอองแสงให้เกิดการเคลื่อนไหว", major: "VFX" }
    ]
  },
  {
    id: "1.2",
    act: "องก์ที่ 1 • ตื่นรู้ในเมืองไร้สี",
    title: "ฉาก 1.2 ของติดตัวชิ้นเดียว",
    story: "เลือกของติดตัวได้แค่ชิ้นเดียว เพื่อเอาไว้รับมือเหตุการณ์ในเมือง",
    choices: [
      { text: "พู่กันที่แต้มสีได้ไม่รู้จบ", major: "DGA" },
      { text: "จอยหรือลูกเต๋าเปลี่ยนกติกา", major: "GAME" },
      { text: "ชุดเครื่องมือจัดสัดส่วนและสี", major: "GAD" },
      { text: "แท่งแสงสร้างภาพซ้อนและเอฟเฟกต์", major: "VFX" }
    ]
  },
  {
    id: "1.3",
    act: "องก์ที่ 1 • ตื่นรู้ในเมืองไร้สี",
    title: "ฉาก 1.3 ทางแยกสี่สาย",
    story: "เจอทางแยกสี่เส้นทางที่บรรยากาศต่างกัน เราจะเลือกเดินเข้าทางไหนก่อน",
    choices: [
      { text: "ทางที่เต็มไปด้วยภาพวาดและงานอาร์ต", major: "DGA" },
      { text: "ทางที่มีด่าน กติกา และสิ่งให้ลองเล่น", major: "GAME" },
      { text: "ทางที่มีป้าย โลโก้ และการจัดวางชัดๆ", major: "GAD" },
      { text: "ทางที่มีแสงเงาและภาพขยับได้รอบตัว", major: "VFX" }
    ]
  },
  {
    id: "2.1",
    act: "องก์ที่ 2 • แก้ปัญหาเฉพาะหน้า",
    title: "ฉาก 2.1 สะพานขาดกลางทาง",
    story: "สะพานข้ามแม่น้ำขาดครึ่งและไม่มีสีบอกทาง เราจะแก้ปัญหานี้ยังไง",
    choices: [
      { text: "วาดสะพานใหม่ตามจินตนาการของเรา", major: "DGA" },
      { text: "สร้างจุดกระโดดหรือกติกาข้ามฝั่ง", major: "GAME" },
      { text: "ทำป้ายบอกทางให้คนไม่หลงและปลอดภัย", major: "GAD" },
      { text: "เสกภาพสะพานที่ค่อยๆ ประกอบตัว", major: "VFX" }
    ]
  },
  {
    id: "2.2",
    act: "องก์ที่ 2 • แก้ปัญหาเฉพาะหน้า",
    title: "ฉาก 2.2 เพื่อนลืมหน้าตา",
    story: "ตัวน้อยในเมืองลืมหน้าเพื่อนสนิทเพราะสีความทรงจำหาย เราจะช่วยยังไง",
    choices: [
      { text: "วาดรูปหน้าเพื่อนขึ้นมาใหม่ให้ดู", major: "DGA" },
      { text: "ชวนเล่นเกมทายความทรงจำทีละนิด", major: "GAME" },
      { text: "เรียงเบาะแสและรูปให้เห็นภาพชัดๆ", major: "GAD" },
      { text: "ฉายภาพความทรงจำให้ขยับเหมือนจริง", major: "VFX" }
    ]
  },
  {
    id: "2.3",
    act: "องก์ที่ 2 • แก้ปัญหาเฉพาะหน้า",
    title: "ฉาก 2.3 สถานที่เงียบเหงา",
    story: "ลานกลางเมืองเงียบจนไม่มีใครแวะ เราจะทำให้กลับมาคึกคักได้ยังไง",
    choices: [
      { text: "แต่งแต้มภาพวาดให้ลานดูมีชีวิต", major: "DGA" },
      { text: "ทำกิจกรรมหรือเกมให้คนมาร่วมเล่น", major: "GAME" },
      { text: "รีแบรนด์ป้ายและบรรยากาศให้ดูน่าเข้า", major: "GAD" },
      { text: "ใส่แสงสีและเอฟเฟกต์ให้ดูว้าว", major: "VFX" }
    ]
  },
  // บทที่ 3 จะแทรกอัตโนมัติตรง index === 6
  {
    id: "gate",
    act: "ด่านทดสอบหน้าประตู",
    title: "ประตูถามว่าเราจะฝึกอะไร",
    story: "ถ้าอยากปลุกพลังให้เก่งขึ้นเรื่อยๆ เราอยากฝึกทักษะไหนทุกวัน",
    choices: [
      { text: "วาดรูปและคิดไอเดียภาพให้ลื่นไหล", major: "DGA" },
      { text: "คิดระบบ เกม และวิธีให้คนเล่นสนุก", major: "GAME" },
      { text: "จัดหน้า สี ฟอนต์ และอัตลักษณ์งาน", major: "GAD" },
      { text: "ทำภาพเคลื่อนไหวและเอฟเฟกต์ให้สมจริง", major: "VFX" }
    ]
  },
  {
    id: "4.1",
    act: "องก์ที่ 4 • ทำงานเป็นทีม",
    title: "ฉาก 4.1 ทีมเริ่มไปต่อไม่ได้",
    story: "ตอนรวมกลุ่มกัน ทีมยังจับต้นชนปลายไม่ถูก เราจะช่วยแก้ตรงไหน",
    choices: [
      { text: "สเก็ตช์ภาพให้ทุกคนเห็นภาพเดียวกัน", major: "DGA" },
      { text: "วางกติกาและลำดับขั้นให้ทำตามง่าย", major: "GAME" },
      { text: "จัดระเบียบข้อมูลและไกด์งานให้ชัดเจน", major: "GAD" },
      { text: "ทำตัวอย่างภาพขยับให้เห็นผลลัพธ์ไวๆ", major: "VFX" }
    ]
  },
  {
    id: "4.2",
    act: "องก์ที่ 4 • ทำงานเป็นทีม",
    title: "ฉาก 4.2 ไอเดียชนกัน",
    story: "เพื่อนในทีมเสนอคนละทางและตัดสินใจไม่ได้ เราจะทำยังไง",
    choices: [
      { text: "วาดเทียบให้เห็นฟีลของแต่ละทาง", major: "DGA" },
      { text: "ลองเทสต์สั้นๆ ดูว่าทางไหนเวิร์กกว่า", major: "GAME" },
      { text: "ทำตารางเทียบข้อดีข้อเสียให้เลือกง่าย", major: "GAD" },
      { text: "ทำภาพจำลองตอนจบของแต่ละทางให้ดู", major: "VFX" }
    ]
  },
  {
    id: "5.1",
    act: "องก์ที่ 5 • คืนสีสันให้เมือง",
    title: "ฉาก 5.1 ขึ้นเวทีคืนสี",
    story: "ถึงเวลาขึ้นเวทีใหญ่ เพื่อดึงสีสันกลับคืนมา เราจะปล่อยของแบบไหน",
    choices: [
      { text: "ภาพวาดยักษ์ที่เต็มไปด้วยจินตนาการ", major: "DGA" },
      { text: "เกมที่ทุกคนในเมืองเล่นด้วยกันได้", major: "GAME" },
      { text: "ภาพลักษณ์ใหม่ที่สวยคมจำได้ทั้งเมือง", major: "GAD" },
      { text: "โชว์แสงสีและภาพขยับสุดอลังการ", major: "VFX" }
    ]
  },
  {
    id: "5.2",
    act: "องก์ที่ 5 • คืนสีสันให้เมือง",
    title: "ฉาก 5.2 พลังที่แท้จริง",
    story: "สีกลับมาครบทั้งเมืองแล้ว ถ้าต้องสรุปสั้นๆ ว่าเราคือใคร เราอยากเป็นแบบไหน",
    choices: [
      { text: "คนเสกภาพและคาแรคเตอร์ให้เกิด", major: "DGA" },
      { text: "คนสร้างโลกและเกมให้คนสนุก", major: "GAME" },
      { text: "คนออกแบบความชัดและเอกลักษณ์ของงาน", major: "GAD" },
      { text: "คนปลุกภาพและเอฟเฟกต์ให้มีชีวิต", major: "VFX" }
    ]
  }
];

// ย่านบทที่ 3 แบบสั้น กระชับ
const districtByMajor = {
  DGA: {
    title: "บทที่ 3 • ย่านภาพวาดและจินตนาการ (DGA)",
    story: "ถ้าสร้างงานภาพได้หนึ่งอย่าง เราอยากทำอะไรก่อน",
    options: [
      { text: "ออกแบบคาแรคเตอร์เฉพาะตัว", career: "Character Designer" },
      { text: "วาดคอนเซปต์และฉากในจินตนาการ", career: "Concept Artist / Illustrator" },
      { text: "เล่าเรื่องเป็นการ์ตูนหรือสตอรี่บอร์ด", career: "Comic / Storyboard Artist" },
      { text: "ทำอาร์ตทอยหรือสติกเกอร์ของสะสม", career: "Art Toy & Sticker Artist" }
    ]
  },
  GAME: {
    title: "บทที่ 3 • ย่านเกมและอินเทอร์แอคทีฟ (GAME)",
    story: "ถ้าเริ่มสร้างเกมสักชิ้น เราอยากเริ่มจากส่วนไหน",
    options: [
      { text: "ออกแบบกติกา ระบบ และด่าน", career: "Game & Level Designer" },
      { text: "วาดตัวละครและฉากในเกม", career: "Game Artist" },
      { text: "ทำประสบการณ์โต้ตอบ / VR / AR", career: "Interactive / VR / AR Designer" },
      { text: "คุมภาพรวมให้เกมเสร็จและถึงมือผู้เล่น", career: "Game Producer" }
    ]
  },
  GAD: {
    title: "บทที่ 3 • ย่านกราฟิกและอัตลักษณ์ (GAD)",
    story: "ถ้าฝากงานดีไซน์ไว้กลางเมือง เราอยากทำอะไร",
    options: [
      { text: "ทำโลโก้และอัตลักษณ์แบรนด์", career: "Brand Identity Designer" },
      { text: "ออกแบบหน้าจอแอปหรือเว็บ", career: "UI / UX Designer" },
      { text: "ทำแพ็กเกจหรือสิ่งพิมพ์", career: "Packaging & Editorial Designer" },
      { text: "คุมคีย์วิชวลและอาร์ตไดเรกชัน", career: "Art Director / Key Visual Designer" }
    ]
  },
  VFX: {
    title: "บทที่ 3 • ย่านแอนิเมชันและ VFX (VFX)",
    story: "ถ้าปลุกภาพให้ขยับได้ เราอยากทำส่วนไหน",
    options: [
      { text: "ทำตัวละครขยับลื่นๆ / Rigging", career: "3D Animator / Rigging Artist" },
      { text: "ปั้นโมเดล 3D และทำพื้นผิว", career: "3D Modeler / Texture Artist" },
      { text: "ทำเอฟเฟกต์ไฟ ควัน พลังงาน", career: "VFX Artist" },
      { text: "รวมเลเยอร์ภาพให้เนียนเป็นชิ้นเดียว", career: "Compositor" }
    ]
  }
};

// หน้าคั่นกวนๆ แบบสุ่ม (ไม่เกิน 2 หน้าต่อรอบ) — รองรับรูป PNG ทรงอิสระแบบเดียวกับหน้าปก
const interludeList = [
  {
    msg: "สีเริ่มกลับมาแล้ว แต่ดูเหมือนเราเพิ่งเดินไปได้แป๊บเดียวเองนะ",
    image: "HOME/มีม2.jpeg", // เช่น "interlude-1.png"
    fallback: "· · ·",
    btn: "ไปต่อ ไม่รอแล้ว"
  },
  {
    msg: "แจ้งเตือน: ห้ามเดาสุ่ม เพราะสีของเมืองขึ้นอยู่กับใจเราล้วนๆ",
    image: "HOME/มีม4.jpeg", // เช่น "interlude-2.png"
    fallback: "· · ·",
    btn: "โอเค เลือกจากใจ"
  },
  {
    msg: "มีประกายไฟลอยมาถามว่า \"ข้อเมื่อกี้ใช่คำตอบแรกที่แวบมาไหม?\"",
    image: "HOME/มีม3.jpeg", // เช่น "interlude-3.png"
    fallback: "· · ·",
    btn: "ใช่เลย ไปต่อ"
  }
];

// ผลลัพธ์ล็อก 4 สาขาเดี่ยว (DGA, GAME, GAD, VFX) แบบสั้น กระชับ
const outcomeByMajor = {
  DGA: {
    title: "ผู้ปลุกเส้นสายแห่งจินตนาการ",
    code: "DGA • DIGITAL ARTS",
    desc: "เราเด่นด้านการถ่ายทอดไอเดียและอารมณ์ออกมาเป็นภาพวาดที่ชัดและเป็นตัวเองที่สุด",
    keywords: ["วาดเก่ง", "ไอเดียลื่นไหล", "มีสไตล์ชัด"],
    color: "#FF6B9D",
    image: "HOME/เทวี.jpeg",
    careers: ["Illustrator", "Character Designer", "Concept Artist", "Comic / Storyboard Artist", "Art Toy & Sticker Artist"]
  },
  GAME: {
    title: "ผู้ปลุกโลกแห่งการเล่น",
    code: "GAME • INTERACTIVE & GAME DESIGN",
    desc: "เราเด่นด้านการคิดระบบ กติกา และทำให้คนมีส่วนร่วมสนุกไปกับสิ่งที่เราสร้าง",
    keywords: ["คิดเป็นระบบ", "สร้างเกมสนุก", "แก้โจทย์เก่ง"],
    color: "#38B6FF",
    image: "HOME/เอม.jpeg",
    careers: ["Game Designer", "Level Designer", "Game Artist", "Interactive / VR / AR Designer", "Game Producer"]
  },
  GAD: {
    title: "ผู้ปลุกอัตลักษณ์และโครงสร้าง",
    code: "GAD • GRAPHIC DESIGN",
    desc: "เราเด่นด้านการจัดวาง สี สื่อสารไว และสร้างเอกลักษณ์ให้คนจำได้ทันที",
    keywords: ["จัดวางลงตัว", "อัตลักษณ์เด่น", "สื่อสารชัด"],
    color: "#FF8C42",
    image: "HOME/เงือก.jpeg",
    careers: ["Graphic Designer", "Brand Identity Designer", "UI / UX Designer", "Packaging & Editorial Designer", "Art Director"]
  },
  VFX: {
    title: "ผู้ปลุกแสงและการเคลื่อนไหว",
    code: "VFX • VISUAL EFFECTS & ANIMATION",
    desc: "เราเด่นด้านการเติมมิติ แสงเงา และการเคลื่อนไหวให้ภาพดูมีพลังและน่าตื่นตา",
    keywords: ["ภาพขยับมีมิติ", "แสงเงาปัง", "เอฟเฟกต์จัดเต็ม"],
    color: "#9D4EDD",
    image: "HOME/เสก.jpeg",
    careers: ["VFX Artist", "3D Animator", "3D Modeler / Texture Artist", "Compositor", "Lighting & Lookdev Artist"]
  }
};

let stepIndex = 0;
let scoreMap = { DGA: 0, GAME: 0, GAD: 0, VFX: 0 };
let finalSceneChoice = "";
let districtCareerPick = "";
let districtCompleted = false;
let randomInterludeIndices = [];
let chosenInterludes = [];

function switchScene(id) {
  document.querySelectorAll(".scene-box").forEach(el => el.classList.remove("active"));
  document.getElementById(id).classList.add("active");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function shuffleArr(arr) {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const r = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[r]] = [copy[r], copy[i]];
  }
  return copy;
}

document.getElementById("btn-start").addEventListener("click", () => {
  document.body.classList.remove("mode-dawn");
  document.body.classList.add("mode-twilight");

  scoreMap = { DGA: 0, GAME: 0, GAD: 0, VFX: 0 };
  stepIndex = 0;
  districtCompleted = false;
  districtCareerPick = "";
  finalSceneChoice = "";

  // สุ่ม 2 จุดจากช่วงที่กระจายถี่ขึ้น (ต้น-กลาง 1 จุด, กลาง-ท้าย 1 จุด)
  const firstHalfSpot = shuffleArr([2, 3, 4])[0];
  const secondHalfSpot = shuffleArr([6, 7, 8, 9])[0];
  randomInterludeIndices = [firstHalfSpot, secondHalfSpot];
  chosenInterludes = shuffleArr(interludeList).slice(0, 2);

  renderSceneStep();
  switchScene("screen-quiz");
});

function refreshChroma(current, total) {
  const pct = Math.min(100, Math.round((current / total) * 100));
  document.getElementById("awakening-label").textContent = `สีสันกลับมา ${pct}%`;
  document.getElementById("chroma-progress").style.width = `${pct}%`;
  document.getElementById("interlude-chroma-fill").style.width = `${pct}%`;

  const lightVal = 7 + Math.round((pct / 100) * 11);
  document.body.style.backgroundColor = `hsl(232, 20%, ${lightVal}%)`;
}

function renderSceneStep() {
  if (stepIndex === 6 && !districtCompleted) {
    renderDistrictStep();
    return;
  }

  if (stepIndex >= sceneList.length) {
    switchScene("screen-pass");
    return;
  }

  const currentScene = sceneList[stepIndex];
  const totalSteps = sceneList.length + 1;
  const doneSteps = stepIndex + (districtCompleted ? 1 : 0);
  refreshChroma(doneSteps, totalSteps);

  document.getElementById("act-label").textContent = currentScene.act;
  document.getElementById("prompt-heading").textContent = currentScene.title;
  document.getElementById("prompt-story").textContent = currentScene.story;

  const stack = document.getElementById("option-stack");
  stack.innerHTML = "";

  shuffleArr(currentScene.choices).forEach(choice => {
    const btn = document.createElement("button");
    btn.className = "option-pill";
    btn.textContent = choice.text;
    btn.onclick = () => onPickChoice(choice.major, currentScene.id);
    stack.appendChild(btn);
  });
}

function onPickChoice(major, sceneId) {
  scoreMap[major] += 1;
  if (sceneId === "5.2") {
    finalSceneChoice = major;
  }

  stepIndex++;

  const hitIdx = randomInterludeIndices.indexOf(stepIndex);
  if (hitIdx !== -1 && chosenInterludes[hitIdx]) {
    renderInterludeScreen(chosenInterludes[hitIdx]);
  } else {
    renderSceneStep();
  }
}

function renderDistrictStep() {
  refreshChroma(6, 12);

  const ranked = Object.entries(scoreMap).sort((a, b) => b[1] - a[1]);
  const leadMajor = ranked[0][0];
  const district = districtByMajor[leadMajor];

  document.getElementById("act-label").textContent = "บทที่ 3 • ย่านที่เข้ากับเรา";
  document.getElementById("prompt-heading").textContent = district.title;
  document.getElementById("prompt-story").textContent = district.story;

  const stack = document.getElementById("option-stack");
  stack.innerHTML = "";

  shuffleArr(district.options).forEach(opt => {
    const btn = document.createElement("button");
    btn.className = "option-pill";
    btn.textContent = opt.text;
    btn.onclick = () => {
      districtCareerPick = opt.career;
      districtCompleted = true;
      renderSceneStep();
    };
    stack.appendChild(btn);
  });
}

function renderInterludeScreen(item) {
  document.getElementById("interlude-msg").textContent = item.msg;

  const visualBox = document.getElementById("interlude-visual");
  if (item.image) {
    visualBox.innerHTML = `<img src="${item.image}" alt="Interlude" class="freeform-img" onerror="this.style.display='none'; this.parentElement.innerHTML='<span class=interlude-placeholder-text>${item.fallback}</span>'" />`;
  } else {
    visualBox.innerHTML = `<span class="interlude-placeholder-text">${item.fallback}</span>`;
  }

  const box = document.getElementById("interlude-actions");
  box.innerHTML = "";
  const btn = document.createElement("button");
  btn.className = "action-btn";
  btn.textContent = item.btn;
  btn.onclick = () => {
    renderSceneStep();
    switchScene("screen-quiz");
  };
  box.appendChild(btn);

  switchScene("screen-interlude");
}
document.getElementById("priority-matrix").addEventListener("change", (e) => {
  const checked = document.querySelectorAll("#priority-matrix input:checked");
  if (checked.length > 2) {
    e.target.checked = false;
  }
});

document.getElementById("pass-form").addEventListener("submit", (e) => {
  e.preventDefault();
  showSingleMajorResult();
});

document.getElementById("btn-skip-pass").addEventListener("click", () => {
  showSingleMajorResult();
});

function showSingleMajorResult() {
  refreshChroma(12, 12);

  document.body.classList.remove("mode-twilight");
  document.body.classList.add("mode-dawn");
  document.body.style.backgroundColor = "#FAF8F4";

  const ranked = Object.entries(scoreMap).sort((a, b) => {
    if (b[1] !== a[1]) return b[1] - a[1];
    if (a[0] === finalSceneChoice) return -1;
    if (b[0] === finalSceneChoice) return 1;
    return 0;
  });

  const winnerMajor = ranked[0][0];
  const info = outcomeByMajor[winnerMajor];

  document.documentElement.style.setProperty("--theme-accent", info.color);

  const charSlot = document.getElementById("result-char-slot");
  charSlot.innerHTML = `<img src="${info.image}" alt="${info.title}" onerror="this.style.display='none'; this.parentElement.innerHTML='<span style=font-size:2.4rem>✦</span>'" />`;

  document.getElementById("result-title").textContent = info.title;
  document.getElementById("result-code").textContent = info.code;
  document.getElementById("result-desc").textContent = info.desc;

  document.getElementById("result-keywords").innerHTML = info.keywords
    .map(k => `<span>${k}</span>`)
    .join("");

  let careers = [...info.careers];
  if (districtCareerPick) {
    careers = careers.filter(c => c !== districtCareerPick);
    careers.unshift(districtCareerPick);
  }
  document.getElementById("result-careers").textContent = careers.join(" • ");

  switchScene("screen-result");
}

document.getElementById("btn-restart").addEventListener("click", () => {
  document.body.style.backgroundColor = "";
  document.body.classList.remove("mode-twilight");
  document.body.classList.add("mode-dawn");
  switchScene("screen-landing");
});

document.getElementById("btn-download").addEventListener("click", () => {
  window.print();
});