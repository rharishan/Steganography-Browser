
EXPORTED_SYMBOLS=["StegoDataHandler"]

var file;
var mDBConn;
var statement;

function StegoDataHandler(){

    Components.utils.import("resource://gre/modules/Services.jsm");
    Components.utils.import("resource://gre/modules/FileUtils.jsm");

    this.file = FileUtils.getFile("ProfD", ["stego-browser.sqlite"],true);
    var alreadyExists = this.file.exists();
    this.mDBConn = Services.storage.openDatabase(this.file); // Will also create the file if it does not exist
    if (!alreadyExists)  {
        this.mDBConn.executeSimpleSQL("CREATE TABLE keys (public_key TEXT,private_key TEXT)");
        this.mDBConn.executeSimpleSQL("CREATE TABLE cipher (cipher_text TEXT)");
        this.mDBConn.executeSimpleSQL("CREATE TABLE filters (url TEXT,content TEXT)");
    }

}

StegoDataHandler.prototype.addKeyPairs=function(public_key,private_key){
    try
    {
        this.statement=this.mDBConn.createStatement("INSERT INTO keys (public_key,private_key) VALUES(pub_key,priv_key)");
        this.statement.bindStringParameter(pub_key,public_key);
        this.statement.bindStringParameter(priv_key,private_key);
        this.statement.execute();
    }
    finally{
        this.statement.reset();
    }
}

StegoDataHandler.prototype.getKeyPairs=function(public_key){
    var private_key;
    try{
        this.statement = mDBConn.createStatement("SELECT * FROM keys WHERE public_key = :p_key");
        this.statement.params.p_key = public_key;
        this.statement.executeAsync({
            handleResult: function(aResultSet) {
                for (var row = aResultSet.getNextRow();
                     row;
                     row = aResultSet.getNextRow()) {

                     private_key = row.getResultByName("private_key");
                }
            },

            handleError: function(aError) {
                print("Error: " + aError.message);
            },

            handleCompletion: function(aReason) {
                if (aReason != Components.interfaces.mozIStorageStatementCallback.REASON_FINISHED)
                    print("Query canceled or aborted!");
            }
        });
    }
    finally{
        this.statement.reset();
    }
    return private_key;
}

StegoDataHandler.prototype.addCipherText=function(cipher_text){
    try{
        this.statement = mDBConn.createStatement("INSERT INTO cipher (cipher_text) VALUES(:value)");
        this.statement.bindStringParameter(value,cipher_text);
        this.statement.execute();
    }
    finally{
        this.statement.reset();
    }
}

StegoDataHandler.prototype.getCipherText=function(){
     this.statement = mDBConn.createStatement("SELECT * FROM cipher");
    var cipher_texts=new Array();
    var i=0;
    try {
        while (this.statement.step()) {
            cipher_texts[i]=this.statement.row.cipher_text;
        }
    }
    finally {
        this.statement.reset();
    }
    return cipher_texts;

}

StegoDataHandler.prototype.addFilters=function(url,video,audio,html,image){
    var filter;
    if(video){
        filter.append("v");
    }
    if(audio){
        filter.append("a");
    }
    if(html){
        filter.append("h");
    }
    if(image){
        filter.append("i");
    }

    try{
        this.statement=this.mDBConn.createStatement("INSERT INTO filters (url,content) VALUES(urls,filters)");
        this.statement.bindStringParameter(urls,url);
        this.statement.bindStringParameter(content,filter);
        this.statement.execute();
    }
    finally{
        this.statement.reset();
    }

}

StegoDataHandler.prototype.getAllFilters=function(){
    var filters=new Array();
    try{
        this.statement = mDBConn.createStatement("SELECT * FROM filters");
        this.statement.executeAsync({
            handleResult: function(aResultSet) {
                var i=0;
                for (var row = aResultSet.getNextRow();
                     row;
                     row = aResultSet.getNextRow()) {

                    filters[i][0] = row.getResultByName("url");
                    filters[i][1]=  row.getResultByName("content");
                    i++;
                }
            },

            handleError: function(aError) {
                print("Error: " + aError.message);
            },

            handleCompletion: function(aReason) {
                if (aReason != Components.interfaces.mozIStorageStatementCallback.REASON_FINISHED)
                    print("Query canceled or aborted!");
            }
        });
    }
    finally{
        this.statement.reset();
    }
    return filters;
}

StegoDataHandler.prototype.getFilter=function(url){
    var filter;
    try{
        this.statement = mDBConn.createStatement("SELECT * FROM filters");
        this.statement.params.url = url;
        this.statement.executeAsync({
            handleResult: function(aResultSet) {
                var i=0;
                for (var row = aResultSet.getNextRow();
                     row;
                     row = aResultSet.getNextRow()) {

                    filter = row.getResultByName("content");
                    i++;
                }
            },

            handleError: function(aError) {
                print("Error: " + aError.message);
            },

            handleCompletion: function(aReason) {
                if (aReason != Components.interfaces.mozIStorageStatementCallback.REASON_FINISHED)
                    print("Query canceled or aborted!");
            }
        });
    }
    finally{
        this.statement.reset();
    }
}

StegoDataHandler.prototype.reset=function(url){
     mDBConn.asyncClose();
}




