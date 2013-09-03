EXPORTED_SYMBOLS = ["StegoUploader"]

/**
 * This class contains module for web content upload.
 */


function StegoUploader() {

}

StegoUploader.prototype.uploadFile = function (aFileURL) {
    var file = Components.classes["@mozilla.org/file/local;1"].
        createInstance(Components.interfaces.nsILocalFile);

    var inputStream = Components.classes["@mozilla.org/network/file-input-stream;1"].
        createInstance(Components.interfaces.nsIFileInputStream);
    Components.utils.import("resource://gre/modules/NetUtil.jsm");

    file.initWithPath(aFileURL);
    inputStream.init(file, -1, 0, 0);

    var data;
    /*if (!Components.isSuccessCode(status)) {
     // Handle error!
     return;
     }*/

    // The file data is contained within inputStream.
    // You can read it into a string with
    data = NetUtil.readInputStreamToString(inputStream, inputStream.available());

    return data;
}
