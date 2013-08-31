
EXPORTED_SYMBOLS=["StegoDownloader"]

/**
 * This class contains module for download contents. This is responsible to handle all the web content download related operations.
 */


function StegoDownloader(){

}

StegoDownloader.prototype.downloadImage=function(url){

    var ioserv = Components.classes["@mozilla.org/network/io-service;1"]
        .getService(Components.interfaces.nsIIOService);
    var channel = ioserv.newChannel(url, 0, null);
    var stream = channel.open();

    if (channel instanceof Components.interfaces.nsIHttpChannel && channel.responseStatus != 200) {
        return "";
    }

    var bstream = Components.classes["@mozilla.org/binaryinputstream;1"]
        .createInstance(Components.interfaces.nsIBinaryInputStream);
    bstream.setInputStream(stream);

    var size = 0;
    var file_data = "";
    while(size = bstream.available()) {
        file_data += bstream.readBytes(size);
    }

    return file_data;
}

StegoDownloader.prototype.downloadHTMLVideo=function(url){
    var ioserv = Components.classes["@mozilla.org/network/io-service;1"]
        .getService(Components.interfaces.nsIIOService);
    var channel = ioserv.newChannel(url, 0, null);
    var stream = channel.open();

    if (channel instanceof Components.interfaces.nsIHttpChannel && channel.responseStatus != 200) {
        return "";
    }

    var bstream = Components.classes["@mozilla.org/binaryinputstream;1"]
        .createInstance(Components.interfaces.nsIBinaryInputStream);
    bstream.setInputStream(stream);

    var size = 0;
    var file_data = "";
    while(size = bstream.available()) {
        file_data += bstream.readBytes(size);
    }

    return file_data;
}

StegoDownloader.prototype.downloadHTMLAudio=function(url){
    var ioserv = Components.classes["@mozilla.org/network/io-service;1"]
        .getService(Components.interfaces.nsIIOService);
    var channel = ioserv.newChannel(url, 0, null);
    var stream = channel.open();

    if (channel instanceof Components.interfaces.nsIHttpChannel && channel.responseStatus != 200) {
        return "";
    }

    var bstream = Components.classes["@mozilla.org/binaryinputstream;1"]
        .createInstance(Components.interfaces.nsIBinaryInputStream);
    bstream.setInputStream(stream);

    var size = 0;
    var file_data = "";
    while(size = bstream.available()) {
        file_data += bstream.readBytes(size);
    }

    return file_data;
}
