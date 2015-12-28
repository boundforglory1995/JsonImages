$(function(){
	var zoekterm = $("#zoekterm");
	var getting  = $("#getting");
	var pictures = $("#pictures");
    getting.click(function(){
 		zoekterm = $("#zoekterm").val();
        alerting();



		});

	   zoekterm.keydown(function(e){
	   if(e.keyCode == 13){
	   	zoekterm = $(this).val();
	   	alerting();

		}

	});

	   function alerting(){
	    alert(zoekterm);
	    var flickrUrl = "http://api.flickr.com/services/feeds/photos_public.gne?format=json&tags=" + zoekterm +"&jsoncallback=?"
	    $.ajax(

            	{

               		dataType: 'json',
               		method: 'GET',
              		url: flickrUrl,
               		success: completePictures

           		 }

	    	)
	   }

	   function completePictures(data){
        pictures.html("");
        for(var i = 0; i <data.items.length; i++){

        	var picture = data.items[i];
        	var html = "<div class='holder'><div class='afbeelding'><a href='" + picture.link +"' target='_blank'><img src='" + picture.media.m + "' alt='" + picture.title + "'></a></div><h4>" + picture.title +"</h4></div>";	
        	pictures.append(html);
        }

       $("#bron a").attr("href",data.link).text(data.title + "door  Flickr.com");	

	   }


});