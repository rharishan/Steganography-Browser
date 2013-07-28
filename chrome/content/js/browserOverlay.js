/**
 * Stego namespace.
 */

Components.utils.import("resource://browser-stego/stego-contentHandler.jsm");
Components.utils.import("resource://browser-stego/stego-downloader.jsm");
Components.utils.import("resource://browser-stego/stego-uploader.jsm");


if ("undefined" == typeof(Overlay)) {
    var Overlay = {};
}
;


Overlay.ContextEncrypt = {
    start: function (aEvent) {
        window.open(
            "chrome://browser-stego/content/stego-context-encryptwindow.xul",
            "stego-contextencrypt",
            "chrome,centerscreen");
    }
};

Overlay.CustomButton = {

    click: function (aEvent) {
        Overlay.PopUpNode.load(aEvent);
    }

};


Overlay.ContextDecrypt = {
    start: function (aEvent) {
        window.open(
            "chrome://browser-stego/content/stego-context-decryptwindow.xul",
            "stego-contextdecrypt",
            "chrome,centerscreen");
    }
};

Overlay.Decrypt = {
    start: function (aEvent) {
        window.open(
            "chrome://browser-stego/content/stego-decryptwindow.xul",
            "stego-contextdecrypt",
            "chrome,centerscreen");
    }
};
Overlay.Encrypt = {
    start: function (aEvent) {
        window.open(
            "chrome://browser-stego/content/stego-encryptwindow.xul",
            "stego-contextdecrypt",
            "chrome,centerscreen");
    }
};


Overlay.ContextOptionsMenu = {
    start: function (aEvent) {
        window.open(
            "chrome://browser-stego/content/stego-options.xul",
            "stego-contextoptions",
            "chrome,centerscreen");
    }
};

Overlay.PopUpNode = {
    init: function (aEvent) {
        var element = document.popupNode;
       // var elementLabel = document.getElementById("elementtype");
        //window.alert();

        var contenthandler = new ContentHandler();
        var downloader= new StegoDownloader();
        var type=contenthandler.getContentTypeFromElement(element.currentSrc);
        window.alert(type);

        if(type=="image"){
            var imageData=downloader.downloadImage(element.src);
            window.alert(imageData);
        }
        else if(type=="VIDEO"){
            var content=XPCNativeWrapper.unwrap(element);
            var videoData=downloader.downloadHTMLVideo(content.currentSrc);
            alert(videoData);
        }
        else if(type=="AUDIO"){
            var content=XPCNativeWrapper.unwrap(element);
            alert(content);
            var audioData=downloader.downloadHTMLAudio(content.currentSrc);
            alert(audioData);
        }
    }
};

Overlay.ContentUpload= {
     upload: function(url){
         var url=url;
         var stegouploader=new StegoUploader();
         var contenthandler=new ContentHandler();
        // var type=contenthandler.getContentType(url);
         var data=stegouploader.uploadFile(url);
        // window.alert(url);
         window.alert(data);

     }
};

Overlay.Encryption={
    encrypt: function(data, password){
        var jsLoader=Components.classes["@mozilla.org/moz/jssubscript-loader;1"]
            .getService(Components.interfaces.mozIJSSubScriptLoader);
        jsLoader.loadSubScript("chrome://browser-stego/content/js/sjcl/sjcl.js");
        var results= sjcl.encrypt(password, data);
       window.alert( results );
       window.alert(Overlay.Encryption.decrypt(results,password)) ;

    },
    decrypt: function(data, password){
        var jsLoader=Components.classes["@mozilla.org/moz/jssubscript-loader;1"]
            .getService(Components.interfaces.mozIJSSubScriptLoader);
        jsLoader.loadSubScript("chrome://browser-stego/content/js/sjcl/sjcl.js");
       return sjcl.decrypt(password, data);
    }
}
