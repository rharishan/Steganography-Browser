/**
 * TorStego namespace.
 */
if ("undefined" == typeof(TorStego)) {
    var TorStego = {};
};

TorStego.Encrypt = {
    init: function (ctype) {
        var type = ctype;
        window.alert(type);
    },

    elementType: function (aEvent) {
        var elementLabel = document.getElementById("elementtype");
        var isImage = true;
        if (isImage) {
            elementLabel.setAttribute("value", "Image");
        }
        else if (isSound) {
            elementLabel.setAttribute("value", "Sound");
        }
        else if (isFile) {
            elementLabel.setAttribute("value", "File");
        }
        else if (isHtml) {
            elementLabel.setAttribute("value", "HTML");
        }
        else {
            elemenetLabel.setAttribute("value", "test");
        }
    }
};


