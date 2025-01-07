// ハンバーガーメニューの開閉動作を制御
const menu = document.querySelector('.menu');
const menuIcon = document.querySelector('.menu-icon');

// メニューアイコンをクリックしたときの動作
menuIcon.addEventListener('click', () => {
  menu.classList.toggle('active'); // メニューを表示・非表示にするためにactiveクラスをトグル
});

// タロットカードの「一枚引く」ボタンがクリックされたときの動作
document.getElementById('draw-card-btn')?.addEventListener('click', () => {
  // ランダムなページ番号を生成
  const randomPage = Math.floor(Math.random() * 44) + 1;
  
  // カードの位置（正位置/逆位置）をランダムに決定
  const position = randomPage % 2 === 0 ? 'upright' : 'reversed';
  
  // カード番号を計算
  const cardNumber = Math.floor(randomPage / 2);
  
  // 対応するタロットページにリダイレクト
  window.location.href = `tarot-${cardNumber}-${position}.html`;
});

// 44ページ分のタロットページファイル名を配列に格納
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

// ランダムなページに遷移する関数
function navigateToRandomPage() {
  const randomIndex = Math.floor(Math.random() * tarotPages.length);
  const randomPage = tarotPages[randomIndex];
  location.href = randomPage; // ランダムに選ばれたページに遷移
}

// トップページの「一枚引く」ボタンがクリックされたときの動作
const drawButton = document.getElementById("draw-button");
if (drawButton) {
  drawButton.addEventListener("click", navigateToRandomPage);
}

// 結果ページの「もう一度占う」ボタンがクリックされたときの動作
const retryButton = document.getElementById("retry-button");
if (retryButton) {
  retryButton.addEventListener("click", navigateToRandomPage);
}
