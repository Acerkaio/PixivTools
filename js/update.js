// 命名规则: 主版本号.功能更新数.bug修复或小更新数
var ver = "1.3.1_Debug_beta_2";
var OldVersion = localStorage.getItem("version");
if (OldVersion != ver) {
    localStorage.setItem("version", ver);
    $("#body").html($("#body").html() + `
        <mdui-dialog close-on-esc class="ver-overlay">
            按下 ESC 关闭 
            <h1>施工中</h1>
            <h2>版本: ${ver}</h2>
            <h4>[2024.9.07 12:28] 更新内容: </h4>
            <p>增加每日榜单 (+)</p>
            <p>增加加载动画 (+)</p>
            <h3>版本: 1.2.0</h3>
            <h4>[2024.9.06 16:10] 更新内容: </h4>
            <p>增加搜索画师ID功能 (+)</p>
            <h3>版本: 1.1.3</h3>
            <h4>[2024.7.27 08:30] 更新内容: </h4>
            <p>修复上次更新带来图片重复下载的 bug. (bug fixed)</p>
            <h3>版本 1.1.2</h3>
            <h4>[2024.7.27 07:57] 更新内容: </h4>
            <p>下载设置了等待，减少内存压力(+)</p>
            <p>图标增加(+)</p>
            <h3>版本 1.11</h3>
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
