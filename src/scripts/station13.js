function changeBackgroundColor(check) {
  // ここに背景色を変える処理を書く。
  const textElement = document.getElementById("text");
  if (check.checked) {
    textElement.style.backgroundColor = "red";
  } else {
    // 背景色を無色にするにはbackgroun-colorプロパティの値をtransparentとする
    textElement.style.backgroundColor = "transparent";
  }
}
