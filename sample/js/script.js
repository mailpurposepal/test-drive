// Event handling
document.addEventListener("DOMContentLoaded",
  function (event) {
    
    
        
        // Call server to get the name
        $ajaxUtils
          .sendGetRequest("data/name.json", 
            function (res) {
              var heading = res.heading;
              var paragraph = res.paragraph;

              document.querySelector("#head")
                .innerHTML = "<h1>" + heading + "</h1>";
              document.querySelector("#para")
                .innerHTML = "<p>" + paragraph + "</p>";
            });
      
  }
);





