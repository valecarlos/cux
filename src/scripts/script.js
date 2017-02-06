$(document).ready(function(){
    $(".start-chat").on("click", toggleChatBox);
});

function toggleChatBox(){
    $(".chat-box").toggleClass("visible");
    $(".start-chat i").toggleClass("fa-comment");
    $(".start-chat i").toggleClass("fa-times");
}