/**
 * TorStego namespace.
 */
if ("undefined" == typeof(Stego)) {
    var Stego = {};
};


Stego.Encrypt = {
    init: function (pelement) {
        var element = pelement;
        //window.alert(type);

    },

    elementType: function () {
        var elementLabel = document.getElementById("elementtype");

        //window.alert(window.element);
        isImage = (element instanceof Components.interfaces.nsIImageLoadingContent && element.currentURI);
         isSound = (element instanceof Components.interfaces.nsISound && element.currentURI);
         isFile = (element instanceof Components.interfaces.nsIFile && element.currentURI);
         isHtml = (element instanceof Components.interfaces.nsIDOMHTMLDocument && element.currentURI);
        //window.alert("hehe"+isImage);
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


