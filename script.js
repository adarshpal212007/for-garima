<script>
let input = "";
const password = "143";

let hasKey = false;

/* ================= CALCULATOR ================= */

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

/* ================= STORY ================= */

let current = 0;
const slides = document.querySelectorAll('.slide');
const bar = document.getElementById('bar');

document.body.addEventListener("click", function(e){
  if(
    !e.target.closest(".crate") &&
    !e.target.closest(".find-btn") &&
    !e.target.closest(".popup-content")
  ){
    if(document.getElementById('story').classList.contains('hidden')) return;

    slides[current].classList.remove('active');
    current = (current + 1) % slides.length;
    slides[current].classList.add('active');
    updateBar();
  }
});

function updateBar(){
  let progress = (current / (slides.length - 1)) * 100;
  bar.style.width = progress + '%';
}

/* ================= POPUP SYSTEM ================= */

const popup = document.getElementById("popup");
const text = document.getElementById("popup-text");

/* SINGLE POPUP CONTROL */
function showPopup(message){
  text.innerHTML = message;
  popup.style.display = "flex";

  // hide crate while popup open
  const crate = document.querySelector(".crate");
  if(crate) crate.style.display = "none";
}

/* FIND KEY */
function findKey(e){
  if(e) e.stopPropagation();

  hasKey = true;

  showPopup(`
  pehle ek choti si condition hai...<br><br>
  agar aap smile nahi kar rahe ho na... toh please ek baar smile kariyega 😊<br><br>
  <b>aapki smile hi iss crate ki key hai 💛</b><br><br>
  sach me... jab aap smile karte ho na... sab better lagta hai :)
  `);
}

/* OPEN CRATE */
function openCrate(e){
  if(e) e.stopPropagation();

  if(!hasKey){
    showPopup("arey… pehle key toh dhundhiye 🥺");
  } else {
    showPopup(`
    🎉 surpriseeee 🎉<br><br>
    ye aapke liye 🍰<br><br>
    virtual hai… but intention real hai :)<br><br>
    aap important hain 💛
    `);

    // permanently hide crate after open
    const crate = document.querySelector(".crate");
    if(crate) crate.style.display = "none";
  }
}

/* CLOSE POPUP */
popup.addEventListener("click", function(e){
  if(e.target.id === "popup"){
    popup.style.display = "none";

    // show crate again only if not opened finally
    const crate = document.querySelector(".crate");
    if(crate && !hasKey){
      crate.style.display = "block";
    }
  }
});

/* ESC KEY CLOSE */
document.addEventListener("keydown", function(e){
  if(e.key === "Escape"){
    popup.style.display = "none";
  }
});
</script>
