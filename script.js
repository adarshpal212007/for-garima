<script>
let input = "";
const password = "143";
let hasKey = false;

// ---------------- CALCULATOR ----------------
function press(num){
 input += num;
 document.getElementById("screen").innerText = input;
}

function clearScr(){
 input = "";
 document.getElementById("screen").innerText = "";
}

function backspace(){
 input = input.slice(0, -1);
 document.getElementById("screen").innerText = input;
}

function check(){
 if(input === password){
  document.getElementById("calc").style.display = 'none';
  document.getElementById("story").classList.remove('hidden');
 } else {
  alert("wrong password 😅");
  clearScr();
 }
}

// ---------------- SLIDES ----------------
let current = 0;

function updateSlides(){
 const slides = document.querySelectorAll('.slide');
 const bar = document.getElementById('bar');

 if(current >= slides.length) return;

 slides.forEach(s => s.classList.remove('active'));
 slides[current].classList.add('active');

 if(bar){
  let progress = (current / (slides.length - 1)) * 100;
  bar.style.width = progress + "%";
 }
}

// ---------------- GLOBAL CLICK (FIXED PROPERLY) ----------------
document.addEventListener("click", function(e){

 // 🚫 Ignore clicks on interactive elements
 if (
   e.target.closest(".crate") ||
   e.target.closest(".find-btn") ||
   e.target.closest(".buttons") ||
   e.target.closest(".popup") ||
   e.target.closest("#calc")
 ) {
   return;
 }

 const story = document.getElementById("story");

 if(!story || story.classList.contains('hidden')) return;

 const slides = document.querySelectorAll('.slide');

 if(current >= slides.length - 1) return;

 current++;
 updateSlides();
});

// ---------------- POPUP ----------------
function showPopup(msg){
 const popup = document.getElementById("popup");
 const text = document.getElementById("popup-text");

 // 🔥 always reset (prevents double popup issue)
 text.innerHTML = "";
 text.innerHTML = msg;

 popup.style.display = "flex";
}

// close popup when clicking outside content
document.getElementById("popup").addEventListener("click", function(e){
 if(!e.target.closest(".popup-content")){
  this.style.display = "none";
 }
});

// ---------------- FIND KEY ----------------
function findKey(e){
 e.stopPropagation();

 hasKey = true;

 showPopup(`
 pehle ek choti si condition hai... 👀<br><br>
 agar aap smile nahi kar rahe ho... toh ek baar smile kariyega 😊<br><br>
 <b>aapki smile hi iss crate ki key hai 💛</b>
 `);
}

// ---------------- OPEN CRATE ----------------
function openCrate(e){
 e.stopPropagation();

 if(!hasKey){
  showPopup("arey… pehle key toh dhundhiye 🥺");
 } else {
  showPopup(`
  🎉 surpriseeee 🎉<br><br>
  ye aapke liye 🍰<br><br>
  virtual hai… but intention real hai :)<br><br>
  aap important hain 💛
  `);

  // hide crate after opening
  const crate = document.querySelector(".crate");
  if(crate) crate.style.display = "none";
 }
}

// ---------------- INIT FIX ----------------
window.onload = function(){
 updateSlides();
};
</script>
