function list(keyword) {
    $('#container').html(`
        <div style="margin: 0 auto; text-align: center;">
          <mdui-circular-progress style="margin: 0 auto;"></mdui-circular-progress>
        </div>
      `);
    let catchColumn = Math.max(parseInt((document.getElementById("container").clientWidth + 20) / (300 + 20)), 1);
    let pdS = (document.getElementById("container").clientWidth - catchColumn * 320 + 20) / 2;
    let sumHeight = toTwoDimensionalArray(catchColumn).map(() => 0);
    let tot = 0;
    $.ajax({
        type: "POST",
        url: "https://image.anosu.top/pixiv/json?num=30&keyword=" + keyword,
        async: true,
        dataType: "json",
        success: function (res) {
            // console.log(res);
            ans = res;
            $('#container').html('');
            for (var id in res) {
                // console.log(res[id].pid);
                const img = new Image();
                var width = res[id].width;
                var height = res[id].height;
                height = 300 * height / width;
                width = 300;
                const minIndex = minValIndex(sumHeight);
                const newItem = document.createElement("div");
                newItem.classList.add("list-item");
                newItem.classList.add(`ElainaPic-${tot}`);
                newItem.style.width = width + 'px';
                newItem.style.height = height + 'px';
                newItem.style.transform = `translate(${minIndex * (300 + 20) + pdS}px, ${sumHeight[minIndex]}px)`;
                newItem.innerHTML = `
                <img src="https://pixiv.re/${res[id].pid}.png" alt="ERR" style="width: 300px; height: auto;">

                `
                document.getElementById("container").appendChild(newItem);
                sumHeight[minIndex] += height + 20;
            }
        }
    })
    function toTwoDimensionalArray(count) {
        let list = [];
        for (let index = 0; index < count; index++) {
            list.push([]);
        }
        return list;
    }

    function minValIndex(arr = []) {
        let val = Math.min(...arr);
        return arr.findIndex(i => i === val);
    }
}