
EXPORTED_SYMBOLS=["ContentHandler"];


function ContentHandler(element){
    this.element = element;
}


ContentHandler.prototype.getContentType=function(){
    //window.alert(window.element);
    var isImage = (this.element instanceof Components.interfaces.nsIImageLoadingContent && this.element.currentURI);

    if (isImage) {
        //elementLabel.setAttribute("value", "Image");
        return "image"  ;
    }
    else {
        return "testttttt";
    }
}


