<script>
let hasKey = false;

function findKey() {
  const popup = document.getElementById("popup");
  const text = document.getElementById("popup-text");

  text.innerHTML = `
  pehle ek choti si condition hai...<br><br>
  agar aap smile nahi kar rahe ho na... toh please ek baar smile karo 😊<br><br>
  kyunki sach me...<br>
  <b>aapki smile hi iss crate ki key hai 💛</b><br><br>
  pata nahi aap realise karte ho ya nahi...<br>
  but jab aap smile karte ho na... sab thoda better lagta hai :)
  `;

  popup.style.display = "flex";
  hasKey = true;

  popup.onclick = () => popup.style.display = "none";
}

function openCrate() {
  const popup = document.getElementById("popup");
  const text = document.getElementById("popup-text");

  if (!hasKey) {
    text.innerHTML = "arey… pehle key toh dhundo 🥺";
    popup.style.display = "flex";
  } else {
    text.innerHTML = `
    🎉 surpriseeeee 🎉<br><br>
    ye aapke liye 🍰<br><br>
    virtual hai… but intention real hai :)<br><br>
    and haan…<br>
    aap important ho 💛
    `;
    popup.style.display = "flex";
  }

  popup.onclick = () => popup.style.display = "none";
}
</script>