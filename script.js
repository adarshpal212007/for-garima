<script>
let input="";
const password="143";
let hasKey=false;

// ---------------- CALCULATOR ----------------
function press(num){
 input+=num;
 document.getElementById("screen").innerText=input;
}

function clearScr(){
 input="";
 document.getElementById("screen").innerText="";
}

function backspace(){
 input=input.slice(0,-1);
 document.getElementById("screen").innerText=input;
}

function check(){
 if(input===password){
  document.getElementById("calc").style.display='none';
  document.getElementById("story").classList.remove('hidden');
 } else {
  alert("wrong password 😅");
  clearScr();
 }
}

// ---------------- SLIDES ----------------
let current=0;
const slides=document.querySelectorAll('.slide');
const bar=document.getElementById('bar');
const story=document.getElementById("story");

document.body.addEventListener("click", function(e){

 // ❌ block only popup clicks
 if(e.target.closest(".popup")) return;

 // ❌ block crate & button clicks
 if(e.target.closest(".crate") || e.target.closest(".find-btn")) return;

 // ❌ don't slide before unlock
 if(story.classList.contains('hidden')) return;

 // ❌ stop at last slide
 if(current >= slides.length-1) return;

 slides[current].classList.remove('active');
 current++;
 slides[current].classList.add('active');

 bar.style.width=(current/(slides.length-1))*100+"%";
});

// ---------------- POPUP ----------------
function showPopup(msg){
 const popup=document.getElementById("popup");
 const text=document.getElementById("popup-text");

 text.innerHTML=msg;
 popup.style.display="flex";

 popup.onclick=()=>popup.style.display="none";
}

// ---------------- FIND KEY ----------------
function findKey(e){
 e.stopPropagation();
 hasKey=true;

 showPopup(`
 pehle ek choti si condition hai...<br><br>
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

  document.querySelector(".crate").style.display="none";
 }
}
</script>
