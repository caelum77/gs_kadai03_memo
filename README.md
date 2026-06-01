# ①課題番号-プロダクト名
PetaMemo

## ②課題内容（どんな作品か）
- 黒板に付箋をペタペタ貼ります！
- 修正、削除、一括削除も可能です

## ③DEMO
指定先に提出します

## ④作ったアプリケーション用のIDまたはPasswordがある場合
なし

## ⑤工夫した点・こだわった点

- 基礎的なlocalStorage.setItem()は自力でコーディング
- localStorageに配列で値を持たせることも工夫
- AIに相談して、エフェクトを追加
  - 特に、全部まとめて削除は気持ちがよいので追加

## ⑥難しかった点・次回トライしたいこと(又は機能)

- 色々やりたくなってしまって、AIにだいぶ相談しました
- 次回はもう少し粘ってやってみたい


## ⑧フリー項目（感想、シェアしたいこと等なんでも）
let selectedMemoIndex = -1;
$(".main-panel").on("click", ".memo-card", function(){
    selectedMemoIndex = Number($(this).attr("data-index"));
    $("#text-field").val(memos[selectedMemoIndex]);
});
によって、今クリックしている付箋(=this)のindexを取得し、配列memosからvalueを取得。
入力エリア"#text-field"に返しています。
これで付箋を選択して、修正や削除ができるようになりました！
