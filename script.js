<script>
let hasKey = false;

const popup = document.getElementById("popup");
const text = document.getElementById("popup-text");

/* FUNCTION TO SHOW MESSAGE (single control) */
function showPopup(message){
  text.innerHTML = message;
  popup.style.display = "flex";
}

/* FIND KEY */
function findKey(e) {
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
function openCrate(e) {
  if(e) e.stopPropagation();

  if (!hasKey) {
    showPopup("arey… pehle key toh dhundhiye 🥺");
  } else {
    showPopup(`
    🎉 surpriseeee 🎉<br><br>
    ye aapke liye 🍰<br><br>
    virtual hai… but intention real hai :)<br><br>
    aap important hain 💛
    `);

    // hide crate after opening
    document.querySelector(".crate").style.display = "none";
  }
}

/* CLOSE POPUP */
popup.addEventListener("click", function(e){
  if(e.target.id === "popup"){
    popup.style.display = "none";
  }
});
</script>
