var StyleFlag = 1;
if (localStorage.getItem("style") == "dark") {
    StyleFlag = 0;
    $('#SwitchStyle').html('<ion-icon name="moon-outline"></ion-icon>');
    $('html').attr('class', 'mdui-theme-dark');
} else {
    StyleFlag = 1;
    $('html').attr('class', 'mdui-theme-light');
}
function SwitchStyle() {
    $('html').toggleClass('mdui-theme-dark', 'mdui-theme-light');
    if (StyleFlag == 1) {
        StyleFlag = 0;
        $('#SwitchStyle').html('<ion-icon name="moon-outline"></ion-icon>');
        localStorage.setItem("style", "dark");
        localStorage.getItem("style");

    } else {
        StyleFlag = 1;
        $('#SwitchStyle').html('<ion-icon name="sunny-outline"></ion-icon>');
        localStorage.setItem("style", "light");
        localStorage.getItem("style");
    }
}