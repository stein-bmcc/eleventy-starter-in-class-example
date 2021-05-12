// You can include your own javascript here
// alert("hello, your main.js file was added properly.");
console.log("Logging from main.js, it was loaded.");


(function() {
    var flickerAPI = "https://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
    $.getJSON( flickerAPI, {
      tags: "nyc, skateboard",
      tagmode: "all",
      format: "json"
    })
      .done(function( data ) {
        $.each( data.items, function( i, item ) {
          // console.log(item);
          // $( "<img>" ).attr( "src", item.media.m ).appendTo( "#images" );
          
          // $("#images").append($( "<img>" ).attr( "src", item.media.m ));
          
          $("#images").append(
                $('<div/>', {'class': 'card'}).append(
                    $('<div/>', {'class': 'inner'}).append(
                        $('<img/>', {src: item.media.m})
                    )
                )
                .append(
                    $('<div/>', {'class': 'inner'}).append(
                      item.description
                    )
                )
            );
          
          
          // $('<span/>', {text: 'by: '+item.author})
          
          
          if ( i === 606 ) {
            return false;
          }
        });
      });
    
  })();
