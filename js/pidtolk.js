function PIDTOLINK(pid) {
    $.ajax({
        type: "GET",
        url: "https://api.acerkaio.top/pid/" + pid,
        dataType: "json",
        success: function (res) {
            res = res.origin;
            console.log(res);
            return res;
        }
    })
}