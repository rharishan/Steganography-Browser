/**
 * TorStego namespace.
 */
if ("undefined" == typeof(TorOverlay)) {
  var TorOverlay = {};
};

TorOverlay.ContextEncrypt={
    start : function(aEvent) {
    window.open(
  "chrome://tor-stego/content/tor-context-encryptwindow.xul",
  "tor-stego-contextencrypt",
  "chrome,centerscreen");
  }
};

TorOverlay.ContextDecrypt={
    start : function(aEvent) {
    window.open(
  "chrome://tor-stego/content/tor-context-decryptwindow.xul",
  "tor-stego-contextdecrypt",
  "chrome,centerscreen");
  }
};

function init()
{
  var contextMenu = document.getElementById("contentAreaContextMenu");
  if (contextMenu)
    contextMenu.addEventListener("popupshowing", ThumbnailsShowHideItems, false);
}
 
function ThumbnailsShowHideItems(event)
{
  var show = document.getElementById("thumbnail-show");
  show.hidden = (document.popupNode.localName != "IMG");
}
