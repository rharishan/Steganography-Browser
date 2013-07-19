
EXPORTED_SYMBOLS=["ContentHandler"];


function ContentHandler(){

}


ContentHandler.prototype.getContentType=function(element){
    this.element = element;
    var isImage = (this.element instanceof Components.interfaces.nsIImageLoadingContent && this.element.currentURI);

    if (isImage) {
        return "image"  ;
    }
    else {
        return XPCNativeWrapper.unwrap(this.element).nodeName;
    }
}

ContentHandler.prototype.getContentType=function(url){
    this.url=url;

}
