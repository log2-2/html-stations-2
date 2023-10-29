function displayList() {
  const fruitsList = document.getElementById("fruits");

  // fruitsの子要素であるp要素をすべて取得する。
  const fruits = fruitsList.querySelectorAll("p");

  // ul要素を作成する。作成しただけでは表示されない。
  const ul = document.createElement("ul");

  fruits.forEach((fruit) => {
    const liFruit = document.createElement("li");
    liFruit.textContent = fruit.textContent;
    ul.appendChild(liFruit);
    // 元のp要素を削除する。
    fruit.remove();
  });

  // fruitsはNodeListオブジェクトであり、removeメソッドを使うことはできない。
  // NodeListの各要素をループすることにより１つずつ削除する必要がある。
  // fruits.remove();

  fruitsList.appendChild(ul);
}
