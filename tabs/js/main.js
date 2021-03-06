Blend.lightInit({
    ak: "QdSaUGlNp6c7Zg0zzE9Xcqon", //轻应用apikey，请参考《获取API Key》文档
    module: ["blendui"]//根据需要添加模块到数组中即可
});

document.addEventListener("blendready", function () {
    Blend.ui.layerInit("0", function (dom) {
        var tabs = new Blend.ui.LayerGroup({
            id: "group",
            layers: [
                {
                    "id": "tab1",
                    "url": "tab1.html",
                    "autoload": true,
                    "active": true
                },
                {
                    "id": "tab2",
                    "url": "tab2.html",
                    "autoload": true
                }
            ],
            onshow: function (event) {
                var layerId = event['detail'];
                $("#nav li").removeClass('on');
                $("#" + layerId).addClass('on');
            },
            left: 0,
            top: 50
        });

        $("#nav a").on("click", function (e) {
            e.preventDefault();
            tabs.active($(this).parent()[0].id);
        });
    });
});
