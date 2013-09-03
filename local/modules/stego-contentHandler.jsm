EXPORTED_SYMBOLS = ["ContentHandler", "type"];

/**
 * This class contains module for Content handlers. This includes methods to get content type.
 */


function ContentHandler() {

}


ContentHandler.prototype.getContentTypeFromElement = function (element) {
    this.element = element;
    var isImage = (this.element instanceof Components.interfaces.nsIImageLoadingContent && this.element.currentURI);
    var type = XPCNativeWrapper.unwrap(this.element).nodeName;
    return type;
    /*
     if (isImage) {
     this.type="image";
     return this.type  ;
     }
     else {
     this.type=XPCNativeWrapper.unwrap(this.element).nodeName;
     return this.type;
     }
     */
}

ContentHandler.prototype.getType = function () {
    this.type = "testing";
    return this.type;
}


//there are some problems in audio and video content types
/*
 ContentHandler.prototype.getContentTypeFromURL=function(url){
 this.url=url;
 var array_url=url.split(".");
 type=array_url[array_url.length-1].toLowerCase();
 switch (type){
 case "au":
 return "audio"
 break;
 case "snd":
 return "audio"
 break;
 case "mid":
 return "audio"
 break;
 case "rmi":
 return "audio"
 break;
 case "mp3":
 return "audio"
 break;
 case "aif":
 return "audio"
 break;
 case "aifc":
 return "audio"
 break;
 case "aiff":
 return "audio"
 break;
 case "m3u":
 return "audio"
 break;
 case "ra":
 return "audio"
 break;
 case "ram":
 return "audio"
 break;
 case "wav":
 return "audio"
 break;
 case "bmp":
 return "image"
 break;
 case "cod":
 return "image"
 break;
 case "gif":
 return "image"
 break;
 case "ief":
 return "image"
 break;
 case "jpe":
 return "image"
 break;
 case "jpeg":
 return "image"
 break;
 case "jfif":
 return "image"
 break;
 case "swg":
 return "image"
 break;
 case "tif":
 return "image"
 break;
 case "tiff":
 return "image"
 break;
 case "ras":
 return "image"
 break;
 case "cmx":
 return "image"
 break;
 case "ico":
 return "image"
 break;
 case "pnm":
 return "image"
 break;
 case "pbm":
 return "image"
 break;
 case "pgm":
 return "image"
 break;
 case "ppm":
 return "image"
 break;
 case "rgb":
 return "image"
 break;
 case "xbm":
 return "image"
 break;
 case "xpm":
 return "image"
 break;
 case "xwd":
 return "image"
 break;
 case "mht":
 return "image"
 break;
 case "mhtml":
 return "image"
 break;
 case "nws":
 return "image"
 break;
 case "css":
 return "text"
 break;
 case "stm":
 return "text"
 break;
 case "uls":
 return "text"
 break;
 case "bas":
 return "text"
 break;
 case "htm":
 return "text"
 break;
 case "html":
 return "text"
 break;
 case "css":
 return "text"
 break;
 case "c":
 return "text"
 break;
 case "h":
 return "text"
 break;
 case "txt":
 return "text"
 break;
 case "rtx":
 return "text"
 break;
 case "sct":
 return "text"
 break;
 case "tsv":
 return "text"
 break;
 case "htt":
 return "text"
 break;
 case "htc":
 return "text"
 break;
 case "etx":
 return "text"
 break;
 case "etx":
 return "text"
 break;
 case "vcf":
 return "text"
 break;
 case "mp2":
 return "video"
 break;
 case "mpa":
 return "video"
 break;
 case "mpe":
 return "video"
 break;
 case "mpeg":
 return "video"
 break;
 case "mpg":
 return "video"
 break;
 case "mpv2":
 return "video"
 break;
 case "mov":
 return "video"
 break;
 case "gt":
 return "video"
 break;
 case "mpv2":
 return "video"
 break;
 case "mov":
 return "video"
 break;
 case "qt":
 return "video"
 break;
 case "lsf":
 return "video"
 break;
 case "lsx":
 return "video"
 break;
 case "asf":
 return "video"
 break;
 case "asr":
 return "video"
 break;
 case "asx":
 return "video"
 break;
 case "avi":
 return "video"
 break;
 default :
 return "error"
 }
 }
 */
