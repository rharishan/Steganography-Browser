/**
 * TorStego namespace.
 */
if ("undefined" == typeof(TorOverlay)) {
    var TorOverlay = {};
}
;


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

TorOverlay.Decrypt = {
    start: function (aEvent) {
        window.open(
            "chrome://tor-stego/content/tor-decryptwindow.xul",
            "tor-stego-contextdecrypt",
            "chrome,centerscreen");
    }
};
TorOverlay.Encrypt = {
    start: function (aEvent) {
        window.open(
            "chrome://tor-stego/content/tor-encryptwindow.xul",
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
        window.element = document.popupNode;
    }


};
