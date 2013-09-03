EXPORTED_SYMBOLS = ["PrefHandler"]

/**
 * This class contains module for handle preference related operations.
 */


function PrefHandler(branch_name) {
    // Keeping a reference to the observed preference branch or it will get
    // garbage collected.
    var prefService = Components.classes["@mozilla.org/preferences-service;1"]
        .getService(Components.interfaces.nsIPrefService);
    this._branch = prefService.getBranch(extensions.stego);
    this._branch.QueryInterface(Components.interfaces.nsIPrefBranch2);
}

PrefHandler.prototype.getPref = function (prefname) {
    return this._branch

}
/*
 PrefHandler.prototype.observe = function(subject, topic, data) {
 if (topic == 'nsPref:changed')
 this._callback(this._branch, data);
 };


 PrefHandler.prototype.register = function(trigger) {
 this._branch.addObserver('', this, false);
 if (trigger) {
 var that = this;
 this._branch.getChildList('', {}).
 forEach(function (pref_leaf_name)
 { that._callback(that._branch, pref_leaf_name); });
 }
 };

 PrefHandler.prototype.unregister = function() {
 if (this._branch)
 this._branch.removeObserver('', this);
 };


 var myListener = new PrefListener(
 "extensions.myextension.",
 function(branch, name) {
 switch (name) {
 case "pref1":
 // extensions.myextension.pref1 was changed
 break;
 case "pref2":
 // extensions.myextension.pref2 was changed
 break;
 }
 }
 );

 myListener.register(true);*/
