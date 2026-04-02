<script>
let input="";
const password="143";
let hasKey = false;

// ---------------- CALCULATOR ----------------
function press(num){
 input+=num;
 document.getElementById('screen').innerText=input;
}

function clearScr(){
 input="";
 document.getElementById('screen').innerText="";
}

function backspace(){
 input = input.slice(0,-1);
 document.getElementById('screen').innerText=input;
}

function check(){
 if(input===password){
  document.getElementById('calc').style.display='none';
  document.getElementById('story').classList.remove('hidden');
 } else {
  alert("wrong password 😅 try again");
  clearScr();
 }
}

// ---------------- SLIDES ----------------
let current=0;
const slides=document.querySelectorAll('.slide');
const bar=document.getElementById('bar');

function nextSlide(e){
 if(e) e.stopPropagation();

 if(document.getElementById('story').classList.contains('hidden')) return;

 // stop at last slide (no restart)
 if(current >= slides.length - 1) return;

 slides[current].classList.remove('active');
 current++;
 slides[current].classList.add('active');

 updateBar();
}

function updateBar(){
 let progress=(current/(slides.length-1))*100;
 bar.style.width=progress+'%';
}

// ---------------- POPUP SYSTEM ----------------
function showPopup(message){
 const popup = document.getElementById("popup");
 const text = document.getElementById("popup-text");

 text.innerHTML = message;
 popup.style.display = "flex";

 popup.onclick = () => popup.style.display = "none";
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
  document.querySelector(".crate").style.display = "none";
 }
}
</script>
