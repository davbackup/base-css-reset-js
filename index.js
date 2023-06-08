// ***** loader *****
const loaderElement = document.createElement("div");
loaderElement.style =
  "position:fixed;top:0;left:0;width:100%;height:100%;z-index:1000;background:black;"
loaderElement.id = "loaderElement";

loaderElement.innerHTML = `<div id="loader-container">\
        <strong>Garage Auto-Street</strong>\
        <div id="loader"></div>\
        <div class="loader-text-container">\
            <span class="loader-text">Loading ...</span>\
        </div>
    </div>`;
document.body.prepend(loaderElement);


$(function () {
  // INITIALISATION DE LA PAGE, ON CACHE TOUS LES ELEMENTS DE LA PAGE
  // SUR LESQUELS ON VEUT FAIRE UNE ANIMATION
  $(".onglet-side","#background-top").css("opacity", 0);
 // QUAND LA PAGE EST TOTALEMENT CHARGEE, ON LANCE LA FUNCTION loadPage();
loadPage();
  $(window).load(loadPage);
});


function loadPage() {
  // FAIT DISPARAITRE OPACITY 1 => 0 L'ELEMENT #loaderElement
  $("#loaderElement").delay(150).fadeOut(1000, function () {
    // QUAND L'ANIMATION EST TERMINEE, J'EXECUTE CE CODE
    $("#background-top").animate({ opacity: 1 },1000 )
    

    $(".onglet-side")
      .css({ top: "150px"})
      .delay(200)
      .animate({ opacity: 1, top: "0px" }, 1000);
  });
};


// ***** ONGLET SIDE *****
$(document).on("click", ".onglet-side a", function () {
  $(this).addClass("active").siblings().removeClass("active");
});
