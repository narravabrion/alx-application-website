document.addEventListener("DOMContentLoaded", function(event) {
    var thumbnailElement = document.getElementById("smart_thumbnail");
    thumbnailElement.addEventListener("click", function() {
        // thumbnailElement.classList.toggle("small");
        if (thumbnailElement.className=="small"){
            thumbnailElement.className = " ";
        }else{
            thumbnailElement.className = "small";
        }

      });
});