document.querySelector('.menu-icon').addEventListener('click', () => {
    const menuList = document.querySelector('.menu-list');
    menuList.style.display = menuList.style.display === 'block' ? 'none' : 'block';
  });
  
  document.getElementById('draw-card-btn')?.addEventListener('click', () => {
    const randomPage = Math.floor(Math.random() * 44) + 1;
    const position = randomPage % 2 === 0 ? 'upright' : 'reversed';
    const cardNumber = Math.floor(randomPage / 2);
    window.location.href = `tarot-${cardNumber}-${position}.html`;
  });
  
  // 44ページ分のファイル名を配列に格納
const tarotPages = [
    "tarot-0-fool-upright.html", "tarot-0-fool-reversed.html",
    "tarot-1-magician-upright.html", "tarot-1-magician-reversed.html",
    "tarot-2-highpriestess-upright.html", "tarot-2-highpriestess-reversed.html",
    "tarot-3-empress-upright.html", "tarot-3-empress-reversed.html",
    "tarot-4-emperor-upright.html", "tarot-4-emperor-reversed.html",
    "tarot-5-hierophant-upright.html", "tarot-5-hierophant-reversed.html",
    "tarot-6-lovers-upright.html", "tarot-6-lovers-reversed.html",
    "tarot-7-chariot-upright.html", "tarot-7-chariot-reversed.html",
    "tarot-8-strength-upright.html", "tarot-8-strength-reversed.html",
    "tarot-9-hermit-upright.html", "tarot-9-hermit-reversed.html",
    "tarot-10-wheel-upright.html", "tarot-10-wheel-reversed.html",
    "tarot-11-justice-upright.html", "tarot-11-justice-reversed.html",
    "tarot-12-hangedman-upright.html", "tarot-12-hangedman-reversed.html",
    "tarot-13-death-upright.html", "tarot-13-death-reversed.html",
    "tarot-14-temperance-upright.html", "tarot-14-temperance-reversed.html",
    "tarot-15-devil-upright.html", "tarot-15-devil-reversed.html",
    "tarot-16-tower-upright.html", "tarot-16-tower-reversed.html",
    "tarot-17-star-upright.html", "tarot-17-star-reversed.html",
    "tarot-18-moon-upright.html", "tarot-18-moon-reversed.html",
    "tarot-19-sun-upright.html", "tarot-19-sun-reversed.html",
    "tarot-20-judgement-upright.html", "tarot-20-judgement-reversed.html",
    "tarot-21-world-upright.html", "tarot-21-world-reversed.html"
  ];
  
  // ランダムなページに移動する関数
  function navigateToRandomPage() {
    const randomIndex = Math.floor(Math.random() * tarotPages.length);
    const randomPage = tarotPages[randomIndex];
    location.href = randomPage;
  }
  
  // トップページの「一枚引く」ボタン
  const drawButton = document.getElementById("draw-button");
  if (drawButton) {
    drawButton.addEventListener("click", navigateToRandomPage);
  }
  
  // 結果ページの「もう一度占う」ボタン
  const retryButton = document.getElementById("retry-button");
  if (retryButton) {
    retryButton.addEventListener("click", navigateToRandomPage);
  }
  
// ハンバーガーメニューのクリック動作を制御
const menu = document.querySelector(".menu");
const menuIcon = document.querySelector(".menu-icon");

menuIcon.addEventListener("click", () => {
  menu.classList.toggle("active"); // activeクラスを付与・削除
});
