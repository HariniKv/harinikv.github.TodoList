$('ul').on("click",'li', function(){
   $(this).toggleClass("completed");
});

$('ul').on("click", "li span", function(event){
    event.stopPropagation();
    $(this).parent().fadeOut(500, function(){
        $(this).remove();
    })
});

$('input[type="text"]').on("keypress", function(event){
    if(event.which === 13){
       $("#list").append('<li><span><i class="fas fa-trash"></i></span> ' + $(this).val() + '</li>');
       $(this).val("");
    }
})

$(".fa-plus").on("click", function(){
    //$('#addTodo').toggleClass("toggleInput");
    $('#addTodo').fadeToggle();
})