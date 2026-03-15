<!DOCTYPE html>
<html lang="id">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Popup Preview Premium Green</title>

<style>
:root{
  --bg:#040b02;
  --card1:#020500;
  --card2:#0a3300;
  --card3:#041702;

  --green:#7dff00;
  --green-2:#57d400;
  --green-3:#2c8e00;
  --green-dark:#0f3d00;
  --green-soft:#d9ff9a;

  --text:#f5ffe8;
  --text-soft:#d8f7c2;
}

*{box-sizing:border-box}

body{
  margin:0;
  min-height:100vh;
  background:
    radial-gradient(circle at 20% 20%, rgba(125,255,0,.16), transparent 28%),
    radial-gradient(circle at 80% 25%, rgba(78,190,0,.10), transparent 24%),
    radial-gradient(circle at 50% 100%, rgba(146,255,59,.10), transparent 35%),
    linear-gradient(180deg,#020500 0%, #071703 52%, #020800 100%);
  display:flex;
  align-items:center;
  justify-content:center;
  padding:24px;
  overflow-x:hidden;
  font-family:Arial, sans-serif;
}

body::before,
body::after{
  content:"";
  position:fixed;
  pointer-events:none;
  border-radius:999px;
  filter:blur(70px);
  opacity:.55;
  z-index:0;
}

body::before{
  width:240px;
  height:240px;
  left:8%;
  top:10%;
  background:rgba(125,255,0,.22);
  animation:orbFloat 10s ease-in-out infinite;
}

body::after{
  width:220px;
  height:220px;
  right:10%;
  bottom:8%;
  background:rgba(52,170,0,.20);
  animation:orbFloat 12s ease-in-out infinite reverse;
}

@keyframes orbFloat{
  0%,100%{transform:translate3d(0,0,0) scale(1)}
  50%{transform:translate3d(0,-16px,0) scale(1.08)}
}

@keyframes cardFloat{
  0%,100%{transform:translateY(0)}
  50%{transform:translateY(-8px)}
}

@keyframes borderGlow{
  0%,100%{
    box-shadow:
      0 24px 60px rgba(0,0,0,.55),
      0 0 0 1px rgba(255,255,255,.04) inset,
      0 0 24px rgba(125,255,0,.10)
  }
  50%{
    box-shadow:
      0 28px 70px rgba(0,0,0,.62),
      0 0 0 1px rgba(255,255,255,.06) inset,
      0 0 40px rgba(125,255,0,.28)
  }
}

@keyframes shineSweep{
  0%{transform:translateX(-160%) skewX(-24deg)}
  100%{transform:translateX(220%) skewX(-24deg)}
}

@keyframes pulseSoft{
  0%,100%{
    transform:scale(1);
    box-shadow:0 8px 20px rgba(0,0,0,.30), 0 0 16px rgba(125,255,0,.16)
  }
  50%{
    transform:scale(1.03);
    box-shadow:0 10px 24px rgba(0,0,0,.34), 0 0 24px rgba(125,255,0,.28)
  }
}

@keyframes pulseClose{
  0%,100%{
    transform:scale(1);
    box-shadow:
      0 12px 28px rgba(0,0,0,.34),
      0 0 0 2px rgba(255,243,130,.18) inset,
      0 0 20px rgba(255,255,120,.22);
  }
  50%{
    transform:scale(1.04);
    box-shadow:
      0 16px 34px rgba(0,0,0,.40),
      0 0 0 2px rgba(255,255,160,.22) inset,
      0 0 30px rgba(255,255,120,.34);
  }
}

@keyframes mistMove{
  0%{transform:translate3d(-8px,6px,0) scale(1.02); opacity:.30}
  50%{transform:translate3d(12px,-8px,0) scale(1.08); opacity:.62}
  100%{transform:translate3d(-8px,6px,0) scale(1.02); opacity:.30}
}

@keyframes sparkleMove{
  0%{transform:translateY(0); opacity:.22}
  50%{transform:translateY(-10px); opacity:.55}
  100%{transform:translateY(-20px); opacity:.18}
}

.sW{
  width:min(380px, 100%);
  border-radius:22px;
  overflow:hidden;
  position:relative;
  z-index:1;
  background:
    radial-gradient(120% 90% at 50% -10%, rgba(125,255,0,.14), transparent 55%),
    radial-gradient(90% 70% at 0% 100%, rgba(87,212,0,.12), transparent 60%),
    linear-gradient(180deg,var(--card1),var(--card2),var(--card3));
  border:1px solid rgba(125,255,0,.72);
  color:var(--text);
  animation:cardFloat 4.8s ease-in-out infinite, borderGlow 3.8s ease-in-out infinite;
}

.sW::before{
  content:"";
  position:absolute;
  inset:8px;
  border-radius:16px;
  border:1px solid rgba(255,255,255,.05);
  pointer-events:none;
}

.sW::after{
  content:"";
  position:absolute;
  top:-35%;
  left:-40%;
  width:55%;
  height:170%;
  background:linear-gradient(90deg, rgba(255,255,255,0), rgba(210,255,160,.16), rgba(255,255,255,0));
  transform:skewX(-24deg);
  animation:shineSweep 4.6s linear infinite;
  pointer-events:none;
}

.sIWrap{
  position:relative;
  overflow:hidden;
}

.sIWrap::after{
  content:"";
  position:absolute;
  inset:auto 0 0 0;
  height:80px;
  background:linear-gradient(to top, rgba(3,10,1,.86), transparent);
  pointer-events:none;
}

.sI{
  width:100%;
  display:block;
}

.sC{
  position:relative;
  padding:14px;
  overflow:hidden;
}

.sC::before{
  content:"";
  position:absolute;
  inset:-70px;
  background:
    radial-gradient(380px 220px at 15% 28%, rgba(210,255,170,.08), transparent 72%),
    radial-gradient(420px 260px at 85% 22%, rgba(160,255,120,.06), transparent 72%),
    radial-gradient(460px 300px at 55% 82%, rgba(210,255,180,.06), transparent 74%);
  filter:blur(16px);
  mix-blend-mode:screen;
  opacity:.78;
  pointer-events:none;
  animation:mistMove 8s ease-in-out infinite;
}

.sC::after{
  content:"";
  position:absolute;
  inset:-24px;
  background:
    radial-gradient(circle at 10% 22%, rgba(235,255,210,.58) 0 1.2px, transparent 2.7px),
    radial-gradient(circle at 25% 66%, rgba(220,255,190,.34) 0 1px, transparent 2.4px),
    radial-gradient(circle at 44% 30%, rgba(230,255,200,.45) 0 1px, transparent 2.4px),
    radial-gradient(circle at 61% 74%, rgba(220,255,190,.30) 0 1px, transparent 2.4px),
    radial-gradient(circle at 78% 44%, rgba(235,255,210,.40) 0 1.1px, transparent 2.5px),
    radial-gradient(circle at 92% 20%, rgba(220,255,190,.34) 0 1px, transparent 2.4px);
  opacity:.42;
  pointer-events:none;
  animation:sparkleMove 5.2s ease-in-out infinite;
}

.sC > *{
  position:relative;
  z-index:1;
}

.sImlek{
  text-align:center;
  padding:8px 12px;
  border-radius:999px;
  background:linear-gradient(180deg, #74f000 0%, #44a900 58%, #1b5a00 100%);
  color:#f7ffe9;
  font-weight:800;
  font-size:11px;
  letter-spacing:.3px;
  margin-bottom:10px;
  border:1px solid rgba(210,255,150,.55);
  box-shadow:
    0 10px 24px rgba(0,0,0,.26),
    0 0 18px rgba(125,255,0,.16);
}

.sSub{
  text-align:center;
  font-size:10.5px;
  color:var(--text-soft);
  line-height:1.45;
  margin-bottom:12px;
  letter-spacing:.2px;
}

.sG{
  display:grid;
  grid-template-columns:1fr 1fr;
  gap:10px;
}

.sK{
  position:relative;
  padding:12px 10px;
  border-radius:14px;
  text-align:center;
  background:
    radial-gradient(130% 100% at 50% -20%, rgba(255,255,255,.08), transparent 55%),
    linear-gradient(180deg, rgba(33,90,0,.72), rgba(10,34,0,.90));
  border:1px solid rgba(125,255,0,.22);
  box-shadow:0 10px 22px rgba(0,0,0,.28), inset 0 0 0 1px rgba(255,255,255,.04);
}

.sKTitle{
  display:block;
  font-size:10px;
  font-weight:800;
  letter-spacing:.45px;
  color:#f3ffe8;
}

.sK b{
  display:block;
  margin:5px 0 8px;
  font-size:14px;
  color:var(--green);
  text-shadow:0 0 12px rgba(125,255,0,.28);
}

.sBtn,
.sClose{
  position:relative;
  overflow:hidden;
  isolation:isolate;
}

.sBtn::before,
.sClose::before{
  content:"";
  position:absolute;
  top:-55%;
  left:-80%;
  width:72%;
  height:230%;
  border-radius:999px;
  background:linear-gradient(90deg, rgba(255,255,255,0), rgba(240,255,220,.92), rgba(255,255,255,0));
  transform:skewX(-24deg);
  opacity:.9;
  pointer-events:none;
  animation:shineSweep 2.2s linear infinite;
}

.sBtn{
  display:block;
  margin-top:6px;
  padding:8px 10px;
  border-radius:999px;
  background:
    radial-gradient(120% 120% at 30% 15%, rgba(255,255,255,.24), transparent 42%),
    linear-gradient(180deg, #86ff17 0%, #44b000 58%, #1b6800 100%);
  color:#fff;
  text-decoration:none;
  text-align:center;
  font-size:10.5px;
  font-weight:800;
  border:1px solid rgba(220,255,180,.80);
  box-shadow:0 8px 20px rgba(0,0,0,.30), 0 0 16px rgba(125,255,0,.20);
  animation:pulseSoft 2.2s ease-in-out infinite;
}

.sFooter{
  margin-top:10px;
  text-align:center;
  font-size:10px;
  color:#e9ffd8;
  opacity:.82;
}

.sCloseWrap{
  display:flex;
  justify-content:center;
}

.sClose{
  display:inline-flex;
  align-items:center;
  justify-content:center;
  min-width:230px;
  margin-top:12px;
  padding:12px 20px;
  text-align:center;
  text-decoration:none;
  background:
    radial-gradient(circle at 50% 0%, rgba(255,255,255,.35), transparent 55%),
    linear-gradient(180deg, #fffda8 0%, #d7ff54 35%, #7ddf00 70%, #3e8900 100%);
  border-radius:14px;
  cursor:pointer;
  font-size:12px;
  font-weight:900;
  letter-spacing:.4px;
  color:#173200;
  text-shadow:0 1px 0 rgba(255,255,255,.55);
  border:2px solid #f4ff78;
  box-shadow:
    0 14px 30px rgba(0,0,0,.34),
    0 0 0 2px rgba(112,255,0,.18) inset,
    0 0 24px rgba(240,255,120,.26);
  animation:pulseClose 2.2s ease-in-out infinite;
}

@media (max-width:420px){
  body{padding:14px}
  .sW{width:min(340px, 100%)}
  .sC{padding:11px}
  .sG{gap:8px}
  .sK{padding:10px 8px}
  .sK b{font-size:13px}
  .sBtn{font-size:10px; padding:8px}
  .sClose{min-width:100%; font-size:11px; padding:11px 14px}
}

@media (prefers-reduced-motion: reduce){
  body::before,
  body::after,
  .sW,
  .sW::after,
  .sC::before,
  .sC::after,
  .sBtn,
  .sBtn::before,
  .sClose,
  .sClose::before{
    animation:none !important;
  }
}
</style>
</head>

<body>

<script>
  const LIVECHAT_URL = "https://speed-ly.com/LIVECHAT_KLIKWIN88";
  const TELEGRAM_URL = "https://speed-ly.com/TELEGRAM_OFFICIAL";
  const CLOSE_REDIRECT_URL = "https://speed-ly.com/KLIKWIN88";
</script>

<div class="sW">

  <div class="sIWrap">
    <img class="sI" src="http://plcl.me/images/p2XQC.jpg" alt="Banner Popup">
  </div>

  <div class="sC">

    <div class="sImlek">Selamat Menyambut Bulan Suci RAMADHAN</div>
    <div class="sSub">JOIN KOMUNITAS KLIKWIN88 PRIORITAS RASAKAN MANFAATNYA</div>

    <div class="sG">

      <div class="sK">
        <span class="sKTitle">NEW MEMBER</span>
        <b>100%</b>
        <a class="sBtn" href="https://speed-ly.com/LIVECHAT_KLIKWIN88" target="_blank" rel="noopener">Livechat</a>
      </div>

      <div class="sK">
        <span class="sKTitle">TURBO REDEPOSIT</span>
        <b>25%</b>
        <a class="sBtn" href="https://speed-ly.com/LIVECHAT_KLIKWIN88" target="_blank" rel="noopener">Livechat</a>
      </div>

      <div class="sK">
        <span class="sKTitle">SPORTSBOOK WIN-LOSE</span>
        <b>AKTIF</b>
        <a class="sBtn" href="https://speed-ly.com/TELEGRAM_OFFICIAL" target="_blank" rel="noopener">Telegram</a>
      </div>

      <div class="sK">
        <span class="sKTitle">POINT LOYALTY</span>
        <b>AKTIF</b>
        <a class="sBtn" href="https://speed-ly.com/TELEGRAM_OFFICIAL" target="_blank" rel="noopener">Telegram</a>
      </div>

    </div>

    <div class="sFooter">© KLIKWIN88 GROUP</div>

    <div class="sCloseWrap">
      <a class="sClose" href="https://speed-ly.com/KLIKWIN88" target="_blank" rel="noopener">
        KLIK DISINI UNTUK MENUTUP
      </a>
    </div>

  </div>
</div>

<script>
  document.querySelectorAll('.sBtn').forEach(btn => {
    btn.addEventListener('click', function(e){
      const href = this.getAttribute('href');
      if(!href || href === '#'){
        e.preventDefault();
      }
    });
  });
</script>

</body>
</html>
