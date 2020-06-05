
$(".navItems a").click(function(){
    $(".navItems a").toggleClass("active");
    if($(".navItems a").hasClass("active")){
        $(".searchBar").css("height","100vh)");
  