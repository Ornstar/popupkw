(() => {
"use strict";

function createPopup(config = {}) {

const BTN1_URL = config.btn1 || "https://example.com/wa";
const BTN2_URL = config.btn2 || "https://example.com/link";
const BTN3_URL = config.btn3 || "https://example.com/bonus";
const BTN4_URL = config.btn4 || "https://example.com/apk";

const SLIDES = config.slides || [
"https://via.placeholder.com/400",
"https://via.placeholder.com/400"
];

if (document.getElementById("popup_final")) return;

/* STYLE */
const style = document.createElement("style");
style.textContent = `
#popup_final{
position:fixed;
top:50%;
left:50%;
transform:translate(-50%,-50%);
z-index:999999;
font-family:Arial;
}
.card{
width:340px;
background:#000;
border-radius:16px;
overflow:hidden;
}
.banner img{
width:100%;
}
.buttons{
display:grid;
grid-template-columns:1fr 1fr;
gap:8px;
padding:10px;
}
.btn{
background:#2f7a00;
color:#fff;
text-align:center;
padding:10px;
border-radius:8px;
text-decoration:none;
font-size:12px;
}
.closeX{
text-align:center;
padding:10px;
cursor:pointer;
background:red;
color:#fff;
}
`;
document.head.appendChild(style);

/* HTML */
const wrap = document.createElement("div");
wrap.id = "popup_final";

wrap.innerHTML = `
<div class="card">
<div class="banner">
<img src="${SLIDES[0]}">
</div>
<div class="buttons">
<a class="btn" href="${BTN1_URL}" target="_blank">WA</a>
<a class="btn" href="${BTN2_URL}" target="_blank">LINK</a>
<a class="btn" href="${BTN3_URL}" target="_blank">BONUS</a>
<a class="btn" href="${BTN4_URL}" target="_blank">APK</a>
</div>
<div class="closeX">Tutup</div>
</div>
`;

document.body.appendChild(wrap);

/* CLOSE */
wrap.querySelector(".closeX").onclick = () => wrap.remove();

/* SLIDER */
let index = 0;
setInterval(() => {
index = (index + 1) % SLIDES.length;
wrap.querySelector("img").src = SLIDES[index];
}, 3000);

}

/* AUTO LOAD */
window.addEventListener("load", () => {
setTimeout(() => createPopup(window.popupConfig || {}), 800);
});

/* GLOBAL ACCESS */
window.PopupKW = {
init: createPopup
};

})();
