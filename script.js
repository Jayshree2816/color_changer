$(function(){
   $("#add").on("click", function(e){
        var tag = $("#tag").val()
        if(tag === '') {
         alert("Please Enter the Tag name")
         e.preventDefault();
      } else {
         $("#list").append("<span>" + tag + "</span>") 
      }
        return false
   })

   $("#reset").on("click", function(){
      // var letters = '0123456789ABCDEF';
      // var color = '#';
      // for (var i = 0; i < 6; i++) {
      //    color += letters[Math.floor(Math.random() * 16)];
      // }
      // $("span").each(function(){
      //    $(this).css("background-color", color)
      // })


      var color=['red','green','blue','yellow'];
      $('span').each(function(i){
        $(this).css('background-color',color[i]);
      });
      return false
   }) 

   $("#color").on("click", function(){
      var colorPicker = $(this).val()
      $('span').each(function(){
         $(this).css('backgroundColor',colorPicker);
       });

   } )
})