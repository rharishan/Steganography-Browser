/**
 * TorStego namespace.
 */
if ("undefined" == typeof(TorOverlay)) {
    var TorOverlay = {};
}
;

var isImage;
var isSound;
var isFile;
var isHtml


TorOverlay.ContextEncrypt = {
    start: function (aEvent) {
        window.open(
            "chrome://tor-stego/content/tor-context-encryptwindow.xul",
            "tor-stego-contextencrypt",
            "chrome,centerscreen");
    }
};

TorOverlay.CustomButton = {

    click: function (aEvent) {
        alert("Just testing")
    }

};


TorOverlay.ContextDecrypt = {
    start: function (aEvent) {
        window.open(
            "chrome://tor-stego/content/tor-context-decryptwindow.xul",
            "tor-stego-contextdecrypt",
            "chrome,centerscreen");
    }
};



TorOverlay.ContextOptionsMenu = {
    start: function (aEvent) {
        window.open(
            "chrome://tor-stego/content/tor-options.xul",
            "tor-stego-contextoptions",
            "chrome,centerscreen");
    }
};

TorOverlay.PopUpNode = {
    init: function (aEvent) {
        var element = document.popupNode;
        window.alert(element);
        isImage = (element instanceof Components.interfaces.nsIImageLoadingContent && element.currentURI);
        isSound = (element instanceof Components.interfaces.nsISound && element.currentURI);
        isFile = (element instanceof Components.interfaces.nsIFile && element.currentURI);
        isHtml = (element instanceof Components.interfaces.nsIDOMHTMLDocument && element.currentURI);
        //window.alert("hehe"+isImage);
        //TorStego.Encrypt.init(isImage);
    },


};
