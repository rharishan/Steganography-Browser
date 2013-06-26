var EXPORTED_SYMBOLS = ["contextFile", "bar"];




function checkType(element) {

    //window.alert(window.element);
    isImage = (element instanceof Components.interfaces.nsIImageLoadingContent && element.currentURI);
    isSound = (element instanceof Components.interfaces.nsISound && element.currentURI);
    isFile = (element instanceof Components.interfaces.nsIFile && element.currentURI);
    isHtml = (element instanceof Components.interfaces.nsIDOMHTMLDocument && element.currentURI);
    //window.alert("hehe"+isImage);
    var isImage = true;
    if (isImage) {
        //elementLabel.setAttribute("value", "Image");
        return "image"  ;
    }
    else if (isSound) {
        return "test";
    }
    else if (isFile) {
        elementLabel.setAttribute("value", "File");
    }
    else if (isHtml) {
        elementLabel.setAttribute("value", "HTML");
    }
    else {
            return "testttttt";
    }

}

var bar = {
    name : "bar",
    size : 3
};

var dummy = "dummy";