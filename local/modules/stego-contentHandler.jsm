
EXPORTED_SYMBOLS=["ContentHandler"];


function ContentHandler(element){
    this.element = element;
}


ContentHandler.prototype.getContentType=function(){
    var isImage = (this.element instanceof Components.interfaces.nsIImageLoadingContent && this.element.currentURI);

    if (isImage) {
        return "image"  ;
    }
    else {
        return "testttttt";
    }
}

// This function is for fetching an image file from a URL.
// Accepts a URL and returns the file.
// Returns empty if the file is not found (with an 404 error for instance).
// Tried with .jpg, .ico, .gif (even .html).


ContentHandler.prototype.getImageFromURL=function (url) {

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


