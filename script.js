const quizData = [
  {
    chapter: "บทที่ 1 - ตื่นขึ้นในเมืองไร้สี",
    sceneTitle: "ตื่นขึ้นมา",
    sceneCode: "scene-1.1",
    sceneImg: "images/scene-1.1.png",
    sceneDesc: "ทุกอย่างรอบตัวเธอเป็นสีเทา แต่มือของเธอยังขยับได้ และยังมีอะไรให้ทำอีกเยอะ[cite: 7]",
    question: "ดวงไฟลอยมาใกล้ ๆ แล้วกระซิบว่า 'เหลือเวลาถึงคืนนี้เท่านั้นนะ ช่วยเมืองนี้ด้วย' สิ่งแรกที่เธอทำคือ...[cite: 7]",
    options: [
      { text: "ถามดวงไฟว่าเมืองนี้มีกติกาอะไร แล้วจะผ่านด่านไปได้ยังไง[cite: 7]", type: "IGD" },
      { text: "หยิบชอล์กขึ้นมาแล้วลงสีบนกำแพง[cite: 7]", type: "DGA" },
      { text: "เดินดูป้ายที่ตัวอักษรขีดจนอ่านไม่ออก แล้วลองจัดใหม่ให้อ่านง่ายขึ้น[cite: 7]", type: "DGD" },
      { text: "ตะโกนเรียกคนในเมืองให้มารวมกันที่จัตุรัส[cite: 7]", type: "DEN" },
      { text: "ลองดันของรอบตัวเบา ๆ ว่าทำไมทุกอย่างถึงนิ่งสนิทแบบนี้[cite: 7]", type: "AFX" }
    ]
  },
  {
    chapter: "บทที่ 1 - ตื่นขึ้นในเมืองไร้สี",
    sceneTitle: "ของติดตัว",
    sceneCode: "scene-1.2",
    sceneImg: "images/scene-1.2.png",
    sceneDesc: "การเดินทางในเมืองไร้สีจำเป็นต้องมีเครื่องมือคู่ใจติดตัวไปด้วย[cite: 7]",
    question: "ดวงไฟบอกว่าพกไปได้แค่ชิ้นเดียว เธอเลือกหยิบ...[cite: 7]",
    options: [
      { text: "สมุดสเก็ตช์ที่วาดได้ไม่มีวันหมดหน้า[cite: 7]", type: "DGA" },
      { text: "ชุดสีกับตัวอักษรวิเศษที่ทำให้อะไรก็ดูเข้าที่เข้าทาง[cite: 7]", type: "DGD" },
      { text: "ตลับเกมเก่า ๆ ที่ยังไม่มีใครรู้วิธีเล่น[cite: 7]", type: "IGD" },
      { text: "กล้องฟิล์มที่ถ่ายแล้วภาพเคลื่อนไหวได้[cite: 7]", type: "AFX" },
      { text: "ไมโครโฟนที่เสียงดังไปทั่วทั้งเมือง[cite: 7]", type: "DEN" }
    ]
  },
  {
    chapter: "บทที่ 1 - ตื่นขึ้นในเมืองไร้สี",
    sceneTitle: "ทางแยกห้าสาย",
    sceneCode: "scene-1.3",
    sceneImg: "images/scene-1.3.png",
    sceneDesc: "เสียงและกลิ่นอายที่แตกต่างกันลอยมาจากถนนทั้งห้าสายเบื้องหน้า[cite: 7]",
    question: "ปลายจัตุรัสมีถนนห้าสาย แต่ละสายมีกลิ่นกับเสียงไม่เหมือนกัน เธอเดินเข้าสายไหนก่อน[cite: 7]",
    options: [
      { text: "สายที่ผนังทั้งสองข้างเต็มไปด้วยภาพวาด[cite: 7]", type: "DGA" },
      { text: "สายที่เต็มไปด้วยป้ายร้านและโลโก้[cite: 8]", type: "DGD" },
      { text: "สายที่มีเสียงเกมกับแสงไฟหลากสี[cite: 8]", type: "IGD" },
      { text: "สายที่มีเสียงเครื่องฉายหนังกับควันเอฟเฟกต์[cite: 8]", type: "AFX" },
      { text: "สายที่มีเสียงเพลงและผู้คนมายืนรวมกัน[cite: 8]", type: "DEN" }
    ]
  },
  {
    chapter: "บทที่ 2 - ปัญหาของชาวเมือง",
    sceneTitle: "สะพานที่พังครึ่งหนึ่ง",
    sceneCode: "scene-2.1",
    sceneImg: "images/scene-2.1.png",
    sceneDesc: "แม่น้ำสายใหญ่ขวางทางอยู่ และผู้คนอีกฝั่งกำลังรอความช่วยเหลือ[cite: 8]",
    question: "สะพานข้ามแม่น้ำพังไปครึ่งทาง ฝั่งโน้นมีคนรออยู่ เธอจะข้ามไปยังไง[cite: 8]",
    options: [
      { text: "วาดสะพานขึ้นมาใหม่ด้วยเส้นและสีในแบบของเธอ[cite: 8]", type: "DGA" },
      { text: "ทำป้ายเตือนกับป้ายบอกทางอ้อม ให้ทุกคนเดินตามได้โดยไม่งง[cite: 8]", type: "DGD" },
      { text: "ไขกลไกของสะพานให้กลับมาทำงานอีกครั้ง[cite: 8]", type: "IGD" },
      { text: "ทำภาพสะพานที่ค่อย ๆ ประกอบตัวเองขึ้นมาให้ทุกคนเห็น[cite: 8]", type: "AFX" },
      { text: "ชวนชาวเมืองมาช่วยกันซ่อม แล้วจัดเป็นงานฉลองเล็ก ๆ[cite: 8]", type: "DEN" }
    ]
  },
  {
    chapter: "บทที่ 2 - ปัญหาของชาวเมือง",
    sceneTitle: "เด็กน้อยร้องไห้",
    sceneCode: "scene-2.2",
    sceneImg: "images/scene-2.2.png",
    sceneDesc: "ความทรงจำเกี่ยวกับตัวละครโปรดกำลังเลือนหายไปพร้อมกับสีสัน[cite: 8]",
    question: "เด็กคนหนึ่งนั่งร้องไห้อยู่ข้างทาง เธอบอกว่าตัวการ์ตูนที่รักที่สุดหายไปจากเมืองแล้ว เธอช่วยหนูน้อยยังไง[cite: 8]",
    options: [
      { text: "วาดตัวการ์ตูนตัวนั้นขึ้นมาใหม่ให้[cite: 8]", type: "DGA" },
      { text: "ทำสติกเกอร์ โปสเตอร์ และของที่ระลึกให้เธอเก็บไว้[cite: 8]", type: "DGD" },
      { text: "สร้างเกมเล็ก ๆ ให้เธอได้เล่นกับตัวการ์ตูนตัวนั้น[cite: 8]", type: "IGD" },
      { text: "ทำให้ตัวการ์ตูนมีชีวิตขึ้นมา เดินและพูดกับเธอได้[cite: 8]", type: "AFX" },
      { text: "ชวนเด็ก ๆ คนอื่นมานั่งล้อมวงฟังเรื่องของตัวการ์ตูนตัวนั้น[cite: 8]", type: "DEN" }
    ]
  },
  {
    chapter: "บทที่ 2 - ปัญหาของชาวเมือง",
    sceneTitle: "ร้านเก่าแก่ที่ใกล้ปิด",
    sceneCode: "scene-2.3",
    sceneImg: "images/scene-2.3.png",
    sceneDesc: "ร้านค้าดั้งเดิมของเมืองกำลังจะถูกลืมเลือนไปตามกาลเวลา[cite: 8]",
    question: "เจ้าของร้านเก่าแก่เล่าว่าไม่มีใครรู้จักร้านเขาแล้ว เธอตอบเขาว่า...[cite: 8]",
    options: [
      { text: "หนูจะวาดภาพให้ร้านนี้มีเอกลักษณ์ไม่เหมือนใคร[cite: 8]", type: "DGA" },
      { text: "หนูจะทำแบรนด์ใหม่ให้ ตั้งแต่โลโก้ไปจนถึงป้ายหน้าร้าน[cite: 8]", type: "DGD" },
      { text: "หนูจะทำให้การเดินเข้าร้านเป็นเหมือนเล่นเกมสนุก ๆ[cite: 8]", type: "IGD" },
      { text: "หนูจะทำคลิปแนะนำร้านที่ดูแล้วขนลุก[cite: 8]", type: "AFX" },
      { text: "หนูจะจัดงานแล้วช่วยโปรโมต ให้คนแห่กันมา[cite: 8]", type: "DEN" }
    ]
  },
  {
    chapter: "บทที่ 3 - ด่านทดสอบ",
    sceneTitle: "หน้าประตูหินผา",
    sceneCode: "scene-3.1",
    sceneImg: "images/scene-3.1.png",
    sceneDesc: "ประตูหินบานใหญ่ตั้งตระหง่านขวางทางสู่ใจกลางเมือง[cite: 9]",
    question: "ประตูหินถามว่า 'เธอพร้อมฝึกอะไรทุกวัน'[cite: 9]",
    options: [
      { text: "วาดรูปและสังเกตโลกรอบตัวให้ละเอียดขึ้น[cite: 9]", type: "DGA" },
      { text: "จัดองค์ประกอบ สี และตัวอักษรให้ลงตัว[cite: 9]", type: "DGD" },
      { text: "คิดเป็นระบบ เป็นขั้นเป็นตอน[cite: 9]", type: "IGD" },
      { text: "ทำให้ภาพเคลื่อนไหวและดูสมจริง[cite: 9]", type: "AFX" },
      { text: "พูด เล่าเรื่อง และประสานคนให้ไปทางเดียวกัน[cite: 9]", type: "DEN" }
    ]
  },
  {
    chapter: "บทที่ 4 - เพื่อนร่วมทาง",
    sceneTitle: "เจอเพื่อนสี่คน",
    sceneCode: "scene-4.1",
    sceneImg: "images/scene-4.1.png",
    sceneDesc: "การเดินทางที่ยิ่งใหญ่ไม่อาจสำเร็จได้ด้วยตัวคนเดียว[cite: 10]",
    question: "ที่ลานน้ำพุ เธอเจอนักเดินทางอีกสี่คน แต่ละคนมีของที่ตัวเองยังทำไม่ได้ เธอเลือกเป็นคนที่...[cite: 10]",
    options: [
      { text: "ช่วยวาดภาพให้ทุกคนเห็นตรงกัน[cite: 10]", type: "DGA" },
      { text: "ทำไกด์ให้ทุกอย่างดูลงตัวและเป็นระเบียบ[cite: 10]", type: "DGD" },
      { text: "คิดวิธีให้ทุกคนทำงานด้วยกันแล้วสนุก[cite: 10]", type: "IGD" },
      { text: "ทำตัวอย่างสั้น ๆ ให้เห็นว่าแผนจะออกมาหน้าตาเป็นยังไง[cite: 10]", type: "AFX" },
      { text: "เป็นคนกลางที่ทำให้ทุกคนอยากเดินต่อไปด้วยกัน[cite: 10]", type: "DEN" }
    ]
  },
  {
    chapter: "บทที่ 4 - เพื่อนร่วมทาง",
    sceneTitle: "เพื่อนเห็นไม่ตรงกัน",
    sceneCode: "scene-4.2",
    sceneImg: "images/scene-4.2.png",
    sceneDesc: "ความเห็นที่แตกต่างเกิดขึ้นกลางทางแยกสำคัญ[cite: 10]",
    question: "กลางทางมีสองแยก ทีมเถียงกันว่าจะไปทางไหน เธอทำอะไร[cite: 10]",
    options: [
      { text: "วาดแผนที่ให้เห็นภาพว่าแต่ละทางไปไหนบ้าง[cite: 10]", type: "DGA" },
      { text: "ทำตารางเปรียบเทียบให้ตัดสินใจง่ายขึ้น[cite: 10]", type: "DGD" },
      { text: "เสนอให้ลองไปทั้งสองทางแล้วดูผลลัพธ์[cite: 10]", type: "IGD" },
      { text: "ทำภาพจำลองให้เห็นว่าปลายทางของแต่ละทางเป็นยังไง[cite: 10]", type: "AFX" },
      { text: "ฟังทุกคนก่อน แล้วหาจุดที่ทุกคนรับได้[cite: 10]", type: "DEN" }
    ]
  },
  {
    chapter: "บทที่ 5 - คืนเทศกาล",
    sceneTitle: "ขึ้นเวที",
    sceneCode: "scene-5.1",
    sceneImg: "images/scene-5.1.png",
    sceneDesc: "ฟ้ามืดลงแล้ว ไฟทั่วเมืองเริ่มติด เหลือแค่เวทีใหญ่ที่ยังว่างอยู่[cite: 10]",
    question: "เวทีว่างเปล่ากำลังรอเธออยู่ ไฮไลต์ที่เธออยากมอบให้ทั้งเมืองคือ...[cite: 10]",
    options: [
      { text: "ภาพวาดขนาดยักษ์ที่คนทั้งเมืองเงยหน้ามอง[cite: 10]", type: "DGA" },
      { text: "ภาพลักษณ์ใหม่ของเมือง ที่ทำให้ทุกมุมดูมีสไตล์เดียวกัน[cite: 10]", type: "DGD" },
      { text: "โชว์ภาพเคลื่อนไหวกับเอฟเฟกต์ที่ทำให้ทั้งลานตะลึง[cite: 10]", type: "AFX" },
      { text: "เกมที่คนทั้งเมืองเข้ามาเล่นพร้อมกัน[cite: 10]", type: "IGD" },
      { text: "การแสดงสดที่ทุกคนมีส่วนร่วมได้[cite: 10]", type: "DEN" }
    ]
  },
  {
    chapter: "บทที่ 5 - คืนเทศกาล",
    sceneTitle: "สีกลับมาแล้ว",
    sceneCode: "scene-5.2",
    sceneImg: "images/scene-5.2.png",
    sceneDesc: "แสงสีสว่างไสวไปทั่ว Imagine City อีกครั้ง[cite: 10]",
    question: "เมื่อสีค่อย ๆ กลับมาทั่วเมือง ผู้คนหันมามองเธอ เธออยากให้พวกเขาจำเธอว่าเป็นใคร[cite: 10]",
    options: [
      { text: "คนที่ให้กำเนิดตัวละครที่ทุกคนรัก[cite: 10]", type: "DGA" },
      { text: "คนที่ทำให้เมืองนี้ดูดีและมีเอกลักษณ์[cite: 10]", type: "DGD" },
      { text: "คนที่สร้างโลกให้ทุกคนได้เข้ามาเล่น[cite: 10]", type: "IGD" },
      { text: "คนที่ทำให้สิ่งที่ดูเป็นไปไม่ได้กลายเป็นจริง[cite: 10]", type: "AFX" },
      { text: "คนที่ทำให้ทุกคนมารวมกันได้[cite: 10]", type: "DEN" }
    ]
  }
];

const resultsData = {
  DGD: {
    code: "Digital Graphic Design",
    title: "นักออกแบบประจำเมือง",
    charImg: "images/char-dgd.png",
    desc: "ภาพลักษณ์ใหม่ที่คุณออกแบบทำให้ทั้งเมืองมีหน้าตาเป็นของตัวเอง โดดเด่นและจดจำง่าย[cite: 11]",
    careerTitle: "Brand Identity / UI Designer",
    careerDesc: "Graphic Designer, Art Director, UI/UX & Packaging Designer[cite: 11]",
    majorTitle: "สาขาดิจิทัลกราฟิกดีไซน์",
    majorDesc: "Digital Graphic Design (DGD) • SPU"
  },
  DGA: {
    code: "Digital Arts",
    title: "นักเสกจินตนาการ",
    charImg: "images/char-dga.png",
    desc: "ภาพวาดของคุณคือสีแรกที่ย้อมเมืองให้กลับมามีชีวิต ทุกคนเงยหน้ามองแล้วพูดเป็นเสียงเดียวกันว่านี่คือโลกแห่งความฝัน[cite: 11]",
    careerTitle: "Concept Artist & Illustrator",
    careerDesc: "Illustrator, Character Designer, Webtoon & Art Toy Designer[cite: 11]",
    majorTitle: "สาขาดิจิทัลอาร์ตส์",
    majorDesc: "Digital Arts (DGA) • SPU"
  },
  AFX: {
    code: "Animation & VFX",
    title: "ผู้มอบชีวิตแด่ภาพ",
    charImg: "images/char-afx.png",
    desc: "ภาพเคลื่อนไหวของคุณทำให้ท้องฟ้าสว่างวาบ ไม่มีใครเชื่อว่าทั้งหมดนี้คือฝีมือคนคนเดียว[cite: 12]",
    careerTitle: "3D Animator & VFX Artist",
    careerDesc: "3D Modeler, VFX Artist, Compositor & Rigging Artist[cite: 12]",
    majorTitle: "สาขาแอนิเมชันและวิชวลเอฟเฟกต์",
    majorDesc: "Computer Animation and VFX (AFX) • SPU"
  },
  IGD: {
    code: "Interactive & Game",
    title: "นักสร้างสนามเล่น",
    charImg: "images/char-igd.png",
    desc: "ทั้งเมืองกลายเป็นสนามเล่นของคุณ ทุกคนหัวเราะ ตื่นเต้น และไม่มีใครอยากให้เกมจบ[cite: 11]",
    careerTitle: "Game Designer & VR/AR Creator",
    careerDesc: "Game Designer, Level Designer, Game Artist & Game Producer[cite: 12]",
    majorTitle: "สาขาการออกแบบอินเทอร์แอคทีฟและเกม",
    majorDesc: "Interactive and Game Design (IGD) • SPU"
  },
  DEN: {
    code: "Digital Entertainment",
    title: "นักรวมใจคนทั้งเมือง",
    charImg: "images/char-den.png",
    desc: "คุณไม่ได้ขึ้นเวทีคนเดียว แต่คุณทำให้ทั้งเมืองได้ขึ้นเวทีและสนุกไปพร้อมกัน[cite: 12]",
    careerTitle: "Content Creator & Event Producer",
    careerDesc: "Show Producer, Streaming/VTuber Producer & Entertainment Marketer[cite: 12]",
    majorTitle: "สาขาดิจิทัลบันเทิง",
    majorDesc: "Digital Entertainment (DEN) • SPU"
  }
};

let currentQuestion = 0;
let answerHistory = [];

const startScreen = document.getElementById('start-screen');
const quizScreen = document.getElementById('quiz-screen');
const formScreen = document.getElementById('form-screen');
const resultScreen = document.getElementById('result-screen');

document.getElementById('start-btn').addEventListener('click', startQuiz);
document.getElementById('prev-btn').addEventListener('click', goBack);
document.getElementById('submit-form-btn').addEventListener('click', () => {
  document.body.style.setProperty('--gray-filter', '0%');
  formScreen.classList.remove('active');
  resultScreen.classList.add('active');
  showResult();
});
document.getElementById('restart-btn').addEventListener('click', startQuiz);

function updateColorProgress() {
  // คำนวณเปอร์เซ็นต์สีที่เพิ่มขึ้นทีละฉาก (จาก 0% ถึง 100%)
  let progressRatio = currentQuestion / (quizData.length - 1);
  let grayValue = Math.max(0, Math.round(100 - (progressRatio * 100)));
  let colorPercent = Math.round(progressRatio * 100);

  // เปลี่ยนค่าฟิลเตอร์หน้าจอ
  document.body.style.setProperty('--gray-filter', `${grayValue}%`);

  // อัปเดตข้อความสถานะตัวหนังสือบนหัวเว็บและมุมขวาล่างทันที
  const hudStatus = document.getElementById('hud-status-text');
  const dynamicText = document.getElementById('dynamic-progress-text');

  if (colorPercent === 0) {
    hudStatus.innerText = `🖤 สถานะเมือง: ขาว-ดำ (${colorPercent}%)`;
    hudStatus.style.borderColor = "#94a3b8";
    hudStatus.style.color = "#94a3b8";
  } else if (colorPercent < 50) {
    hudStatus.innerText = `🎨 สถานะเมือง: เริ่มมีสีสัน (${colorPercent}%)`;
    hudStatus.style.borderColor = "#38bdf8";
    hudStatus.style.color = "#38bdf8";
  } else if (colorPercent < 100) {
    hudStatus.innerText = `🌈 สถานะเมือง: สีสันสดใสขึ้น (${colorPercent}%)`;
    hudStatus.style.borderColor = "#8b5cf6";
    hudStatus.style.color = "#8b5cf6";
  } else {
    hudStatus.innerText = `✨ สถานะเมือง: สีสันเต็ม 100%!`;
    hudStatus.style.borderColor = "#ec4899";
    hudStatus.style.color = "#ec4899";
  }

  dynamicText.innerText = `ระดับการคืนสีสัน: ${colorPercent}% สำเร็จ`;
}

function startQuiz() {
  currentQuestion = 0;
  answerHistory = [];
  document.body.style.setProperty('--gray-filter', '100%');
  startScreen.classList.remove('active');
  formScreen.classList.remove('active');
  resultScreen.classList.remove('active');
  quizScreen.classList.add('active');
  showQuestion();
}

function showQuestion() {
  updateColorProgress();

  const q = quizData[currentQuestion];
  document.getElementById('chapter-title').innerText = q.chapter;
  document.getElementById('scene-title').innerText = q.sceneTitle;
  document.getElementById('scene-desc').innerText = q.sceneDesc;

  const imgEl = document.getElementById('scene-img');
  const fallbackEl = document.getElementById('screen-fallback');
  imgEl.style.display = 'block';
  fallbackEl.style.display = 'none';
  imgEl.src = q.sceneImg;

  document.getElementById('question-text').innerText = q.question;
  document.getElementById('question-number').innerText = `ฉาก ${currentQuestion + 1} / ${quizData.length}`;
  document.getElementById('prev-btn').style.visibility = currentQuestion === 0 ? 'hidden' : 'visible';

  const optionsDiv = document.getElementById('answer-options');
  optionsDiv.innerHTML = '';

  q.options.forEach((opt, idx) => {
    const optNum = String(idx + 1).padStart(2, '0');
    const btn = document.createElement('button');
    btn.className = 'choice-card-btn';
    btn.innerHTML = `
      <span class="choice-num">${optNum}</span>
      <span class="choice-text">${opt.text}</span>
    `;
    btn.onclick = () => {
      answerHistory[currentQuestion] = opt.type;
      currentQuestion++;
      if (currentQuestion < quizData.length) {
        showQuestion();
      } else {
        document.body.style.setProperty('--gray-filter', '10%');
        quizScreen.classList.remove('active');
        formScreen.classList.add('active');
      }
    };
    optionsDiv.appendChild(btn);
  });
}

function goBack() {
  if (currentQuestion > 0) {
    currentQuestion--;
    showQuestion();
  }
}

function showResult() {
  const scores = { DGA: 0, DGD: 0, IGD: 0, AFX: 0, DEN: 0 };
  answerHistory.forEach(type => {
    if (scores[type] !== undefined) scores[type]++;
  });

  const sortedMajors = Object.keys(scores).sort((a, b) => scores[b] - scores[a]);
  const topMajor = sortedMajors[0];
  const secondMajor = sortedMajors[1];

  let data = resultsData[topMajor];

  if (scores[topMajor] - scores[secondMajor] <= 1) {
    data = {
      code: `${topMajor} + ${secondMajor}`,
      title: `สายผสม (${resultsData[topMajor].title})`,
      charImg: resultsData[topMajor].charImg,
      desc: `คุณผสมผสานจุดเด่นของ ${resultsData[topMajor].majorTitle} และ ${resultsData[secondMajor].majorTitle} เข้าด้วยกันอย่างลงตัว!`,
      careerTitle: "Multi-Disciplinary Creator",
      careerDesc: `${resultsData[topMajor].code} × ${resultsData[secondMajor].code}`,
      majorTitle: "School of Digital Media (SDM)",
      majorDesc: `${resultsData[topMajor].majorTitle} & ${resultsData[secondMajor].majorTitle}`
    };
  }

  document.getElementById('res-code').innerText = data.code;
  document.getElementById('res-title').innerText = data.title;
  document.getElementById('res-desc').innerText = data.desc;
  document.getElementById('res-career-title').innerText = data.careerTitle;
  document.getElementById('res-career-desc').innerText = data.careerDesc;
  document.getElementById('res-major-title').innerText = data.majorTitle;
  document.getElementById('res-major-desc').innerText = data.majorDesc;

  const charImgEl = document.getElementById('res-char-img');
  charImgEl.src = data.charImg;
  charImgEl.onerror = () => { charImgEl.src = "images/mascot.png"; };
}

document.getElementById('user-photo-input').addEventListener('change', function(e) {
  const file = e.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function(event) {
      const circle = document.getElementById('upload-preview');
      circle.style.backgroundImage = `url(${event.target.result})`;
      circle.innerHTML = '';
      circle.style.borderStyle = 'solid';
    };
    reader.readAsDataURL(file);
  }
});