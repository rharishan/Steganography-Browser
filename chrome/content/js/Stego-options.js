/**
 * This handles the options page related javascript calls.
 */

Components.utils.import("resource://browser-stego/stego-contentHandler.jsm");
Components.utils.import("resource://browser-stego/stego-downloader.jsm");
Components.utils.import("resource://browser-stego/stego-uploader.jsm");
Components.utils.import("resource://browser-stego/stego-dataHandler.jsm");

if ("undefined" == typeof(Options)) {
    var Options = {};
};

/**
 * Handles method alls of KeyPairs tab.
 */
Options.KeyPairs={
    init:function(){

    },
    upload:function(){

    },
    download:function(){

    }
};

/**
 * Handles method alls of CipherTexts tab.
 */
Options.CipherTexts={
    init:function(){

    },
    download:function(){

    },
    clear:function(){

    }
};

/**
 * Handles method alls of Filters tab.
 */

Options.Filters={
     init:function(){

     },
     add:function(aEvent){
         window.open(
             "chrome://browser-stego/content/stego-filter.xul",
             "stego-addfilters",
             "chrome,centerscreen");
     },
       onClick:function(aEvent){
           var url=document.getElementById("stego_url").value;
           var video=document.getElementById("video").checked;
           var audio=document.getElementById("audio").checked;
           var image=document.getElementById("image").checked;
           var html=document.getElementById("html").checked;
           var stegoDataHandler=new StegoDataHandler();
         	stegoDataHandler.addFilters(url,video,audio,html,image);
		window.close("stego-addfilters");    		
		window.alert("Successfully added your filter !");
		   
       },
	showFilters:function(){
		var table=document.getElementById("stego_filters_table");
		var filters=new Array();
		var stegoDataHandler=new StegoDataHandler();
		filters=stegoDataHandler.getAllFilters();
		var i=0;
		//window.alert(filters.length);
		for(i=0;i<filters.length;i++){
			var row=table.insertRow(i+1);
			var cell1=row.insertCell(0);
			var cell2=row.insertCell(1);
			var temp=new Array();
			temp=filters[i];
			var temp_content=" ";
			//window.alert(temp[1]);
			if(temp[1].charAt(0)=='t'){
				//window.alert("a");
				temp_content=temp_content.concat("Audio ");
			}
			if(temp[1].charAt(1)=='t'){
				//window.alert("h");
				temp_content=temp_content.concat("HTML ");
			}
			if(temp[1].charAt(2)=='t'){
				//window.alert("i");
				temp_content=temp_content.concat("Image ");
			}
			if(temp[1].charAt(3)=='t'){
				//window.alert("v");
				temp_content=temp_content.concat("Video ");
			}
			//window.alert(temp_content);
			cell1.innerHTML=temp[0];
			cell2.innerHTML=temp_content;
			
		}
	}
}
