
EXPORTED_SYMBOLS=["StegoDataHandler"]

function StegoDataHandler(){
    Components.utils.import("resource://gre/modules/Services.jsm");
    Components.utils.import("resource://gre/modules/FileUtils.jsm");

    var file = FileUtils.getFile("ProfD", ["stego-browser.sqlite"]);
    var mDBConn = Services.storage.openDatabase(file); // Will also create the file if it does not exist


}

StegoDownloader.prototype.downloadImage=function(){

}

