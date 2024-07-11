// 変数宣言
// CSSセレクタにマッチする全ての要素のリストを取得
// タイトルの要素を取得
const menuTitles = document.querySelectorAll(".menu-title h1");

// 開閉されるコンテンツ
const menuContents = document.querySelectorAll(".menu-content");

// スイッチの外枠とスイッチの要素を取得
const switchOuters = document.querySelectorAll(".switch_outer");
const toggleSwitchs = document.querySelectorAll(".toggle_switch");

// トグルボタンをON/OFFした時の処理
switchOuters.forEach((switchOuter, index) => {
    switchOuter.addEventListener('click', function(){
        menuContents[index].classList.toggle("display-none");
        switchOuters[index].classList.toggle("active");
        toggleSwitchs[index].classList.toggle("active");
    })
})

// タイトルをクリックした時の処理
menuTitles.forEach((menuTitle, index) => {
    menuTitle.addEventListener('click', function(){
        menuContents[index].classList.toggle("display-none");
        switchOuters[index].classList.toggle("active");
        toggleSwitchs[index].classList.toggle("active");
    })
})
