<script>
let input = "";
const password = "143";
let hasKey = false;

// ---------------- CALCULATOR ----------------
function press(num){
  input += num;
  document.getElementById('screen').innerText = input;
}

function clearScr(){
  input = "";
  document.getElementById('screen').innerText = "";
}

function backspace(){
  input = input.slice(0, -1);
  document.getElementById('screen').innerText = input;
}

function check(){
  if(input === password){
    document.getElementById('calc').style.display = 'none';
    document.getElementById('story').classList.remove('hidden');
  } else {
    alert("wrong password 😅 try again");
    clearScr();
  }
}

// ---------------- SLIDES ----------------
let current = 0;
const slides = document.querySelectorAll('.slide');
const bar = document.getElementById('bar');
const story = document.getElementById('story');

// 👉 global click for slide change (FIXED)
document.body.addEventListener("click", function(e){

  // ❌ ignore popup clicks
  if(e.target.closest(".popup")) return;

  // ❌ ignore crate & button clicks
  if(e.target.closest(".crate") || e.target.closest(".find-btn")) return;

  // ❌ if story not started
  if(story.classList.contains('hidden')) return;

  // ❌ stop at last slide
  if(current >= slides.length - 1) return;

  // ✅ move slide
  slides[current].classList.remove('active');
  current++;
  slides[current].classList.add('active');

  updateBar();
});

function updateBar(){
  let progress = (current/(slides.length-1)) * 100;
  bar.style.width = progress + '%';
}

// ---------------- POPUP ----------------
function showPopup(message){
  const popup = document.getElementById("popup");
  const text = document.getElementById("popup-text");

  text.innerHTML = message;
  popup.style.display = "flex";

  // close popup on outside click
  popup.onclick = function(e){
    if(e.target.id === "popup"){
      popup.style.display = "none";
    }
  };
}

// ---------------- FIND KEY ----------------
function findKey(e){
  e.stopPropagation();

  hasKey = true;

  showPopup(`
    pehle ek choti si condition hai... 👀<br><br>
    agar aap smile nahi kar rahe ho... toh ek baar smile kariyega 😊<br><br>
    <b>aapki smile hi iss crate ki key hai 💛</b><br><br>
    jab aap smile karte ho na... sab better lagta hai :)
  `);
}

// ---------------- OPEN CRATE ----------------
function openCrate(e){
  e.stopPropagation();

  const crate = document.querySelector(".crate");

  if(!hasKey){
    showPopup("arey… pehle key toh dhundhiye 🥺");
  } else {
    showPopup(`
      🎉 surpriseeeee 🎉<br><br>
      ye aapke liye 🍰<br><br>
      virtual hai… but intention real hai :)<br><br>
      aap important ho 💛
    `);

    // hide crate after opening
    if(crate) crate.style.display = "none";
  }
}
</script>
