const check = document.getElementById("check");
// addEventListenerは、クリックやキー入力などの様々なイベント処理を
// 実行するメソッド
// 第１引数にイベントの種類、第２引数に関数を指定する
// 第１引数に指定できる値には、click、keydown、change、submitなどがある
// changeを指定した場合、ユーザがinput要素やselect要素やtextarea要素の値を
// 変更したときに実行される。
check.addEventListener("change", () => changeBackgroundColor(check));
// check.addEventListener("change", changeBackgroundColor(check));
// だと即時に呼び出されてしまう。
// 第２引数に関数の呼び出しではなく関数の参照を渡す必要がある。
// 関数の参照を渡すには、アロー関数を用いる。
