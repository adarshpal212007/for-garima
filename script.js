<script>
let hasKey = false;

/* FIND KEY */
function findKey(e) {
  if(e) e.stopPropagation();

  const popup = document.getElementById("popup");
  const text = document.getElementById("popup-text");

  text.innerHTML = `
  pehle ek choti si condition hai...<br><br>
  agar aap smile nahi kar rahe ho na... toh please ek baar smile kariyega 😊<br><br>
  kyunki sach me...<br>
  <b>aapki smile hi iss crate ki key hai 💛</b><br><br>
  pata nahi aap realise karte ho ya nahi...<br>
  but jab aap smile karte ho na... sab thoda better lagta hai :)
  `;

  popup.style.display = "flex";
  hasKey = true;
}

/* OPEN CRATE */
function openCrate(e) {
  if(e) e.stopPropagation();

  const popup = document.getElementById("popup");
  const text = document.getElementById("popup-text");

  if (!hasKey) {
    text.innerHTML = "arey… pehle key toh dhundhiye 🥺";
  } else {
    text.innerHTML = `
    🎉 surpriseeee 🎉<br><br>
    ye aapke liye 🍰<br><br>
    virtual hai… but intention real hai :)<br><br>
    and haan…<br>
    aap important hain 💛
    `;
  }

  popup.style.display = "flex";
}

/* CLOSE POPUP WHEN CLICK OUTSIDE */
document.getElementById("popup").addEventListener("click", function(e){
  if(e.target.id === "popup"){
    this.style.display = "none";
  }
});

/* OPTIONAL: ESC KEY CLOSE */
document.addEventListener("keydown", function(e){
  if(e.key === "Escape"){
    document.getElementById("popup").style.display = "none";
  }
});
</script>
