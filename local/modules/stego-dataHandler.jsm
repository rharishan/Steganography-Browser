
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
        this.mDBConn.executeSimpleSQL("CREATE TABLE KEYS (public_key TEXT,private_key TEXT)");
        this.mDBConn.executeSimpleSQL("CREATE TABLE cipher (cipher_text TEXT)");
        this.mDBConn.executeSimpleSQL("CREATE TABLE filters (url TEXT,content TEXT)");
    }

}

StegoDataHandler.prototype.addKeyPairs=function(public_key,private_key){
	this.statement=this.mDBConn.createStatement("INSERT INTO KEYS (public_key,private_key) VALUES ( :pub_key, :priv_key)");
        this.statement.params.pub_key=public_key;
       	this.statement.params.priv_key=private_key;
    try
    {
        this.statement.execute();
    }
    finally{
        this.statement.reset();
    }
}

StegoDataHandler.prototype.getKeyPairs=function(public_key){
    	var private_key = "la";
	this.statement = this.mDBConn.createStatement("SELECT * FROM KEYS WHERE public_key = :p_key");
        this.statement.params.p_key = public_key;
    try{
        
	while(this.statement.executeStep()){
		private_key=this.statement.row.private_key;
	}
      /*  this.statement.executeAsync({
            handleResult: function(aResultSet) {
                /*for (var row = aResultSet.getNextRow();
                     row;
                     row = aResultSet.getNextRow()) {

                     private_key = row.getResultByName("private_key");
                } /////
                private_key="testing it"
            },

            handleError: function(aError) {
                private_key="error";
                print("Error: " + aError.message);
            },

            handleCompletion: function(aReason) {
               // if (aReason != Components.interfaces.mozIStorageStatementCallback.REASON_FINISHED)
                    private_key="testing";
            }
        });*/
    }
    finally{
     //   private_key="testing it here finally"
        this.statement.reset();
    }
    return private_key;
}

StegoDataHandler.prototype.addCipherText=function(cipher_text){
    
    this.statement = mDBConn.createStatement("INSERT INTO cipher (cipher_text) VALUES(:value)");
    this.statement.params.value=cipher_text;
    try{
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
        while (this.statement.executeStep()) {
            cipher_texts[i]=this.statement.row.cipher_text;
        }
    }
    finally {
        this.statement.reset();
    }
    return cipher_texts;

}

StegoDataHandler.prototype.addFilters=function(url,video,audio,html,image){
    var filter="";
    if(audio){
        	filter=filter.concat("t");
    }
    else
		filter=filter.concat("f");
	
    if(html){
        	filter=filter.concat("t");
    }
    else
		filter=filter.concat("f");

    if(image){
        	filter=filter.concat("t");
    }
    else
		filter=filter.concat("f");

    if(video){
        	filter=filter.concat("t");
    }
    else
		filter=filter.concat("f");

	this.statement=this.mDBConn.createStatement("INSERT INTO filters (url,content) VALUES(:urls,:filters)");
        this.statement.params.urls=url;
        this.statement.params.filters=filter;
    try{
        
        this.statement.execute();
    }
    finally{
        this.statement.reset();
    }

}

StegoDataHandler.prototype.getAllFilters=function(){
    var filters=new Array();
        this.statement = this.mDBConn.createStatement("SELECT * FROM filters");
    try{
        /*this.statement.executeAsync({
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
        });*/
	var i=0;
	while(this.statement.executeStep()){
		var temp=new Array();
		temp[0]=this.statement.row.url;
		temp[1]=this.statement.row.content;
		filters[i]=temp;
		i++;
	}
    }
    finally{
        this.statement.reset();
    }
    return filters;
}

StegoDataHandler.prototype.getFilter=function(url){
    var filter;
        this.statement = this.mDBConn.createStatement("SELECT * FROM filters WHERE url = :url");
        this.statement.params.url = url;
    try{
        /*this.statement.executeAsync({
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
        });*/
	while(this.statement.executeStep()){
		filter=this.statement.row.content;
	}
    }
    finally{
        this.statement.reset();
    }
return filter;
}

StegoDataHandler.prototype.reset=function(url){
     mDBConn.asyncClose();
}




