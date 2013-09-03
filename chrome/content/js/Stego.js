/**
 * This file handles other functionalities of the extension.
 */


Components.utils.import("resource://browser-stego/stego-contentHandler.jsm");
Components.utils.import("resource://browser-stego/stego-downloader.jsm");
Components.utils.import("resource://browser-stego/stego-uploader.jsm");
Components.utils.import("resource://browser-stego/stego-dataHandler.jsm");


if (typeof(Stego) == "undefined") {
    var Stego = {};
}
;


Stego.onLoad = {
    load: function () {
        Components.utils.import("resource://browser-stego/stego-temp.jsm");
        var temp_type;
        var element = temp.element;
        var contenthandler = new ContentHandler();
        var type = contenthandler.getContentTypeFromElement(element);
        if (type == "IMG") {
            temp_type = "Image";
        }
        else if (type == "VIDEO") {
            temp_type = "Video";
        }
        else if (type == "AUDIO") {
            temp_type = "Audio"
        }
        else
            temp_type = "Error"

        document.getElementById('type').textContent = temp_type;
    }
};


Stego.onChange = {
    change: function (value, type) {
        Components.utils.import("resource://browser-stego/stego-temp.jsm");
        if (type == "url")
            temp.url = value;
        else if (type == "publickey")
            temp.publickey = value;
        else if (type == "message")
            temp.message = value;
    }
}


Stego.Encryption = {
    encrypt: function (data, password) {
        var jsLoader = Components.classes["@mozilla.org/moz/jssubscript-loader;1"]
            .getService(Components.interfaces.mozIJSSubScriptLoader);
        jsLoader.loadSubScript("chrome://browser-stego/content/js/sjcl/sjcl.js");
        var results = sjcl.encrypt(password, data);
        window.alert(results);
        window.alert(Overlay.Encryption.decrypt(results, password));

    },
    decrypt: function (data, password) {
        var jsLoader = Components.classes["@mozilla.org/moz/jssubscript-loader;1"]
            .getService(Components.interfaces.mozIJSSubScriptLoader);
        jsLoader.loadSubScript("chrome://browser-stego/content/js/sjcl/sjcl.js");
        return sjcl.decrypt(password, data);
    }
};

Stego.PublicKeyCrypto = {
    generate: function (aEvent) {
        var jsLoader = Components.classes["@mozilla.org/moz/jssubscript-loader;1"]
            .getService(Components.interfaces.mozIJSSubScriptLoader);
        jsLoader.loadSubScript("chrome://browser-stego/content/js/rsa/BigInteger.init1.js");
        jsLoader.loadSubScript("chrome://browser-stego/content/js/rsa/RSA.init1.js");
        jsLoader.loadSubScript("chrome://browser-stego/content/js/rsa/SecureRandom.js");
        jsLoader.loadSubScript("chrome://browser-stego/content/js/rsa/BigInteger.init2.js");
        jsLoader.loadSubScript("chrome://browser-stego/content/js/rsa/RSA.init2.js");

        // Import classes.
        var RSA = __import(this, "titaniumcore.crypto.RSA");
        var BigInteger = __import(this, "titaniumcore.crypto.BigInteger");

        // Create an RSA engine.
        var rsa = new RSA();
        // Generate new RSA key.
        var test = rsa.generate(128, 65537);
        window.alert(test);

    },
    decrypt: function (data, password) {
        var jsLoader = Components.classes["@mozilla.org/moz/jssubscript-loader;1"]
            .getService(Components.interfaces.mozIJSSubScriptLoader);
        jsLoader.loadSubScript("chrome://browser-stego/content/js/sjcl/sjcl.js");
        return sjcl.decrypt(password, data);
    }
};

Stego.DataHandler = {
    init: function () {
        var stegoDataHandler = new StegoDataHandler();
        window.alert("test");
        stegoDataHandler.addKeyPairs("test", "test");
        window.alert(stegoDataHandler.getKeyPairs("test"));
    }
};


Stego.ContentHandler = {
    download: function () {
        Components.utils.import("resource://browser-stego/stego-temp.jsm");
        var element = temp.element;
        var contenthandler = new ContentHandler();
        var downloader = new StegoDownloader();
        var type = contenthandler.getContentTypeFromElement(element);
        //window.alert(element);

        if (type == "IMG") {
            var imageData = downloader.downloadImage(element.src);
            //window.alert(imageData);
            return imageData;
        }
        else if (type == "VIDEO") {
            var content = XPCNativeWrapper.unwrap(element);
            var videoData = downloader.downloadHTMLVideo(content.currentSrc);
            //alert(videoData);
            return videoData;
        }
        else if (type == "AUDIO") {
            var content = XPCNativeWrapper.unwrap(element);
            //alert(content);
            var audioData = downloader.downloadHTMLAudio(content.currentSrc);
            //alert(audioData);
            return audioData;
        }
        else {
            return null;
        }
    },
    upload: function (url) {
        Components.utils.import("resource://browser-stego/stego-temp.jsm");
        var url = temp.url;
        if (url == null) {
            window.alert("No Content Selected!\n Please Select One");
        } else {
            var stegouploader = new StegoUploader();
            var contenthandler = new ContentHandler();
            // var type=contenthandler.getContentType(url);
            var data = stegouploader.uploadFile(url);
            // window.alert(url);
            window.alert(data);
        }

    }
};

Stego.Main = {
    encrypt: function () {
        window.alert(Stego.ContentHandler.upload());
    },
    decrypt: function () {
        window.alert(Stego.ContentHandler.upload());
    },
    contextencrypt: function () {
        window.alert(Stego.ContentHandler.download());
    },
    contextdecrypt: function () {
        window.alert(Stego.ContentHandler.download());
    }
}


