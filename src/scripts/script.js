$(document).ready(function(){
    $(".start-chat").on("click", toggleChatBox);
    $(".navbar-toggle").on("click", toggleMenu);
});

function toggleChatBox(){
    $(".chat-box").toggleClass("visible");
    $(".start-chat i").toggleClass("fa-comment");
    $(".start-chat i").toggleClass("fa-times");
}
function toggleMenu(){
    $("nav").toggleClass("visible");
}