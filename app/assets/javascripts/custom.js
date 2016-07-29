function startPage(){
  

  function doIt() {
    var thing = $('#searching').val();
    var addy = "https://en.wikipedia.org/w/api.php?action=opensearch&search=" + thing + "&format=json&callback=wikiCallback";
    console.log(addy);
  
    $.ajax({
      url: addy,
      dataType: 'jsonp',
      success: function(wiki) {
        console.log(wiki);
        $(".wikipedia-links").html("");
        for (var i = 0; i < wiki[1].length; i++) {
          // $(".test").html(JSON.stringify(wiki));
          var linkA = 'http://en.wikipedia.org/wiki/' + wiki[1][i];
          $(".wikipedia-links").append("<div class='entry'>" +
            "<a class='links' target='_blank' href='" + linkA + "'>" + wiki[1][i] + "</a>" +
                                "<p>" + wiki[2][i]  + "</p>" + 
            "</div>")
        };
      }
    });
    return false;
  };
  
  
  $("#form-container").submit(doIt);
  
  $("#random").on("click", function() {
    window.open("https://en.wikipedia.org/wiki/Special:Random");
  });

}






$(document).ready(startPage);
$(document).on('page:load', startPage);

