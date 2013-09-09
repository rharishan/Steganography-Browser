/**
 * This file is to Handles main overlay related script calls.
 */

Components.utils.import("resource://browser-stego/stego-contentHandler.jsm");
Components.utils.import("resource://browser-stego/stego-downloader.jsm");
Components.utils.import("resource://browser-stego/stego-uploader.jsm");
Components.utils.import("resource://browser-stego/stego-dataHandler.jsm");


if (typeof(Overlay) == "undefined") {
    var Overlay = {};
};


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
        Overlay.PopUpNode.init(aEvent);
        var stegoDataHandler = new StegoDataHandler();

        var jsLoader = Components.classes["@mozilla.org/moz/jssubscript-loader;1"]
            .getService(Components.interfaces.mozIJSSubScriptLoader);
        jsLoader.loadSubScript("chrome://browser-stego/content/js/rsa/BigInteger.init1.js");

        jsLoader.loadSubScript("chrome://browser-stego/content/js/rsa/RSA.init1.js");

        jsLoader.loadSubScript("chrome://browser-stego/content/js/rsa/SecureRandom.js");

        jsLoader.loadSubScript("chrome://browser-stego/content/js/rsa/BigInteger.init2.js");
        jsLoader.loadSubScript("chrome://browser-stego/content/js/rsa/RSAKeyFormat.js");
        jsLoader.loadSubScript("chrome://browser-stego/content/js/rsa/RSA.init2.js");
        jsLoader.loadSubScript("chrome://browser-stego/content/js/rsa/packages.js");
        jsLoader.loadSubScript("chrome://browser-stego/content/js/rsa/elapse.js");
        jsLoader.loadSubScript("chrome://browser-stego/content/js/rsa/isarray.js");

        __unit( "stego.xul" );
        __uses( "packages.js" );
        __uses( "RSAKeyFormat.js" );
        __uses( "RSAMessageFormat.js" );
        __uses( "RSAMessageFormatSOAEP.js" );
        __uses( "RSAMessageFormatBitPadding.js" );
        __uses( "RSA.init1.js" );
        __uses( "RSA.init2.js" );


        // Import classes.
        var RSA = __import(this, "titaniumcore.crypto.RSA");
        var BigInteger = __import(this, "titaniumcore.crypto.BigInteger");

        var RSA = __import( this, "titaniumcore.crypto.RSA" );
        var RSAMessageFormatSOAEP = __import( this, "titaniumcore.crypto.RSAMessageFormatSOAEP" );
        var RSAMessageFormatBitPadding = __import( this, "titaniumcore.crypto.RSAMessageFormatBitPadding" );
        var RSAKeyFormat = __import( packageRoot, "titaniumcore.crypto.RSAKeyFormat" );

        // install key format.
        RSA.installKeyFormat( RSAKeyFormat )
        RSA.installMessageFormat( RSAMessageFormatSOAEP );

        // Create an RSA engine.
        var rsa = new RSA();
        // Generate new RSA key.
        var test = rsa.generate(128, 65537);
        window.alert("test");



        /*window.open(
            "chrome://browser-stego/content/test.xul",
            "stego-contextencrypt",
            "chrome,centerscreen");
        window.alert("test");
         stegoDataHandler.addKeyPairs("testiw","testlk");
         window.alert(stegoDataHandler.getKeyPairs("testiw"));*/
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
        Components.utils.import("resource://browser-stego/stego-temp.jsm");
        temp.element = element;
    }
};

/*

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
 };

 Overlay.PublicKeyCrypto={
 generate: function(aEvent){
 var jsLoader=Components.classes["@mozilla.org/moz/jssubscript-loader;1"]
 .getService(Components.interfaces.mozIJSSubScriptLoader);
 jsLoader.loadSubScript("chrome://browser-stego/content/js/rsa/BigInteger.init1.js");
 jsLoader.loadSubScript("chrome://browser-stego/content/js/rsa/RSA.init1.js");
 jsLoader.loadSubScript("chrome://browser-stego/content/js/rsa/SecureRandom.js");
 jsLoader.loadSubScript("chrome://browser-stego/content/js/rsa/BigInteger.init2.js");
 jsLoader.loadSubScript("chrome://browser-stego/content/js/rsa/RSA.init2.js");

 // Import classes.
 var RSA = __import( this,"titaniumcore.crypto.RSA" );
 var BigInteger = __import( this,"titaniumcore.crypto.BigInteger" );

 // Create an RSA engine.
 var rsa = new RSA();
 // Generate new RSA key.
 var test=rsa.generate( 128,65537 );
 window.alert( test );

 },
 decrypt: function(data, password){
 var jsLoader=Components.classes["@mozilla.org/moz/jssubscript-loader;1"]
 .getService(Components.interfaces.mozIJSSubScriptLoader);
 jsLoader.loadSubScript("chrome://browser-stego/content/js/sjcl/sjcl.js");
 return sjcl.decrypt(password, data);
 }
 };

 Overlay.DataHandler={
 init: function(){
 var stegoDataHandler= new StegoDataHandler();
 window.alert("test");
 stegoDataHandler.addKeyPairs("test","test");
 window.alert(stegoDataHandler.getKeyPairs("test"));
 }
 }*/
