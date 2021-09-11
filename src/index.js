import "./styles.css";

const onClickAdd = () => {
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  // li 生成
  const li = document.createElement("li");
  li.className = "item";

  // p 生成
  const p = document.createElement("p");
  p.innerText = inputText;

  // button （完了）
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    // 押された削除ボタンの親タグ（li）を未完了リストから削除
    deleteFromList(completeButton.parentNode);

    // 完了リストに追加
    const addTarget = completeButton.parentNode;
    // todo の内容
    const text = addTarget.firstElementChild.innerText;

    // div以下を初期化
    addTarget.textContent = null;

    // p タグ生成
    const p = document.createElement("p");
    p.innerText = text;

    // buttonタグ生成
    const backButton = document.createElement("button");
    backButton.innerText = "戻す";

    // 完了リストに追加
    addTarget.appendChild(p);
    addTarget.appendChild(backButton);

    //
    document.getElementById("complete-list").appendChild(addTarget);
  });

  // button （削除）
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    // 押された削除ボタンの親タグ（li）を未完了リストから削除
    deleteFromList(deleteButton.parentNode);
  });

  // li の子要素に各要素を設定
  li.appendChild(p);
  li.appendChild(completeButton);
  li.appendChild(deleteButton);

  // 未完了リストに追加
  document.getElementById("incomplete-list").appendChild(li);
};

// リストから指定の要素を削除
const deleteFromList = (deleteTarget) => {
  document.getElementById("incomplete-list").removeChild(deleteTarget);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
