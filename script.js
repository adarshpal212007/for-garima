<script>
let input="";
const password="143";
let hasKey=false;

// calculator
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

// slides
let current=0;
const slides=document.querySelectorAll('.slide');
const bar=document.getElementById('bar');

// 🔥 FIXED CLICK HANDLING
document.addEventListener("click", function(e){

 // 👉 allow button & crate clicks (VERY IMPORTANT FIX)
 if (
   e.target.classList.contains("crate") ||
   e.target.classList.contains("find-btn") ||
   e.target.closest(".crate") ||
   e.target.closest(".find-btn") ||
   e.target.closest(".popup") ||
   e.target.closest(".buttons")
 ) {
   return;
 }

 const story = document.getElementById("story");

 if(story.classList.contains('hidden')) return;

 if(current >= slides.length-1) return;

 slides[current].classList.remove('active');
 current++;
 slides[current].classList.add('active');

 bar.style.width=(current/(slides.length-1))*100+"%";
});

// popup
function showPopup(msg){
 const popup=document.getElementById("popup");
 document.getElementById("popup-text").innerHTML=msg;
 popup.style.display="flex";
}

// close popup
document.getElementById("popup").onclick=function(){
 this.style.display="none";
};

// key
function findKey(e){
 e.stopPropagation();

 hasKey=true;

 showPopup(`
 pehle ek choti si condition hai...<br><br>
 agar aap smile nahi kar rahe ho... toh ek baar smile kariyega 😊<br><br>
 <b>aapki smile hi iss crate ki key hai 💛</b>
 `);
}

// crate
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
  document.querySelector(".crate").style.display="none";
 }
}
</script>
