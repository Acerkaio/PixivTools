// 命名规则: 主版本号.功能更新数.bug修复或小更新数
var ver = "1.1.1";
var OldVersion = localStorage.getItem("version");
if (OldVersion != ver) {
    localStorage.setItem("version", ver);
    $("#body").html($("#body").html() + `
        <mdui-dialog close-on-esc class="ver-overlay">
            按下 ESC 关闭
            <h2>版本: ${ver}</h2>
            <h4>[2024.7.26 20:51] 更新内容: </h4>
            <p>Enter 搜索 (+)</p>
            <p>原关键词搜索(被代替) (-)</p>
            <h3>版本 1.10</h3>
            <h4>[2024.7.26 20:08] 更新内容: </h4>
            <p>更新提示 (+)</p>
        </mdui-dialog>
        <script>
            const dialog = document.querySelector(".ver-overlay");
            dialog.open = true;
        </script>
    `)
}