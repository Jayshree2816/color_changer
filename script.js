$(function(){
   $("#add").on("click", function(e){
        var tag = $("#tag").val()
        $("#list").append("<li>" + tag + "</li>")
        return false
   }) 
})