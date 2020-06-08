$(function () {

$(".navItems a").click(function() {
    $(".navItems a").toggleClass("active"); 

    if($(".navItems a").hasClass("active")){
        $(".searchBar").css("height","100vh)");
    }
});
  
    $("#workLink").click(function(){
        $(location).attr('href', '/index.html');
    })

    $("#aboutLink").click(function(){
        $(location).attr('href', '/index2.html');
    })
    

})